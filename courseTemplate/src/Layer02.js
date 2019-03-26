var Layer02 = MyLayer.extend({
  onEnter: function(){
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg1)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：物品点数 1/12')

    this.sprs = this.sprites(gameData.layer02_data, true)

  },
  onStart: function(){

    // sound.s2_sound()
    var self = this
    var sprs = this.sprs

    var left = new cc.ProgressTimer(new cc.Sprite(res.talk11))
      left.setAnchorPoint(0,0)
      left.type = cc.ProgressTimer.TYPE_BAR
      //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
      left.midPoint = cc.p(0, 0)
      //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
      left.barChangeRate = cc.p(1, 0)
      left.x = 258 + 60
      left.y = 802 + 60
      this.addChild(left, 5)
      left.runAction(cc.progressTo(5, 100))

      this.scheduleOnce(function(){
        var right = new cc.ProgressTimer(new cc.Sprite(res.talk12))
        right.setAnchorPoint(0,0)
        right.type = cc.ProgressTimer.TYPE_BAR
        //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
        right.midPoint = cc.p(0, 0)
        //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
        right.barChangeRate = cc.p(1, 0)
        right.x = 258
        right.y = 802
        this.addChild(right, 5)
        right.runAction(cc.progressTo(5, 100))
      }, 5.2)

    sprs[2].frame([res.anna2, res.anna1], 0.65, 0)
    sprs[0].frame([res.jieni1, res.jieni2], 0.6, 0)

    this.scheduleOnce(function(){
      sprs[2].stopAllActions()
      sprs[0].stopAllActions()
      this.next()
    }, 10)
  }
  // update: function (dt) {

  // }
})

