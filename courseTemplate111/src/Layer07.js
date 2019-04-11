var Layer07 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：科学认知5/7')

    this.sprs = this.sprites(gameData.layer07_data, true)
  },
  onStart: function() {
    sound.s7_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].frame([res.miya1, res.miya2], 0.5, 0)

    this.scheduleOnce(function(){
      sprs[1].enlarge(1.1, 0.6, 1)
    }, 3)

    this.scheduleOnce(function(){
      sprs[2].enlarge(1.1, 0.6, 1)
    }, 5)

    this.scheduleOnce(function() {
      sprs[0].stopAllActions()
      this.next()
    }, 6)
  }
  // update: function (dt) {

  // }
})

