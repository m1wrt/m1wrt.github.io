import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//? Fuentes Roboto
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme_palette = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#364336',
    },
    secondary: {
      main: '#afbeae',
      contrastText: 'rgba(150,121,121,0.87)',
    },
    background: {
      default: '#303030',
    },
    text: {
      primary: '#aaaaaa',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme_palette}>
    <CssBaseline />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
