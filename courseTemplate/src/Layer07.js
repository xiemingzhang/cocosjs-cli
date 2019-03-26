var Layer07 = MyLayer.extend({
onEnter: function () {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg1)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：物品点数 6/12')

    this.sprs = this.sprites(gameData.layer07_data, true)
  },
  onStart: function(){
    var self = this
    var sprs = this.sprs

    sprs[0].frame([res.aimi1, res.aimi2], 0.5, 0)

    var left = new cc.ProgressTimer(new cc.Sprite(res.talk6))
    left.setAnchorPoint(0, 0)
    left.type = cc.ProgressTimer.TYPE_BAR
    //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
    left.midPoint = cc.p(0, 0)
    //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
    left.barChangeRate = cc.p(1, 0)
    left.x = 587 * fix
    left.y = 898
    this.addChild(left, 5)
    left.runAction(cc.progressTo(4, 100))

    sprs.forEach(function(item, index) {
      if(index > 1) {
        item.frame([res.banana2, res.banana1], 0.5, 3)
      }
    })

    this.scheduleOnce(function(){
      sprs[0].stopAllActions()
      this.next()
    }, 5)
  }
  // update: function (dt) {

  // }
})

