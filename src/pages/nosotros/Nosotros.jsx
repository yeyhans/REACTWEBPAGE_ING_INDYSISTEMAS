import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'

import {Card, Container, CardContent, CardMedia, Grid, Typography, Box} from '@mui/material';




const NOSOTROS = 'Nosotros'

const supabase = createClient(
  import.meta.env.VITE_SUPA_URL,
  import.meta.env.VITE_SUPA_KEY
);



function Nosotros() {

    const [nosotros, setNosotros] = useState([])

    const getNosotros = async () => {
        const resultnosotros = await supabase.from(NOSOTROS).select()  
        setNosotros(resultnosotros.data)
      }
    
      useEffect(() => {
        getNosotros()
      }, [])
      
      useEffect( () =>{
        
        
      }, [nosotros])


  return (
    
    <>
 
 <section>
    <Typography variant="h4" gutterBottom>
        Acerca de Nosotros
      </Typography>
      <Box>
    

      <Container sx={{ py: 2 }} maxWidth="md">
      <Grid container spacing={4}>
   
        {nosotros.map(i => ( 
   
    <Grid item key={i.id} xs={4} sm={4} md={6}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          image={i.urlImg}
          alt={i.name + " " + i.description}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
          {i.name}
          </Typography>
          <Typography align="justify">
          {i.description}
          </Typography>
        </CardContent>
        </Card>
     </Grid>
    
        ))}
    </Grid>
        
        </Container>

        </Box>
    


    </section>


        

    </>

  )
}

export default Nosotros