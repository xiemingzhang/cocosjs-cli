var Layer04 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg02)
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

    sprs[0].runAction(cc.sequence(
      cc.scaleTo(0.8, 1),
      cc.callFunc(function(){
        sprs[1].runAction(cc.fadeIn(0.8))
      })
    ))

    sprs[2].frame([res.miyawen2, res.miyawen1], 0.5, 0)

    this.scheduleOnce(function() {
      sprs[2].stopAllActions()
      this.next()
    }, 7)
  }
  // update: function (dt) {

  // }
})

