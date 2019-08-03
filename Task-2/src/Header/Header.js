import React from 'react';
import './Header.css';

const Header = ()=>{
  
    return(
        <div className={'con'}>
            <div className="dp">
            <button className="dpbtn">Home</button>
            </div>

            <div className="dp">
  <button className="dpbtn">ABOUT</button>
  <div className="dropdown-content">
    <a href="#">Overview</a>
    <a href="#">Managing Committee</a>
    <a href="#">Vision & Mission</a>
    <a href="#">The Principal</a>
    
  </div>
</div>
<div className="dp">
  <button className="dpbtn">ACADEMICS</button>
  <div className="dropdown-content">
    <a href="#">CE</a>
    <a href="#">Extc</a>
    <a href="#">ME</a>
    <a href="#">IT</a>
    <p className='separator'>Support Departments</p>
    <a href="#">Innovation Cell </a>
    <a href="#">Admin Office</a>
    <a href="#">Exam Cell</a>
    <a href="#">Non Teaching Staffs</a>
  </div>
</div>
           
  <div className="dp">
  <button className="dpbtn">ADMISSIONS</button>
  </div>
  <div class="dp">
  <button className="dpbtn">CAREERS</button>
  </div>
  <img className='headericon' src={'https://www.developerweekend.org/images/sies%20logo.bmp'}/>
            <div class="dp">
  <button className="dpbtn">AMENITIES</button>
  <div className="dropdown-content">
    <a href="#">Library</a>
    <a href="#">Eyantra</a>
    <a href="#">Intranet</a>
    <a href="#">Miscalleneous</a>
  </div>
</div>

            <div className="dp">
  <button className="dpbtn">LIFE @ GST</button>
  <div class="dropdown-content">
    <a href="#">Student Council</a>
    <a href="#">Student Chapter</a>
    <a href="#">NSS</a>
    <a href="#">Dream Run</a>
    <a href="#">Clubs</a>
    <a href="#">Festivals</a>
    <a href="#">Capability Enhancement</a>
    
  </div>
</div>




            
<div class="dp">
  <button className="dpbtn">CIIED</button>
  </div>
  
  <div class="dp">
  <button className="dpbtn">ALUMINI</button>
  </div>
  <div class="dp">
  <button className="dpbtn">CONTACT US</button>
  </div>
 
        </div>
            );
}
export default Header;
