import React, { Component } from 'react';
import './Videotour.css';

class Videotour extends Component {
    render(){
    return(


<div>
<video loop autoPlay className='video' >
  <source src="http://www.siesgst.edu.in/assets/campus_tour.mp4" type="video/mp4"></source>
  
  
Your browser does not support the video tag.
</video><br></br>
<tab><marquee behavior="scroll" direction="left" ><tab className="tab">NEW</tab>&nbsp;The college is NAAC Accredited B++<tab className='naac'>click here to know about NAAC</tab></marquee></tab>

</div>
  );
 }
}
export default Videotour;
