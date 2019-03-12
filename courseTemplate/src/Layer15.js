
var Layer15 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize
    var self = this

    var bg = new cc.Sprite(res.bg03)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：分句学习 10/10')
    this.sprs = this.sprites(layer15_data[0], true)
  },
  onStart: function(){
    sound.s15_sound()
    var self = this
    var sprs = this.sprs

    sprs[1].frame([res.人04, res.人004], 0.5, 0)

    this.scheduleOnce(function(){
      sprs[1].stopAllActions()
      this.next()
    }, 5)
  }
  // update: function (dt) {

  // }
})

