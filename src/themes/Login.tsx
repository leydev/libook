import { Alert } from '../components/Alert';

import './Login.scss';

interface Props {
  children: JSX.Element
}

export function Login(props: Props) {
  const { children } = props;

  return (
    <div className="theme-login">
      {children}
      <Alert />
    </div>
  );
}

export default Login;
