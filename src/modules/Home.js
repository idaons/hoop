import React from 'react';
import RotatingHoops from "./RotatingHoops/RotatingHoops";


class Home extends React.Component {


    componentWillMount(){
        this.props.openMenu();
    };
    render() {
        return (
            <div className="container home-container">
                <div className="showcase">
                    <RotatingHoops />
                </div>
            </div>
        );
    }
}

export default Home;