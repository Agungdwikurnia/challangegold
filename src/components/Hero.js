import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import imgCar from "../assets/img-car.png"
const Hero = () => {
  return (
    <div>
       <Container className='hero min-vh-100 w-100'>
        <Row>
            <Col className='text-black text-justify'>
            <h1 className='kataSewa'>
               Sewa & Rental Mobil Terbaik di kawasan Tegal 
            </h1>
            <p className='kataSelamatDatang'>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <button className='sewamobil text-white'>Mulai Sewa Mobil</button>
            <img className='imgCar' src={imgCar} alt='imgCar'/>

            </Col>
        </Row>
       </Container>
    </div>
  )
}

export default Hero