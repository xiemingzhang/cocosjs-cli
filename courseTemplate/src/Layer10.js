var Layer10 = MyLayer.extend({
  onEnter: function () {
    this._super()
    var size = cc.winSize
    var self = this
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.btn = this.createBtn('下一页：科学认知 2/5')

    this.sprs = this.sprites(gameData.layer10_data, true)
  },
  onStart: function(){
    // sound.s10_sound()
    // sound.niaojiao_sound()
    var sprs = this.sprs

    sprs[2].runAction(cc.fadeIn(0.8))

    this.scheduleOnce(function() {
      sprs[0].runAction(cc.fadeIn(0.8))
      sprs[1].runAction(cc.fadeIn(0.8))
    }, 0.8)

    sprs[3].frame([res.miya5, res.miya6], 0.5, 0)

    this.scheduleOnce(function() {
      sprs[3].stopAllActions()
      this.next()
    }, 10)
  }
  // update: function (dt) {

  // }
})

