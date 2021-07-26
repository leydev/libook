import { ConnectedProps } from 'react-redux';
import connector from '../store/user/connector';

interface Props extends ConnectedProps<typeof connector> {}

function Input(props: Props) {
  const { token, setUserToken } = props;
  return (
    <input
      type="text"
      value={token}
      onChange={(event) => setUserToken(event.target.value)}
    />
  );
}

export default connector(Input);
