import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import favicon from '../../../src/';

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="aliceblue" href="https://material-ui.com/">
        https://www.homnaydocgi.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
    '@global': {
      '.MuiContainer-maxWidthLg': {
        width: '90%',
        boxShadow: 'none',
        backgroundColor: '#C1C1C1',
        borderRadius: '5px',
      },
      '.MuiTypography-subtitle1': {
        color: 'aliceblue',
      },
      '.MuiTypography-body2': {
        color: 'aliceblue',
      },
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" component="p" style={{ color: 'black' }}>
          THAM GIA CÙNG ĐỘI PHÁT TRIỂN- ZALO 0983053600 BÙI NGỌC TÀI
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
