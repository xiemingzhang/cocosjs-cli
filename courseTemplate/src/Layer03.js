var Layer03 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg1)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[2])

    this.sprs = this.creatSprites(gameData.layer03)
  },
  onStart: function(num) {
    // sound.s3_sound()
    var self = this
    var sprs = this.sprs

    sprs[1].flash(0.35, 2)
    sprs[0].frame([res.miya2, res.miya1], 0.5, 0)

    this.scheduleOnce(function(){
      sprs[1].runAction(cc.fadeOut(0.8))
      sprs[2].runAction(cc.fadeIn(0.8))
      sprs[3].runAction(cc.fadeIn(0.8))
    }, 1.5)

    this.scheduleOnce(function(){
      sprs[0].stopAllActions()
      sprs[0].setTexture(res.miya3)
      sprs[0].x += 18
      sprs[0].setScale(0.99)
      sprs[0].frame([res.miya3, res.miya4], 0.5, 0)
      sprs[6].y += 27
      sprs[6].setTexture(res.yifu2)
      sprs[4].runAction(cc.fadeIn(0.8))
      sprs[5].runAction(cc.fadeIn(0.8))
    }, 2.3)

    this.scheduleOnce(function(){
      sprs[0].stopAllActions()
      sprs[0].setTexture(res.miya1)
      sprs[0].x -= 18
      sprs[0].setScale(0.85)
      sprs[0].frame([res.miya1, res.miya2], 0.5, 0)

      sprs[2].runAction(cc.fadeOut(0.8))
      sprs[3].runAction(cc.fadeOut(0.8))

      sprs[4].runAction(cc.fadeOut(0.8))
      sprs[5].runAction(cc.fadeOut(0.8))
      sprs[6].runAction(cc.fadeOut(0.8))

      sprs[7].runAction(cc.fadeIn(0.8))
      sprs[8].runAction(cc.fadeIn(0.8))
      sprs[9].runAction(cc.fadeIn(0.8))
      sprs[10].runAction(cc.fadeIn(0.8))
      sprs[12].opacity = 255

      sprs[12].runAction(cc.sequence(
         cc.fadeTo(0.5, 100),
         cc.fadeTo(0.5, 255)
      ).repeatForever())
    }, 5)

    this.scheduleOnce(function() {
      sprs[0].stopAllActions()
      this.next()
    }, 8)
  }
  // update: function (dt) {

  // }
})

