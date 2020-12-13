import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import InputPopup from '../InputPopup';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    // '&:hover': {
    //   cursor: 'pointer',
    // },
  },
  loading__audio__book: {
    display: 'flex',
    justifyContent: 'center',
  },
  audio__player: {
    position: 'fixed',
    height: '70px',
    bottom: '0px',
    left: '0px',
    right: '0px',
    marginBottom: '0px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  add__collection__icon: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  play__btn: {},
  thumb: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  audio__header: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#F1F3F4',
    flexDirection: 'row',
    alignItems: 'center',
  },
  audio__title: {
    color: '#0B0B0B',
    fontWeight: 'bold',
  },
  player: {
    width: '100%',
    backgroundColor: '#F1F3F4',
  },
  removePadding: {
    '@global': {
      '.MuiButton-text': {
        padding: '0px',
      },
      '.MuiButton-root': {
        padding: '0px',
        minWidth: '0px',
      },
    },
  },
}));

const AudioBook = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [audio, setAudio] = useState({
    id: '',
    name: '',
    url: '',
    index: null,
  });
  const [isRepeatOne, setIsRepeatOne] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const {
    visibleList,
    allBook,
    currentBook,
    thumb,
    isLoadingAudioBook,
    onHandleVisibleBook,
    onCreateCollection,
    onCreateAudio,
  } = props;

  const HandleVisibleBook = (id) => {
    onHandleVisibleBook(id);
  };

  const handleOpenInputPopup = (title) => () => {
    setOpen(true);
    setPopupTitle(title);
  };

  const handleCloseInputPopup = () => {
    setOpen(false);
  };

  const handleCreateFromPopup = (text) => () => {
    console.log('text', text);
    switch (popupTitle) {
      case 'CreateCollection':
        onCreateCollection(text);
      case 'CreateAudio':
        onCreateAudio(text);
    }
    setOpen(false);
  };

  const onPlayAudio = (audio) => () => {
    setAudio(audio);
  };
  const onNextAudio = () => () => {
    const nextAudio = currentBook.data[audio.index + 1];

    if (nextAudio) {
      setAudio({ ...nextAudio, index: audio.index + 1 });
    } else {
      const startAudio = currentBook.data[0];
      setAudio({ ...startAudio, index: 0 });
    }
  };

  const onBackAudio = () => () => {
    const backAudio = currentBook.data[audio.index - 1];

    if (backAudio) {
      setAudio({ ...backAudio, index: audio.index - 1 });
    } else {
      const startAudio = currentBook.data[currentBook.data.length - 1];
      setAudio({ ...startAudio, index: currentBook.data.length - 1 });
    }
  };

  useEffect(() => {
    const player = document.getElementById('player');

    if (player) {
      player.load();
      player.play();
    }
  }, [audio]);

  return (
    <div>
      <List
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='div' id='nested-list-subheader'>
            <span>Sách Đang Có</span>
            <InputPopup
              open={open}
              title={
                popupTitle === 'CreateCollection'
                  ? 'Nhập tên bộ sưu tập'
                  : 'Nhâp url audio (youtube)'
              }
              createdText={allBook.data}
              handleClose={handleCloseInputPopup}
              handleCreate={handleCreateFromPopup}
            />
          </ListSubheader>
        }
        className={classes.root}
      >
        <>
          <ListItem className={classes.add__collection__icon}>
            <ListItemIcon className={classes.removePadding}>
              <Button
                onClick={handleOpenInputPopup('CreateCollection')}
                className={classes.removePadding}
              >
                <AddCircleIcon color='primary' />
              </Button>
            </ListItemIcon>
          </ListItem>
          {allBook.totalRecord > 0 &&
            allBook.data.map((item) => (
              <>
                <ListItem button onClick={() => HandleVisibleBook(item.id)}>
                  <ListItemIcon>
                    <MenuBookIcon color='primary' />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                  {visibleList[item.id] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse
                  in={visibleList[item.id]}
                  timeout='auto'
                  unmountOnExit
                >
                  {isLoadingAudioBook ? (
                    <div className={classes.loading__audio__book}>
                      <CircularProgress size={30} />
                    </div>
                  ) : (
                    <List component='div' disablePadding>
                      {currentBook.data.length > 0 &&
                        currentBook.data.map((item, index) => (
                          <ListItem className={classes.nested}>
                            <ListItemIcon>
                              <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />

                            <div className={classes.play__btn}>
                              <Button
                                onClick={onPlayAudio({
                                  ...item,
                                  index,
                                })}
                              >
                                <img
                                  src={
                                    thumb[item.id] ||
                                    'https://img.youtube.com/mqdefault.jpg'
                                  }
                                  alt='Paris'
                                  className={classes.thumb}
                                />
                                {audio.id === item.id ? (
                                  <GraphicEqIcon
                                    style={{
                                      position: 'relative',
                                      color: 'white',
                                    }}
                                  />
                                ) : (
                                  <PlayArrowIcon
                                    style={{
                                      position: 'relative',
                                      color: 'white',
                                    }}
                                  />
                                )}
                              </Button>
                            </div>
                          </ListItem>
                        ))}
                      <ListItem
                        className={`${classes.nested} ${classes.removePadding}`}
                      >
                        <Button
                          onClick={handleOpenInputPopup('CreateAudio')}
                          className={classes.removePadding}
                        >
                          <AddCircleIcon color='primary' />
                        </Button>
                      </ListItem>
                    </List>
                  )}
                </Collapse>
              </>
            ))}
        </>
      </List>
      {audio.name && (
        <div className={classes.audio__player}>
          <div className={classes.audio__header}>
            <Button onClick={onBackAudio()}>
              <SkipPreviousIcon style={{ marginRight: '10px' }} />
            </Button>
            <span className={classes.audio__title}>{audio.name}</span>
            <Button onClick={onNextAudio()}>
              <SkipNextIcon style={{ marginLeft: '10px' }} />
            </Button>
            {/* <Button onClick={onNextAudio()}>
              <RepeatOneIcon
                color={isRepeatOne ? 'primary' : 'default'}
                style={{ marginLeft: '10px' }}
              />
            </Button> */}
          </div>
          <audio
            id='player'
            controls='controls'
            className={classes.player}
            onEnded={onNextAudio()}
          >
            <source src={audio.url && audio.url} type='audio/mp3' />
          </audio>
        </div>
      )}
    </div>
  );
};

export default AudioBook;
