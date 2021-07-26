import { useCallback } from 'react';
import { ConnectedProps } from 'react-redux';
import { TextField, Button, Box } from '@material-ui/core';
import connector from '../store/user/connector';
import Theme from '../utils/Theme';
import Logo from '../components/Logo';
import { postUsersSignin } from '../services/api';

import './Login.scss';

interface Props extends ConnectedProps<typeof connector> {}

function Login(props: Props) {
  const { email, password, setUserInfo } = props;

  const autheticate = useCallback(() => {
    postUsersSignin({ email, password })
      .then(({ data }) => {
        setUserInfo({ token: data.token, ...data.user });
      })
      .catch();
  }, [email, password]);

  return (
    <Theme name="Login">
      <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
        <Box width="80%" display="flex" flexDirection="column">
          <Logo />
          <TextField
            type="email"
            label="Email"
            className="login-textfield"
            value={email}
            onChange={({ target: { value } }) => setUserInfo({ email: value })}
          />
          <TextField
            type="password"
            label="Password"
            className="login-textfield"
            value={password}
            onChange={({ target: { value } }) => setUserInfo({ password: value })}
          />
          <Button
            disabled={!email || !password}
            variant="contained"
            className="login-button"
            onClick={() => autheticate()}
          >
            Signin
          </Button>
        </Box>
      </Box>
    </Theme>
  );
}

export default connector(Login);
