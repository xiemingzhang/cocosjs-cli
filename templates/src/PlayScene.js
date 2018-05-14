
var startTime = new Date().getTime()
var PlayScene = cc.Scene.extend({
  onEnter: function () {
    this._super()

    /* 飞星层*/
    this.starLayer = new StarLayer(common_data[1])
    this.addChild(this.starLayer, 2, 2)

    // 背景音乐
    sound.gameBgAudio()

    var layer = new Layer01()
    this.addChild(layer)
  }
})
