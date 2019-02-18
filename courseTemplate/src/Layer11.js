var Layer11 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize
    var self = this

    var bg = new cc.Sprite(res.背景)
    bg.setScale(size.height / bg.height * 1.25)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：情景学习 10/14')

    var sprs = this.sprs = this.sprites(layer11_data[0], true)
  },
  onStart: function(){
    sound.a_11_sound()
    var self = this
    var sprs = this.sprs
    // this.scheduleOnce(function(){
    //   sprs[0].flash(0.5, 1, 1)
    // }, 6.5)

    // this.scheduleOnce(function(){
    //   sprs[1].flash(0.5, 1, 1)
    // }, 7.5)

    // this.scheduleOnce(function(){
    //   sprs[2].flash(0.5, 1, 1)
    // }, 8.5)

    // this.scheduleOnce(function(){
    //   sprs[3].flash(0.5, 1, 1)
    // }, 9.5)

    this.scheduleOnce(function(){
      this.next()
    }, 4)
  }
  // update: function (dt) {

  // }
})

