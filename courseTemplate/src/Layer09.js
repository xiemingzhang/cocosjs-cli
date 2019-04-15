var Layer09 = MyLayer.extend({
  ctor: function(){
    this._super(cc.color(255,255,255,255))
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg02)
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

    sprs[0].enlarge(1.1, 0.5, 1)

    this.scheduleOnce(function(){
       sprs[2].frame([res.fenzhi_yumib_gl, res.fenzhi_yumib], 0.5, 1)
    }, 4)

    this.scheduleOnce(function(){
       sprs[3].frame([res.fenzhi_bmh_gl, res.fenzhi_bmh], 0.5, 1)
    }, 5)

    this.scheduleOnce(function() {
      this.next()
    }, 6)
  }
  // update: function (dt) {

  // }
})

