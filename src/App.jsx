import { Box, AppBar, Button, Container, Grid, Toolbar, Typography, ButtonGroup }  from "@mui/material";
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
          <Typography variant="h2">React</Typography>
          <Typography variant="h2">Node</Typography>
          <Typography variant="h2">MySql</Typography>
          <Typography variant="h2">Material UI</Typography>
        </Grid>
        
        <Grid item xs={12} sm={6}>
        <Typography variant="h2">About Me.</Typography>
        <Box sx={{border: 2, p: 2}}>
        <Typography>Hola</Typography>
        <Typographi>Chao</Typographi>
        </Box>
        <Typography variant="h2">Contact Us.</Typography>
        <Box sx={{border: 2, p: 2}}>
          <ButtonGroup textAlign="center" variant="contained" color="primary">
            <Button>Discord</Button>
            <Button>Instagram</Button>
            <Button>Github</Button>
          </ButtonGroup>
        </Box>
        </Grid>
      </Grid>

    </Container>
  );
}