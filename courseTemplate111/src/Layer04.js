var Layer04 = MyLayer.extend({
  onEnter: function () {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg1)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：科学认知2/7')

    this.sprs = this.sprites(gameData.layer04_data, true)
  },
  onStart: function(){
    // sound.s3_sound()
    var self = this
    var sprs = this.sprs
    var size = cc.winSize

    sprs[1].runAction(cc.sequence(
      cc.moveBy(1.5, size.width/2, 0),
      cc.delayTime(1.5),
      cc.moveBy(1.5, -size.width/2, 0)
    ))

    sprs[2].runAction(cc.sequence(
      cc.moveBy(1.5, -size.width/2, 0),
      cc.delayTime(1.5),
      cc.moveBy(1.5, size.width/2, 0)
    ))

    this.scheduleOnce(function(){
      this.next()
    }, 5)
  }
})

