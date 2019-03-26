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

    this.btn = this.createBtn('下一页：物品点数 9/12')

    this.sprs = this.sprites(gameData.layer10_data, true)
  },
  onStart: function(){
    // sound.s10_sound()
    // sound.niaojiao_sound()
    var sprs = this.sprs

    sprs[1].frame([res.mango2, res.mango1], 0.5, 1)
    sprs[10].flash(0.5, 1)

    this.scheduleOnce(function() {
      sprs[2].frame([res.mango2, res.mango1], 0.5, 1)
      sprs[11].flash(0.5, 1)
    }, 0.6)

    this.scheduleOnce(function() {
      sprs[3].frame([res.mango2, res.mango1], 0.5, 1)
      sprs[12].flash(0.5, 1)
    }, 1.2)

    this.scheduleOnce(function() {
      sprs[4].frame([res.mango2, res.mango1], 0.5, 1)
      sprs[13].flash(0.5, 1)
    }, 1.8)

    this.scheduleOnce(function() {
      sprs[5].frame([res.mango2, res.mango1], 0.5, 1)
      sprs[14].flash(0.5, 1)
    }, 2.4)

    this.scheduleOnce(function() {
      sprs[6].frame([res.mango2, res.mango1], 0.5, 1)
      sprs[15].flash(0.5, 1)
    }, 3)

    this.scheduleOnce(function() {
      sprs[7].frame([res.mango2, res.mango1], 0.5, 1)
      sprs[16].flash(0.5, 1)
    }, 3.6)

    this.scheduleOnce(function() {
      sprs[8].frame([res.mango2, res.mango1], 0.5, 1)
      sprs[17].flash(0.5, 1)
    }, 4.2)

    this.scheduleOnce(function() {
      sprs[9].frame([res.mango2, res.mango1], 0.5, 1)
      sprs[18].flash(0.5, 1)
    }, 4.8)

    this.scheduleOnce(function() {
      sprs[19].flash(0.5, 1)
    }, 5.8)

    this.scheduleOnce(function() {
      this.next()
    }, 8)
  }
  // update: function (dt) {

  // }
})

