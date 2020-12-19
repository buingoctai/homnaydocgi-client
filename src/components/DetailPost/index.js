import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ClearIcon from '@material-ui/icons/Clear';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Button from '@material-ui/core/Button';
import LoadingParagraph from 'srcRoot/components/LoadingParagraph';
import { currentScreen } from 'srcRoot/utils/utils';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexGrow: 1,
    position: 'fixed',
    zIndex: '2',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    animationName: '$detailAmination',
    animationDuration: '1s',
  },
  '@keyframes detailAmination': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  grid__wrap: {
    height: '100%',
    padding: theme.spacing(9),
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingBottom: '20px',
  },
  large__grid_wrap: {
    width: '50%',
  },
  small_grid_wrap: {
    width: (props) => (props.isMobile ? '130%' : '60%'),
    // width:'130%',
    padding: (props) => (props.isMobile ? '60px 72px 10px 72px' : 'none'),
  },
  item__grid__wrap: {
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    width: (props) => (props.isMobile ? '500px' : 'none'),
  },
  title__wrap: {
    width: '10px',
    top: '20px',
    height: '5px',
    padding: theme.spacing(2),
    marginTop: '10px',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7C7C7C',
  },
  paper__wrap: {
    width: (props) => (props.is_maxWidth_1000px ? '100%' : 'none'),
    height: '100%',
    top: '0',
    left: '0',
    bottom: '-20px',
    right: '-20px',
    padding: '20px',
    paddingRight: (props) => (props.isMobile ? '30px' : '20px'),
    color: theme.palette.text.secondary,
    backgroundColor: '#FFFFED',
    textAlign: 'center',
    position: 'absolute',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  title__bookmark__wrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    color: 'rgba(41, 41, 41, 1)',
    fontSize: '18px',
  },
}));

export default function DetailPost(props) {
  const {
    post,
    showingPost,
    isOpenDetaiContainer,
    loading,
    isBookMarkedPost,
    onHandleOpenDetailContainer,
    onSaveListPost,
    onUnSaveListPost,
  } = props;
  const newContent = post.Content ? post.Content.split('\n') : [];
  const screen = {
    isMobile: currentScreen().isMobile,
    isLaptop: currentScreen().isLaptop,
    isDesktop: currentScreen().isDesktop,
  };
  const classes = useStyles({
    ...screen,
  });

  return (
    <div className={classes.container} id="detailContainer">
      <Grid
        container
        className={
          screen.isDesktop
            ? `${classes.grid__wrap} ${classes.large__grid_wrap}`
            : `${classes.grid__wrap} ${classes.small_grid_wrap}`
        }
        onBlur={() => {}}
      >
        <Grid item xs={12} className={classes.item__grid__wrap} key="itemGridWrap">
          {isOpenDetaiContainer && (
            <Paper className={classes.title__wrap}>
              <Typography variant="body2" style={{ cursor: 'pointer' }}>
                <Button onClick={onHandleOpenDetailContainer}>
                  <ClearIcon />
                </Button>
              </Typography>
            </Paper>
          )}

          <Paper className={classes.paper__wrap} key="itemGridWrap">
            <div className={classes.title__bookmark__wrap}>
              <Typography variant="h6" color="primary" key="title" style={{ flexGrow: '1' }}>
                {showingPost.Title}
              </Typography>

              {isBookMarkedPost ? (
                <Button onClick={() => onUnSaveListPost(showingPost.Id)}>
                  <BookmarkIcon />
                </Button>
              ) : (
                <Button onClick={() => onSaveListPost(showingPost.Id)}>
                  <BookmarkBorderIcon />
                </Button>
              )}
            </div>
            <br />
            {loading ? (
              <LoadingParagraph />
            ) : (
              <>
                <Typography
                  paragraph={true}
                  align="justify"
                  color="textPrimary"
                  key="subContent"
                  className={classes.content}
                >
                  {newContent.length > 0 &&
                    newContent.map((item) => (
                      <>
                        {item}
                        <br />
                      </>
                    ))}
                </Typography>
                <div>
                  <img
                    src={showingPost.ImageUrl}
                    alt="Ảnh"
                    style={screen.isMobile ? { width: '70%' } : { width: '30%' }}
                  />
                </div>
              </>
            )}
            <br />
            <br />
            <Typography variant="h6" color="textSecondary" align="left" key="author">
              {`Nguồn: ${showingPost.Author}`}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
