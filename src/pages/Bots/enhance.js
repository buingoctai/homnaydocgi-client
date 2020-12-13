import { connect } from 'react-redux';
import { compose, withHandlers, withState, lifecycle } from 'recompose';

import UserDataHandler from 'srcRoot/components/HOC/UserDataHandler';
import { userDataCRUD, createBooleanObj } from 'srcRoot/utils/utils';
import {
  asyncGetAllArticle,
  asynGetAudioArticle,
  asynCreateAudioArticle,
  asyncGetAllBook,
  asyncGetCurrentBook,
  asyncCreateCollection,
  asyncCreateMp3,
  asyncGetThumb,
  saveAudioList,
  saveAllBook,
} from '../../pages/Bots/Store/actions';

const mapStateToProps = (state) => {
  const { readNewReducers } = state;
  console.log('state change');
  return {
    allArticle: readNewReducers.allArticle,
    audioList: readNewReducers.audioList,
    allBook: readNewReducers.allBook,
    currentBook: readNewReducers.currentBook,
    thumb: readNewReducers.thumb,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllArticleDispatch: (payload) => asyncGetAllArticle(payload),
    getAudioArticleDispatch: (payload) => asynGetAudioArticle(payload),
    createAudioArticleDispatch: (payload) => asynCreateAudioArticle(payload),
    getAllBookDispatch: (payload) => asyncGetAllBook(payload),
    getCurrentBookDispatch: (payload) => asyncGetCurrentBook(payload),
    createCollectionDispatch: (payload) => asyncCreateCollection(payload),
    createMp3Dispatch: (payload) => asyncCreateMp3(payload),
    getThumbDispatch: (payload) => asyncGetThumb(payload),
    saveAudioListDispatch: (payload) => dispatch(saveAudioList(payload)),
    saveAllBookDispatch: (payload) => dispatch(saveAllBook(payload)),
  };
};
export default compose(
  UserDataHandler,
  withState('showingPost', 'setShowingPost', {}),
  withState('currentAudioArticle', 'setCurrentAudioArticle', {}),
  withState('currentPageIndex', 'setCurrentPageIndex', 1),
  withState('visibleList', 'setVisibleList', {}),
  withState('isLoadingPage', 'setIsLoadingPage', false),
  withState('isLoadingAudioBook', 'setIsLoadingAudioBook', false),

  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onClickListenArticle: (props) => ({
      id,
      content,
      setCurrentAudio,
      setIsLoading,
    }) => {
      const {
        audioList,
        getAudioArticleDispatch,
        createAudioArticleDispatch,
        saveAudioListDispatch,
        setCurrentAudioArticle,
      } = props;

      const [currentAudioArticle] = audioList.filter((item) => item.id === id);
      if (currentAudioArticle) {
        setCurrentAudioArticle(currentAudioArticle);
        setCurrentAudio(currentAudioArticle.audio[0]);
        setIsLoading(false);
      } else {
        getAudioArticleDispatch({ id: id })
          .then((res) => {
            if (res.audio.length === 0) {
              createAudioArticleDispatch({ id: id, text: content })
                .then((res) => {
                  const newAudioList = [...audioList, res];
                  saveAudioListDispatch(newAudioList);
                  setCurrentAudioArticle(res);
                  setIsLoading(false);
                })
                .catch();
            } else {
              const newAudioList = [...audioList, res];
              saveAudioListDispatch(newAudioList);
              setCurrentAudioArticle(res);
              setIsLoading(false);
            }
          })
          .catch();
      }
    },
    onChangePageIndex: (props) => (pageIndex) => {
      const { getAllArticleDispatch, setCurrentPageIndex } = props;
      getAllArticleDispatch({
        paging: { pageIndex: pageIndex, pageSize: 5 },
        orderList: { orderType: 'DESC', orderBy: 'title' },
      })
        .then(() => {
          setCurrentPageIndex(pageIndex);
        })
        .catch();
    },

    onHandleVisibleBook: (props) => (id) => {
      const {
        allBook,
        visibleList,
        setVisibleList,
        setIsLoadingAudioBook,
        getCurrentBookDispatch,
        getThumbDispatch,
      } = props;
      const newVisibleList = createBooleanObj(allBook.data);

      if (visibleList[id]) {
        newVisibleList[id] = false;
      } else {
        newVisibleList[id] = true;
      }
      setVisibleList(newVisibleList);
      setIsLoadingAudioBook(true);
      getCurrentBookDispatch({ id })
        .then(() => {
          setIsLoadingAudioBook(false);
        })
        .catch(() => {
          setIsLoadingAudioBook(false);
        });
      getThumbDispatch({ parent: id });
    },
    onCreateCollection: (props) => (text) => {
      console.log('textt', text);
      const {
        allBook,
        saveAllBookDispatch,
        createCollectionDispatch,
        getAllBookDispatch,
      } = props;
      createCollectionDispatch({ name: text })
        .then((res) => {
          getAllBookDispatch({ searchTxt: '' });
        })
        .catch((err) => {});
    },
    onCreateAudio: (props) => (text) => {
      const {
        visibleList,
        createMp3Dispatch,
        getCurrentBookDispatch,
        getThumbDispatch,
      } = props;
      console.log('visibleList=', visibleList, text);
      let folderId = '';
      for (const [key, value] of Object.entries(visibleList)) {
        if (value) {
          folderId = key;
        }
      }
      if (folderId) {
        createMp3Dispatch({ id: folderId, url: text })
          .then((res) => {
            getCurrentBookDispatch({ id: folderId });
            getThumbDispatch({ parent: folderId });
          })
          .catch();
      }
    },
  }),

  lifecycle({
    componentDidMount() {
      const { name = '', postList = [] } = userDataCRUD({ action: 'GET' });
      this.props.setUserName(name);
      this.props.setPostList([...postList]);

      // this.props.getAllArticleDispatch({
      //   paging: { pageIndex: 1, pageSize: 5 },
      //   orderList: { orderType: 'DESC', orderBy: 'title' },
      // });
      this.props.setIsLoadingPage(true);
      this.props
        .getAllBookDispatch({ searchTxt: '' })
        .then(() => {
          this.props.setIsLoadingPage(false);
        })
        .catch(() => {
          this.props.setIsLoadingPage(false);
        });
    },
  })
);
