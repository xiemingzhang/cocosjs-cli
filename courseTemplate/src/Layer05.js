var Layer05 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize

    var bg = new cc.Sprite(res.s05图)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：认识旗帜 3/8')

    // this.sprs = this.sprites(layer05_data[0], true)
  },
  onStart: function(){
    sound.s5_sound()
    var self = this
    // var sprs = this.sprs

    this.scheduleOnce(function(){
      this.next()
    }, 13)
  }
  // update: function (dt) {

  // }
})

