var Layer02 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg1)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[1])

    this.sprs = this.sprites(gameData.layer02, true)
  },
  onStart: function(num) {
    sound.s2_sound()
    var self = this
    var sprs = this.sprs

    sprs[1].frame([res.miya1, res.miya2], 0.5, 0)
    sprs[0].runAction(cc.scaleTo(1, 1))

    this.scheduleOnce(function() {
      sprs[1].stopAllActions()
      this.next()
    }, 16)
  }
  // update: function (dt) {

  // }
})

