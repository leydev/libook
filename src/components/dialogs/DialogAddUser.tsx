import {
  Dialog, DialogTitle, DialogActions, Button, DialogContent,
} from '@material-ui/core';
import { useCallback } from 'react';
import { FormUser } from './FormUser';

interface Props {
  onClose: () => void;
  open: boolean;
  mode: 'register' | 'editor';
}

function Component(props: Props) {
  const { onClose, open, mode } = props;

  const save = useCallback(() => {

  }, []);

  return (
    <Dialog onClose={() => onClose()} open={open}>
      <DialogTitle>{mode === 'editor' ? 'Update user' : 'Register user'}</DialogTitle>
      <DialogContent>
        <FormUser />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()} color="primary">
          Close
        </Button>
        <Button onClick={save} color="primary" autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export const DialogAddUser = Component;
export default DialogAddUser;
