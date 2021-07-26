import { ConnectedProps } from 'react-redux';
import connector from '../store/user/connector';
import Input from '../components/Input';
import Theme from '../utils/Theme';

interface Props extends ConnectedProps<typeof connector> {}

function Login(props: Props) {
  const { token } = props;

  return (
    <Theme>
      <form>
        <h2>{ token }</h2>
        <Input />
      </form>
    </Theme>
  );
}

export default connector(Login);
