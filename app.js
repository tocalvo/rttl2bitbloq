var note2frequency = {
    'P0': 0,
    'P1': 0,
    'P2': 0,
    'P3': 0,
    'P4': 0,
    'P5': 0,
    'P6': 0,
    'P7': 0,
    'P8': 0,
    'B0': 31,
    'C1': 33,
    'C#1': 35,
    'D1': 37,
    'D#1': 39,
    'E1': 41,
    'F1': 44,
    'F#1': 46,
    'G1': 49,
    'G#1': 52,
    'A1': 55,
    'A#1': 58,
    'B1': 62,
    'C2': 65,
    'C#2': 69,
    'D2': 73,
    'D#2': 78,
    'E2': 82,
    'F2': 87,
    'F#2': 93,
    'G2': 98,
    'G#2': 104,
    'A2': 110,
    'A#2': 117,
    'B2': 123,
    'C3': 131,
    'C#3': 139,
    'D3': 147,
    'D#3': 156,
    'E3': 165,
    'F3': 175,
    'F#3': 185,
    'G3': 196,
    'G#3': 208,
    'A3': 220,
    'A#3': 233,
    'B3': 247,
    'C4': 262,
    'C#4': 277,
    'D4': 294,
    'D#4': 311,
    'E4': 330,
    'F4': 349,
    'F#4': 370,
    'G4': 392,
    'G#4': 415,
    'A4': 440,
    'A#4': 466,
    'B4': 494,
    'C5': 523,
    'C#5': 554,
    'D5': 587,
    'D#5': 622,
    'E5': 659,
    'F5': 698,
    'F#5': 740,
    'G5': 784,
    'G#5': 831,
    'A5': 880,
    'A#5': 932,
    'B5': 988,
    'C6': 1047,
    'C#6': 1109,
    'D6': 1175,
    'D#6': 1245,
    'E6': 1319,
    'F6': 1397,
    'F#6': 1480,
    'G6': 1568,
    'G#6': 1661,
    'A6': 1760,
    'A#6': 1865,
    'B6': 1976,
    'C7': 2093,
    'C#7': 2217,
    'D7': 2349,
    'D#7': 2489,
    'E7': 2637,
    'F7': 2794,
    'F#7': 2960,
    'G7': 3136,
    'G#7': 3322,
    'A7': 3520,
    'A#7': 3729,
    'B7': 3951,
    'C8': 4186,
    'C#8': 4435,
    'D8': 4699,
    'D#8': 4978,
}
var emptyProgram = {
        "description": "",
        "userTags": [],
        "hardwareTags": [
            "buzz",
            "bq ZUM"
        ],
        "compiled": false,
        "imageType": "",
        "videoUrl": "",
        "defaultTheme": "infotab_option_colorTheme",
        "software": {
            "vars": {
                "name": "varsBloq",
                "content": [
                    []
                ],
                "enable": true,
                "childs": []
            },
            "setup": {
                "name": "setupBloq",
                "content": [
                    []
                ],
                "enable": true,
                "childs": []
            },
            "loop": {
                "name": "loopBloq",
                "content": [
                    []
                ],
                "enable": true,
                "childs": []
            }
        },
        "hardware": {
            "components": [{
                "id": "buzz",
                "type": "digital",
                "width": 85,
                "height": 80,
                "pins": {
                    "digital": [
                        "s"
                    ]
                },
                "dragtype": "components",
                "coordinates": {
                    "x": 72.53588516746412,
                    "y": 24.014778325123153
                },
                "category": "buzzers",
                "name": "zumbador_0",
                "connected": true,
                "uid": "18b3bb5e-fb34-46b9-87f0-ac6555dc94e8",
                "pin": {
                    "s": "2"
                },
                "endpoints": {
                    "s": {
                        "type": "digital",
                        "uid": "cc934898-4b0d-43d5-9482-185cea0c8b9b"
                    }
                }
            }],
            "connections": [{
                "pinSourceUid": "cc934898-4b0d-43d5-9482-185cea0c8b9b",
                "pinTargetUid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53bd11"
            }],
            "board": "bq ZUM",
            "robot": null
        },
        "code": "\n/***   Included libraries  ***/\n\n\n/***   Global variables and function definition  ***/\nint zumbador_0 = 2;tone(,0,0);\ndelay(0);\n\n/***   Setup  ***/\nvoid setup(){}\n\n/***   Loop  ***/\nvoid loop(){}",
        "exportedFromBitbloqOffline": true,
        "bitbloqOfflineVersion": "0.0.2",
        "bloqsVersion": "0.1.4"
    }
    //var song = 'PinkPanther:d=4,o=5,b=160:8d#,8e,2p,8f#,8g,2p,8d#,8e,16p,8f#,8g,16p,8c6,8b,16p,8d#,8e,16p,8b,2a#,2p,16a,16g,16e,16d,2e';
    //var song = 'SuperMan:d=4,o=5,b=180:8g,8g,8g,c6,8c6,2g6,8p,8g6,8a.6,16g6,8f6,1g6,8p,8g,8g,8g,c6,8c6,2g6,8p,8g6,8a.6,16g6,8f6,8a6,2g.6,p,8c6,8c6,8c6,2b.6,g.6,8c6,8c6,8c6,2b.6,g.6,8c6,8c6,8c6,8b6,8a6,8b6,2c7,8c6,8c6,8c6,8c6,8c6,2c.6';
    //var song = 'Flinston:d=4,o=5,b=40:32p,16f6,16a#,16a#6,32g6,16f6,16a#.,16f6,32d#6,32d6,32d6,32d#6,32f6,16a#,16c6,d6,16f6,16a#.,16a#6,32g6,16f6,16a#.,32f6,32f6,32d#6,32d6,32d6,32d#6,32f6,16a#,16c6,a#,16a6,16d.6,16a#6,32a6,32a6,32g6,32f#6,32a6,8g6,16g6,16c.6,32a6,32a6,32g6,32g6,32f6,32e6,32g6,8f6,16f6,16a#.,16a#6,32g6,16f6,16a#.,16f6,32d#6,32d6,32d6,32d#6,32f6,16a#,16c.6,32d6,32d#6,32f6,16a#,16c.6,32d6,32d#6,32f6,16a#6,16c7,8a#.6';
    //var song = 'Macarena:d=4,o=5,b=180:f,8f,8f,f,8f,8f,8f,8f,8f,8f,8f,8a,8c,8c,f,8f,8f,f,8f,8f,8f,8f,8f,8f,8d,8c,p,f,8f,8f,f,8f,8f,8f,8f,8f,8f,8f,8a,p,2c.6,a,8c6,8a,8f,p,2p';
var song = 'Indiana:d=4,o=5,b=250:e,8p,8f,8g,8p,1c6,8p.,d,8p,8e,1f,p.,g,8p,8a,8b,8p,1f6,p,a,8p,8b,2c6,2d6,2e6,e,8p,8f,8g,8p,1c6,p,d6,8p,8e6,1f.6,g,8p,8g,e.6,8p,d6,8p,8g,e.6,8p,d6,8p,8g,f.6,8p,e6,8p,8d6,2c6';




var decodedSong = song.split(':');

console.log(decodedSong[0]);
console.log(decodedSong[1]);
console.log(decodedSong[2]);
var defaultValues = decodedSong[1].split(',');

var defaultDuration = defaultValues[0].split('=')[1];
var defaultOctave = defaultValues[1].split('=')[1];
var beatsPerSeconds = defaultValues[2].split('=')[1];

var songNotes = decodedSong[2].split(',');
var rttyRegExp = /(\d*)(([a-g]|p)#*)(\.*)(\d*)/;


console.log('defaultDuration = ' + defaultDuration);
console.log('defaultOctave = ' + defaultOctave);
console.log('beatsPerSeconds = ' + beatsPerSeconds);

var match = null,
    note = null,
    seconds = null;
for (var i = 0; i < songNotes.length; i++) {
    console.log('----------------');
    match = rttyRegExp.exec(songNotes[i]);
    console.log(songNotes[i])
    console.log('parts:');
    console.log(match[1]);
    console.log(match[2]);
    console.log(match[4]);
    console.log(match[5]);
    console.log(match[2].toUpperCase() + (match[5] || defaultOctave));
    note = note2frequency[match[2].toUpperCase() + (match[5] || defaultOctave)];
    seconds = bpm2Miliseconds(beatsPerSeconds, (match[1] || defaultDuration), match[4]);
    console.log(seconds + ' ' + note);
    emptyProgram.software.setup.childs.push(buildBuzzerBloq(note, seconds));
};

var fs = require('fs');
fs.writeFileSync('/Users/tom/song.json', JSON.stringify(emptyProgram));

function bpm2Miliseconds(bpm, duration, dot) {
    var miliseconds = 60000 / bpm;
    miliseconds = miliseconds / duration * 4;
    if (dot) {
        miliseconds = miliseconds + (miliseconds / 2);
    }
    return miliseconds;
}

function buildBuzzerBloq(note, seconds) {
    var bitbloqBuzzerBloq = {
        name: 'buzzerAdvanced',
        content: [
            [{
                "alias": "bloqInput",
                "bloqInputId": "BUZZER",
                "value": {
                    "name": "hwVariable",
                    "content": [
                        [{ "alias": "dynamicDropdown", "id": "COMPONENT", "value": "zumbador_0" }]
                    ],
                    "enable": true
                }
            }, {
                alias: 'bloqInput',
                bloqInputId: 'NOTE',
                value: {
                    name: 'number',
                    content: [
                        [{
                            alias: 'numberInput',
                            id: 'VALUE',
                            value: note.toString()
                        }]
                    ],
                    enable: true
                }
            }, {
                alias: 'bloqInput',
                bloqInputId: 'SECONDS',
                value: {
                    name: 'number',
                    content: [
                        [{
                            alias: 'numberInput',
                            id: 'VALUE',
                            value: seconds.toString()
                        }]
                    ],
                    enable: true
                }
            }]
        ],
        enable: true
    };
    return bitbloqBuzzerBloq;
}