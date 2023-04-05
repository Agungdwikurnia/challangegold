import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import imgServices from '../assets/img-service.png'
import imgChekList from '../assets/fi-chevron-down.png'
const Gallery = () => {
  return (
    <div>
        <Container className='Gallery min-vh-100 w-100'>
            <Row>
                <Col className='BestCar'>
                <h2>
                Best Car Rental for any kind of trip in Tegal!
                Sewa mobil di Tegal bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                <br/>
                <br/>
                <h2>Sewa mobil dengan supir di Bali 12 Jam</h2>
                <h2>Sewa Mobil Lepas Kunci di Bali 24 Jam</h2>
                <h2 className='MobilJangka'>Sewa Mobil Jangka Panjang Bulanan</h2>
                <h2 className='Gratis'>Gratis Antar - Jemput Mobil di Bandara</h2>
                <h2 className='Layanan'>Layanan Airport Transfer / Drop In Out</h2>
                </h2>
                </Col>
            </Row>
        </Container>
        <img className='imgServices' srcSet={imgServices} alt='imgServices'/>
        <img className='imgCheklist' srcSet={imgChekList} alt='imgChekList'/>
    </div>
  )
}

export default Gallery