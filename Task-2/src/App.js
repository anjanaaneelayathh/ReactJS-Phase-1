import React from 'react';
import Header from './Header/Header';
import Marquee from './Header/Marquee';
import Videotour from './Videotour/Videotour';
import Links from './Links/Links';
import Card2 from './Card/Card2';
import  News from './News/News';
import Spotlight from './Spotlight/Spotlight';
import Events from './Events/Events';
import Recruiters from './Recruiters/Recruiters';
import Lifehere from './Lifehere/Lifehere';
import Footer from './Footer/Footer';













//import Title from './Title/Title';
//import Card from './Card/Card';
//import logo from './logo.svg';

import './App.css';

function App() {
  

  return (
    <div className={'app'}>
    <Header />
    <Marquee/>
    <Videotour/>
    <Links/>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'100%',height:'100%',margin:'15px'}}>
          <div style={{width:'50%',height:'50%'}}> <News /></div> 
              <div><Card2/></div>
        </div>

    <div style={{width:'100%',height:'100%'}}><Spotlight/></div>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',margin:'8px'}}>
              <div><Events/></div>
              <div><Recruiters/></div>
        </div>
        <hr></hr>

    <Lifehere/>

    <Footer/>        
    
    
    
    </div>
  );
}

export default App;

