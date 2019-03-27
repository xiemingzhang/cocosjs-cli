var Layer05 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg05)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：分句欣赏 1/11')

    this.sprs = this.sprites(gameData.layer05_data, true)
  },
  onStart: function() {
    // sound.s5_sound()
    var self = this
    var sprs = this.sprs

    sprs[1].frame([res.miya2, res.miya1], 0.5, 0)

    var left = new cc.ProgressTimer(new cc.Sprite(res.wen1))
    left.setAnchorPoint(0, 0)
    left.type = cc.ProgressTimer.TYPE_BAR
    //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
    left.midPoint = cc.p(0, 1)
    //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
    left.barChangeRate = cc.p(0, 1)
    left.x = 273
    left.y = 169
    this.addChild(left, 5)
    left.runAction(cc.progressTo(26, 100))

    this.scheduleOnce(function() {
      sprs[1].stopAllActions()
      this.next()
    }, 30)
  }
  // update: function (dt) {

  // }
})

