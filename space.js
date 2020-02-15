//python -m http.server 8000
var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 1200,
    backgroundColor: '#00000',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var game = new Phaser.Game(config);

var getTime;

var is_immortal = false;

function preload ()
{

    this.load.image('ship', 'assets/ship.png');
    this.load.image('asteroid', 'assets/bomb.png');
    this.load.image('bg', 'assets/spacebg.jpg');
    this.load.image('powerUp', 'assets/food.png')
    this.load.image('powered', 'assets/spike.png')
    this.load.image('gameOver','assets/over.png')
}

function create ()
{



    this.add.image(400, 300, 'bg');
   

    this.leftKey = this.input.keyboard.addKey('LEFT');
    this.rightKey = this.input.keyboard.addKey('RIGHT');
    this.rightKey = this.input.keyboard.addKey('UP');
    this.rightKey = this.input.keyboard.addKey('DOWN');
    this.spaceKey = this.input.keyboard.addKey('SPACE');

    this.gameOver = this.add.image(400, -500, 'gameOver');
    this.ship1 = this.add.image(config.width / 2, config.height / 2 + 20, "ship");
    this.ship1.x = config.width / 2;
    this.ship1.y = config.height - 40;

    

    this.randomX = Phaser.Math.Between(-10, 0);
    this.asteroid = this.add.image(140, 50, 'asteroid');
    this.asteroid1 = this.add.image(400, 10, 'asteroid');

    this.powerUp = this.add.image(400, -1700, 'powerUp');

}




function update (time)
{   
   // console.log(time)
    //randomizer Speed
    this.randomS = Phaser.Math.Between(2, config.width);
    this.randomS1 = Phaser.Math.Between(2, config.width);
    this.randomS2 = Phaser.Math.Between(2, config.width);
    this.randomS3 = Phaser.Math.Between(2, config.width);

    //randomizer X pos
    this.randomX = Phaser.Math.Between(0, config.width);

    //asteroid0
    if (this.asteroid.y > config.height + 40) {
        this.asteroid.y = -20;
        this.asteroid.x = this.randomX;
    } else if (this.asteroid.y < config.height + 41) {
        this.asteroid.y += 4;
    }

    //powerUp


    if (this.powerUp.y > config.height + 40) {
        this.powerUp.y = -1700;
        this.powerUp.x = this.randomX;
    } else if (this.powerUp.y < config.height + 41) {
        this.powerUp.y += 4;
    }


    
    //asteroid1
    if (this.asteroid1.y > config.height + 40) {
        this.asteroid1.y = -20;
        this.asteroid1.x = this.randomX;
    } else if (this.asteroid1.y < config.height + 41) {
        this.asteroid1.y += 4;
    }
    


    // //hit
    if (is_immortal == false) {
        if (this.ship1.x < this.asteroid.x + this.asteroid.width &&
            this.ship1.x + this.ship1.width > this.asteroid.x &&
            this.ship1.y < this.asteroid.y + this.asteroid.height &&
            this.ship1.y + this.ship1.height > this.asteroid.y){
            
                this.ship1.destroy(true);
    
                if(this.gameOver.y >= 300){
        
                    this.gameOver.y = 300;
                    this.ship1.x = 10000000;
    
                }
                else{
                    this.gameOver.y += 100;
                }
                
    
    
                console.log("Hit!");
    
                
            }
            else if (this.ship1.x < this.asteroid1.x + this.asteroid1.width &&
                this.ship1.x + this.ship1.width > this.asteroid1.x &&
                this.ship1.y < this.asteroid1.y + this.asteroid1.height &&
                this.ship1.y + this.ship1.height > this.asteroid1.y){
                   
                    this.ship1.destroy(true);
                       
    
    
                    if(this.gameOver.y >= 300){
        
                        this.gameOver.y = 300;
                        this.ship1.x = 10000000;
        
                    }
                    else{
                        this.gameOver.y += 100;
                    }
                    
                }
    }
    
    
    //poweredUp


    
    if (this.ship1.x < this.powerUp.x + this.powerUp.width &&
        this.ship1.x + this.ship1.width > this.powerUp.x &&
        this.ship1.y < this.powerUp.y + this.powerUp.height &&
        this.ship1.y + this.ship1.height > this.powerUp.y){
            
            getTime = time;


            addedTime = getTime + 5000;
            //console.log('This is the time [ ' + time + ' ] | This is added time [ ' + addedTime + ' ]' );
            console.log(typeof(time));
            console.log(typeof(addedTime));
            this.ship1.setTexture('powered');
            is_immortal = true;

            if (is_immortal == true) {
                
                if(time == addedTime){

                    is_immortal = false;
                    this.ship1.setTexture('ship');
                    console.log("akshfvs f");

                }

    
           
            console.log("nice!");

            } else if (is_immortal == false) {
                if (this.ship1.x < this.asteroid.x + this.asteroid.width &&
        this.ship1.x + this.ship1.width > this.asteroid.x &&
        this.ship1.y < this.asteroid.y + this.asteroid.height &&
        this.ship1.y + this.ship1.height > this.asteroid.y){
        
            this.ship1.destroy(true);

            if(this.gameOver.y >= 300){
    
                this.gameOver.y = 300;
                this.ship1.x = 10000000;

            }
            else{
                this.gameOver.y += 1;
            }
            


            console.log("Hit!");

            
        }
        else if (this.ship1.x < this.asteroid1.x + this.asteroid1.width &&
            this.ship1.x + this.ship1.width > this.asteroid1.x &&
            this.ship1.y < this.asteroid1.y + this.asteroid1.height &&
            this.ship1.y + this.ship1.height > this.asteroid1.y){
               
                this.ship1.destroy(true);
                   


                if(this.gameOver.y >= 300){
    
                    this.gameOver.y = 300;
                    this.ship1.x = 10000000;
    
                }
                else{
                    this.gameOver.y += 100;
                }
                
            }
            }
            

            
        }



    if(this.leftKey.isDown && this.ship1.x < 40) {
    } else if(this.leftKey.isDown) {
      this.ship1.x -= 5;
    }
    if(this.rightKey.isDown && this.ship1.x > config.width - 40) {
    } else if(this.rightKey.isDown) {
      this.ship1.x += 5;
    }
    if(this.rightKey.isUp && this.ship1.y > config.height - 40) {
    } else if(this.rightKey.isDown) {
      this.ship1.y -= 5;
    }
    
     if(this.spaceKey.isDown && this.ship1.x > config.width - 40) {
    } else if(this.spaceKey.isDown) {
      this.asteroid.y += 20;
      this.asteroid1.y += 20;
    }
}