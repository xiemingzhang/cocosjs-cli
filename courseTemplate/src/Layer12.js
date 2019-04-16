var Layer12 = MyLayer.extend({
  ctor: function(){
    this._super(cc.color(255,255,255,255))
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.starspace)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[11])
    this.sprs = this.sprites(gameData.layer12, true)
  },
  onStart: function(num) {
    sound.s12_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].runAction(cc.moveBy(1, -1920, 0))

    // sprs[2].progress(3, 'left')
    this.scheduleOnce(function(){
      sprs[2].runAction(cc.fadeIn(3))
    }, 3)

    this.scheduleOnce(function(){
      sprs[4].runAction(cc.scaleTo(1, 1))
    }, 5)

    this.scheduleOnce(function() {
      this.next()
    }, 28)
  }
  // update: function (dt) {

  // }
})

