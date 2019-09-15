import React,{Component} from 'react';
import './Header.css';
import SideDrawer from './SideDrawer/SideDrawer';

class Header extends Component  {

    constructor(props) {
        super(props);
        this.state = {
          showNav: false,
        };
        this.closeNav = this.closeNav.bind(this);
        this._onButtonClick = this._onButtonClick.bind(this);
      }
    
      _onButtonClick() {
        this.setState({
          showNav: true,
        }, () => {
          document.addEventListener('click', this.closeNav);
          console.log('OnButtonClick')
        });
      }
      closeMenu() {
        this.setState({ showNav: false }, () => {
          document.removeEventListener('click', this.closeNav);
          console.log('closeNav')
    
        });
      }
    
      render() {
        return (
              <div class='headd'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <i style={{paddingLeft:'20px'}} class="fa fa-bars fa-lg" onClick={this._onButtonClick}></i>
                <span class = 'textheadd'>SIESGST Portal</span>
                {this.state.showMenu ? <div ><SideDrawer/></div> : null }
              </div>
        );}
}
export default Header;
