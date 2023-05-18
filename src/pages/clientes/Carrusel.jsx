import './Carrusel.css'

import { Carousel, Col, Row } from 'antd';
const contentStyle = {
  width: '200px',
  lineHeight: '160px',
  textAlign: 'center',
};

function Carrusel() {

  return (
    <>
      

      <div className='container'>
      
      <div className='carrusel'>      
        <Carousel autoplay>
        <div>
        <img style={contentStyle} src="/clientes/cetram.webp" />
        </div>
        <div>
        <img style={contentStyle} src="/clientes/sisrel.webp" />
    </div>
    <div>
    <img style={contentStyle} src="/clientes/uantofagasta.webp" />
    </div>
    <div>
    <img style={contentStyle} src="/clientes/unap.webp" />
    </div>
    <div>
    <img style={contentStyle} src="/clientes/unimarc.webp" />
    </div>
    <div>
    <img style={contentStyle} src="/clientes/ust.webp" />
    </div>
  </Carousel>
  </div>
      
    </div>




 
  </>

  )
}
export default Carrusel