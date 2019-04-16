var Layer05 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg3)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[4])

    this.sprs = this.sprites(gameData.layer05, true)
  },
  onStart: function(num) {
    // sound.s5_sound()
    var self = this
    var sprs = this.sprs

    this.scheduleOnce(function() {
      // sprs[0].stopAllActions()
      this.next()
    }, 2)
  }
  // update: function (dt) {

  // }
})

