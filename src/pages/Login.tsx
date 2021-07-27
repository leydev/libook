import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ConnectedProps, useDispatch } from 'react-redux';
import { TextField, Button, Box } from '@material-ui/core';
import connector from '../store/user/connector';
import { setAlertInfo } from '../store/alert/actions';
import Theme from '../utils/Theme';
import Logo from '../components/Logo';
import { postUsersSignin } from '../services/api';

import './Login.scss';

interface Props extends ConnectedProps<typeof connector> {}

function Component(props: Props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { email, password, setUserInfo } = props;

  const autheticate = useCallback(() => {
    postUsersSignin({ email, password })
      .then(({ data }) => {
        setUserInfo({ token: data.token, ...data.user });
        history.push({ pathname: '/' });
      })
      .catch((error) => {
        if (error.response) {
          const { status } = error.response;

          if (status === 401) {
            dispatch(setAlertInfo({
              type: 'warning',
              message: 'Usuário ou senha inválidos',
              open: true,
            }));
            return;
          }
          if (status === 429) {
            dispatch(setAlertInfo({
              type: 'info',
              message: 'Tente novamente em 1h.',
              open: true,
            }));
            return;
          }
          dispatch(setAlertInfo({
            type: 'error',
            message: 'Erro indexperado',
            open: true,
          }));
          return;
        }
        dispatch(setAlertInfo({
          type: 'error',
          message: 'Erro indexperado',
          open: true,
        }));
      });
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

export const Login = connector(Component);
export default Login;
