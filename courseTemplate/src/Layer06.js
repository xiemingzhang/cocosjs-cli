var Layer06 = MyLayer.extend({
  ctor: function(){
    this._super(cc.color(255,255,255,255))
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg01)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[5])

    this.sprs = this.sprites(gameData.layer06, true)
  },
  onStart: function(num) {
    sound.s6_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].runAction(cc.sequence(
      cc.moveBy(0.5, 0, -300).easing(cc.easeIn(0.8)),
      cc.jumpBy(0.3, cc.p(0, 0), 35, 2)
    ))

    sprs[2].frame([res.miya4, res.miya3], 0.5, 0)
    this.scheduleOnce(function() {
      sprs[2].stopAllActions()
      this.next()
    }, 18)
  }
  // update: function (dt) {

  // }
})

