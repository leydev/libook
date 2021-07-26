import { Box, Typography } from '@material-ui/core';
import { CardUser } from '../components/cards/CardUser';
import Theme from '../utils/Theme';

import './Users.scss';

function Component() {
  return (
    <Theme name="Default">
      <Box height="100%" overflow="auto" padding="0rem .5rem">
        <Typography variant="h5" style={{ margin: '1rem 0rem' }}>Users</Typography>
        <CardUser />
      </Box>
    </Theme>
  );
}

export const Users = Component;
export default Users;
