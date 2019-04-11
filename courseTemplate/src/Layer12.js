var Layer12 = MyLayer.extend({
  ctor: function(){
    this._super(cc.color(255,255,255,255))
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg9)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[11])
    this.sprs = this.sprites(gameData.layer12, true)
  },
  onStart: function(num) {
    sound.s12_sound()
    var self = this
    var sprs = this.sprs

    this.scheduleOnce(function(){
      sprs[0].flash(0.5, 1)
    }, 3)

    this.scheduleOnce(function(){
      sprs[1].flash(0.5, 1)
    }, 4.5)

    this.scheduleOnce(function(){
      sprs[2].flash(0.5, 1)
    }, 6)

    this.scheduleOnce(function(){
      sprs[3].flash(0.5, 1)
    }, 7)

    this.scheduleOnce(function() {
      this.next()
    }, 8)
  }
  // update: function (dt) {

  // }
})

