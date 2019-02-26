var Layer04 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize

    var bg = new cc.Sprite(res.s02背景)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：认识旗帜 2/8')

    this.sprs = this.sprites(layer04_data[0], true)
  },
  onStart: function(){

    sound.s4_sound()
    var self = this
    var sprs = this.sprs

    // var action1 = cc.scaleTo(0.5, 0.8/3)
    // var action2 = cc.scaleTo(0.5, 1/3)
    // var action3 = cc.rotateBy(2, 360)
    // var action4 = cc.rotateBy(2, -360)

    // sprs[1].runAction(cc.sequence(action1.clone(), action2.clone()).repeatForever())

    // sprs[2].runAction(cc.sequence(action3.clone()).repeatForever())

    // sprs[3].runAction(cc.sequence(action1.clone(), action2.clone()).repeatForever())

    // sprs[4].runAction(action4.repeatForever())

    // sprs[5].runAction(cc.sequence(action1.clone(), action2.clone()).repeatForever())
    // 
    
    this.scheduleOnce(function(){
      this.next()
    }, 7)
  }
  // update: function (dt) {

  // }
})

