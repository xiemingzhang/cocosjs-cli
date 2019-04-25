var Layer07 = MyLayer.extend({
  ctor: function(){
    this._super(cc.color(255,255,255,255))
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[6])

    this.sprs = this.creatSprites(gameData.layer07)
  },
  onStart: function(num) {
    // sound.s7_sound()
    var self = this
    var sprs = this.sprs

    this.scheduleOnce(function(){
      sprs[3].flash(0.8, 1)
      sprs[9].runAction(cc.fadeIn(0.8))
    }, 1)

    this.scheduleOnce(function(){
      sprs[4].flash(0.8, 1)
      sprs[10].runAction(cc.fadeIn(0.8))
    }, 3)

    this.scheduleOnce(function(){
      sprs[6].flash(0.8, 1)
      sprs[11].runAction(cc.fadeIn(0.8))
    }, 5)

    this.scheduleOnce(function(){
      sprs[5].flash(0.8, 1)
      sprs[12].runAction(cc.fadeIn(0.8))
    }, 7)

    this.scheduleOnce(function(){
      sprs[7].flash(0.8, 1)
      sprs[13].runAction(cc.fadeIn(0.8))
    }, 9)

    this.scheduleOnce(function(){
      sprs[8].flash(0.8, 1)
      sprs[14].runAction(cc.fadeIn(0.8))
    }, 11)

    this.scheduleOnce(function() {
      this.next()
    }, 15)
  }
  // update: function (dt) {

  // }
})

