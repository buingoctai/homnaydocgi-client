import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default function InputPopup({ open, title, createdText, handleClose, handleCreate }) {
  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState(text ? false : true);
  const [error, setError] = useState('');
  const onChangeText = (value) => {
    setText(value);
    const isCreatedText = createdText.filter((item) => item.name === value).length > 0;

    if (isCreatedText) {
      console.log('isCreatedText ten nay da ton tai');
      setDisabled(true);
      setError('Tên này đã tồn tại.');
    } else {
      console.log('isCreatedText sss');
      setDisabled(false);
    }
    if (!value) {
      setDisabled(true);
      setError('');
    }
  };

  const onClose = () => {
    setError('');
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={'lg'}
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-basic"
            label={error}
            onChange={({ target }) => onChangeText(target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" autoFocus onClick={handleCreate(text)} disabled={disabled}>
            Tạo
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
