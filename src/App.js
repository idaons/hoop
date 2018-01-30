import React, { Component } from 'react';
import './less/app.css'
import Menu from "./modules/menu/Menu";
import Trick from "./modules/Trick";
import {
    Route,
    Switch
} from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from "./modules/Home"


class App extends Component {

    constructor(props){
        super(props);
        ReactGA.initialize('UA-113167122-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
        this.state = {
          menuOpen: false
        };
    }

    toggleMenu(){
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    }


    openMenu(){
        console.log("openMenu");
        this.setState({
            menuOpen: true
        });
    }


    render() {
        return (
            <div className="app">
                <div className="navigation-menu">
                    <Menu open={this.state.menuOpen} callback={()=>this.toggleMenu()}/>
                </div>
                <div className="main-content">
                    <Switch>
                        {/*<Route exact path="/" component={() => <Redirect to="/triks/0" />}/>*/}
                        <Route path='/triks/:id' component={Trick}/>
                        <Route exact path='/' render={(props) => (
                            <Home {...props} openMenu={()=>this.openMenu()} />
                        )}/>
                    </Switch>
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
