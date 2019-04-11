var Layer01 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    // this.btn = this.createBtn('下一页：分句欣赏6/18')

    // var clip = new cc.LayerColor(cc.color(0, 0, 0), 1920, 1080)
    // clip.setAnchorPoint(0, 0)
    // clip.setScale(1)
    // clip.setPosition(0, 0)

    // var mask = new cc.ClippingNode(clip)
    // mask.setAnchorPoint(0, 0)
    // this.addChild(mask, 12)
    // mask.addChild(bg)

    // this.sprs = this.sprites(gameData.layer09_data, true)
    // this.sprs.forEach(function(item){
    //   mask.addChild(item, item.data.zindex)
    // })
  },
  onStart: function(num) {
    var self = this
    var sprs = this.sprs
    // sprs[0].progress(3, 'left')

    // this.schedule(function() {
    //   sprs[0].frame([res.dashu4, res.dashu3], 0.7, 1)
    // }, 3.8, cc.repeat(1), 1)

    // sprs[1].frame([res.niao2, res.niao1], 0.5, 0)
    // sprs[1].runAction(cc.moveBy(4, 1000, 0))
    // sprs[2].frame([res.niao2, res.niao1], 0.45, 0)
    // sprs[2].runAction(cc.moveBy(4, -800, 0))

    // this.schedule(function() {
    //   sprs[3].frame([res.niao3, res.niao4], 0.45, 2)
    // }, 3.8, cc.repeat(2), 1)

    // sprs[4].frame([res.youniao1, res.youniao2], 0.45, 0)
    // sprs[5].frame([res.youniao1, res.youniao2], 0.47, 0)

    this.scheduleOnce(function() {
      // sprs[0].stopAllActions()
      // sprs[1].stopAllActions()
      // sprs[2].stopAllActions()
      // sprs[4].stopAllActions()
      // sprs[5].stopAllActions()
      this.next()
    }, 4)
  }
  // update: function (dt) {

  // }
})

