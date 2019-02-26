var Layer02 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function(){
    this._super()
    var size = cc.winSize

    var bg = new cc.Sprite(res.创意旗帜02)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：导入环节 2/2')

    // this.sprs = this.sprites(layer02_data[0], true)

  },
  onStart: function(){

    sound.s2_sound()
    var self = this
    var sprs = this.sprs

    this.scheduleOnce(function(){
      this.next()
    }, 8)
  }
  // update: function (dt) {

  // }
})

