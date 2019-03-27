var Layer07 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg3)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：物品点数 4/4')

    this.sprs = this.sprites(gameData.layer07_data, true)
  },
  onStart: function() {
    var self = this
    var sprs = this.sprs

    sprs[1].flash(0.5, 1)

    this.scheduleOnce(function() {
      sprs[3].flash(0.5, 1)
    }, 1)

    this.scheduleOnce(function() {
      sprs[5].flash(0.5, 1)
    }, 2)

    this.scheduleOnce(function() {
      sprs[7].flash(0.5, 1)
    }, 3)

    this.scheduleOnce(function() {
      this.next()
    }, 5)
  }
  // update: function (dt) {

  // }
})

