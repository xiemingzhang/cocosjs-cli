var Layer16 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：总结结束 1/1')

    this.sprs = this.sprites(gameData.layer16_data, true)
  },
  onStart: function() {

    // sound.s16_sound()
    var self = this
    var sprs = this.sprs

    var x1 = new cc.ProgressTimer(new cc.Sprite(res.lianxian1))
    x1.setAnchorPoint(0, 0)
    x1.type = cc.ProgressTimer.TYPE_BAR
    x1.midPoint = cc.p(0, 1)
    x1.barChangeRate = cc.p(1, 0)
    x1.x = 330 * fix
    x1.y = 393
    this.addChild(x1, 5)
    x1.runAction(cc.progressTo(1.5, 100))

    this.scheduleOnce(function() {
      x1 = new cc.ProgressTimer(new cc.Sprite(res.lianxian2))
      x1.setAnchorPoint(0, 0)
      x1.type = cc.ProgressTimer.TYPE_BAR
      x1.midPoint = cc.p(0, 1)
      x1.barChangeRate = cc.p(1, 0)
      x1.x = 961 * fix
      x1.y = 396
      this.addChild(x1, 5)
      x1.runAction(cc.progressTo(1.5, 100))
    }, 1.5)

    this.scheduleOnce(function() {
      x1 = new cc.ProgressTimer(new cc.Sprite(res.lianxian5))
      x1.setAnchorPoint(0, 0)
      x1.type = cc.ProgressTimer.TYPE_BAR
      x1.midPoint = cc.p(1, 1)
      x1.barChangeRate = cc.p(0, 1)
      x1.x = 961 * fix
      x1.y = 396
      this.addChild(x1, 5)
      x1.runAction(cc.progressTo(1.5, 100))
    }, 3)

    this.scheduleOnce(function() {
      x1 = new cc.ProgressTimer(new cc.Sprite(res.lianxian4))
      x1.setAnchorPoint(0, 0)
      x1.type = cc.ProgressTimer.TYPE_BAR
      x1.midPoint = cc.p(1, 1)
      x1.barChangeRate = cc.p(0, 1)
      x1.x = 330 * fix
      x1.y = 396
      this.addChild(x1, 5)
      x1.runAction(cc.progressTo(1.5, 100))
    }, 4.5)

    this.scheduleOnce(function() {
      x1 = new cc.ProgressTimer(new cc.Sprite(res.lianxian3))
      x1.setAnchorPoint(0, 0)
      x1.type = cc.ProgressTimer.TYPE_BAR
      x1.midPoint = cc.p(0, 1)
      x1.barChangeRate = cc.p(1, 0)
      x1.x = 1220 * fix
      x1.y = 396
      this.addChild(x1, 5)
      x1.runAction(cc.progressTo(1.5, 100))
    }, 6)

    this.scheduleOnce(function() {
      this.next()
    }, 8)
  }
})

