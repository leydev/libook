import {
  Card, CardHeader, Avatar,
} from '@material-ui/core';

interface Props {
  name: string;
  email: string;
}

function Component(props: Props) {
  const { name, email } = props;
  return (
    <Card>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe">
            {name[0].toUpperCase()}
          </Avatar>
        )}
        title={name}
        subheader={email}
      />
    </Card>
  );
}

export const CardUser = Component;
export default CardUser;
