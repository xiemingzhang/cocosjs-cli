var Layer06 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg1)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：科学认知4/7')

    this.sprs = this.sprites(gameData.layer06_data, true)
  },
  onStart: function() {
    sound.s6_sound()
    var self = this
    var sprs = this.sprs

    // sprs[0].runAction(cc.moveBy(0.5, 0, -200))
    sprs[0].flash(0.5, 2)

    this.scheduleOnce(function(){
      sprs[1].flash(0.5, 2)
    }, 2)

    this.scheduleOnce(function(){
      sprs[2].flash(0.5, 2)
    }, 5)

    this.scheduleOnce(function(){
      sprs[3].flash(0.5, 2)
    }, 8)

    this.scheduleOnce(function(){
      sprs[4].flash(0.5, 2)
    }, 11)

    this.scheduleOnce(function(){
      sprs[5].flash(0.5, 2)
    }, 14)

    this.scheduleOnce(function(){
      sprs[6].flash(0.5, 2)
    }, 17)

    this.scheduleOnce(function(){
      sprs[7].flash(0.5, 2)
    }, 21)

    this.scheduleOnce(function(){
      this.next()
    }, 24)
  }
  // update: function (dt) {

  // }
})

