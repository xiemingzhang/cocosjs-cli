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

    var bg = new cc.Sprite(res.背景001)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.btn = this.createBtn('下一页：分句欣赏 5/10')

    this.sprs = this.sprites(layer10_data[0], true)
  },
  onStart: function(){
    sound.s10_sound()
    sound.niaojiao_sound()
    var sprs = this.sprs

    sprs[3].frame([res.鸟11, res.鸟12], 0.5, 0)
    sprs[3].runAction(cc.moveBy(5, 400, 200))

    sprs[4].frame([res.河流01, res.河流02], 0.5, 0)

    this.scheduleOnce(function(){
      sprs[2].frame([res.云01, res.云02], 0.5, 0)
    }, 3.5)

    this.scheduleOnce(function(){
      sprs[2].stopAllActions()
      sprs[3].stopAllActions()
      sprs[4].stopAllActions()
      this.next()
    }, 6)
  }
  // update: function (dt) {

  // }
})

