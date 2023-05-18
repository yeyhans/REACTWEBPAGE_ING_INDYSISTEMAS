
import { Box, Grid, Typography } from '@mui/material';
import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'

import BusinessIcon from '@mui/icons-material/Business';


const EDUCACIONALES = 'ProyectosEmpresas'

const supabase = createClient(
  import.meta.env.VITE_SUPA_URL,
  import.meta.env.VITE_SUPA_KEY
);

function Empresas() {

    const [edules, setEducacionales] = useState([])

    const getEducacionales = async () => {
        const resultedules = await supabase.from(EDUCACIONALES).select()  
        setEducacionales(resultedules.data)
      }
    
      useEffect(() => {
        getEducacionales()
      }, [])
      
      useEffect( () =>{
        
        
      }, [edules])

  return (

    <div>

        <Box>
        <h2><BusinessIcon sx={{ fontSize: 80 }} /></h2>
        <Typography gutterBottom variant="h6" align="left">
         Empresas
         </Typography>

        {edules.map(i => ( 
   
    <Grid item key={i.id}>

         <Typography gutterBottom variant="h7" component="h3" align="left">
         {i.empresa}
         </Typography>
         <Typography align="left">
         {i.proyecto1}
         </Typography>
         <Typography align="left">
         {i.proyecto2}
         </Typography>
         <Typography align="left">
         {i.proyecto3}
         </Typography>
         <Typography align="left">
         {i.proyecto4}
         </Typography>
         <Typography align="left">
         {i.proyecto5}
         </Typography>

    </Grid>
   
       ))}

</Box>


    </div>

  )
    


              }

export default Empresas