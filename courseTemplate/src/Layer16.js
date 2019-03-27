var Layer16 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg02)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：分句欣赏 11/11')
    this.sprs = this.sprites(gameData.layer16_data, true)
  },
  onStart: function() {
    // sound.s16_sound()
    var self = this
    var sprs = this.sprs

    sprs[2].runAction(cc.fadeIn(0.8))

    this.scheduleOnce(function(){
      sprs[0].runAction(cc.fadeIn(0.8))
      sprs[1].runAction(cc.fadeIn(0.8))
    }, 0.8)

    sprs[3].frame([res.miya4, res.miya3], 0.5 ,0)

    this.scheduleOnce(function(){
      sprs[3].stopAllActions()
      this.next()
    }, 10)
  }
})

