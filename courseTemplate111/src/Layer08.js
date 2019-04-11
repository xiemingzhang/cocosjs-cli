var Layer08 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg3)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：科学认知6/7')

    this.sprs = this.sprites(gameData.layer08_data, true)
    // this.sprs1 = this.sprites(layer08_data[1])
  },
  onStart: function() {
    sound.s8_sound()
    var self = this
    var sprs = this.sprs

    var left = new cc.ProgressTimer(new cc.Sprite(res.wenzi7))
    left.setAnchorPoint(0, 0)
    left.type = cc.ProgressTimer.TYPE_BAR
    //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
    left.midPoint = cc.p(0, 1)
    //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
    left.barChangeRate = cc.p(1, 0)
    left.x = 267
    left.y = 918
    this.addChild(left, 5)
    left.runAction(cc.progressTo(9, 100))

    this.scheduleOnce(function(){
      var left = new cc.ProgressTimer(new cc.Sprite(res.wenzi8))
      left.setAnchorPoint(0, 0)
      left.type = cc.ProgressTimer.TYPE_BAR
      //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
      left.midPoint = cc.p(0, 1)
      //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
      left.barChangeRate = cc.p(1, 0)
      left.x = 167
      left.y = 848
      this.addChild(left, 5)
      left.runAction(cc.progressTo(6.5, 100))
    }, 11)

    this.scheduleOnce(function(){
      this.next()
    }, 18.5)
  }
  // update: function (dt) {

  // }
})

