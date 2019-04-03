var Layer01 = MyLayer.extend({
  onEnter: function(){
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg)
    // bg.setScale(size.height / bg.height)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    // this.sprs = this.sprites(gameData.layer01_data, true)
  },
  onStart: function(){
    var self = this

    // var sprs = this.sprs

    cc.log(1)

    // sprs[1].runAction(cc.rotateBy(1, 360))
    // sprs[1].runAction(cc.scaleTo(1, 1))

    // this.scheduleOnce(function(){
    //   sprs[0].runAction(cc.moveBy(0.8, 0, -200).easing(cc.easeCircleActionIn(0.8)))
    // }, 1.5)
    
    this.scheduleOnce(function(){
      this.next()
    }, 2.5)
  }
  // update: function (dt) {

  // }
})

