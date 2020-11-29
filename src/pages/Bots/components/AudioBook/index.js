import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function AudioBook(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [currentBook, setCurrentBook] = React.useState(false);
  const handleClick = (id) => {
    if (!open) {
      setCurrentBook(id);
      props.onGetCurrentBook(id);
    }
    setOpen(!open);
  };

  console.log(props.allBook);
  return (
    <List
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          Sách Đang Có
        </ListSubheader>
      }
      className={classes.root}
    >
      {props.allBook.totalRecord > 0 &&
        props.allBook.data.map((item) => (
          <>
            <ListItem button onClick={() => handleClick(item.id)}>
              <ListItemIcon>
                <MenuBookIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary={item.name} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
              in={open && item.id === currentBook}
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
}
