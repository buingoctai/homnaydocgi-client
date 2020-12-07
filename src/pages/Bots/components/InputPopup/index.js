import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default function InputPopup({
  open,
  handleCloseInputPopup,
  handleCreateCollection,
}) {
  const [text, setText] = useState('');
  const handleChange = (value) => {
    setText(value);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseInputPopup}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Nhập tên bộ sưu tập'}
        </DialogTitle>
        <DialogContent>
          <TextField
            id='standard-basic'
            label='Standard'
            onChange={({ target }) => handleChange(target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCreateCollection(text)}
            color='primary'
            autoFocus
          >
            Tạo
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
