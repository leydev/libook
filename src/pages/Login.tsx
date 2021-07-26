/* import { ConnectedProps } from 'react-redux';
import connector from '../store/user/connector'; */
import { TextField, Button, Box } from '@material-ui/core';
import Theme from '../utils/Theme';
import Logo from '../components/Logo';

import './Login.scss';
/* interface Props extends ConnectedProps<typeof connector> {} */

function Login(/* props: Props */) {
  /* const { token } = props; */

  return (
    <Theme name="Login">
      <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
        <Box width="80%" display="flex" flexDirection="column">
          <Logo />
          <TextField type="email" label="Email" className="login-textfield" />
          <TextField type="password" label="Password" className="login-textfield" />
          <Button variant="contained" className="login-button">
            Signin
          </Button>
        </Box>
      </Box>
    </Theme>
  );
}

export default /* connector( */Login/* ) */;
