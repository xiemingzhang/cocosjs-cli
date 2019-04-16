var Layer04 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg4)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[3])

    this.sprs = this.sprites(gameData.layer04, true)
  },
  onStart: function(num) {
    sound.s4_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].progress(7, 'left')
    sprs[4].frame([res.huomiao, res.huomiao2], 0.5, 0)

    sprs[1].frame([res.miya4, res.miya3], 0.5, 0)

    this.schedule(this.piao, 1.5)

    this.scheduleOnce(function() {
      sprs[1].stopAllActions()
      this.next()
    }, 8)
  },
  piao: function() {
    var reqi = new MySprite(res.piao)
    reqi.setPosition(cc.p(this.getRandomNum(355 + 600, 665 + 600), this.getRandomNum(530, 590)))
    reqi.opacity = 0
    this.addChild(reqi, 5)

    reqi.runAction(cc.moveBy(1, 0, 50))

    reqi.runAction(cc.sequence(
      cc.fadeIn(0.8),
      cc.callFunc(function() {reqi.runAction(cc.sequence(cc.fadeOut(0.2), cc.callFunc(function() {reqi.removeFromParent()})))})
    ))

    this.scheduleOnce(function() {
      var reqi1 = new MySprite(res.piao)
      reqi1.setPosition(cc.p(this.getRandomNum(355 + 600, 665 + 600), this.getRandomNum(530, 590)))
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

