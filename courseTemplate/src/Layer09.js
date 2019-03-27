var Layer09 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    // this.btn = this.createBtn('下一页：物品点数 8/12')

    this.sprs = this.sprites(gameData.layer09_data, true)
  },
  onStart: function() {
    // sound.s9_sound()
    // sound.niaojiao_sound()
    var self = this
    var sprs = this.sprs
    // this.scheduleUpdate()

    this.scheduleOnce(function() {
      // sprs[3].stopAllActions()
      this.next()
    }, 2)
  }
  // update: function (dt) {

  // }
})

