var Layer05 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg02)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[4])

    this.sprs = this.sprites(gameData.layer05, true)
  },
  onStart: function(num) {
    sound.s5_sound()
    var self = this
    var sprs = this.sprs

    sprs[2].frame([res.nf2, res.nf1], 0.5, 2)

    this.scheduleOnce(function(){
      sprs[2].frame([res.nf8, res.nf7], 0.5, 4)
    }, 3)

    this.scheduleOnce(function(){
      sprs[1].setTexture(res.zd2)
      sprs[2].x = 779
      sprs[2].y = 281
      sprs[2].frame([res.nf3, res.nf4, res.nf5], 0.5, 1)
      this.scheduleOnce(function(){
        sprs[3].opacity = 255
        sprs[2].runAction(cc.moveBy(0.05, 130, 0))
        sprs[2].frame([res.nf3, res.nf4, res.nf5], 0.5, 1)
      }, 1)
      this.scheduleOnce(function(){
        sprs[3].opacity = 0
        sprs[2].opacity = 0
         sprs[1].setTexture(res.zd3)
      }, 3)
    }, 8)

    this.scheduleOnce(function(){
      sprs[1].setTexture(res.zd4)
      sprs[4].opacity = 255
      sprs[5].opacity = 255
      
      sprs[5].frame([res.padong1, res.padong2], 0.6, 2)
      this.scheduleOnce(function(){
        sprs[4].frame([res.shachongji2, res.shachongji1], 0.5, 2)
      }, 1.3)
      this.scheduleOnce(function(){
        sprs[5].removeFromParent()
      }, 2.6)
    }, 16)

    this.scheduleOnce(function(){
       sprs[4].removeFromParent()
       sprs[6].opacity = 255
       sprs[6].runAction(cc.rotateBy(0.8, -50))
       sprs[6].runAction(cc.moveBy(0.8, 50, -50))
       this.scheduleOnce(function(){
         sprs[7].opacity = 255
         sprs[7].runAction(cc.fadeOut(0.8))
       }, 1)
    }, 18.5)

    this.scheduleOnce(function(){
      sprs[6].removeFromParent()
      sprs[7].removeFromParent()
      sprs[1].setTexture(res.zd5)
    }, 20)

    this.scheduleOnce(function(){
      sprs[1].setTexture(res.zd1)
      sprs[8].opacity = 255
      sprs[9].opacity = 255
      sprs[10].opacity = 255
      sprs[11].opacity = 255
      sprs[12].opacity = 255
      sprs[8].frame([res.shuidaosg1, res.shuidaosg2, res.shuidaosg3], 0.65, 1)
      sprs[9].runAction(cc.moveBy(2, -200, 0))
      sprs[10].runAction(cc.moveBy(2, -200, 0))
      sprs[10].runAction(cc.rotateBy(2, -360 * 3))
      sprs[11].runAction(cc.moveBy(2, -200, 0))
      sprs[11].runAction(cc.rotateBy(2, -360 * 3))
      sprs[12].runAction(cc.moveBy(2, -200, 0))
      sprs[12].runAction(cc.rotateBy(2, -360 * 3))
    }, 23.5)

    this.scheduleOnce(function(){
      sprs[1].setTexture(res.zd7)
      sprs[8].removeFromParent()
      sprs[9].removeFromParent()
      sprs[10].removeFromParent()
      sprs[11].removeFromParent()
      sprs[12].removeFromParent()
      sprs[13].opacity = 255
      sprs[14].opacity = 255
      sprs[15].opacity = 255
      sprs[14].flash(0.65, 2)
      sprs[15].flash(0.65, 2)
    }, 26)

    this.scheduleOnce(function(){
      sprs[1].setTexture(res.zd8)
      sprs[13].removeFromParent()
      sprs[14].removeFromParent()
      sprs[15].removeFromParent()
      sprs[16].opacity = 255
      sprs[17].opacity = 255
      sprs[18].opacity = 255
      sprs[19].opacity = 255
      sprs[20].opacity = 255
    }, 28)

    this.scheduleOnce(function() {
      // sprs[0].stopAllActions()
      this.next()
    }, 33)
  }
  // update: function (dt) {

  // }
})

