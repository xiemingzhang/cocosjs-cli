var Layer10 = MyLayer.extend({
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

    // this.createBtn(textArr[9])
    this.sprs = this.sprites(gameData.layer10, true)
  },
  onStart: function(num) {
    sound.s10_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].enlarge(1.1, 0.5, 1)

    this.scheduleOnce(function(){
       sprs[2].frame([res.fenzhi_tudouni_gl, res.fenzhi_tudouni], 0.5, 1)
    }, 3)

    this.scheduleOnce(function(){
       sprs[3].frame([res.fenzhi_shutiao_gl, res.fenzhi_shutiao], 0.5, 1)
    }, 4)

    this.scheduleOnce(function() {
      this.next()
    }, 5)
  }
  // update: function (dt) {

  // }
})

