var Layer14 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg04)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：分句欣赏 9/11')

    this.sprs = this.sprites(gameData.layer14_data, true)
  },
  onStart: function() {
    // sound.s14_sound()
    var self = this
    var sprs = this.sprs

    var left = new cc.ProgressTimer(new cc.Sprite(res.chi13))
    left.setAnchorPoint(0, 0)
    left.type = cc.ProgressTimer.TYPE_BAR
    //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
    left.midPoint = cc.p(0, 1)
    //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
    left.barChangeRate = cc.p(0, 1)
    left.x = 817
    left.y = 910
    this.addChild(left, 5)
    left.runAction(cc.progressTo(2, 100))

    sprs[1].frame([res.frog3, res.frog4], 0.5, 0)
    sprs[2].frame([res.frog3, res.frog4], 0.52, 0)
    sprs[3].frame([res.frog3, res.frog4], 0.47, 0)
    sprs[4].frame([res.frog3, res.frog4], 0.55, 0)

    this.scheduleOnce(function() {
      sprs[1].stopAllActions()
      sprs[2].stopAllActions()
      sprs[3].stopAllActions()
      sprs[4].stopAllActions()
      this.next()
    }, 3)
  }
  // update: function (dt) {

  // }
})

