import {
  Card, CardContent, CardMedia,
} from '@material-ui/core';

function Component() {
  return (
    <Card>
      <CardContent>
        <CardMedia
          component="img"
          height="100%"
          src="https://m.media-amazon.com/images/I/4145oBxyofL.jpg"
          title="Live from space album cover"
        />
      </CardContent>
    </Card>
  );
}

export const CardBookCover = Component;
export default CardBookCover;
