
let config = {
    type: Phaser.CANVAS,
    width: 900,
    height: 900,
    scene: [Level1],
    physics: {
        default: 'matter',
        matter: {
            gravity: {x: 0, y: 4},
            debug: true,

            enableSleeping: false,
            setBounds: {
                left: true,
                right: true,
                up: false,
                down: false,
            }
        },
    },
    autoCenter: Phaser.Scale.Center,
}
let game = new Phaser.Game(config);
//let keyF,keyR,keyLEFT,keyRIGHT;
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize /3 ;
let keyDOWN,keyUP,keyLEFT,keyRIGHT,keyESC,keyW,keyS,keyA,keyD;
let player;