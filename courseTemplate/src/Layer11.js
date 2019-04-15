var Layer11 = MyLayer.extend({
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

    // this.createBtn(textArr[10])
    this.sprs = this.sprites(gameData.layer11, true)
  },
  onStart: function(num) {
    sound.s11_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].frame([res.miya1, res.miya2], 0.5, 0)

    sprs[2].runAction(cc.fadeIn(0.8))

    this.scheduleOnce(function() {
      sprs[0].stopAllActions()
      this.next()
    }, 17)
  }
  // update: function (dt) {

  // }
})

