var Layer02 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg3)
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

    sprs[0].runAction(cc.sequence(
      cc.moveBy(0.3, 0, -300),
      cc.jumpBy(0.3, cc.p(0, 0), 35, 2)
    ))

    this.scheduleOnce(function() {
      this.next()
    }, 5)
  }
  // update: function (dt) {

  // }
})

