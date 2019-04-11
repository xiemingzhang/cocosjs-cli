var Layer14 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：整体与部分13/15')

    this.sprs = this.sprites(gameData.layer14_data, true)
  },
  onStart: function() {
    // sound.s14_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].runAction(cc.moveBy(0.5, 0, -200))

    this.scheduleOnce(function() {
      this.next()
    }, 5)
  }
  // update: function (dt) {

  // }
})

