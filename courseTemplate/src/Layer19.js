var Layer19 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    // this.createBtn('下一页：分句欣赏16/18')
    this.sprs = this.sprites(gameData.layer19_data, true)
  },
  onStart: function() {
    sound.s19_sound()
    var self = this
    var sprs = this.sprs

    this.schedule(function() {
      sprs[0].frame([res.dashu4, res.dashu3], 0.7, 1)
    }, 3.8, cc.repeat(1), 1)

    sprs[1].frame([res.niao2, res.niao1], 0.5, 0)
    sprs[1].runAction(cc.moveBy(4, 1000, 0))
    sprs[2].frame([res.niao2, res.niao1], 0.45, 0)
    sprs[2].runAction(cc.moveBy(4, -800, 0))

    this.schedule(function() {
      sprs[3].frame([res.niao3, res.niao4], 0.45, 2)
    }, 3.8, cc.repeat(2), 1)

    sprs[4].frame([res.youniao1, res.youniao2], 0.45, 0)
    sprs[5].frame([res.youniao1, res.youniao2], 0.47, 0)

    sprs.forEach(function(item, index){
      if(index > 5){
        item.frame([res.cao2, res.cao1], getNum(8, 11) / 10 , 0)
      }
    })

    this.scheduleOnce(function() {
      sprs[0].stopAllActions()
      sprs[1].stopAllActions()
      sprs[2].stopAllActions()
      sprs[4].stopAllActions()
      sprs[5].stopAllActions()
      this.right()
      this.next()
    }, 4)
  }
})

