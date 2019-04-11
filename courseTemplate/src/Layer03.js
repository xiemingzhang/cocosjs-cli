var Layer03 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.createBtn(textArr[2])

    this.sprs = this.sprites(gameData.layer03, true)
  },
  onStart: function(num) {
    sound.s3_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].progress(10.5, 'left')
    this.scheduleOnce(function(){
       sprs[1].progress(1.5, 'left')
    }, 10.5)

    this.scheduleOnce(function() {
      this.next()
    }, 13)
  }
  // update: function (dt) {

  // }
})

