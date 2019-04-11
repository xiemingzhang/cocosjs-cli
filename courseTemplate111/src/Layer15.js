
var Layer15 = MyLayer.extend({
  onEnter: function () {
    this._super()
    var size = cc.winSize
    var self = this
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg1)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：整体与部分14/15')
    this.sprs = this.sprites(gameData.layer15_data, true)
  },
  onStart: function(){
    // sound.s15_sound()
    var self = this
    var sprs = this.sprs

    var left = new cc.ProgressTimer(new cc.Sprite(res.wenzi14))
    left.setAnchorPoint(0, 0)
    left.type = cc.ProgressTimer.TYPE_BAR
    //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
    left.midPoint = cc.p(0, 1)
    //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
    left.barChangeRate = cc.p(1, 0)
    left.x = 575
    left.y = 910
    this.addChild(left, 5)
    left.runAction(cc.progressTo(6, 100))

    sprs[0].frame([res.miya1, res.miya2], 0.5, 0)

    this.scheduleOnce(function() {
      sprs[0].stopAllActions()
      this.next()
    }, 7)
  }
  // update: function (dt) {

  // }
})

