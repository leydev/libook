import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BookIcon from '@material-ui/icons/Book';
import PeopleIcon from '@material-ui/icons/People';

function Component() {
  let value = 0;
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        value = newValue;
      }}
      showLabels
    >
      <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />} />
      <BottomNavigationAction label="Books" icon={<BookIcon />} />
      <BottomNavigationAction label="Users" icon={<PeopleIcon />} />
    </BottomNavigation>
  );
}

export const BottomNavbar = Component;
export default BottomNavbar;
