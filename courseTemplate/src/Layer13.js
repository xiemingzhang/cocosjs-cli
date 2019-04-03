
var Layer13 = MyLayer.extend({
  ctor: function() {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    var bg = new cc.Sprite(res.bg3)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：整体与部分12/15')
    this.sprs = this.sprites(gameData.layer13_data, true)
  },
  onStart: function() {
    // sound.s11_sound()
    var self = this
    var sprs = this.sprs

    var left = new cc.ProgressTimer(new cc.Sprite(res.wenzi10))
    left.setAnchorPoint(0, 0)
    left.type = cc.ProgressTimer.TYPE_BAR
    //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
    left.midPoint = cc.p(0, 1)
    //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
    left.barChangeRate = cc.p(1, 0)
    left.x = 821
    left.y = 910
    this.addChild(left, 5)
    left.runAction(cc.progressTo(4, 100))

    sprs[1].frame([res.miya5, res.miya6], 0.5, 0)

    this.scheduleOnce(function() {
      sprs[1].stopAllActions()
      this.next()
    }, 6)
  }
  // update: function (dt) {

  // }
})

