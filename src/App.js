import React, { Component } from 'react';
import './css/app.css'
import Menu from "./modules/menu/Menu";
import Trick from "./modules/Trick";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  toggleMenu(){
    this.setState({
        menuOpen: !this.state.menuOpen
    });
  }

  render() {
    return (
      <div>
        <Menu open={this.state.menuOpen} callback={()=>this.toggleMenu()}/>
        <Trick/>
      </div>
    );
  }
}

export default App;
