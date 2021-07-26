import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}

export const BottomNavbar = Component;
export default BottomNavbar;
