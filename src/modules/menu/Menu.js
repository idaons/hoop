import React from 'react';
import PT from 'prop-types';
import HulaColor from '../../img/hula-hoop.svg';
import HulaDancer from '../../img/hula-dancer.svg'

function Menu({open, callback, height}){

    function showMenuButton() {
        return open ? {display: 'none'} : {display: ''};
    }

    function showContent() {
        return open ? {height: height + 'px'} : {height: '80px'};
    }

    return(
        <div className="menu-container">
            <div id="menu" className="menu" style={showContent()}>
                <div className="container" style={{'background-image': `url(${HulaDancer})`}}>
                    <div className="topWrapper">
                        <a href="#" className="btn-close" onClick={()=>callback()}>
                            <img className="svg" src={HulaColor} alt="Colorful Hula Hoop" />
                            <h3 className="tittel">Meny</h3>
                        </a>
                    </div>
                    <div className="content">
                        <nav className="navigation">
                            <a href="#">Legg til triks</a>
                            <a href="#">Bla gjennom triks</a>
                            <a href="#">Søk</a>
                            <a href="#">Lag hoop-sekvens</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

Menu.propTypes = {
    open: PT.bool.isRequired,
    callback: PT.func.isRequired,
    height: PT.number
};

Menu.defaultProps = {
    height: '310',
};

export default Menu;