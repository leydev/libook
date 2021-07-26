import {
  Card, CardHeader, Avatar,
} from '@material-ui/core';

function Component() {
  return (
    <Card>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe">
            R
          </Avatar>
        )}
        title="Wesley araujo"
        subheader="wesley.waaraujo@gmail.com"
      />
    </Card>
  );
}

export const CardUser = Component;
export default CardUser;
