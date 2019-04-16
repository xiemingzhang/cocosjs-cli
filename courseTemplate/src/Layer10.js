var Layer10 = MyLayer.extend({
  ctor: function(){
    this._super(cc.color(255,255,255,255))
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    // this.createBtn(textArr[9])
    this.sprs = this.sprites(gameData.layer10, true)
  },
  onStart: function(num) {
    sound.s10_sound()
    var self = this
    var sprs = this.sprs

    sprs[1].runAction(cc.rotateBy(5, 6))

    sprs[0].runAction(cc.sequence(
      cc.moveBy(0.35, 0, -300),
      cc.jumpBy(0.3, cc.p(0, 0), 35, 2)
    ))

    sprs[2].frame([res.boy2, res.boy1], 0.5, 0)

    this.scheduleOnce(function() {
      sprs[2].stopAllActions()
      this.next()
    }, 5)
  }
  // update: function (dt) {

  // }
})

