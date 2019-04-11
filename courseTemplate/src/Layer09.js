var Layer09 = MyLayer.extend({
  ctor: function(){
    this._super(cc.color(255,255,255,255))
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg8)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[8])
    this.sprs = this.sprites(gameData.layer09, true)
  },
  onStart: function(num) {
    sound.s9_sound()
    var self = this
    var sprs = this.sprs

    this.scheduleOnce(function() {
      this.next()
    }, 7)
  }
  // update: function (dt) {

  // }
})

