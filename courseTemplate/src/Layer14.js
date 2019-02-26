var Layer14 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize

    var bg = new cc.Sprite(res.s13背景)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：创作步骤 4/4')
    this.sprs = this.sprites(layer14_data[0], true)
  },
  onStart: function(){
    sound.s14_sound()
    var self = this
    var sprs = this.sprs

    // sprs[0].frame([res.s米亚胜利01, res.s米亚胜利02], 0.5, 0)

    this.scheduleOnce(function(){
      // sprs[0].stopAllActions()
      this.next()
    }, 5)
  }
  // update: function (dt) {

  // }
})

