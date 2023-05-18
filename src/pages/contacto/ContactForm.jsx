import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Grid, Button, Card, CardContent, Typography, Box, TextField } from '@mui/material';




const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_njt6wpe', 'template_c3ccqqf', form.current, 'yx3QCsAjfomxTKvQU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (


<Grid>
  <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
    <CardContent>
      <Typography gutterBottom variant="h4">
        Contactanos
    </Typography> 
      <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
       Complete el formulario y nuestro equipo se comunicará con usted dentro de las 24 horas.
    </Typography> 
      <form ref={form} onSubmit={sendEmail}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <TextField type="text" name="user_name" placeholder='Nombre'/>
          </Grid>          
          <Grid item xs={12}>
           <TextField type="number" name="user_phone" placeholder='Telefono' />
          </Grid>
          <Grid item xs={12}>
           <TextField type="email" name="user_email" placeholder='E-mail'/>
          </Grid>

          <Grid item xs={12}>
          <Box sx={{ p: 2 }}>
          <TextField name="message" minRows={3} placeholder="Escribenos un comentario." />
    </Box>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>Enviar</Button>
          </Grid>

        </Grid>
      </form>
    </CardContent>
  </Card>
</Grid>


  );
};

export default ContactForm;