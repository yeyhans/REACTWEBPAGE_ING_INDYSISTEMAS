import { Box, Grid, Typography } from '@mui/material'
import Educacionales from './proyectos/Educacionales'
import Auditorias from './proyectos/Auditorias'
import Empresas from './proyectos/Empresas'

import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


function Proyectos() {
  return (
    <div>


<Typography variant="h4" gutterBottom align="center">
        Nuestros proyectos
    </Typography>
<Box sx={{ flexGrow: 1 }} display="flex" >




    <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 6, md: 12 }}>
      
          <Grid item xs={2} sm={4} md={4}>
            <Item><Educacionales/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item><Auditorias /></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item><Empresas /></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
          </Grid>

    </Grid>
</Box>


   



    </div>
  )
}

export default Proyectos