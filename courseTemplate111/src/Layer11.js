var Layer11 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg3)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    // this.createBtn('下一页：整体与部分10/15')

    this.sprs = this.sprites(gameData.layer11_data, true)
  },
  onStart: function() {
    sound.s11_sound()
    var self = this
    var sprs = this.sprs

    sprs[1].frame([res.miya1, res.miya2], 0.5, 0)

    sprs[0].runAction(cc.scaleTo(1, 1))

    this.scheduleOnce(function() {
      sprs[1].stopAllActions()
      this.next()
    }, 21)
  }
  // update: function (dt) {

  // }
})

