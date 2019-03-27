var Layer10 = MyLayer.extend({
  onEnter: function () {
    this._super()
    var size = cc.winSize
    var self = this
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg04)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：分句欣赏 5/11')

    this.sprs = this.sprites(gameData.layer10_data, true)
  },
  onStart: function(){
    // sound.s10_sound()
    // sound.niaojiao_sound()
    var sprs = this.sprs

    var left = new cc.ProgressTimer(new cc.Sprite(res.chi16))
    left.setAnchorPoint(0, 0)
    left.type = cc.ProgressTimer.TYPE_BAR
    //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
    left.midPoint = cc.p(0, 1)
    //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
    left.barChangeRate = cc.p(0, 1)
    left.x = 817
    left.y = 910
    this.addChild(left, 5)
    left.runAction(cc.progressTo(2, 100))

    sprs.forEach(function(item, index){
       if(index > 0){
         item.frame([res.frogg3, res.frogg1], 0.5, 3)
       }
    })

    this.scheduleOnce(function() {
      this.next()
    }, 3)
  }
  // update: function (dt) {

  // }
})

