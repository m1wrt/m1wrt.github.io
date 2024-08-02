import { AppBar, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

//? Crear funcion por defecto
export default function App(){
  return(
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography color="secondary" textAlign={'center'} variant="h6" component="div" sx={{flexGrow: 1}}>
            M1-Wrt
          </Typography>
          <Typography>
            <Button variant="outlined" color="secondary">Projects</Button>
          </Typography>
        </Toolbar>
      </AppBar>

      <p></p>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2">Web Dev</Typography>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          
        Lorem ipsum dolor sit amet consectetur adipiscing 
          elit convallis lectus magna, fames pulvinar accumsan
           arcu cum dapibus tincidunt dis dictumst, sapien fermentum
            taciti neque aenean erat vivamus justo cras. Vestibulum 
            viverra dictum rutrum blandit commodo nascetur tempus 
            tincidunt gravida nam odio eleifend urna, lobortis risus 
            posuere sollicitudin facilisi libero imperdiet feugiat
        </Grid>
      </Grid>

    </Container>
  );
}