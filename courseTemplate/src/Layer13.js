var Layer13 = MyLayer.extend({
  ctor: function(){
    this._super(cc.color(255,255,255,255))
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg1)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[12])
    this.sprs = this.sprites(gameData.layer13, true)
  },
  onStart: function(num) {
    sound.s13_sound()
    var self = this
    var sprs = this.sprs

    sprs[1].frame([res.miya4, res.miya3], 0.5, 0)
    sprs[0].runAction(cc.scaleTo(1, 1))

    this.scheduleOnce(function() {
      sprs[1].stopAllActions()
      this.next()
    }, 6)
  }
  // update: function (dt) {

  // }
})

