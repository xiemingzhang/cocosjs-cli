var Layer05 = MyLayer.extend({
  ctor: function() {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    var bg = new cc.Sprite(res.bg02)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：完整欣赏 3/3')

    this.sprs = this.sprites(layer05_data[0], true)
  },
  onStart: function() {
    sound.s5_sound()
    var self = this
    var sprs = this.sprs

    sprs[1].frame([res.人04, res.人004], 0.5, 0)

    this.scheduleOnce(function() {
      sprs[1].stopAllActions()
      // sprs[1].setTexture(res.米亚B01)
      this.next()
    }, 12)
  }
  // update: function (dt) {

  // }
})

