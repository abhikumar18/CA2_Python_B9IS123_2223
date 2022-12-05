import logo from './logo.svg';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit" >
          <Typography className={classes.heading} variant="h2" align="center">Students Create and Show</Typography>
        </AppBar>

        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="strect">
              <Grid item xs={12} sm={7}>

              </Grid>
              <Grid item xs={12} sm={4}>

              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
      
    </div>
  );
}

export default App;
