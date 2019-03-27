var Layer06 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.btn = this.createBtn('下一页：认识事物 3/4')
    this.btn.setLocalZOrder(12)

    this.sprs = this.sprites(gameData.layer06_data, true)
  },
  onStart: function() {
    // sound.s6_sound()
    var self = this
    var sprs = this.sprs

    sprs[5].frame([res.miya1, res.miya2, res.miya3], 0.35, 0)
    sprs[0].runAction(cc.fadeIn(0.8))

    this.scheduleOnce(function() {
      sprs[1].flash(0.5, 1)
    }, 2)

    this.scheduleOnce(function() {
      sprs[2].flash(0.5, 1)
    }, 3)

    this.scheduleOnce(function() {
      sprs[3].flash(0.5, 1)
    }, 3.5)

    this.scheduleOnce(function() {
      sprs[4].flash(0.5, 1)
    }, 4.5)

    this.scheduleOnce(function() {
      sprs[5].stopAllActions()
      this.next()
    }, 12)
  }
  // update: function (dt) {

  // }
})

