var Layer02 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg1)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[1])

    this.sprs = this.creatSprites(gameData.layer02)
  },
  onStart: function(num) {
    // sound.s2_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].frame([res.miya2, res.miya1], 0.5, 0)

    sprs[1].runAction(cc.sequence(
       cc.rotateBy(1, 7),
       cc.rotateBy(2, -14),
       cc.rotateBy(1, 7)
    ).repeat(2))

    this.scheduleOnce(function() {
      sprs[0].stopAllActions()
      this.next()
    }, 5)
  }
  // update: function (dt) {

  // }
})

