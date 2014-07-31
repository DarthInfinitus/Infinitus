BasicGame.Game=function (game)
{

var map;
var tileset;
var player;
var facing= 'left';
var jumpTimer=0;
var cursors;
var jumpButton;
var bg;
};

BasicGame.Game.prototype=
{create:function()
{this.physics.startSystem(Phaser.Physics.ARCADE);

this.stage.backroundColor='#000000'

this.bg=game.add.tileSprite(0,0,800,600,'backround');}}