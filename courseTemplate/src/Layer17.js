
var Layer17 = MyLayer.extend({
  onEnter: function () {
    this._super()
    var size = cc.winSize
    var self = this
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    // this.createBtn('下一页：总结结束 1/1')
    this.sprs = this.sprites(gameData.layer17_data, true)
  },
  onStart: function(){
    // sound.s17_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].runAction(cc.fadeIn(0.8))
    sprs[1].runAction(cc.fadeIn(0.8))

    sprs[2].frame([res.miya4, res.miya3], 0.5, 0)

    this.scheduleOnce(function() {
      sprs[2].stopAllActions()
      this.next()
    }, 7)
  }
  // update: function (dt) {

  // }
})

