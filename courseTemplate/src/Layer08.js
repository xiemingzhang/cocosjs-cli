var Layer08 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize
    var self = this

    var bg = new cc.Sprite(res.背景3)
    bg.setScale(size.height / bg.height)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：情景学习 6/14')

    var sprs = this.sprs = this.sprites(layer08_data[0], true)
  },
  onStart: function(){
    sound.a_8_sound()
    var self = this
    var sprs = this.sprs

    // sprs[1].frame([res.人1, res.人2], 0.5, 0)

    this.scheduleOnce(function(){
      this.next()
    }, 4)
  }
  // update: function (dt) {

  // }
})

