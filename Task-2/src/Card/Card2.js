import React, { Component } from 'react';
import './Card2.css';



import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';




class Card2 extends Component{
    render(){
        

        
        return (
            
            <div>
                
           
    <div>
    <h3>Announcements</h3>
    <h7 className="grey-text">Latest news from The GST</h7>
    <Tabs defaultActiveKey="Admission"  >
        <Tab eventKey="admission" title="Admission"  >
            <div>
                <ul className='details'>
                <li className="info">
                                        <p></p>
                                        <span className="title"> MERIT LIST 2019-20</span>
                                        <p>
                                        </p><div className="datebranch">13-07-2019</div>
                                        <div className="datebranch">FE</div>
                                        <p></p>
                                        <hr></hr>
                </li>
                <li className="info">
                                        <span className="title">Fee &amp; Documents details - FE </span>
                                        <p>
                                        </p><div className="datebranch">11-07-2019</div>
                                        <div className="datebranch">FE</div>
                                        <p></p>
                                        <hr></hr>

                </li>
                <li class="info">
                                        <span className="title">Guidance Session for First Year Engineering Admissions</span>
                                        <p>
                                        </p><div className="datebranch">12-07-2019</div>
                                        <div className="datebranch">FE</div>
                                        <p></p>
                                        <hr></hr>

                </li>
                
                </ul>
            </div>
        </Tab>
        <Tab eventKey="general" title="General">
            <div>
            <div>
                <ul className='details'>
                <li className="info">
                                        <p></p>
                                        <span className="title">Vacancy position after Counseling Round -I</span>
                                        <p>
                                        </p><div className="datebranch">19-07-2019</div>
                                        <div className="datebranch">FE</div>
                                        <p></p>
                                        <hr></hr>
                </li>
                <li className="info">
                                        <span class="title">Merit List after the Counseling Round - I</span>
                                        <p>
                                        </p><div className="datebranch">19-07-2019</div>
                                        <div className="datebranch">FE</div>
                                        <hr></hr>

                </li>
                <li className="info">
                                            <span className="title">First year Engineering Admissions-Institute Level Counselling Round I -Schedule 2019-20</span>
                                            <p>
                                            </p><div className="datebranch">15-07-2019</div>
                                            <div className="datebranch">FE</div>
                                            <p></p>
                                            <hr></hr>

                 </li>
                </ul>
            </div>
            </div>
        </Tab>
        <Tab eventKey="result" title="Results" disabled></Tab>
    </Tabs>
    </div>
    
            </div>
            
        );
    

    };
} ;





export default Card2;






