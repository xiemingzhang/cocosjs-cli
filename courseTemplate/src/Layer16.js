
var Layer16 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize
    var self = this

    var bg = new cc.Sprite(res.背景)
    bg.setScale(size.height / bg.height * 1.25)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：思考练习1/4')
    var sprs = this.sprs = this.sprites(layer16_data[0], true)
  },
  onStart: function(){
    sound.a_4_sound()
    var self = this
    var sprs = this.sprs

    // sprs[1].frame([res.g_07米丫01, res.g_07米丫02], 0.5, 0)

    this.scheduleOnce(function(){
      this.next()
    }, 25)
  }
  // update: function (dt) {

  // }
})

