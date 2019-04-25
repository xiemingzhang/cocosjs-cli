var Layer16 = MyLayer.extend({
  ctor: function() {
    this._super(cc.color(255, 255, 255, 255))
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg3)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    // this.createBtn(textArr[14])
    this.sprs = this.creatSprites(gameData.layer16)
  },
  onStart: function(num) {
    // sound.s16_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].frame([res.miya1, res.miya2], 0.5, 0)

    this.scheduleOnce(function(){
      sprs[0].stopAllActions()
      sprs[0].setScale(1.26)
      sprs[0].setTexture(res.miya7)
      sprs[0].y += 40
      sprs[0].x += 20
      sprs[0].runAction(cc.sequence(
        cc.delayTime(0.5),
        cc.callFunc(function(){
          sprs[0].setTexture(res.miya8)
          sprs[0].x -= 6.6
        }),
        cc.delayTime(0.5),
        cc.callFunc(function(){
          sprs[0].setTexture(res.miya7)
          sprs[0].x += 6.6
        })
      ).repeatForever())
    }, 10)

    this.scheduleOnce(function() {
      sprs[0].stopAllActions()
      this.next()
    }, 12)
  }
  // update: function (dt) {

  // }
})

