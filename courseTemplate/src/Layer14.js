var Layer14 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.btn = this.createBtn('下一页：课内练习 1/2')
    this.btn.setLocalZOrder(12)

    this.sprs = this.sprites(gameData.layer14_data, true)
  },
  onStart: function() {
    // sound.s14_sound()
    var self = this
    var sprs = this.sprs

    sprs[11].frame([res.miya1, res.miya2], 0.5, 0)

    sprs[1].frame([res.peach61, res.peach6], 0.5, 2)
    sprs[6].flash(0.5, 1)

    this.scheduleOnce(function(){
      sprs[2].frame([res.orange71, res.orange7], 0.5, 2)
      sprs[7].flash(0.5, 1)
    }, 2)

    this.scheduleOnce(function(){
      sprs[3].frame([res.banana81, res.banana8], 0.5, 2)
      sprs[8].flash(0.5, 1)
    }, 4)

    this.scheduleOnce(function(){
      sprs[4].frame([res.mango91, res.mango9], 0.5, 2)
      sprs[9].flash(0.5, 1)
    }, 6)

    this.scheduleOnce(function(){
      sprs[5].frame([res.apple101, res.apple10], 0.5, 2)
      sprs[10].flash(0.5, 1)
    }, 8)

    this.scheduleOnce(function() {
      sprs[11].stopAllActions()
      this.next()
    }, 12)
  }
  // update: function (dt) {

  // }
})

