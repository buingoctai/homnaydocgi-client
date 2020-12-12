import React, { useState } from 'react';
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

import InputPopup from '../InputPopup';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    '&:hover': {
      cursor: 'pointer',
    },
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
  add__collection__con: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  play__btn: {},
}));

const AudioBook = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [audio, setAudio] = useState({
    id: '',
    name: '',
    url: '',
  });
  const [popupTitle, setPopupTitle] = useState('');
  const {
    visibleList,
    allBook,
    currentBook,
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
    console.log('onPlayAudio');
    setAudio(audio);

    var playme = document.getElementById('playme');
    playme.load();
    playme.play();
  };
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
          <ListItem className={classes.add__collection__con}>
            <ListItemIcon>
              <a onClick={handleOpenInputPopup('CreateCollection')}>
                <AddCircleIcon color='primary' />
              </a>
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
                        currentBook.data.map((item) => (
                          <ListItem button className={classes.nested}>
                            <ListItemIcon>
                              <GraphicEqIcon />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />

                            <a
                              onClick={onPlayAudio({
                                id: item.id,
                                name: item.name,
                                url: item.url,
                              })}
                            >
                              <div className={classes.play__btn}>
                                <PlayArrowIcon />
                              </div>
                            </a>
                          </ListItem>
                        ))}
                      <ListItem className={classes.nested}>
                        <a onClick={handleOpenInputPopup('CreateAudio')}>
                          <AddCircleIcon color='primary' />
                        </a>
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
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              backgroundColor: '#F1F3F4',
            }}
          >
            <span
              style={{
                paddingTop: '7px',
                color: '#0B0B0B',
                fontWeight: 'bold',
              }}
            >
              {audio.name}
            </span>
          </div>

          <audio
            controls='controls'
            style={{ width: '100%', backgroundColor: '#F1F3F4' }}
            id='playme'
          >
            <source src={audio.url && audio.url} type='audio/mp3' />
          </audio>
        </div>
      )}
    </div>
  );
};

export default AudioBook;
