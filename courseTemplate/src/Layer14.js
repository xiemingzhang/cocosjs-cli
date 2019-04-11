var Layer14 = MyLayer.extend({
  ctor: function() {
    this._super(cc.color(255, 255, 255, 255))
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bgg)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[13])
    this.sprs = this.sprites(gameData.layer14, true)
  },
  onStart: function(num) {
    sound.s14_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].runAction(cc.scaleTo(1, 1))

    this.scheduleOnce(function() {
      sprs[1].runAction(cc.scaleTo(1, 1))
    }, 3)

    this.scheduleOnce(function() {
      sprs[2].runAction(cc.scaleTo(1, 1))
    }, 6)

    this.scheduleOnce(function() {
      sprs[3].runAction(cc.scaleTo(1, 1))
    }, 9)

    this.scheduleOnce(function() {
      this.next()
    }, 12)
  }
  // update: function (dt) {

  // }
})

