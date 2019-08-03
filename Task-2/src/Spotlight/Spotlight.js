import React from 'react';
import './Spotlight.css';

import Carousel from 'react-bootstrap/Carousel';
const Spotlight = ()=>{
    return(<div>
      <h5 className="text"> Spotlight</h5>
            <h6 className='gry'>The Gems of GST</h6>

      
      <Carousel>
      
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.siesgst.edu.in/assets/home/new/sih_winners.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='head'>Smart India Hackathon</h3>
      <p className='p'>The team stood 1st in the AICTE organised "Smart India
                                    Hackathon 2019" for the problem statement given by Human Welfare Association Varanasi,MSME,India.
                                    held at kumaraguru college of technology coimbatore.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.siesgst.edu.in/assets/home/25.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className='head'>Self-driving Car</h3>
      <p className='p'>Meet The Maharashtra Team Behind World’s First Self-Driving Electric Tractor! <br></br>
      By our proud alumni <br></br></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.siesgst.edu.in/assets/home/openmic.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className='head'>Openmic 3.0</h3>
      <p className='p'>Open Mic 3.0 was a huge success.
                                    This article in "Thane Plus" supplement of "Maharashtra Times", says it all.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.siesgst.edu.in/assets/home/cricket_team.JPG"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className='head'>Sports</h3>
      <p className='p'>The cricket team has set many records and also won many
                                    inter college and university tournaments </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


</div>
  );
}
export default Spotlight;
