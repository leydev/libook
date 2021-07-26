import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BookIcon from '@material-ui/icons/Book';
import PeopleIcon from '@material-ui/icons/People';
import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Component() {
  const history = useHistory();
  const [index, setIndex] = useState<number>(-1);
  const [path] = useState<string[]>([
    '/',
    '/users',
    '/books',
  ]);

  const redirectTo = useCallback((newIndex) => {
    const { pathname } = history.location;
    if (path[newIndex] !== pathname) history.push(path[newIndex]);
    setIndex(newIndex);
  }, []);

  useEffect(() => {
    const { pathname } = history.location;
    const newIndex = path.indexOf(pathname);
    setIndex(newIndex);
  }, []);

  return (
    <BottomNavigation
      value={index}
      onChange={(event, newValue) => redirectTo(newValue)}
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
