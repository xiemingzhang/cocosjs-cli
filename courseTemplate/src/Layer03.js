var Layer03 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg01)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[2])

    this.sprs = this.sprites(gameData.layer03, true)
  },
  onStart: function(num) {
    sound.s3_sound()
    var self = this
    var sprs = this.sprs

    sprs[2].frame([res.miya4, res.miya3], 0.5, 0)

    sprs[0].progress(10, 'left')
    this.scheduleOnce(function(){
      sprs[1].progress(10, 'left')
    }, 10)

    sprs[3].runAction(cc.fadeIn(0.8))
    this.scheduleOnce(function(){sprs[4].runAction(cc.fadeIn(0.8))}, 1)
    this.scheduleOnce(function(){sprs[5].runAction(cc.fadeIn(0.8))}, 2)
    this.scheduleOnce(function(){sprs[6].runAction(cc.fadeIn(0.8))}, 3)

    this.scheduleOnce(function() {
      sprs[2].stopAllActions()
      this.next()
    }, 20)
  }
  // update: function (dt) {

  // }
})

