import { Box, Typography, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from 'services/api';
import { setAlertInfo } from 'store/alert/actions';
import { CardUser } from '../components/cards/CardUser';
import { DialogAddUser } from '../components/dialogs/DialogAddUser';
import Theme from '../utils/Theme';

import './Users.scss';

interface DialogStatus {
  open: boolean,
  mode: 'register' | 'editor'
}

function Component() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState<[]>([]);
  const [dialog, setDialog] = useState<DialogStatus>({
    open: false,
    mode: 'register',
  });

  const catchUsers = useCallback(() => {
    getUsers()
      .then(({ data }) => {
        setUsers(data);
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
  }, []);

  useEffect(() => {
    catchUsers();
  }, []);

  return (
    <Theme name="Default">
      <Box height="100%" overflow="auto" padding="0rem .5rem">
        <Typography variant="h5" style={{ margin: '1rem 0rem' }}>Users</Typography>
        {users.map(({ firstName, lastName, email }) => <CardUser name={`${firstName} ${lastName}`} email={email} />)}
        <Fab className="fab-button" onClick={() => setDialog({ mode: 'register', open: true })}>
          <AddIcon />
        </Fab>
        <DialogAddUser
          open={dialog.open}
          mode={dialog.mode}
          onClose={() => {
            setDialog({ ...dialog, open: false });
            catchUsers();
          }}
        />
      </Box>
    </Theme>
  );
}

export const Users = Component;
export default Users;
