import React from 'react';
import PT from 'prop-types';
import HulaColor from '../../img/hula-hoop.svg';
import HulaDancer from '../../img/hula-dancer.svg'
import {allTricks} from '../../input/data.js';
import {Link} from 'react-router-dom';

function Menu({open, callback, height}){

    function showContent() {
        return open ? {height: height + 'px'} : {height: '80px'};
    }

    return(
        <div className="menu-container">
            <div id="menu" className="menu" style={showContent()}>
                <div className="container" style={{backgroundImage: `url(${HulaDancer})`}}>
                    <div className="topWrapper">
                        <button className="btn-close" onClick={()=>callback()}>
                            <img className="svg" src={HulaColor} alt="Colorful Hula Hoop" />
                            <h3 className="tittel">Meny</h3>
                        </button>
                    </div>
                    <div className="content">
                        <nav className="navigation">
                            <ul>
                                {
                                    allTricks().map(t => (
                                        <li key={t.id}>
                                            <Link to={`/triks/${t.id}`}
                                            onClick={()=>callback()}>{t.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
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
    height: 310
};

export default Menu;