var Layer06 = MyLayer.extend({
  ctor: function(){
    this._super(cc.color(255,255,255,255))
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg4)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[5])

    this.sprs = this.sprites(gameData.layer06, true)
  },
  onStart: function(num) {
    sound.s61_sound()
    var self = this
    var sprs = this.sprs

    sprs[1].frame([res.miya4, res.miya3], 0.5, 0)

    sprs[0].progress(11, 'left')

    this.schedule(this.reqi, 1.5)

    sprs[6].frame([res.huomiao, res.huomiao2], 0.5, 0)

    this.scheduleOnce(function(){
      sprs[7].progress(3, 'left')
    }, 11)

    this.scheduleOnce(function() {
      sprs[1].stopAllActions()
      this.next()
    }, 14)
  },
  reqi: function() {
    var reqi = new MySprite(res.reqi)
    reqi.setPosition(cc.p(this.getRandomNum(355 + 850, 665 + 850), this.getRandomNum(420 + 100, 480 + 100)))
    reqi.opacity = 0
    this.addChild(reqi, 5)

    reqi.runAction(cc.moveBy(1, 0, 50))

    reqi.runAction(cc.sequence(
      cc.fadeIn(0.8),
      cc.callFunc(function() {reqi.runAction(cc.sequence(cc.fadeOut(0.2), cc.callFunc(function() {reqi.removeFromParent()})))})
    ))

    this.scheduleOnce(function() {
      var reqi1 = new MySprite(res.reqi)
      reqi1.setPosition(cc.p(this.getRandomNum(355 + 850, 665 + 850), this.getRandomNum(420 + 100, 480 + 100)))
      reqi1.opacity = 0
      this.addChild(reqi1, 5)

      reqi1.runAction(cc.moveBy(1, 0, 50))

      reqi1.runAction(cc.sequence(
        cc.fadeIn(0.8),
        cc.callFunc(function() {reqi1.runAction(cc.sequence(cc.fadeOut(0.2), cc.callFunc(function() {reqi1.removeFromParent()})))})
      ))
    }, cc.random0To1() * 0.3)
  },
  // update: function (dt) {

  // }
})

