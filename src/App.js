import React, { Component } from 'react';
import './less/app.css'
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
        <div className="app">
            <div className="navigation-menu">
                <Menu open={this.state.menuOpen} callback={()=>this.toggleMenu()}/>
            </div>
            <div className="main-content">
                <Trick/>
            </div>
            <footer className="footer">
                <div className="container">
                    <h4>App by Ida and Daniel</h4>
                </div>
            </footer>
        </div>
    );
  }
}

export default App;
