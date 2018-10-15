
var StartScene = cc.Scene.extend({
  size: cc.winSize,
  onEnter: function () {
    this._super()
    sound.gameBgAudio()

    cc.director.runScene(new PlayScene())
  }
})
