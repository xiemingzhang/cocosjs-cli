var Layer14 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.btn = this.createBtn('下一页：科学认知 5/5')
    this.btn.setLocalZOrder(12)

    this.sprs = this.sprites(gameData.layer12_data, true)
  },
  onStart: function() {
    // sound.s14_sound()
    var self = this
    var sprs = this.sprs

    this.scheduleOnce(function() {
      this.next()
    }, 2)
  }
  // update: function (dt) {

  // }
})

