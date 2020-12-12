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

const LoadingParagraph = () => {
  const classes = useStyles({});
  const [status, setStatus] = useState([
    { variant: 'text', width: '100%', height: '50px' },
    { variant: 'text', width: '100%', height: '200px' },
    { variant: 'text', width: '100%', height: '200px' },
    { variant: 'text', width: '50%', height: '50px' },
  ]);
  useEffect(() => {
    setInterval(() => {
      setStatus([
        { variant: 'text', width: '50%', height: '50px' },
        { variant: 'text', width: '100%', height: '500px' },
        { variant: 'text', width: '80%', height: '50px' },
      ]);
    }, 1000);
  }, []);
  return (
    <div className={classes.container}>
      {status.map((item) => (
        <Skeleton
          variant={item.variant}
          width={item.width}
          height={item.height}
          style={{ marginBottom: '15px' }}
        />
      ))}
    </div>
  );
};

export default LoadingParagraph;
