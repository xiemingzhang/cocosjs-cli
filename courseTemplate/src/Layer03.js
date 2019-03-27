var Layer03 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    // this.createBtn('下一页：认识事物 2/7')

    this.sprs = this.sprites(gameData.layer03_data, true)
  },
  onStart: function() {
    // sound.s3_sound()
    var self = this
    var sprs = this.sprs

    sprs.forEach(function(item) {
      item.runAction(cc.sequence(
        cc.scaleBy(0.8, 1.05),
        cc.scaleBy(0.8, 1 / 1.05)
      ).repeatForever())
    })

    this.scheduleOnce(function() {
      // sprs[0].stopAllActions()
      this.next()
    }, 5)
  }
  // update: function (dt) {

  // }
})

