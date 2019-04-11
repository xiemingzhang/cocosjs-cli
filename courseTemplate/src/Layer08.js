var Layer08 = MyLayer.extend({
  // ctor: function(){
  //   this._super(cc.color(255,255,255,255))
  // },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg7)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[7])

    this.sprs = this.sprites(gameData.layer08, true)
  },
  onStart: function(num) {
    sound.s8_sound()
    var self = this
    var sprs = this.sprs

    // sprs[0].enlarge(1.02, 0.8)

    this.scheduleOnce(function() {
      // sprs[0].stopAllActions()
      this.next()
    }, 7)
  }
  // update: function (dt) {

  // }
})

