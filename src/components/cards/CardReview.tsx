import {
  Card, CardContent, Typography, CardMedia, Box,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

function Component() {
  return (
    <Card>

      <CardContent>
        <Box display="flex" alignItems="center">
          <Box>
            <Box>
              <Rating
                name="simple-controlled"
                value={3}
              />
              <Typography variant="subtitle1">Bruno Leandes ~ 24 Jul</Typography>
              <Typography variant="subtitle1">Excelênte livro</Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </Box>
          <Box marginLeft="1rem" width="23rem">
            <CardMedia
              component="img"
              height="100%"
              src="https://m.media-amazon.com/images/I/4145oBxyofL.jpg"
              title="Live from space album cover"
            />
          </Box>
        </Box>
      </CardContent>

    </Card>
  );
}

export const CardReview = Component;
export default CardReview;
