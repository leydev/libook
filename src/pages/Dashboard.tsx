import { Box, Typography } from '@material-ui/core';
import { CardReview } from '../components/cards/CardReview';
import { CardBook } from '../components/cards/CardBook';
import Theme from '../utils/Theme';

import './Login.scss';

function Component() {
  return (
    <Theme name="Default">
      <Box height="100%" overflow="auto" padding="0rem .5rem">
        <Typography variant="h5" style={{ margin: '1rem 0rem' }}>Last Reviews</Typography>
        <CardReview />
        <CardReview />
        <Typography variant="h5" style={{ margin: '1rem 0rem' }}>Last Books</Typography>
        <CardBook />
        <CardBook />
        <CardBook />
      </Box>
    </Theme>
  );
}

export const Dashboard = Component;
export default Dashboard;
