import { BottomNavbar } from '../components/BottomNavbar';
import { Navbar } from '../components/Navbar';

import './Default.scss';

interface Props {
  children: JSX.Element
}

export function Default(props: Props) {
  const { children } = props;

  return (
    <div className="theme-default">
      <Navbar />
      <div className="body-theme">
        {children}
      </div>
      <BottomNavbar />
    </div>
  );
}

export default Default;
