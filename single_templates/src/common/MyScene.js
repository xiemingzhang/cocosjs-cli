var MyScene = cc.Scene.extend({
  // 实例化 new时调用
  // ctor: function(){
  //   this._super()
  // },
  onEnter: function () {
    this._super()
    // cc.log("onEnter");
    this._pixels = []
    // this.addTouchEventListenser();
  },
  onExit: function () {
    this._super()
    // cc.log("onExit");
  },
  sprites: function (sp) {
    var sprite = []
    for (var i in sp) {
      sprite[i] = new MySprite(sp[i].sprurl)
      sprite[i].setPosition(sp[i].sp_X * fix, sp[i].sp_Y * fix)
      sprite[i].setAnchorPoint(sp[i].chorPoint[0], sp[i].chorPoint[1])
      sprite[i].setOpacity(sp[i].opacity)
      sprite[i].setScale(sp[i].Scale / 3 * fix)
      sprite[i].setRotation(sp[i].rotation)
      sprite[i].data = sp[i]
      sprite[i].id = sp[i].id
      sprite[i].zindex = sp[i].zindex
      this.addChild(sprite[i], sprite[i].zindex, sprite[i].id)
    }
    return sprite
  },
  wrong: function(){
    sound.wrongAudio()
    this.starLayer.wrongStar()
  },
  finish: function () {
    // updata.is_finish = 1
    this.scheduleOnce(function(){
      sound.stopAudio()
      sound.stopAllEffects()
      sound.winAudio()
      this.starLayer.gameEnd(common_data[0].obtain)
    }.bind(this), 1.8)
  },
  dataRefresh: function () {
    var sum = 0
    common_data.slice(1).forEach(function (value, index, arr) {
      sum += value.obtain
    })

    common_data[0].obtain = sum
    // cc.log(common_data)
  }
})
