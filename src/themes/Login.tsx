import './Login.css';

interface Props {
  children: JSX.Element
}

export function Login(props: Props) {
  const { children } = props;

  return (
    <>
      {children}
    </>
  );
}

export default Login;
