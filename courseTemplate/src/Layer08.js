var Layer08 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg04)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：分句欣赏 3/11')

    this.sprs = this.sprites(gameData.layer08_data, true)
    // this.sprs1 = this.sprites(layer08_data[1])
  },
  onStart: function() {
    // sound.s8_sound()
    var self = this
    var sprs = this.sprs

    var left = new cc.ProgressTimer(new cc.Sprite(res.chi4))
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

    sprs[1].runAction(cc.fadeIn(0.7))
    sprs[1].runAction(cc.moveBy(0.45, -50, 0))
    sprs[1].frame([res.frog2, res.frog1], 0.5, 1)

    this.scheduleOnce(function() {
      sprs[2].runAction(cc.fadeIn(0.7))
      sprs[2].runAction(cc.moveBy(0.45, -50, 0))
      sprs[2].frame([res.frog2, res.frog1], 0.5, 1)
    }, 1)

    this.scheduleOnce(function() {
      sprs[3].runAction(cc.fadeIn(0.7))
      sprs[3].runAction(cc.moveBy(0.45, -50, 0))
      sprs[3].frame([res.frog2, res.frog1], 0.5, 1)
    }, 2)

    this.scheduleOnce(function() {
      sprs[4].runAction(cc.fadeIn(0.7))
      sprs[4].runAction(cc.moveBy(0.45, -50, 0))
      sprs[4].frame([res.frog2, res.frog1], 0.5, 1)
    }, 3)

    this.scheduleOnce(function() {
      this.next()
    }, 4)
  }
  // update: function (dt) {

  // }
})

