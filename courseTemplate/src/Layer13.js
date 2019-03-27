
var Layer13 = MyLayer.extend({
  ctor: function() {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.btn = this.createBtn('下一页：科学认知 4/5')
    this.sprs = this.sprites(gameData.layer12_data, true)
  },
  onStart: function() {
    // sound.s13_sound()
    var self = this
    var sprs = this.sprs

    this.scheduleOnce(function() {
      this.next()
    }, 2)
  }
  // update: function (dt) {

  // }
})

