import { Box, Button, Container, Typography } from "@mui/material";

//? Crear funcion por defecto
export default function App(){
  return(
    <Container maxWidth="md">
      <h1>App</h1>
      <Box sx={{border: 2, p: 8}}>
        Hola
      </Box>
    </Container>
  );
}