import React, { useEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ChatIcon from '@material-ui/icons/Chat';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TocIcon from '@material-ui/icons/Toc';
import CircularProgress from '@material-ui/core/CircularProgress';

import AudioBook from './components/AudioBook';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Header from '../../components/Header';
import BarChart from '../../components/BarChart';
import enhance from './enhance';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  container: {
    width: '90%',
    paddingLeft: (props) => (props.is_maxWidth_500px ? '0px' : 'none'),
    paddingRight: (props) => (props.is_maxWidth_500px ? '0px' : 'none'),
  },

  rootWrap: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: (props) => (props.is_maxWidth_500px ? '5px' : '50px'),
  },

  tabWrap: {
    backgroundColor: theme.palette.background.paper,
    width: (props) => (props.is_maxWidth_500px ? '95%' : '70%'),
    display: (props) => props.isLoadingPage && 'flex',
    alignItems: (props) => props.isLoadingPage && 'center',
    height: (props) => props.isLoadingPage && '700px',
    justifyContent: (props) => props.isLoadingPage && 'center',
    flexDirection: (props) => props.isLoadingPage && 'column',
  },
  personalizedUserWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: '0.5',
  },
  personalizedChartWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: '1',
  },
  icon: {
    fontSize: '40px',
    marginBottom: '50px',
  },
  tabLabelWrap: {
    display: 'flex',
    alignItems: 'center',
  },
  tabpanelWrap: {
    '@global': {
      '.MuiBox-root-278': {
        padding: '0px 0px',
      },
    },
  },
}));

const Bots = (props) => {
  const responsiveObj = {
    is_maxWidth_500px: useMediaQuery('(max-width:500px)'),
    is_maxWidth_1000px: useMediaQuery('(max-width:1000px)'),
    is_minWidth_2000px: useMediaQuery('(min-width:2000px)'),
  };

  const {
    userName,
    postList,
    allArticle,
    allBook,
    currentBook,
    thumb,
    visibleList,
    currentAudioArticle,
    currentPageIndex,
    isLoadingPage,
    isLoadingAudioBook,
    onClickListenArticle,
    onChangePageIndex,
    onGetCurrentBook,
    onHandleVisibleBook,
    onCreateCollection,
    onCreateAudio,
  } = props;
  const classes = useStyles({ ...responsiveObj, isLoadingPage });
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [hidingUserIcon, setHidingUserIcon] = useState(true);

  const onScroll = () => {
    // Khoảng cách từ đỉnh scroll bar đến đỉnh của browser
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 100) {
      setHidingUserIcon(false);
    }
    if (scrollTop === 0) {
      setHidingUserIcon(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container}>
        <Header
          title='HÔM NAY ĐỌC GÌ?'
          currentUser={userName}
          postList={postList}
        />
        <div className={classes.rootWrap}>
          <div className={classes.personalizedUserWrap}>
            {!hidingUserIcon && <AccountCircleIcon className={classes.icon} />}
            <NotificationsIcon className={classes.icon} />
            <TocIcon className={classes.icon} />
          </div>
          <div className={classes.tabWrap}>
            {isLoadingPage ? (
              <>
                <span>Đang tải tất cả bộ sưu tập</span>
                <CircularProgress />
              </>
            ) : (
              <AudioBook
                allBook={allBook}
                currentBook={currentBook}
                visibleList={visibleList}
                thumb={thumb}
                isLoadingAudioBook={isLoadingAudioBook}
                onGetCurrentBook={onGetCurrentBook}
                onHandleVisibleBook={onHandleVisibleBook}
                onCreateCollection={onCreateCollection}
                onCreateAudio={onCreateAudio}
              />
            )}
          </div>
          <div className={classes.personalizedChartWrap}>
            <BarChart />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default enhance(Bots);
