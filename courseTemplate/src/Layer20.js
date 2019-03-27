var Layer20 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg02)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    // this.createBtn('下一页：总结结束 1/1')
    this.sprs = this.sprites(gameData.layer20_data, true)
  },
  onStart: function() {
    // sound.s16_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].frame([res.miya5, res.miya6], 0.5, 0)
    sprs[2].runAction(cc.fadeIn(1))

    this.scheduleOnce(function() {
        sprs[0].stopAllActions()
      this.next()
    }, 5)
  }
})

