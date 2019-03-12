var Layer09 = MyLayer.extend({
  ctor: function() {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    var bg = new cc.Sprite(res.bg04)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.btn = this.createBtn('下一页：分句欣赏 4/10')

    this.sprs = this.sprites(layer09_data[0], true)
  },
  onStart: function() {
    sound.s9_sound()
    sound.niaojiao_sound()
    var self = this
    var sprs = this.sprs
    // this.scheduleUpdate()

    sprs[2].frame([res.鸟06, res.鸟07], 0.46, 0)
    sprs[2].runAction(cc.moveBy(13, -1000, -100))
    sprs[3].frame([res.鸟09, res.鸟10], 0.5, 0)
    sprs[3].runAction(cc.moveBy(13, 500, 50))

    sprs[4].frame([res.草动画01, res.草动画02], 0.8, 6)

    this.scheduleOnce(function(){
      sprs[1].frame([res.花02, res.花03, res.花04], 0.5, 5)
    }, 3.5)

    this.scheduleOnce(function(){
      sprs[0].frame([res.树说话01, res.树说话02], 0.5, 5)
    }, 11)

    this.scheduleOnce(function() {
      sprs[0].stopAllActions()
      sprs[1].stopAllActions()
      sprs[2].stopAllActions()
      sprs[3].stopAllActions()
      this.next()
    }, 13)
  }
  // update: function (dt) {

  // }
})

