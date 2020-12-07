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
import InputPopup from '../InputPopup';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const AudioBook = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { onHandleVisibleBook, onCreateCollection } = props;

  const HandleVisibleBook = (id) => {
    onHandleVisibleBook(id);
  };
  const handleOpenInputPopup = () => {
    setOpen(true);
  };
  const handleCloseInputPopup = () => {
    setOpen(false);
  };

  const handleCreateCollection = (text) => (props) => {
    console.log('text', text);
    onCreateCollection(text);
    setOpen(false);
  };

  return (
    <List
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          <span>Sách Đang Có</span>
          <Button color='primary' onClick={handleOpenInputPopup}>
            Thêm bộ sưu tập
          </Button>
          <InputPopup
            open={open}
            handleCloseInputPopup={handleCloseInputPopup}
            handleCreateCollection={handleCreateCollection}
          />
        </ListSubheader>
      }
      className={classes.root}
    >
      {props.allBook.totalRecord > 0 &&
        props.allBook.data.map((item) => (
          <>
            <ListItem button onClick={() => HandleVisibleBook(item.id)}>
              <ListItemIcon>
                <MenuBookIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary={item.name} />
              {props.visibleList[item.id] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
              in={props.visibleList[item.id]}
              timeout='auto'
              unmountOnExit
            >
              <List component='div' disablePadding>
                {props.currentBook.data.length > 0 &&
                  props.currentBook.data.map((item) => (
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                      <audio controls='controls'>
                        <source src={item.url} />
                      </audio>
                    </ListItem>
                  ))}
              </List>
            </Collapse>
          </>
        ))}
    </List>
  );
};

export default AudioBook;
