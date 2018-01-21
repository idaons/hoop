import React from 'react';

function Trick(){

    const Category = {
        OFF_BODY: 'OFF_BODY',
        COMBO: 'COMBO',
    }
    const dummyObj = {
        id: undefined,
        name: 'Spleiselag Christina S',
        description: `Flipp ringen over ryggen: Start med tommel opp 
        på ringen, rull over hånda og før ringen rundt foran deg slik 
        at tommelen kommer opp. Flipp ringen bak ryggen og la den falle 
        ned (som fra escalator), sett ben i kryss, før ring ut og rundt
        mens du snur deg helt rundt. Bytt hånd og gjør isopops til hver
        side.`,
        category: [Category.OFF_BODY, Category.COMBO],
        leadingTricks:  [],
        trailingTricks: [],
        video: 'https://www.facebook.com/gerald.torgersen/videos/10215738877330922/'
    }

    return(
        <div className="container">
            <h1 className="center">{dummyObj.name}</h1>
            <div className="row text-center">
                <div className="col-xs-12">

                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-xs-12">
                    {dummyObj.description}
                </div>
            </div>


        </div>
    );
}

export default Trick;