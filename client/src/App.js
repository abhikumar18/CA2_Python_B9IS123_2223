import './App.css';
import { Container,AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Student from './components/showStudent/showStudent.js';
import Create from './components/createStudent/createStudent.js';
import useStyles from './style';

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Student Management System</Typography>
        </AppBar>

        <Grow in>
            <Container>
              <Grid container justify="space-between" alignItems='stretch'>
                <Grid item xs={12} sm={7}>
                  <Student/>
                </Grid>
                <Grid item xs={12} sm={4}>
                   <AppBar className={classes.appBar} position="static" color='inherit'>
                    <Create/>
                   </AppBar>
                </Grid>

              </Grid>
            </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
