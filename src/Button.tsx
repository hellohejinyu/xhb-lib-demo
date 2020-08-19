import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import bg from './test.png';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
});

interface Props {
  label?: string;
}

export default function Button(props: Props) {
  const classes = useStyles();

  return (
    <MuiButton
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    >
      {props.label || 'Hello, Miss Zhang'}
    </MuiButton>
  );
}