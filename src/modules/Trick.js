import React from 'react';
import BackgroundPic from '../img/hoopdance.jpg'
import RotatingHoops from './RotatingHoops/RotatingHoops';
import * as data from '../input/data.js';
import {Link} from 'react-router-dom';
import ReactGA from "react-ga";

class Trick extends React.Component {


    lagShowcase = (triks) => {
        const backgroundPickExists = false;
        const inlineBackgroundPick = backgroundPickExists ? {'backgroundImage': `url(${BackgroundPic})`} : {};
        const rotatingHoops = !backgroundPickExists ? <RotatingHoops /> : '';

        return (
            <div
                className="container showcase"
                style={inlineBackgroundPick}
            >
                {rotatingHoops}
                <h1 className="overskrift">{triks.name}</h1>
            </div>
        );
    }

    render() {
        const trickId = parseInt(this.props.match.params.id, 10);
        ReactGA.event({
            category: 'Triks besøkt',
            action: 'Så på triks nummer ' + trickId
        });

        if(data.count()  <= trickId ){
            return(
                <div className="container trick-container">
                    <div className="feilmelding">
                    Finner ikke trikset :(
                    </div>
                </div>
            );
        }

        const hasNext = data.count() > trickId + 1;
        const hasPrev = trickId > 0;
        const triks = data.get(trickId);

        return(
            <div className="container trick-container">
                {this.lagShowcase(triks)}
                <div>
                    {triks.categories.map((category, i) =>
                        <span key={i} className="etikett">
                            {category}
                        </span>
                    )}
                    <ul>
                        {triks.description.split('.').map((step, i) =>
                            step.length > 0 && <li key={i}>{step}</li>
                        )}
                    </ul>
                </div>
                <div className="mb-l">
                    <a
                        className="link"
                        href={triks.video}
                        target="_blank">Link til video</a>
                </div>
                <div className="center">
                    {hasPrev && ( <Link className="button"
                            to={`/triks/${trickId -1}`}>
                        Forrige
                    </Link>)}
                    {hasNext && (<Link className="button"
                           to={`/triks/${trickId + 1}`}>
                        Neste
                    </Link>)}
                </div>
            </div>
        );
    }
}

export default Trick;

