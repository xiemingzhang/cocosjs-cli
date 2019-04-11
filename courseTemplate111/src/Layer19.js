var Layer19 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg4)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：课内练习4/4')
    this.sprs = this.sprites(gameData.layer19_data, true)
  },
  onStart: function() {
    // sound.s16_sound()
    var self = this
    var sprs = this.sprs

    // sprs[0].runAction(cc.scaleTo(0.8, 1))

    this.scheduleOnce(function() {
      var left = new cc.ProgressTimer(new cc.Sprite(res.xian1))
      left.setAnchorPoint(0, 0)
      left.type = cc.ProgressTimer.TYPE_BAR
      //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
      left.midPoint = cc.p(0, 1)
      //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
      left.barChangeRate = cc.p(1, 0)
      left.x = 437
      left.y = 210
      this.addChild(left, 5)
      left.runAction(cc.progressTo(2, 100))
    }, 1)

    this.scheduleOnce(function() {
      var left = new cc.ProgressTimer(new cc.Sprite(res.xian2))
      left.setAnchorPoint(0, 0)
      left.type = cc.ProgressTimer.TYPE_BAR
      //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
      left.midPoint = cc.p(1, 0)
      //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
      left.barChangeRate = cc.p(1, 0)
      left.x = 435
      left.y = 284
      this.addChild(left, 5)
      left.runAction(cc.progressTo(1.5, 100))
    }, 3)

    this.scheduleOnce(function() {
      var left = new cc.ProgressTimer(new cc.Sprite(res.xian3))
      left.setAnchorPoint(0, 0)
      left.type = cc.ProgressTimer.TYPE_BAR
      //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
      left.midPoint = cc.p(1, 0)
      //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
      left.barChangeRate = cc.p(1, 0)
      left.x = 995
      left.y = 264
      this.addChild(left, 5)
      left.runAction(cc.progressTo(1.5, 100))
    }, 4.5)

    this.scheduleOnce(function() {
      this.next()
    }, 7)
  }
})

