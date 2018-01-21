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
        at tommelen kommer opp. Før ringen bak ryggen og la den falle 
        ned (som fra escalator), sett ben i kryss, før ring ut og rundt
        mens du snur deg helt rundt. Bytt hånd og gjør isopops til hver
        side.`,
        categories: [Category.OFF_BODY, Category.COMBO, Category.VERTICAL],
        leadingTricks:  [],
        trailingTricks: [],
        video: 'https://www.facebook.com/gerald.torgersen/videos/10215738877330922/'
    }

    return(
        <div className="container main-content">
            <h1 className="overskrift">{dummyObj.name}</h1>
            {dummyObj.categories.map((category,i) =>
                    <span className="etikett">
                        {category }
                    </span>
            )}
            <div className="container">
                <ul>
                    {dummyObj.description.split('.').map((step, i) =>
                        step.length>0 && <li key={i}>{step}</li>
                    )}
                </ul>
            </div>
            <div className="mb-l">
                <a
                    className="link"
                    href={dummyObj.video}>Link til video</a>
            </div>
            <div className="center">
                <button className="button">Forrige</button>
                <button className="button">Neste</button>
            </div>
        </div>
    );
}

export default Trick;