var Layer04 = MyLayer.extend({
  onEnter: function () {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：认识事物 2/4')

    this.sprs = this.sprites(gameData.layer04_data, true)
  },
  onStart: function(){

    // sound.s4_sound()
    var self = this
    var sprs = this.sprs

    sprs[1].runAction(cc.fadeIn(1.2))

    sprs[2].frame([res.miya5, res.miya6], 0.5, 0)

    this.scheduleOnce(function(){
      sprs[2].stopAllActions()
      this.next()
    }, 3)
  }
})

