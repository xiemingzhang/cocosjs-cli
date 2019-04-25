var Layer12 = MyLayer.extend({
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

    this.createBtn(textArr[11])
    this.sprs = this.creatSprites(gameData.layer12)
  },
  onStart: function(num) {
    // sound.s12_sound()
    var self = this
    var sprs = this.sprs

    sprs[3].runAction(cc.fadeIn(0.8))
    sprs[5].runAction(cc.fadeIn(0.8))

    this.scheduleOnce(function(){
      sprs[4].runAction(cc.fadeIn(0.8))
      sprs[6].runAction(cc.fadeIn(0.8))
    }, 2)

    this.scheduleOnce(function() {
      this.next()
    }, 7)
  }
  // update: function (dt) {

  // }
})

