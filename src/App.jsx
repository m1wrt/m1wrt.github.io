import React from 'react';
import Box from '@mui/joy/Box';
import { CardContent, CardCover, Typography, Card, Avatar, Grid, Button, ButtonGroup } from '@mui/joy';

function cambioflex_redirect(){
  window.location.href = 'https://m1wrt.github.io/cambioflex/';
}

function github_redirect(){
  window.location.href = 'https://github.com/m1wrt';
}

function email(){
  window.location.href = 'mailto:m1wrt@proton.me';
}


const App = () => {
  return (
    <center>
    <Typography level="h1" padding={4} variant='plain'>Hola chiquis</Typography>
      <Card sx={{ width: 300, height: 450 }}>
        <CardCover></CardCover>
        <CardContent>
          <Box sx={{ flexGrow: 0 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar>M</Avatar>
                  <Typography variant="body2" marginX={1} fontWeight={900}>Mikel</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Typography color="neutral" variant="soft" level='h1' textAlign={'left'} marginTop={1}>
            Simplemente yo.
          </Typography>
          {/*
          <Typography color="warning" variant="soft" level='h1' marginTop={2} marginBottom={2}>Mis Proyectos:
          <Card sx={{ overflow: 'hidden' }}>
            <CardCover>
              <img src='https://media.tenor.com/XOKm8hiDW3UAAAAM/catshakira-cat.gif' style={{ filter: 'blur(15px)' }}/>
            </CardCover>
            <CardContent>
              <Box sx={{ width: 200, height: 120 }}>
                <Grid container spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar src='https://i.imgur.com/4ufNAKE.png'/>
                  <Typography variant="body2" level='h3'>CambioFlex</Typography>
                </Box>  
                </Grid>
              </Box>
              
              <Typography textAlign={'justify'} level='h4' marginTop={-10}>Consulta el precio del dolar a bolivares en distintas tasas</Typography>
              <Button onClick={cambioflex_redirect}
                color="neutral"
                size="md" 
              >Visitar Sitio</Button>
            </CardContent>
          </Card></Typography>
          <Typography level='h1' color="success" variant="soft" marginTop={2} marginBottom={2}>Contactame</Typography>
          */}
          <Card>
          <img src='https://media.tenor.com/XOKm8hiDW3UAAAAM/catshakira-cat.gif' style={{ filter: 'blur(0px)' }}/>
          <Typography>No sé q poner en la pagina web ok?</Typography>
            <CardContent>
              {/*<ButtonGroup>
                  <Button onClick={github_redirect}>Github</Button>
                  <Button onClick={email}>Correo Electronico</Button>
              </ButtonGroup>*/}
              
            </CardContent>
          </Card>
          </CardContent>
      </Card>
    </center>
  );
};

export default App;
