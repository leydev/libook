import {
  Dialog, DialogTitle, DialogActions, Button, DialogContent,
} from '@material-ui/core';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAlertInfo } from 'store/alert/actions';
import { FormUser, DataAPI } from './FormUser';
import { postUsers } from '../../services/api';

interface Props {
  onClose: () => void;
  open: boolean;
  mode: 'register' | 'editor';
}

function Component(props: Props) {
  const dispatch = useDispatch();
  const { onClose, open, mode } = props;
  const [userData, setUserData] = useState<DataAPI | undefined>();

  const registerUser = useCallback(() => {
    if (userData) {
      postUsers(userData)
        .then(() => {
          dispatch(setAlertInfo({ type: 'success', message: `${userData.firstName} foi cadastrado` }));
          onClose();
        })
        .catch((error) => {
          if (error.response) {
            const { status } = error.response;
            if (status === 409) {
              dispatch(setAlertInfo({ type: 'warning', message: 'Email já em uso' }));
              return;
            }
          }
          dispatch(setAlertInfo({ type: 'error', message: 'Erro inesperado' }));
        });
    }
  }, [userData]);

  const updateUser = useCallback(() => {

  }, []);

  const save = useCallback(() => {
    if (mode === 'register') return registerUser();
    return updateUser();
  }, [userData]);

  return (
    <Dialog onClose={() => onClose()} open={open}>
      <DialogTitle>{mode === 'editor' ? 'Update user' : 'Register user'}</DialogTitle>
      <DialogContent>
        <FormUser onUpdate={setUserData} />
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
