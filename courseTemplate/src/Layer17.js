var Layer17 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg4)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：课内练习1/4')
    this.sprs = this.sprites(gameData.layer17_data, true)
  },
  onStart: function() {
    // sound.s16_sound()
    var self = this
    var sprs = this.sprs

    this.scheduleOnce(function(){
      sprs[2].runAction(cc.moveTo(0.8, 206, 99))
    }, 1)
    this.scheduleOnce(function(){
      sprs[3].runAction(cc.moveTo(0.8, 623.7, 480))
    }, 2)

    this.scheduleOnce(function(){
      this.next()
    }, 3)
  }
})

