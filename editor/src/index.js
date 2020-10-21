import React from 'react';
import ReactDOM from 'react-dom';

import EditorLoader from './EditorLoader';

InitEditor('editorPlaceholder',
    {
        "fragments": [
            {
                "pages": [
                    "1603145189233"
                ],
                "pageAreas": {
                    "1603145189233": [
                        {
                            "x": 139,
                            "y": 295,
                            "width": 1479,
                            "height": 455
                        },
                        {
                            "x": 132,
                            "y": 782,
                            "width": 503,
                            "height": 384
                        }
                    ]
                },
                "start": "00:1.1",
                "end": "00:21.3"
            },
            {
                "pages": [
                    "1603145189233"
                ],
                "pageAreas": {
                    "1603145189233": [
                        {
                            "x": 646,
                            "y": 829,
                            "width": 941,
                            "height": 343
                        },
                        {
                            "x": 125,
                            "y": 1217,
                            "width": 333,
                            "height": 357
                        }
                    ]
                },
                "start": "00:21.3",
                "end": "00:37.3"
            },
            {
                "pages": [
                    "1603145189233"
                ],
                "pageAreas": {
                    "1603145189233": [
                        {
                            "x": 459,
                            "y": 1254,
                            "width": 1088,
                            "height": 346
                        }
                    ]
                },
                "start": "00:37.3",
                "end": "00:53.7"
            },
            {
                "pages": [
                    "1603145189233"
                ],
                "pageAreas": {
                    "1603145189233": [
                        {
                            "x": 1540,
                            "y": 1275,
                            "width": 71,
                            "height": 285
                        },
                        {
                            "x": 136,
                            "y": 1672,
                            "width": 911,
                            "height": 401
                        }
                    ]
                },
                "start": "00:53.7",
                "end": "01:5.3"
            },
            {
                "pages": [
                    "1603145189233",
                    "1603145194000"
                ],
                "pageAreas": {
                    "1603145189233": [
                        {
                            "x": 1040,
                            "y": 1706,
                            "width": 591,
                            "height": 336
                        }
                    ],
                    "1603145194000": [
                        {
                            "x": 146,
                            "y": 146,
                            "width": 1281,
                            "height": 353
                        }
                    ]
                },
                "start": "01:5.3",
                "end": "01:29.6"
            },
            {
                "pages": [
                    "1603145194000"
                ],
                "pageAreas": {
                    "1603145194000": [
                        {
                            "x": 1421,
                            "y": 166,
                            "width": 200,
                            "height": 367
                        },
                        {
                            "x": 108,
                            "y": 537,
                            "width": 1509,
                            "height": 384
                        }
                    ]
                },
                "start": "01:29.6",
                "end": "01:54.1"
            },
            {
                "pages": [
                    "1603145194000"
                ],
                "pageAreas": {
                    "1603145194000": [
                        {
                            "x": 71,
                            "y": 958,
                            "width": 1547,
                            "height": 346
                        },
                        {
                            "x": 105,
                            "y": 1319,
                            "width": 1496,
                            "height": 428
                        }
                    ]
                },
                "start": "01:54.1",
                "end": "02:34.8"
            },
            {
                "pages": [
                    "1603145194000"
                ],
                "pageAreas": {
                    "1603145194000": [
                        {
                            "x": 108,
                            "y": 1706,
                            "width": 1509,
                            "height": 428
                        }
                    ]
                },
                "start": "02:34.0",
                "end": "03:6.5"
            }
        ],
        "pages": [
            {
                "url": "http://localhost:3000/Solitude-1-censored.jpg",
                "id": "1603145189233"
            },
            {
                "url": "http://localhost:3000/Solitude-2-censored.jpg",
                "id": "1603145194000"
            }
        ],
        "videoUrl": "https://www.youtube.com/watch?v=hj1vJ-cNfaE"
    }
);


function InitEditor($element, data) {
    const {fragments, pages, videoUrl, videoTitle} = data;

    ReactDOM.render(
        <React.StrictMode>
          <EditorLoader fragments={fragments || []} pages={pages || []} videoUrl={videoUrl} />
        </React.StrictMode>,
        document.getElementById($element)
    );
}
