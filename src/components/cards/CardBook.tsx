import {
  Card, CardContent, Typography, CardMedia, Box,
} from '@material-ui/core';

function Component() {
  return (
    <Card>

      <CardContent>
        <Box display="flex" alignItems="center">
          <Box marginRight="1rem">
            <CardMedia
              component="img"
              height="100%"
              src="https://m.media-amazon.com/images/I/4145oBxyofL.jpg"
              title="Live from space album cover"
            />
          </Box>
          <Box flexGrow={1}>
            <Box>
              <Typography variant="h6">Como fazer amigos e influênciar pessoas</Typography>
              <Typography variant="subtitle1">Dale Carnegie</Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of
            </Typography>
          </Box>
        </Box>
      </CardContent>

    </Card>
  );
}

export const CardBook = Component;
export default CardBook;
