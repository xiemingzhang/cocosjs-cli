var Layer10 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize
    var self = this

    var bg = new cc.Sprite(res.s_10图)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：认识旗帜 8/8')

    this.sprs = this.sprites(layer10_data[0], true)
  },
  onStart: function(){
    sound.s10_sound()
    var sprs = this.sprs

    this.scheduleOnce(function(){
      this.next()
    }, 8)
  }
  // update: function (dt) {

  // }
})

