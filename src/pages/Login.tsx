import React from 'react';
import { ConnectedProps } from 'react-redux';
import connector from '../store/user/connector';
import Input from '../components/Input';

interface Props extends ConnectedProps<typeof connector> {}

function Login(props: Props) {
  const { token } = props;

  return (
    <form>
      <h2>{ token }</h2>
      <Input />
    </form>
  );
}

export default connector(Login);
