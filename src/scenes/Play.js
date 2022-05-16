class Level1 extends Phaser.Scene {
    constructor () {
        super("playScene");
    }

    preload() {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('platform', 'assets/sprites/platform.png');
        this.load.image('platformLg', 'assets/sprites/platformLg.png');
    }

    create() {
        // input keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        

        // camera
        this.matter.world.setBounds(0, 0,2000,1600);
        this.cameras.main.setBounds(0, 0,2000,1600);
        
        
        this.player = new Ferret(this, 400, 100, 'block').setScale(.1);
        this.blocky = this.matter.add.stack(500,100,2,1,100,100,function (x, y){
   return Phaser.Physics.Matter.Matter.Bodies.rectangle(x,y,20,20,500)
        }); 
        Phaser.Physics.Matter.Matter.Composite.add(this.blocky,this.player.body);
       Phaser.Physics.Matter.Matter.Composites.chain(this.blocky,0,0,0,0); 
        this.player.sleepThreshold = -1;
        this.P1 = new Platform(this, 400, 700, 'platform', null).setStatic(true);
        this.P2 = new Platform(this, 1500, 400, 'platform', null).setStatic(true);
        this.P2 = new Platform(this, 1100, 800, 'platformLg', null).setStatic(true);
        this.cameras.main.startFollow(this.player);

    }

    update() {
        
        this.player.update();
    }

}