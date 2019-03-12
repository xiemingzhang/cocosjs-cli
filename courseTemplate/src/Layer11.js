var Layer11 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize

    var bg = new cc.Sprite(res.背景002)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.btn = this.createBtn('下一页：分句欣赏 6/10')

    this.sprs = this.sprites(layer11_data[0], true)
  },
  onStart: function(){
    sound.s11_sound()
    var self = this
    var sprs = this.sprs
    sprs[5].frame([res.鸟14, res.鸟15], 0.5, 0)

    sprs[3].frame([res.鸟03, res.鸟04], 0.5, 0)
    sprs[3].runAction(cc.moveBy(5, 560, -100))

    sprs[4].frame([res.河流01, res.河流02], 0.5, 0)

    this.scheduleOnce(function(){
      sprs[3].stopAllActions()
      sprs[4].stopAllActions()
      sprs[5].stopAllActions()
      this.next()
    }, 7)  
  }
  // update: function (dt) {

  // }
})

