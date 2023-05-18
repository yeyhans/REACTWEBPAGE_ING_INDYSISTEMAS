
import './App.css'
//
//IMPORTACION DE COMPONENTES
import Servicios from './pages/Servicios'
import Nosotros from './pages/nosotros/Nosotros';
import Home from './pages/inicio/Home';
import Proyectos from './pages/Proyectos';
import ContactForm  from './pages/contacto/ContactForm';
import NavBar from './pages/NavBar';
import { Divider, Grid } from '@mui/material';
import Carrusel from './pages/clientes/Carrusel';





function App() {


  return (
    <>
      <Grid id="item-0">
      <NavBar />
      </Grid>
      <Grid id="item-1">
      <Divider style={{border: "none", height: 2, margin: 0 }} />
     
      <section id="inicio"><Home /></section>
      <Divider style={{ border: "none", height: 2, margin: 0 }}/>
      <section id="servicios"><Servicios /></section>
      <section id="nosotros"><Nosotros /></section>
      <Divider style={{ border: "none", height: 2, margin: 0 }}/>
      <section id="proyectos"><Proyectos /></section>
      <section id="contacto"><ContactForm/></section>
      <Divider style={{ border: "none", height: 2, margin: 0 }}/>



      <section id="CarruselClientes"><Carrusel /></section>



      </Grid>
      <Grid id="item-2">
      
      </Grid>


    </>
  )
}

export default App
