BasicGame= {};

BasicGame.preloader= function (Game)
{this.backround=null;

this.ready=false}

BasicGame.preloader.prototype={
preload:function()
{

Game.load.tileMap('level1' 'assets/sprites/level1.json',null,Phaser.TileMap.TILED_JSON);
Game.load.image('tiles-1','assets/sprites/tiles-1.png');
Game.load.spritesheet('Deckard','assets/sprites/dude.png',32,48);
Game.load.spritesheet('droid', 'assets/sprites/droid.png',32,32);
Game.load.image('starSmall', 'assets/sprites/star.png');
Game.load.image('starBig','assets/sprites/star2.png');
Game.load.image('backround','assets/sprites/backround2');
}
create:function()
{
this.state.start('Game');
}
}
