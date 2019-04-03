var Layer05 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg1)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：科学认知3/7')

    this.sprs = this.sprites(gameData.layer05_data, true)
  },
  onStart: function() {
    sound.s5_sound()
    var self = this
    var sprs = this.sprs

    var left = new cc.ProgressTimer(new cc.Sprite(res.wenzi6))
    left.setAnchorPoint(0, 0)
    left.type = cc.ProgressTimer.TYPE_BAR
    //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
    left.midPoint = cc.p(0, 1)
    //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
    left.barChangeRate = cc.p(1, 0)
    left.x = 50
    left.y = 898
    this.addChild(left, 5)
    left.runAction(cc.progressTo(11, 100))

    sprs[0].frame([res.miya4, res.miya3], 0.5, 0)

    this.scheduleOnce(function(){
      sprs[1].enlarge(1.1, 0.6, 1)
    }, 7)

    this.scheduleOnce(function(){
      sprs[2].enlarge(1.1, 0.6, 1)
    }, 8.5)

    this.scheduleOnce(function() {
      sprs[0].stopAllActions()
      this.next()
    }, 12)
  }
  // update: function (dt) {

  // }
})

