import React from 'react';
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';

// ===========importing Imagiges and videos===========
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList';


const Home = () => {
  return (
  <>
{/* ============================= Heading Section ======================================================== */}
<section> 
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center ">
              <Subtitle subtitle={'Know Before you Go'} />
              <img src={worldImg} alt="" />
            </div>
            <h1>Tragveling opens the doors to creating 
              <span className="highlight"> Memories</span></h1>
              <p>Galaxy Time Tour Co., Ltd. as the one stop service provider for all your travel needs and requirements in Thailand. 
                The company is fully licensed Categorized as Grade A and a member of the Tourism Authority of Thailand.
                TAT No.​ - 14/03381 We are based in Pattaya and our primary aim is to provide quality travel services to leisure and group travellers.
              </p>
          </div>
        </Col>
      
      <Col lg='2'>
        <div className="hero__img-box">
          <img src={heroImg} alt="" />
        </div>
      </Col>

      <Col lg='2'>
        <div className="hero__video-box mt-4">
          <video src={heroVideo} alt="" controls/>
        </div>
      </Col>

      <Col lg='2'>
        <div className="hero__img-box mt-5">
          <img src={heroImg02} alt="" />
        </div>
      </Col> 

      <SearchBar />

      </Row>
    </Container>
  </section>
{/* ============================= Heading Section  ends======================================================== */}


{/* ============================= SERVICES   ======================================================== */}

  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className="services__subtitle"><bd/>What we Serve</h5>
          <h2 className='services__title'>We Offer Countless expericences</h2>
        </Col>
        <ServiceList />
      </Row>
    </Container>
  </section>
{/* ============================= SERVICES Ends  ======================================================== */}

  </>
  )
}

export default Home