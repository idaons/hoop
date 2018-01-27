import React from 'react';
import PropTypes from 'prop-types';
import BackgroundPic from '../img/hoopdance.jpg'
import triksListe from "../input/data";

class Trick extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            trickIndex: 0
        };
    }

    onNextClick = () => {
        console.log('onklik', this.state.trickIndex);
        this.setState({trickIndex: this.state.trickIndex +1})

    }

    onPrevClick = () => {
        this.setState({trickIndex: this.state.trickIndex -1})
    }

    render() {
        const {data} = this.props;


        // Funker ikke
        if(triksListe.length === 0 ){
            return(
                <div> Ingen triks tilgjengelig :( </div>
            );
        }

        console.log('render', this.state.trickIndex, data[this.state.trickIndex]);

        const hasNext = triksListe.length > this.state.trickIndex + 1;
        const hasPrev = this.state.trickIndex > 0;
        const triks = data[this.state.trickIndex];



        return(
            <div className="container trick-container">
                <div className="container showcase" style={{'backgroundImage': `url(${BackgroundPic})`}}>
                    <h1 className="overskrift">{triks.name}</h1>
                </div>
                <div className="container">
                    {triks.categories.map((category,i) =>
                        <span key={i} className="etikett">
                            {category }
                        </span>
                    )}
                    <ul>
                        {triks.description.split('.').map((step, i) =>
                            step.length>0 && <li key={i}>{step}</li>
                        )}
                    </ul>
                </div>
                <div className="mb-l">
                    <a
                        className="link"
                        href={triks.video}>Link til video</a>
                </div>
                <div className="center">
                    {hasPrev && ( <button className="button"
                            onClick={this.onPrevClick}>
                        Forrige
                    </button>)}
                    {hasNext && (<button className="button"
                            onClick={this.onNextClick}>
                        Neste
                    </button>)}
                </div>
            </div>
        );
    }
}

export default Trick;


Trick.propTypes = {
    triksListe: PropTypes.object
};

Trick.defaultProps = {
    triksListe: {}
};