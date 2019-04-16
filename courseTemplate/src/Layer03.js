var Layer03 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg3)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[2])

    this.sprs = this.sprites(gameData.layer03, true)
  },
  onStart: function(num) {
    sound.s3_sound()
    var self = this
    var sprs = this.sprs

    sprs[3].frame([res.huomiao, res.huomiao2], 0.5, 0)

    this.scheduleOnce(function(){
      sprs[3].stopAllActions()
      sprs[3].removeFromParent()
      this.unschedule(this.reqi)
      sprs[6].opacity = 255
      sprs[6].frame([res.huomiao, res.huomiao2], 0.5, 0)
    }, 6)

    this.scheduleOnce(function(){
      this.schedule(this.piao, 1.5)
    }, 9)

    this.schedule(this.reqi, 1.5)

    this.scheduleOnce(function() {
      this.unscheduleAllCallbacks()
      this.next()
    }, 12)
  },
  reqi: function() {
    var reqi = new MySprite(res.reqi)
    reqi.setPosition(cc.p(this.getRandomNum(355, 665), this.getRandomNum(420, 480)))
    reqi.opacity = 0
    this.addChild(reqi, 5)

    reqi.runAction(cc.moveBy(1, 0, 50))

    reqi.runAction(cc.sequence(
      cc.fadeIn(0.8),
      cc.callFunc(function() {reqi.runAction(cc.sequence(cc.fadeOut(0.2), cc.callFunc(function() {reqi.removeFromParent()})))})
    ))

    this.scheduleOnce(function() {
      var reqi1 = new MySprite(res.reqi)
      reqi1.setPosition(cc.p(this.getRandomNum(355, 665), this.getRandomNum(420, 480)))
      reqi1.opacity = 0
      this.addChild(reqi1, 5)

      reqi1.runAction(cc.moveBy(1, 0, 50))

      reqi1.runAction(cc.sequence(
        cc.fadeIn(0.8),
        cc.callFunc(function() {reqi1.runAction(cc.sequence(cc.fadeOut(0.2), cc.callFunc(function() {reqi1.removeFromParent()})))})
      ))
    }, cc.random0To1() * 0.3)
  },
  piao: function() {
    var reqi = new MySprite(res.piao)
    reqi.setPosition(cc.p(this.getRandomNum(355 + 800, 665 + 800), this.getRandomNum(430, 490)))
    reqi.opacity = 0
    this.addChild(reqi, 5)

    reqi.runAction(cc.moveBy(1, 0, 50))

    reqi.runAction(cc.sequence(
      cc.fadeIn(0.8),
      cc.callFunc(function() {reqi.runAction(cc.sequence(cc.fadeOut(0.2), cc.callFunc(function() {reqi.removeFromParent()})))})
    ))

    this.scheduleOnce(function() {
      var reqi1 = new MySprite(res.piao)
      reqi1.setPosition(cc.p(this.getRandomNum(355 + 800, 665 + 800), this.getRandomNum(430, 490)))
      reqi1.opacity = 0
      this.addChild(reqi1, 5)

      reqi1.runAction(cc.moveBy(1, 0, 50))

      reqi1.runAction(cc.sequence(
        cc.fadeIn(0.8),
        cc.callFunc(function() {reqi1.runAction(cc.sequence(cc.fadeOut(0.2), cc.callFunc(function() {reqi1.removeFromParent()})))})
      ))
    }, cc.random0To1() * 0.3)
  }
  // update: function (dt) {

  // }
})

