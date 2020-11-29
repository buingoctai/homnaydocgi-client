import { connect } from 'react-redux';
import { compose, withHandlers, withState, lifecycle } from 'recompose';

import UserDataHandler from 'srcRoot/components/HOC/UserDataHandler';
import { userDataCRUD } from 'srcRoot/utils/utils';
import {
  asyncGetAllArticle,
  asynGetAudioArticle,
  asynCreateAudioArticle,
  asyncGetAllBook,
  asyncGetCurrentBook,
  saveAudioList,
} from '../../pages/Bots/Store/actions';

const mapStateToProps = (state) => {
  const { readNewReducers } = state;
  return {
    allArticle: readNewReducers.allArticle,
    audioList: readNewReducers.audioList,
    allBook: readNewReducers.allBook,
    currentBook: readNewReducers.currentBook,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllArticleDispatch: (payload) => asyncGetAllArticle(payload),
    getAudioArticleDispatch: (payload) => asynGetAudioArticle(payload),
    createAudioArticleDispatch: (payload) => asynCreateAudioArticle(payload),
    getAllBookDispatch: (payload) => asyncGetAllBook(payload),
    getCurrentBookDispatch: (payload) => asyncGetCurrentBook(payload),
    saveAudioListDispatch: (payload) => dispatch(saveAudioList(payload)),
  };
};
export default compose(
  UserDataHandler,
  withState('showingPost', 'setShowingPost', {}),
  withState('currentAudioArticle', 'setCurrentAudioArticle', {}),
  withState('currentPageIndex', 'setCurrentPageIndex', 1),
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
    onGetCurrentBook: (props) => (id) => {
      const { getCurrentBookDispatch } = props;
      getCurrentBookDispatch({ id });
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
      this.props.getAllBookDispatch({ searchTxt: '' });
    },
  })
);
