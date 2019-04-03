var Layer21 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg4)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    // this.createBtn('下一页：总结结束 1/1')
    this.sprs = this.sprites(gameData.layer21_data, true)
  },
  onStart: function() {
    // sound.s16_sound()
    var self = this
    var sprs = this.sprs

    this.scheduleOnce(function(){
      sprs[2].runAction(cc.moveTo(0.8, 296, 615))
    }, 2)

    this.scheduleOnce(function(){
      sprs[3].runAction(cc.moveTo(0.8, 552, 383))
    }, 3)

    this.scheduleOnce(function(){
      sprs[5].runAction(cc.moveTo(0.8, 1392, 615))
    }, 4)

    this.scheduleOnce(function(){
      sprs[6].runAction(cc.moveTo(0.8, 1139, 383))
    }, 5)

    this.scheduleOnce(function() {
      this.next()
    }, 7)
  }
})

