import { Box, Typography, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import { CardUser } from '../components/cards/CardUser';
import { DialogAddUser } from '../components/dialogs/DialogAddUser';
import Theme from '../utils/Theme';

import './Users.scss';

interface DialogStatus {
  open: boolean,
  mode: 'register' | 'editor'
}

function Component() {
  const [dialog, setDialog] = useState<DialogStatus>({
    open: false,
    mode: 'register',
  });

  return (
    <Theme name="Default">
      <Box height="100%" overflow="auto" padding="0rem .5rem">
        <Typography variant="h5" style={{ margin: '1rem 0rem' }}>Users</Typography>
        <CardUser />
        <CardUser />
        <CardUser />
        <CardUser />
        <CardUser />
        <CardUser />
        <CardUser />
        <CardUser />
        <CardUser />
        <CardUser />
        <CardUser />
        <CardUser />
        <Fab className="fab-button" onClick={() => setDialog({ mode: 'register', open: true })}>
          <AddIcon />
        </Fab>
        <DialogAddUser
          open={dialog.open}
          mode={dialog.mode}
          onClose={() => setDialog({ ...dialog, open: false })}
        />
      </Box>
    </Theme>
  );
}

export const Users = Component;
export default Users;
