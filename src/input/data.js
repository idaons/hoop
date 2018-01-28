const Category = {
    OFF_BODY: 'Off-body',
    COMBO: 'Combo',
    SPLEIS: 'Spleiselag'
};

const triks = [
    {
        "id": 0,
        "name": "Spleiselag: Ylva S",
        "description": "Start med forlengs weave. Så sidelengs weave. Gjør en isopop (ring ut, mens armen går opp). " +
        "Så en reversert jump-through (snu deg rundt og hopp igjennom ringen). Gjør en håndvri til bakoverviv. " +
        "Så en håndvri til foroverviv mens du snur deg rundt 180 grader",
        "categories": [
            Category.OFF_BODY,
            Category.COMBO,
            Category.SPLEIS
        ],
        "leadingTricks": [],
        "trailingTricks": [],
        "video": "https://www.facebook.com/ylva.s.3/videos/10159799879310253/"
    },{
        "id": 1,
        "name": "Spleiselag: Tina G",
        "description": "Gjør en foroverviv med håndspinn på høyre hånd. Snu deg til siden og bytt grep som om du " +
        "skal gjøre en bakoverviv, men gjør en håndspin foran deg. Bytt til venstre hånd, kast ring bak og over " +
        "skulderen og ta i mot med venstre hånd. Før ringen foran deg til høyre hånd. Gjør en utoverisalsjon, bytt " +
        "deretter til innover isolasjon. Tilslutt gjør du en coin flip (vri ring helt rundt bakover, snu deg 180 " +
        "grader, slå ring tilbake)",
        "categories": [
            Category.OFF_BODY,
            Category.COMBO,
            Category.SPLEIS
        ],
        "leadingTricks": [],
        "trailingTricks": [],
        "video": "https://www.facebook.com/thetinagreen/videos/10155173501266592/"
    }, {
        "id": 2,
        "name": "Spleiselag: Christina S",
        "description": "Flipp ringen over ryggen: Start med tommel opp på ringen, rull over hånda og før ringen " +
        "rundt foran deg slik at tommelen kommer opp. Før ringen bak ryggen og la den falle ned(som fra escalator), " +
        "sett ben i kryss, før ring ut og rundt mens du snur deg helt rundt. " +
        "Bytt hånd og gjør isopops til hver side.",
        "categories": [
            Category.OFF_BODY,
            Category.COMBO,
            Category.VERTICAL
        ],
        "leadingTricks": [],
        "trailingTricks": [],
        "video": "https://www.facebook.com/gerald.torgersen/videos/10215738877330922/"
    }, {
        "id": 3,
        "name": "Spleiselag: Kristina S",
        "description": "Snurr ringen forover på hånda. Stikk albuen inn i stedet, med albue pekende bakover. Stikk" +
        "den andre albuen inn of fortsett snurringa på andre hånd.",
        "categories": [
            Category.OFF_BODY,
            Category.SPLEIS
        ],
        "leadingTricks": [],
        "trailingTricks": [],
        "video": "https://www.facebook.com/kristina.lakic/videos/10155796624011014/"
    }

];


export const count = () => {
    return triks.length;
};
/*
const all = () => {
    return triks;
};
*/

export const get = (id) => {
    const isTriks = t => t.id === id
    return triks.find(isTriks)
};



/*
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
};
*/
