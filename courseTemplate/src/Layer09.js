var Layer09 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg1)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：科学认知7/7')

    this.sprs = this.sprites(gameData.layer09_data, true)
  },
  onStart: function() {
    sound.s9_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].frame([res.miya1, res.miya2], 0.5, 0)

    this.scheduleOnce(function(){
      sprs[0].stopAllActions()
      this.next()
    }, 3)
  }
  // update: function (dt) {

  // }
})

