/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Note-Left2',
                            type: 'image',
                            rect: ['-342px', '100px', '1025', '602', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Note-Left.png",'0px','0px']
                        },
                        {
                            id: 'Note-in-Left',
                            type: 'image',
                            rect: ['-326px', '105px', '73', '602', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Note-in-Left.png",'0px','0px']
                        },
                        {
                            id: 'Note-In-Right',
                            type: 'image',
                            rect: ['-363px', '101px', '1025', '602px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Note-In-Right.png",'0px','0px']
                        },
                        {
                            id: 'Note-Right',
                            type: 'image',
                            rect: ['139px', '106px', '1025', '602px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Note-Right.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['381px', '29px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "Welcome to World Unexpected<br>Click The Notebook to open page",
                            align: "center",
                            font: ['Palatino Linotype, Book Antigua, Palatino, serif', [33, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1250', '850', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    labels: {
                        "Label 1": 0
                    },
                    data: [
                        [
                            "eid59",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Note-Left2}",
                            '-126px',
                            '96px'
                        ],
                        [
                            "eid113",
                            "left",
                            2500,
                            1000,
                            "linear",
                            "${Note-Left2}",
                            '96px',
                            '-342px'
                        ],
                        [
                            "eid58",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Note-In-Right}",
                            '150px',
                            '125px'
                        ],
                        [
                            "eid112",
                            "top",
                            2500,
                            1000,
                            "linear",
                            "${Note-In-Right}",
                            '125px',
                            '101px'
                        ],
                        [
                            "eid106",
                            "scaleY",
                            2500,
                            1000,
                            "linear",
                            "${Note-Left2}",
                            '1',
                            '3.05'
                        ],
                        [
                            "eid101",
                            "scaleX",
                            2500,
                            1000,
                            "linear",
                            "${Note-in-Left}",
                            '1',
                            '3.05'
                        ],
                        [
                            "eid104",
                            "scaleY",
                            2500,
                            1000,
                            "linear",
                            "${Note-In-Right}",
                            '1',
                            '3.05'
                        ],
                        [
                            "eid123",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '381px',
                            '381px'
                        ],
                        [
                            "eid54",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Note-Right}",
                            '149px',
                            '124px'
                        ],
                        [
                            "eid19",
                            "top",
                            500,
                            1000,
                            "linear",
                            "${Note-Right}",
                            '124px',
                            '130px'
                        ],
                        [
                            "eid108",
                            "top",
                            2500,
                            1000,
                            "linear",
                            "${Note-Right}",
                            '130px',
                            '106px'
                        ],
                        [
                            "eid44",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Note-Right}",
                            '1',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            1468,
                            57,
                            "linear",
                            "${Note-Right}",
                            '1',
                            '0'
                        ],
                        [
                            "eid74",
                            "opacity",
                            2500,
                            0,
                            "linear",
                            "${Note-Right}",
                            '0',
                            '0'
                        ],
                        [
                            "eid122",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid125",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '29px',
                            '29px'
                        ],
                        [
                            "eid57",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Note-In-Right}",
                            '-147px',
                            '75px'
                        ],
                        [
                            "eid111",
                            "left",
                            2500,
                            1000,
                            "linear",
                            "${Note-In-Right}",
                            '75px',
                            '-363px'
                        ],
                        [
                            "eid103",
                            "scaleX",
                            2500,
                            1000,
                            "linear",
                            "${Note-In-Right}",
                            '1',
                            '3.05'
                        ],
                        [
                            "eid100",
                            "scaleY",
                            2500,
                            1000,
                            "linear",
                            "${Note-Right}",
                            '1',
                            '3.05'
                        ],
                        [
                            "eid99",
                            "scaleX",
                            2500,
                            1000,
                            "linear",
                            "${Note-Right}",
                            '1',
                            '3.05'
                        ],
                        [
                            "eid56",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Note-in-Left}",
                            '143px',
                            '118px'
                        ],
                        [
                            "eid45",
                            "top",
                            500,
                            2000,
                            "linear",
                            "${Note-in-Left}",
                            '118px',
                            '129px'
                        ],
                        [
                            "eid110",
                            "top",
                            2500,
                            1000,
                            "linear",
                            "${Note-in-Left}",
                            '129px',
                            '105px'
                        ],
                        [
                            "eid55",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Note-in-Left}",
                            '355px',
                            '577px'
                        ],
                        [
                            "eid5",
                            "left",
                            1500,
                            1000,
                            "linear",
                            "${Note-in-Left}",
                            '577px',
                            '112px'
                        ],
                        [
                            "eid109",
                            "left",
                            2500,
                            1000,
                            "linear",
                            "${Note-in-Left}",
                            '112px',
                            '-326px'
                        ],
                        [
                            "eid105",
                            "scaleX",
                            2500,
                            1000,
                            "linear",
                            "${Note-Left2}",
                            '1',
                            '3.05'
                        ],
                        [
                            "eid102",
                            "scaleY",
                            2500,
                            1000,
                            "linear",
                            "${Note-in-Left}",
                            '1',
                            '3.05'
                        ],
                        [
                            "eid37",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Note-in-Left}",
                            '73px',
                            '73px'
                        ],
                        [
                            "eid6",
                            "width",
                            1500,
                            1000,
                            "linear",
                            "${Note-in-Left}",
                            '73px',
                            '1025px'
                        ],
                        [
                            "eid118",
                            "opacity",
                            2500,
                            1000,
                            "linear",
                            "${Note-Left2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17",
                            "width",
                            500,
                            1000,
                            "linear",
                            "${Note-Right}",
                            '1025px',
                            '32px'
                        ],
                        [
                            "eid73",
                            "width",
                            2500,
                            0,
                            "linear",
                            "${Note-Right}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid119",
                            "opacity",
                            2500,
                            1000,
                            "linear",
                            "${Note-In-Right}",
                            '1',
                            '0'
                        ],
                        [
                            "eid38",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Note-in-Left}",
                            '0',
                            '0'
                        ],
                        [
                            "eid8",
                            "opacity",
                            1468,
                            57,
                            "linear",
                            "${Note-in-Left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid120",
                            "opacity",
                            2500,
                            1000,
                            "linear",
                            "${Note-in-Left}",
                            '1',
                            '0'
                        ],
                        [
                            "eid60",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Note-Left2}",
                            '149px',
                            '124px'
                        ],
                        [
                            "eid114",
                            "top",
                            2500,
                            1000,
                            "linear",
                            "${Note-Left2}",
                            '124px',
                            '100px'
                        ],
                        [
                            "eid53",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Note-Right}",
                            '-126px',
                            '96px'
                        ],
                        [
                            "eid18",
                            "left",
                            500,
                            1000,
                            "linear",
                            "${Note-Right}",
                            '96px',
                            '577px'
                        ],
                        [
                            "eid107",
                            "left",
                            2500,
                            1000,
                            "linear",
                            "${Note-Right}",
                            '577px',
                            '139px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-104834790");
