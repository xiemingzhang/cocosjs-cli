var Layer08 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg1)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.btn = this.createBtn('下一页：物品点数 7/12')

    this.sprs = this.sprites(gameData.layer08_data, true)
    // this.sprs1 = this.sprites(layer08_data[1])
  },
  onStart: function() {
    // sound.s8_sound()
    var self = this
    var sprs = this.sprs
    // var sprs1 = this.sprs1
    // var size = cc.winSize

    sprs[1].frame([res.banana2, res.banana1], 0.5, 1)
    sprs[9].flash(0.5, 1)

    this.scheduleOnce(function() {
      sprs[2].frame([res.banana2, res.banana1], 0.5, 1)
      sprs[10].flash(0.5, 1)
    }, 0.6)

    this.scheduleOnce(function() {
      sprs[3].frame([res.banana2, res.banana1], 0.5, 1)
      sprs[11].flash(0.5, 1)
    }, 1.2)

    this.scheduleOnce(function() {
      sprs[4].frame([res.banana2, res.banana1], 0.5, 1)
      sprs[12].flash(0.5, 1)
    }, 1.8)

    this.scheduleOnce(function() {
      sprs[5].frame([res.banana2, res.banana1], 0.5, 1)
      sprs[13].flash(0.5, 1)
    }, 2.4)

    this.scheduleOnce(function() {
      sprs[6].frame([res.banana2, res.banana1], 0.5, 1)
      sprs[14].flash(0.5, 1)
    }, 3)

    this.scheduleOnce(function() {
      sprs[7].frame([res.banana2, res.banana1], 0.5, 1)
      sprs[15].flash(0.5, 1)
    }, 3.6)

    this.scheduleOnce(function() {
      sprs[8].frame([res.banana2, res.banana1], 0.5, 1)
      sprs[16].flash(0.5, 1)
    }, 4.2)

    this.scheduleOnce(function() {
      sprs[17].flash(0.5, 1)
    }, 5.2)

    this.scheduleOnce(function() {
      this.next()
    }, 8)
  }
  // update: function (dt) {

  // }
})

