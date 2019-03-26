
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

    this.createBtn('下一页：物品点数 12/12')
    this.sprs = this.sprites(gameData.layer13_data, true)
  },
  onStart: function() {
    // sound.s13_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].runAction(cc.fadeIn(0.8))
    sprs[1].runAction(cc.fadeIn(0.8))

    sprs[2].frame([res.miya1, res.miya2], 0.5, 0)

    this.scheduleOnce(function() {
      sprs[2].stopAllActions()
      this.next()
    }, 7)
  }
  // update: function (dt) {

  // }
})

