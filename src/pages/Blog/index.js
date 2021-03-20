import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import NotificationDivider from 'srcRoot/components/NotificationDivider';
import Header from 'srcRoot/components/Header';
import DetailPost from 'srcRoot/components/DetailPost';
import Main from 'srcRoot/components/Main';
import Footer from 'srcRoot/components/Footer';
import PostGrid from 'srcRoot/components/PostGrid';
import { AUTHOR_LIST } from 'srcRoot/utils/constants';
import { currentScreen } from 'srcRoot/utils/utils';

import TopicOption from './components/TopicOption';
import MainFeaturedPost from './PostWrap/MainFeaturedPost';
import FeaturedPost from './PostWrap/FeaturedPost';
import FeedBack from './components/FeedBack';
import AuthorPost from './PostWrap/AuthorPost';
import enhance from './enhance';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    width: '90%',
    paddingLeft: (props) => (props.isMobile ? '0px' : 'none'),
    paddingRight: (props) => (props.isMobile ? '0px' : 'none'),
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px 0',
    height: '230px',
    maxHeight: '235px',
    marginBottom: '1%',
  },
  featuredContent: {
    display: 'flex',
  },

  featureGrid: {
    // width: (props) => (props.isMobile ? "100%" : "50%"),
    // width: "100%",
    '@global': {
      '.MuiGrid-item': {
        padding: '0px 16px 0px 0px',
      },
    },
  },
  width1Col: {
    width: '50%',
  },
  width2Col: {
    // width: "100%"
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  totalContentLoadingWrap: {
    height: '100%',
    width: '100%',
    marginTop: '200px',
    marginBottom: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingMessage: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
  },
}));

const Blog = (props) => {
  const screen = {
    isMobile: currentScreen().isMobile,
    isLaptop: currentScreen().isLaptop,
    isDesktop: currentScreen().isDesktop,
  };

  const {
    isOpenNotification,
    isOpenFeedBack,
    isOpenChoseTopic,
    isLoadingPage,
    isLoadingSubPage,
    isOpenDetaiContainer,
    isShowPaging,
    allTopic,
    userName,
    currentPageIndex,
    detailPost,
    showingPost,
    mainPosts,
    featuredPosts,
    allPost,
    isBookMarkedPost,
    postList,
  } = props;

  const {
    onHandleOpenDetailContainer,
    onGetFeaturedTopic,
    onSubmitFeedBack,
    onSaveListPost,
    onUnSaveListPost,
    onSubscribePage,
    setIsOpenNotification,
    setIsOpenChoseTopic,
    setIsOpenFeedBack,
  } = props;

  const data = {
    labels: ['Kiến thức chuyên môn', 'Kiến thức ngoài chuyên môn', 'Kỹ năng mềm'],
    datasets: [
      {
        data: [500, 300, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const redirectMobileApp = ({ isMobile }) => {
    if (isMobile) {
      window.location.href = 'https://homnaydocgi-pwa-2rat3.ondigitalocean.app';
    }
  };
  const classes = useStyles({ ...screen });
  // const isLoadingPage = true;
  // redirectMobileApp({...screen});
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container}>
        <Header
          title="HÔM NAY ĐỌC GÌ?"
          currentUser={userName}
          postList={postList}
          setIsOpenNotification={setIsOpenNotification}
          isOpenNotification={isOpenNotification}
          onSubscribePage={onSubscribePage}
        />
        {/* {isLoadingPage && (
          <div className={classes.totalContentLoadingWrap}>
            <ScalingSquaresSpinner color='#000000' size='100' />
          </div>
        )} */}

        {isOpenNotification && (
          <NotificationDivider
            setIsOpenChoseTopic={setIsOpenChoseTopic}
            setIsOpenFeedBack={setIsOpenFeedBack}
          />
        )}
        {TopicOption({
          visible: isOpenChoseTopic,
          setIsOpenChoseTopic: setIsOpenChoseTopic,
          allTopic: allTopic,
          onGetFeaturedTopic: onGetFeaturedTopic,
        })}

        {FeedBack({
          visible: isOpenFeedBack,
          onSubmitFeedBack: onSubmitFeedBack,
        })}

        <main>
          <div className={classes.main}>
            <MainFeaturedPost
              post={mainPosts}
              isLoadingPage={isLoadingPage}
              onHandleOpenDetailContainer={onHandleOpenDetailContainer}
            />
            {!screen.isMobile && (
              <AuthorPost
                type="image"
                title="Các khái niệm mới"
                data={AUTHOR_LIST.image}
                navigateTime={3000}
              />
            )}
            {!screen.isMobile && (
              <AuthorPost
                type="infor"
                title="Chuyên gia"
                data={AUTHOR_LIST.author}
                navigateTime={1500}
              />
            )}
          </div>
          <div className={classes.featuredContent}>
            <Grid container spacing={4} className={`${classes.featureGrid} ${classes.width2Col}`}>
              <FeaturedPost
                key="featured post"
                post={featuredPosts}
                isLoadingPage={isLoadingPage}
                widthCol={6}
                onHandleOpenDetailContainer={onHandleOpenDetailContainer}
              />
            </Grid>
          </div>

          {!isLoadingPage && (
            <Grid container spacing={5} className={classes.mainGrid}>
              <Main title="Tất cả" />
              <PostGrid
                posts={allPost.data}
                totalRecord={Math.ceil(allPost.totalRecord / 3)}
                isShowPaging={isShowPaging}
                currentPageIndex={currentPageIndex}
                onHandleOpenDetailContainer={onHandleOpenDetailContainer}
              />
            </Grid>
          )}
        </main>

        {isOpenDetaiContainer && (
          <DetailPost
            post={detailPost}
            showingPost={showingPost}
            isOpenDetaiContainer={isOpenDetaiContainer}
            loading={isLoadingSubPage}
            isBookMarkedPost={isBookMarkedPost}
            onHandleOpenDetailContainer={onHandleOpenDetailContainer}
            onSaveListPost={onSaveListPost}
            onUnSaveListPost={onUnSaveListPost}
          />
        )}

        {/*-----------------------------------Nhóm thông báo-----------------------------------------------*/}
      </Container>
      {!isLoadingPage && <Footer />}
    </React.Fragment>
  );
};
export default enhance(Blog);
