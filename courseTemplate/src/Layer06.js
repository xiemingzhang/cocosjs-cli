var Layer06 = MyLayer.extend({
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

    this.createBtn(textArr[5])

    this.sprs = this.creatSprites(gameData.layer06)
  },
  onStart: function(num) {
    // sound.s61_sound()
    var self = this
    var sprs = this.sprs

    this.scheduleOnce(function(){
      sprs[2].runAction(cc.sequence(
        cc.fadeOut(0.8),
        cc.callFunc(function(){sprs[2].x += 968 - 556;sprs[2].y += 156 - 546}),
        cc.fadeIn(0.8)
      ))
    }, 1)

    this.scheduleOnce(function(){
      sprs[3].runAction(cc.fadeIn(0.8))
    }, 3)

    this.scheduleOnce(function(){
      sprs[4].runAction(cc.fadeIn(0.8))
    }, 4)

    this.scheduleOnce(function() {
      this.next()
    }, 6)
  }
  // update: function (dt) {

  // }
})

