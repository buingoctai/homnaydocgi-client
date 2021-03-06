import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LoadingEntireApp from 'srcRoot/components/LoadingEntireApp';
import Logo512 from  './logo512.png';


const useStyles = makeStyles(() => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: 'fix-content',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  image__wrap: {
    // width: (props) => (props.isMobile ? "100%" : "50%"),
    width: '100%',
    position: 'relative',
    transition: 'transform 0.3s',
    borderRadius: '5px',
    border: '2px solid #fff',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  title__wrap: {
    position: 'absolute',
    bottom: '40px',
    left: '7px',
  },
  title: {
    fontSize: '11px',
    fontWeight: 'bold',
    color: '#ed4613',
  },
}));

export default function MainFeaturedPost(props) {
  const { post, isLoadingPage, onHandleOpenDetailContainer } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <a onClick={() => onHandleOpenDetailContainer(post.Id)}>
        <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#551A99' }}>
          Nội dung mới nhất
        </span>
        {isLoadingPage ? (
          <LoadingEntireApp width="200px" height="170px" />
        ) : (
          <>
            <div className={classes.image__wrap}>
              <img src={Logo512} width="120px" height="120px" alt="" />
            </div>
            <div className={classes.title__wrap}>
              <Typography
                component="h6"
                variant="h3"
                color="inherit"
                gutterBottom
                className={classes.title}
              >
                {`${post.Title && post.Title}`}
              </Typography>
            </div>
          </>
        )}
      </a>
    </div>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
