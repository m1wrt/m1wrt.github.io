import { Box, Button, Container, Grid, Typography } from "@mui/material";
//? Crear funcion por defecto
export default function App(){
  return(
    <Container maxWidth="md">
      <p></p>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <p>
          Lorem ipsum dolor sit amet consectetur adipiscing 
          elit convallis lectus magna, fames pulvinar accumsan
           arcu cum dapibus tincidunt dis dictumst, sapien fermentum
            taciti neque aenean erat vivamus justo cras. Vestibulum 
            viverra dictum rutrum blandit commodo nascetur tempus 
            tincidunt gravida nam odio eleifend urna, lobortis risus 
            posuere sollicitudin facilisi libero imperdiet feugiat 
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>
          Lorem ipsum dolor sit amet consectetur adipiscing 
          elit convallis lectus magna, fames pulvinar accumsan
           arcu cum dapibus tincidunt dis dictumst, sapien fermentum
            taciti neque aenean erat vivamus justo cras. Vestibulum 
            viverra dictum rutrum blandit commodo nascetur tempus 
            tincidunt gravida nam odio eleifend urna, lobortis risus 
            posuere sollicitudin facilisi libero imperdiet feugiat 
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}