var Layer10 = MyLayer.extend({
  ctor: function(){
    this._super(cc.color(255,255,255,255))
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    // this.createBtn(textArr[9])
    this.sprs = this.creatSprites(gameData.layer10)
  },
  onStart: function(num) {
    // sound.s10_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].flash(0.5, 1)
    sprs[2].runAction(cc.fadeIn(0.8))

    this.scheduleOnce(function(){
      sprs[1].flash(0.5, 1)
      sprs[3].runAction(cc.fadeIn(0.8))
    }, 1.5)

    this.scheduleOnce(function() {
      this.next()
    }, 5)
  }
  // update: function (dt) {

  // }
})

