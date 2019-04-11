var Layer11 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg1)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    // this.btn = this.createBtn('下一页：分句欣赏8/18')

    // var clip = new cc.LayerColor(cc.color(0, 0, 0), 1920, 1080)
    // clip.setAnchorPoint(0, 0)
    // clip.setScale(1)
    // clip.setPosition(0, 0)

    // var mask = new cc.ClippingNode(clip)
    // mask.setAnchorPoint(0, 0)
    // this.addChild(mask, 12)
    // mask.addChild(bg)

    this.sprs = this.sprites(gameData.layer11_data, true)
    // this.sprs.forEach(function(item){
    //   mask.addChild(item, item.data.zindex)
    // })
  },
  onStart: function(num) {
    num !== 1 && sound.s11_sound()
    var self = this
    var sprs = this.sprs

    sprs[1].frame([res.niao2, res.niao1], 0.5, 0)
    sprs[1].runAction(cc.moveBy(6, 1300, 0))
    sprs[2].frame([res.niao2, res.niao1], 0.45, 0)
    sprs[2].runAction(cc.moveBy(6, -1000, 0))

    sprs[3].frame([res.youniao1, res.youniao2], 0.45, 0)
    sprs[4].frame([res.youniao1, res.youniao2], 0.47, 0)

    this.scheduleOnce(function() {
      sprs[1].stopAllActions()
      sprs[2].stopAllActions()
      sprs[3].stopAllActions()
      sprs[4].stopAllActions()
      this.next()
    }, 7)
  }
  // update: function (dt) {

  // }
})

