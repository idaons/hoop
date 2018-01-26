import React from 'react';
import HulaBW from '../../img/hoop.svg';
import ReactSVG from 'react-svg';

function RotatingHoops(props) {
    return (
        <div className="rotating-hoops">
            <div className="rotate2">
                <ReactSVG path={HulaBW} />
            </div>
            <div className="rotate">
                <ReactSVG path={HulaBW} />
            </div>
        </div>
    );
}

export default RotatingHoops;