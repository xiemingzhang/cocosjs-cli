var Layer03 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg4)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：科学认知1/7')

    this.sprs = this.sprites(gameData.layer03_data, true)
  },
  onStart: function() {
    sound.s3_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].frame([res.miya1, res.miya2], 0.5, 0)

    this.scheduleOnce(function(){
      sprs[6].runAction(cc.scaleTo(0.5, 1.5))
    }, 8)

    this.scheduleOnce(function(){
      sprs[6].shake(10, 0.2, 2)
    }, 9)

    this.scheduleOnce(function() {
      sprs[0].stopAllActions()
      this.next()
    }, 11)
  }
})

