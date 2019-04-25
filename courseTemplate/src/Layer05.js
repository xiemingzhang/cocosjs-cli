var Layer05 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[4])

    this.sprs = this.creatSprites(gameData.layer05)
  },
  onStart: function(num) {
    // sound.s5_sound()
    var self = this
    var sprs = this.sprs

    this.scheduleOnce(function(){
      sprs[2].opacity = 255
      sprs[2].runAction(cc.moveBy(0.65, 780, -100))
      // sprs[2].runAction(cc.rotateBy(0.65, -90))
      sprs[2].runAction(cc.scaleTo(0.65, 1))
    }, 1)

    this.scheduleOnce(function(){
      sprs[3].runAction(cc.fadeIn(0.8))
    }, 3)

    this.scheduleOnce(function(){
      sprs[4].runAction(cc.fadeIn(0.8))
    }, 4)

    this.scheduleOnce(function() {
      // sprs[0].stopAllActions()
      this.next()
    }, 5)
  }
  // update: function (dt) {

  // }
})

