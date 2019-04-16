var Layer07 = MyLayer.extend({
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

    this.createBtn(textArr[6])

    this.sprs = this.sprites(gameData.layer07, true)
  },
  onStart: function(num) {
    sound.s7_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].runAction(cc.moveBy(0.8, 1920, 0))

    this.scheduleOnce(function() {
      this.next()
    }, 15)
  }
  // update: function (dt) {

  // }
})

