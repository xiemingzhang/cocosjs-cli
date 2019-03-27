var Layer11 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg04)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：分句欣赏 6/11')

    this.sprs = this.sprites(gameData.layer11_data, true)
  },
  onStart: function() {
    // sound.s11_sound()
    var self = this
    var sprs = this.sprs

    var left = new cc.ProgressTimer(new cc.Sprite(res.chi9))
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

    sprs[1].frame([res.frog2, res.frog1], 0.5, 1)
    sprs[1].runAction(cc.moveTo(0.6, 718, 575))
    this.scheduleOnce(function(){
      sprs[1].frame([res.frog3, res.frog4], 0.5, 0)
    }, 1)

    this.scheduleOnce(function(){
      sprs[2].frame([res.frog2, res.frog1], 0.5, 1)
      sprs[2].runAction(cc.moveTo(0.6, 489, 387))
    }, 0.5)

    this.scheduleOnce(function(){
      sprs[2].frame([res.frog3, res.frog4], 0.5, 0)
    }, 1.5)

    // this.scheduleOnce(function(){
    //   sprs[3].frame([res.frog2, res.frog1], 0.5, 1)
    //   sprs[3].runAction(cc.moveTo(0.6, 357, 198))
    // }, 1)

    // this.scheduleOnce(function(){
    //   sprs[4].frame([res.frog2, res.frog1], 0.5, 1)
    //   sprs[4].runAction(cc.moveTo(0.6, 440, 91))
    // }, 1.5)

    sprs[5].runAction(cc.sequence(
      cc.fadeTo(0.5, 180),
      cc.callFunc(function(){sprs[5].setTexture(res.h2)}),
      cc.fadeTo(0.5, 255)
      // cc.fadeTo(0.5, 180),
      // cc.callFunc(function(){sprs[5].setTexture(res.h3)}),
      // cc.fadeTo(0.5, 255)
    ))

    this.scheduleOnce(function() {
      sprs[1].stopAllActions()
      sprs[2].stopAllActions()
      sprs[3].stopAllActions()
      sprs[4].stopAllActions()
      sprs[1].stopAllActions()
      sprs[2].stopAllActions()
      this.next()
    }, 3)
  }
  // update: function (dt) {

  // }
})

