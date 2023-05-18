import {Box, Grid, Typography, Container, Button, createTheme, ThemeProvider} from '@mui/material';

import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'

const theme = createTheme({
  palette: {
    neutral: {
      main: '#000000',
      contrastText: '#fff',
    },
  },
});

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
  };

  const supabase = createClient(
    import.meta.env.VITE_SUPA_URL,
    import.meta.env.VITE_SUPA_KEY
  );

  const SERVICIOS = 'Servicios'

function Servicios() {

  const [servicios, setServicios] = useState([])

  const getServicios = async () => {
      const resultservicios = await supabase.from(SERVICIOS).select()  
      setServicios(resultservicios.data)
    }
  
    useEffect(() => {
      getServicios()
    }, [])
    
    useEffect( () =>{
      
    }, [servicios])


  return (

  

<>

<Typography variant="h4" gutterBottom align="center">
        Nuestros Proyectos
    </Typography>
      <Container sx={{ mt: 5, mb: 15, display: 'flex', position: 'relative' }}>
        
        

        <Grid container spacing={5}>
        {servicios.map( s => ( 

          <Grid item key={s.id} xs={12} md={4}>
            <Box sx={item}>
            <Box
                component="img"
                src={s.urlImg}
                alt="graph"
                sx={{ height: 200 }}
              />
              <Typography variant="h6"  sx={{ my: 2 }}>
              {s.titulo}
              </Typography>
              <Typography>
              {s.descripcion}
              </Typography>
              <Typography  sx={{ my: 1 }}>
              <ThemeProvider theme={theme}>
                <Button variant="contained" size="large" color="neutral">Ver detalles</Button>
                </ThemeProvider>
              </Typography>
            </Box>
          </Grid>

        ))} 
        </Grid>
      </Container>
      </>


  


  )
}

export default Servicios