import {  AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { Link } from "react-scroll";

function NavBar() {


  return (
    <AppBar 
    position="fixed"
    color="inherit"
    elevation={1}
    sx={{ padding: 0}}
  >
    <Toolbar sx={{ justifyContent: 'space-between' }}>
    <Box sx={{ flex: 1 }} />


    <Typography variant="h4" color="inherit"             sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              letterSpacing: '0.0000001rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
    <Link   style={{color: 'black'}}
              color="#000000"
               underline="none"
            activeClass="active" smooth spy to="inicio" offset={200}
            duration={500}
            >
              INGENIERÍA INDUSTRIAL Y DE SISTEMAS
            </Link>
          </Typography>
          <Grid sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
          <Button  variant="outlined" sx={{ my: 1, mx: 1 }} >
          <Link style={{color: 'black'}}
              color="inherit"
               underline="none"
            activeClass="active" smooth spy to="servicios" offset={200}
            duration={500}
            >
              {'SERVICIO'}
            </Link>
            </Button>
            <Button  variant="outlined" sx={{ my: 1, mx: 1 }}>
            <Link style={{color: 'black'}}
              color="inherit"
              underline="none"
            activeClass="active" smooth spy to="nosotros" offset={200}
            duration={500}
            >
              {'NOSOTROS'}
            </Link>
            </Button>
            <Button  variant="outlined" sx={{ my: 1, mx: 1 }}>
            <Link style={{color: 'black'}}
              color="inherit"
              underline="none"
               activeClass="active" smooth spy to="proyectos" offset={200}
               duration={500}>
              {'PROYECTOS'}
             </Link>
            </Button>
            <Button  variant="outlined" sx={{ my: 1, mx: 1 }}>
            <Link style={{color: 'black'}}
              color="inherit"
              underline="none"
              activeClass="active" smooth spy to="contacto" offset={200}
              duration={500}
            >
              {'CONTACTO'}
            </Link>
            </Button>
            </Grid>
         

          </Toolbar>
      </AppBar>
      
  )
}
export default NavBar


