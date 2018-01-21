import React from 'react';

function Trick(){

    const Category = {
        OFF_BODY: 'Off-body',
        COMBO: 'Combo',
        VERTICAL: 'Vertical'
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
        categories: [Category.OFF_BODY, Category.COMBO, Category.VERTICAL],
        leadingTricks:  [],
        trailingTricks: [],
        video: 'https://www.facebook.com/gerald.torgersen/videos/10215738877330922/'
    }

    return(
        <div className="container">
            <h1 className="overskrift">{dummyObj.name}</h1>
            <div className="row mb">
                <div className="col-sm-6 col-xs-12">
                {dummyObj.categories.map((category,i) =>
                    <span className="etikett">
                        {category }
                    </span>
                )}
                </div>
            </div>
            <div className="row text-center">
                <div className="col-xs-12">

                </div>
            </div>
            <div className="row mb-l">
                <div className="col-xs-12 col-sm-8">
                    {dummyObj.description}
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-8">
                    <a
                        className="link"
                        href={dummyObj.video}>Link til video</a>
                </div>
            </div>



        </div>
    );
}

export default Trick;