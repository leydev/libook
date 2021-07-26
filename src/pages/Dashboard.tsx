import { useCallback } from 'react';
import { ConnectedProps } from 'react-redux';
import { Button, Box } from '@material-ui/core';
import connector from '../store/user/connector';
import Theme from '../utils/Theme';
import Logo from '../components/Logo';
import { postUsersSignin } from '../services/api';

import './Login.scss';

interface Props extends ConnectedProps<typeof connector> {}

function Component(props: Props) {
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
          <h1>Hello World</h1>
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

export const Dashboard = connector(Component);
export default Dashboard;
