var Layer16 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg4)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：整体与部分15/15')
    this.sprs = this.sprites(gameData.layer16_data, true)
  },
  onStart: function() {
    // sound.s16_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].runAction(cc.scaleTo(0.6, 1))

    this.scheduleOnce(function(){
      sprs[1].enlarge(0.65, 1.1, 1)
    }, 1)

    // this.scheduleOnce(function(){
    //   sprs[2].runAction(cc.moveTo(0.8, 206, 99))
    // }, 8)
    // this.scheduleOnce(function(){
    //   sprs[3].runAction(cc.moveTo(0.8, 623.7, 480))
    // }, 9)

    this.scheduleOnce(function(){
      this.next()
    }, 6)
  }
})

