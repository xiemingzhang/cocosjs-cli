var Layer10 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    var self = this
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg1)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：总结结束1/1')

    this.sprs = this.sprites(gameData.layer10_data, true)
  },
  onStart: function() {
    sound.s10_sound()
    var sprs = this.sprs

    this.scheduleOnce(function(){
      sprs[0].flash(0.5, 1)
    }, 11)

    this.scheduleOnce(function(){
      sprs[1].flash(0.5, 1)
    }, 13) 

    this.scheduleOnce(function(){
      sprs[2].flash(0.5, 1)
    }, 14.5)

    this.scheduleOnce(function(){
      sprs[3].flash(0.5, 1)
    }, 16.5)

    this.scheduleOnce(function(){
      sprs[4].flash(0.5, 1)
    }, 18)

    this.scheduleOnce(function(){
      sprs[5].flash(0.5, 1)
    }, 20)

    this.scheduleOnce(function(){
      sprs[6].flash(0.5, 1)
    }, 21.5)

    this.scheduleOnce(function(){
      sprs[7].flash(0.5, 1)
    }, 23.5)

    this.scheduleOnce(function() {
      this.next()
    }, 25)
  }
  // update: function (dt) {

  // }
})

