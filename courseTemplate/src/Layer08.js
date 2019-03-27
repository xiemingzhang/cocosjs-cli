var Layer08 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.btn = this.createBtn('下一页：科学认知 1/5')

    this.sprs = this.sprites(gameData.layer08_data, true)
    // this.sprs1 = this.sprites(layer08_data[1])
  },
  onStart: function() {
    // sound.s8_sound()
    var self = this
    var sprs = this.sprs

    sprs[2].runAction(cc.fadeIn(0.8))

    this.scheduleOnce(function() {
      sprs[0].runAction(cc.fadeIn(0.8))
      sprs[1].runAction(cc.fadeIn(0.8))
    }, 0.8)

    sprs[3].frame([res.miya5, res.miya6], 0.5, 0)

    this.scheduleOnce(function() {
      sprs[3].stopAllActions()
      this.next()
    }, 10)
  }
  // update: function (dt) {

  // }
})

