var Layer01 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function(){
    this._super()
    var size = cc.winSize

    var bg = new cc.Sprite(res.第一张图)
    // bg.setScale(size.height / bg.height)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.sprs = this.sprites(layer01_data[0], true)

  },
  onStart: function(){
    var self = this

    var sprs = this.sprs

    sprs[1].runAction(cc.rotateBy(1, 360))
    sprs[1].runAction(cc.scaleTo(1, 1))

    this.scheduleOnce(function(){
      sprs[0].runAction(cc.moveBy(0.8, 0, -200).easing(cc.easeCircleActionIn(0.8)))
    }, 1.5)
    
    this.scheduleOnce(function(){
      this.next()
    }, 2.5)
  }
  // update: function (dt) {

  // }
})

