import 'phaser';
import logo from './assets/logo.png'
import invader from './assets/space_invaders.png'

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', logo);
    this.load.image('invader', invader);
}

function create ()
{
    var logo = this.add.image(400, 150, 'logo');
    var invader = this.add.image(400, 150, 'invader');

    this.tweens.add({
        targets: logo,
        y: 300,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });

    this.tweens.add({
      targets: invader,
      y: 300,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    });

}