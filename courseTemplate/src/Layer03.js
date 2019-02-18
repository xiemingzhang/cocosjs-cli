var Layer03 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize
    var self = this

    var bg = new cc.Sprite(res.学习测量长度3)
    bg.setScale(size.height / bg.height)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：情景学习 1/14')

    var sprs = this.sprs = this.sprites(layer03_data[0], true)
  },
  onStart: function(){

    sound.a_3_sound()
    var self = this
    var sprs = this.sprs

    // sprs[1].frame([res.ren1, res.ren2], 0.5, 0)

    this.scheduleOnce(function(){
      this.next()
    }, 9)
  }
  // update: function (dt) {

  // }
})

