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
const LoadingEntireApp = ({ width, height }) => {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <Skeleton
        variant={'rect'}
        width={width}
        height={height}
        style={{ marginBottom: '5px' }}
      />
    </div>
  );
};

export default LoadingEntireApp;
