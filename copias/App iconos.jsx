import { Box, Button, Container, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

//? Crear funcion por defecto
export default function App(){
  return(
    <Container maxWidth="md">
      <h1>App</h1>
      <Box sx={{border: 2, p: 8}}>
      <Typography textAlign={"center"} variant="h5">Hola</Typography>
      <Button variant="outlined" color="error">Cerrar</Button>
      <Button endIcon={<AccountCircleIcon/>} variant="contained" color="success">Abrir</Button>
      </Box>
    </Container>
  );
}