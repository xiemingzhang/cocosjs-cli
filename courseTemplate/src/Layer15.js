var Layer15 = MyLayer.extend({
  ctor: function() {
    this._super(cc.color(255, 255, 255, 255))
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[14])
    this.sprs = this.creatSprites(gameData.layer15)
  },
  onStart: function(num) {
    // sound.s15_sound()
    var self = this
    var sprs = this.sprs

    this.scheduleOnce(function() {
      sprs[2].runAction(cc.fadeIn(0.8))
    }, 1)

    this.scheduleOnce(function() {
      sprs[1].runAction(cc.fadeIn(0.8))
    }, 2)

    this.scheduleOnce(function() {
      sprs[0].runAction(cc.fadeIn(0.8))
    }, 3)

    this.scheduleOnce(function() {
      var pos1 = cc.p(sprs[0].x, sprs[0].y)
      var pos2 = cc.p(sprs[1].x, sprs[1].y)
      var pos3 = cc.p(sprs[2].x, sprs[2].y)
      sprs[2].runAction(cc.moveTo(0.8, pos1))
      sprs[0].runAction(cc.moveTo(0.8, pos2))
      sprs[1].runAction(cc.moveTo(0.8, pos3))
    }, 4)

    this.scheduleOnce(function() {
      sprs[5].runAction(cc.fadeIn(0.8))
    }, 5)

    this.scheduleOnce(function() {
      sprs[4].runAction(cc.fadeIn(0.8))
    }, 6)

    this.scheduleOnce(function() {
      sprs[3].runAction(cc.fadeIn(0.8))
    }, 7)

    this.scheduleOnce(function() {
      this.next()
    }, 9)
  }
  // update: function (dt) {

  // }
})

