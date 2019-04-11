var Layer18 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg4)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：课内练习2/4')
    this.sprs = this.sprites(gameData.layer18_data, true)
  },
  onStart: function() {
    // sound.s16_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].runAction(cc.scaleTo(0.8, 1))

    this.scheduleOnce(function() {
      this.next()
    }, 5)
  }
})

