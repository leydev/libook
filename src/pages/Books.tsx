import {
  Box, Typography, Fab, Grid,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { CardBookCover } from '../components/cards/CardBookCover';
import Theme from '../utils/Theme';

import './Books.scss';

function Component() {
  return (
    <Theme name="Default">
      <Box height="100%" overflow="auto" padding="0rem .5rem">
        <Typography variant="h5" style={{ margin: '1rem 0rem' }}>Books</Typography>
        <Grid container>
          <Grid item xs={6}><CardBookCover /></Grid>
          <Grid item xs={6}><CardBookCover /></Grid>
          <Grid item xs={6}><CardBookCover /></Grid>
          <Grid item xs={6}><CardBookCover /></Grid>
          <Grid item xs={6}><CardBookCover /></Grid>
          <Grid item xs={6}><CardBookCover /></Grid>
        </Grid>
        <Fab className="fab-button" onClick={() => {}}>
          <AddIcon />
        </Fab>
      </Box>
    </Theme>
  );
}

export const Books = Component;
export default Books;
