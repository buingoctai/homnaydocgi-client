import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  container: {
    '@global': {
      '.MuiSkeleton-pulse': {
        transform: 'none',
      },
    },
  },
}));

const LoadingNewPost = () => {
  const classes = useStyles({});
  const [status, setStatus] = useState([{ variant: 'text', height: '300px' }]);
  return (
    <div className={classes.container}>
      {status.map((item) => (
        <Skeleton variant={item.variant} height={item.height} style={{ marginBottom: '5px' }} />
      ))}
    </div>
  );
};

export default LoadingNewPost;
