import { BottomNavbar } from '../components/BottomNavbar';
import { Navbar } from '../components/Navbar';

import './Default.scss';

interface Props {
  children: JSX.Element
}

export function Default(props: Props) {
  const { children } = props;
  const a = children;
  return (
    <div className="theme-default">
      <Navbar />
      <div className="body-theme">
        {typeof a}
      </div>
      <BottomNavbar />
    </div>
  );
}

export default Default;
