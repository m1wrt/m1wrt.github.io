import { Button, Container, Typography } from "@mui/material";

//? Crear funcion por defecto
export default function App(){
  return(
    <Container maxWidth="md" sx={{border: 3, boxShadow: 3, pb: 2}}>
      <h1>App</h1>
      //? Propiedades del Typography
      <Typography textAlign={"center"} variant="h1">Titulo 1</Typography>
      <Typography variant="h2">Titulo 2</Typography>
      <Typography variant="h3">Titulo 3</Typography>
      <Button variant="contained">Hola</Button>
    </Container>
  );
}