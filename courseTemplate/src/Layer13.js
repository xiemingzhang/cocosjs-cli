var Layer13 = MyLayer.extend({
  ctor: function(){
    this._super(cc.color(255,255,255,255))
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg3)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[12])
    this.sprs = this.creatSprites(gameData.layer13)
  },
  onStart: function(num) {
    // sound.s13_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].frame([res.miya2, res.miya1], 0.5, 0)

    sprs[2].runAction(cc.scaleTo(0.8, 1))

    this.scheduleOnce(function(){
      sprs[1].runAction(cc.scaleTo(0.8, 1))
      // sprs[3].runAction(cc.fadeIn(0.8))
    }, 0.6)

    this.scheduleOnce(function() {
      sprs[0].stopAllActions()
      this.next()
    }, 7)
  }
  // update: function (dt) {

  // }
})

