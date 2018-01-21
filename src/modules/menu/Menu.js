import React from 'react';
import PT from 'prop-types';
import HulaColor from '../../img/hula-hoop.svg';
import HulaDancer from '../../img/hula.png'

function Menu({open, callback, height}){

    function showMenuButton() {
        return open ? {display: 'none'} : {display: ''};
    }

    function showContent() {
        return open ? {height: height + 'px'} : {height: '0'};
    }

    return(
        <div className="side-menu-container">
            <span className="btn-open-side-menu" style={showMenuButton()}>
                <a href="#" onClick={()=>callback(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 470">
                        <path d="m470,234.993c-0.002-62.768-24.446-121.779-68.83-166.163-44.386-44.386-103.399-68.83-166.17-68.83s-121.784,24.444-166.17,68.83c-44.384,44.384-68.828,103.395-68.83,166.163 0.002,62.782 24.446,121.793 68.83,166.177 44.386,44.386 103.399,68.83 166.17,68.83s121.784-24.444 166.17-68.83c44.384-44.384 68.828-103.395 68.83-166.177zm-49.362,117.946c-4.86-7.075-12.154-12.211-20.471-14.401 7.842-12.465 14.314-25.873 19.201-40.016 4.257-1.484 8.854-1.564 13.219-0.146 4.345,1.412 8.005,4.163 10.576,7.844-5.677,16.546-13.273,32.208-22.525,46.719zm-5.777-244.483c9.946,14.095 18.283,29.402 24.733,45.658-4.058-0.118-8.15,0.462-12.127,1.753-4.288,1.393-8.193,3.543-11.584,6.311-5.583-13.819-12.704-26.856-21.153-38.899 2.643-8.866 10.913-14.93 20.131-14.823zm22.361,175.653c-4.281-1.391-8.697-1.947-13.061-1.704 3.537-14.109 5.531-28.821 5.795-43.95 7.365-5.59 17.613-5.61 25.001-0.064-0.27,17.728-2.63,34.957-6.875,51.441-3.218-2.487-6.876-4.428-10.86-5.723zm-7.687-62.451c-1.024-15.078-3.765-29.69-8.036-43.643 2.573-3.701 6.243-6.465 10.603-7.882 4.347-1.412 8.927-1.338 13.174,0.131 5.027,16.297 8.198,33.397 9.286,51.053-8.086-2.881-17.006-2.765-25.027,0.341zm-25.038-126.758c-8.226,2.443-15.36,7.798-20.007,15.039-9.51-11.349-20.282-21.603-32.103-30.543-0.121-4.547 1.226-8.985 3.945-12.727 2.661-3.663 6.366-6.279 10.613-7.599 13.878,10.434 26.488,22.468 37.552,35.83zm-281.22-19.628c-4.358-1.291-8.16-3.942-10.877-7.682-2.663-3.665-4.006-7.999-3.948-12.449 14.095-9.947 29.403-18.284 45.66-24.734-0.118,4.059 0.463,8.151 1.755,12.127 1.394,4.288 3.543,8.192 6.311,11.583-13.819,5.584-26.857,12.705-38.901,21.155zm54.739-26.77c-3.701-2.572-6.466-6.243-7.883-10.604-1.413-4.347-1.338-8.928 0.131-13.173 16.297-5.027 33.397-8.198 51.053-9.287-2.882,8.086-2.765,17.006 0.34,25.027-15.077,1.024-29.689,3.765-43.641,8.037zm60.44-8.458c-5.59-7.365-5.611-17.613-0.064-25.001 17.728,0.27 34.957,2.63 51.441,6.875-2.488,3.218-4.429,6.876-5.724,10.86-1.391,4.282-1.948,8.697-1.705,13.061-14.108-3.537-28.82-5.531-43.948-5.795zm60.065,10.588c-1.484-4.258-1.564-8.856-0.146-13.218 1.412-4.345 4.163-8.005 7.844-10.576 16.538,5.674 32.192,13.265 46.696,22.51-3.328,2.283-6.277,5.142-8.72,8.504-2.662,3.664-4.562,7.717-5.676,11.97-12.46-7.838-25.862-14.306-39.998-19.19zm-203.639,14.886c1.143,3.859 2.947,7.536 5.383,10.888 2.669,3.673 5.947,6.74 9.659,9.116-11.342,9.506-21.59,20.273-30.526,32.088-9.245,0.231-17.573-5.747-20.326-14.558 10.429-13.871 22.457-26.475 35.81-37.534zm-39.743,296.027c-9.949-14.1-18.289-29.412-24.739-45.673 0.346,0.01 0.691,0.031 1.037,0.031 3.719,0 7.456-0.587 11.096-1.769 4.292-1.394 8.199-3.547 11.592-6.318 5.517,13.706 12.59,26.793 21.121,38.982-2.666,8.824-10.907,14.856-20.107,14.747zm-14.677-113.201c1.021,14.862 3.748,29.491 8.061,43.611-2.573,3.716-6.253,6.491-10.625,7.912-4.346,1.413-8.927,1.338-13.174-0.131-5.027-16.297-8.198-33.397-9.286-51.053 3.892,1.387 7.976,2.085 12.062,2.085 4.402,0 8.802-0.814 12.962-2.424zm-.418-16.8c-7.365,5.59-17.613,5.61-25.001,0.064 0.27-17.728 2.63-34.957 6.875-51.441 3.218,2.488 6.876,4.429 10.861,5.724 3.64,1.183 7.376,1.77 11.095,1.77 0.656,0 1.31-0.022 1.964-0.058-3.537,14.106-5.53,28.816-5.794,43.941zm10.588-60.066c-4.258,1.484-8.854,1.564-13.219,0.147-4.345-1.412-8.005-4.163-10.576-7.844 5.677-16.547 13.273-32.208 22.524-46.719 4.859,7.075 12.15,12.215 20.469,14.404-7.841,12.464-14.312,25.87-19.198,40.012zm14.867,203.617c8.202-2.435 15.322-7.758 19.97-14.964 0.356,0.425 0.705,0.856 1.065,1.279 2.686,3.152 7.42,3.53 10.572,0.844 3.153-2.687 3.53-7.42 0.844-10.573-27.696-32.499-42.949-73.935-42.95-116.677 0-19.395 3.094-38.071 8.792-55.582 0.01-0.031 0.02-0.062 0.03-0.093 23.502-72.087 91.349-124.329 171.178-124.329s147.676,52.242 171.177,124.33c0.01,0.031 0.02,0.062 0.03,0.093 5.698,17.511 8.792,36.186 8.792,55.573 0,19.395-3.094,38.07-8.792,55.581-0.01,0.031-0.02,0.062-0.03,0.093-17.784,54.549-60.96,97.725-115.509,115.508-0.03,0.01-0.06,0.019-0.09,0.029-17.512,5.699-36.189,8.793-55.578,8.793-42.743,0-84.182-15.253-116.68-42.95-3.153-2.688-7.887-2.309-10.573,0.843-2.687,3.152-2.31,7.886 0.843,10.573 2.94,2.506 5.954,4.909 9.025,7.225 0.101,4.516-1.244,8.923-3.946,12.641-2.661,3.663-6.366,6.279-10.614,7.599-13.88-10.436-26.492-22.473-37.556-35.836zm292.101,27.315c2.663,3.665 4.006,7.999 3.948,12.449-14.095,9.947-29.403,18.284-45.66,24.734 0.118-4.059-0.463-8.151-1.755-12.127-1.394-4.288-3.543-8.192-6.311-11.583 13.82-5.584 26.857-12.705 38.901-21.155 4.358,1.291 8.16,3.943 10.877,7.682zm-108.917,52.152c2.882-8.086 2.765-17.006-0.34-25.027 15.077-1.024 29.69-3.765 43.642-8.036 3.701,2.572 6.466,6.243 7.883,10.604 1.413,4.347 1.338,8.928-0.131,13.173-16.298,5.027-33.398,8.197-51.054,9.286zm-68.516-6.48c2.488-3.218 4.429-6.876 5.724-10.86 1.394-4.289 1.95-8.713 1.703-13.084 14.298,3.586 29.042,5.559 43.954,5.823 5.586,7.365 5.605,17.609 0.06,24.995-17.727-0.269-34.957-2.629-51.441-6.874zm-63.083-27.429c3.328-2.283 6.277-5.142 8.72-8.504 2.651-3.65 4.547-7.686 5.663-11.921 12.592,7.889 26.017,14.304 40.005,19.124 1.49,4.263 1.571,8.866 0.152,13.235-1.412,4.345-4.163,8.005-7.844,10.576-16.537-5.674-32.191-13.265-46.696-22.51zm258.034-16.171c-1.143-3.859-2.947-7.536-5.383-10.888-2.669-3.673-5.947-6.74-9.659-9.116 11.342-9.506 21.591-20.273 30.527-32.088 9.239-0.232 17.571,5.748 20.325,14.559-10.429,13.87-22.457,26.474-35.81,37.533z"></path>
                    </svg>
                </a>
            </span>
            <div id="side-menu" className="side-menu" style={showContent()}>
                <a href="#" className="btn-close" onClick={()=>callback()}>
                    <img className="svg" src={HulaColor} alt="Colorful Hula Hoop"/>
                </a>
                <div className="content">
                    <nav className="navigation">
                        <a href="#">Legg til triks</a>
                        <a href="#">Bla gjennom triks</a>
                        <a href="#">Søk</a>
                        <a href="#">Lag hoop-sekvens</a>
                    </nav>
                </div>
                <div className="logo">
                    <img src={HulaDancer} alt="Hula Hoop Dancer"/>
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
    height: '350',
};

export default Menu;