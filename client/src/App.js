<<<<<<< HEAD
import logo from './logo.svg';
=======
>>>>>>> bbd0219ec1a77a858e231a02fb276726f9576999
import './App.css';
import { Container,AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Student from './components/showStudent/showStudent.js';
import Create from './components/createStudent/createStudent.js';
import useStyles from './styles'

function App() {

  const classes = useStyles();

  return (
    <div className="App">
<<<<<<< HEAD
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Student Create & Show</Typography>
        </AppBar>

        <Grow in>
            <Container>
              <Grid container justify="space-between" alignItems='strech'>
                <Grid item xs={12} sm={7}>

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
=======
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
      
>>>>>>> bbd0219ec1a77a858e231a02fb276726f9576999
>>>>>>> 944fdcfdf2b48feef59cd4c75a7c39fc8d14b9ed
    </div>
  );
}

export default App;
