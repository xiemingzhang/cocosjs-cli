var Layer12 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize

    var bg = new cc.Sprite(res.背景003)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.btn = this.createBtn('下一页：分句欣赏 7/10')

    this.sprs = this.sprites(layer12_data[0], true)
  },
  onStart: function(){
    sound.s12_sound()
    var self = this
    var sprs = this.sprs
    //[res.星星01, res.星星02], 0.7, 0
    sprs[0].runAction(cc.sequence(
      cc.fadeTo(0.7, 55),
      cc.callFunc(function(){
        sprs[0].setTexture(res.星星02)
      }),
      cc.fadeTo(0.7, 255),
      cc.fadeTo(0.7, 55),
      cc.callFunc(function(){
        sprs[0].setTexture(res.星星01)
      }),
      cc.fadeTo(0.7, 255)
    ).repeatForever())
    sprs[1].frame([res.鸟18, res.鸟19], 0.5, 0)
    sprs[2].frame([res.鸟03, res.鸟04], 0.5, 0)
    sprs[2].runAction(cc.moveBy(5.5, -600, -100))

    this.scheduleOnce(function(){
      sprs[0].stopAllActions()
      sprs[1].stopAllActions()
      sprs[2].stopAllActions()
      this.next()
    }, 7)
  }
  // update: function (dt) {

  // }
})

