import './App.css';
import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

function App() {
  return (
    <div className="App">
      <Grid container className={classes.root}>
        <Grid item xs={4}>
          <Typography>Filled</Typography>
        </Grid>
        <Grid item xs={8}>
          <DeleteIcon />
          <DeleteForeverIcon />
        </Grid>
      </Grid>
    </div>
  );
}


export default App;

{/* 

    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit
    //     </p>
    //   </header>
    // </div> */}