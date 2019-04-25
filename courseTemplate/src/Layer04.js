var Layer04 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[3])

    this.sprs = this.creatSprites(gameData.layer04)
  },
  onStart: function(num) {
    // sound.s4_sound()
    var self = this
    var sprs = this.sprs

    this.scheduleOnce(function() {
      // sprs[1].stopAllActions()
      this.next()
    }, 8)
  }
  // update: function (dt) {

  // }
})

