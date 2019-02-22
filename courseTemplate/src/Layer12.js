var Layer12 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize
    var self = this

    var bg = new cc.Sprite(res.g_02背景)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：认识鸟的嘴巴 10/13', 34)

    var sprs = this.sprs = this.sprites(layer12_data[0], true)
  },
  onStart: function(){
    // sound.a_12_sound()
    var self = this
    var sprs = this.sprs

    this.scheduleOnce(function(){
      this.next()
    }, 3)
  }
  // update: function (dt) {

  // }
})

