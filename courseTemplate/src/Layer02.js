var Layer02 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg02)
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

    sprs[1].frame([res.miya4, res.miya3], 0.5, 0)

    this.scheduleOnce(function() {
      sprs[2].enlarge(1.1, 0.5, 1)
    }, 13)

    this.scheduleOnce(function() {
      sprs[3].enlarge(1.1, 0.5, 1)
    }, 14)

    this.scheduleOnce(function() {
      sprs[4].enlarge(1.1, 0.5, 1)
    }, 15)

    this.scheduleOnce(function() {
      sprs[5].enlarge(1.1, 0.5, 1)
    }, 16)

    this.scheduleOnce(function() {
      sprs[1].stopAllActions()
      this.next()
    }, 17)
  }
  // update: function (dt) {

  // }
})

