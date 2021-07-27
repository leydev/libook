import AlertMui from '@material-ui/lab/Alert';
import { ConnectedProps } from 'react-redux';
import connector from '../store/alert/connector';

interface Props extends ConnectedProps <typeof connector> {}

function Component(props: Props) {
  const {
    message, type, open, setAlertInfo,
  } = props;

  return (
    <AlertMui
      style={{ display: open ? 'flex' : 'none', bottom: '5rem', position: 'absolute' }}
      severity={type}
      onClose={() => setAlertInfo({ message: '', open: false })}
    >
      {message}
    </AlertMui>
  );
}

export const Alert = connector(Component);
export default Alert;
