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
    <Typography level="h1" padding={4} variant='plain'>Sobre mi.</Typography>
      <Card sx={{ width: 300, height: 630 }}>
        <CardCover></CardCover>
        <CardContent>
          <Box sx={{ flexGrow: 0 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar src='https://avatars.githubusercontent.com/u/177260077?s=48&v=4'/>
                  <Typography variant="body2">m1wrt</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Typography color="neutral" variant="soft" level='h1' textAlign={'left'}>
            Tan solo un simple desarrollador web
          </Typography>
          <Typography color="warning" variant="soft" level='h1' marginTop={2} marginBottom={2}>Mis Proyectos:</Typography>
          <Card sx={{ overflow: 'hidden' }}>
            <CardCover>
              <img src='https://camo.githubusercontent.com/1435def35aca85e8cb328d6b11f79e4f70399ff8987a51cd424d513301243b21/68747470733a2f2f692e696d6775722e636f6d2f333070627267332e706e67' style={{ filter: 'blur(15px)' }}/>
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
          </Card>
          <Typography level='h1' color="success" variant="soft" marginTop={2} marginBottom={2}>Contactame</Typography>
          <Card>
            <CardContent>
              <ButtonGroup>
                  <Button onClick={github_redirect}>Github</Button>
                  <Button onClick={email}>Correo Electronico</Button>
              </ButtonGroup>
            </CardContent>
          </Card>
          </CardContent>
      </Card>
    </center>
  );
};

export default App;
