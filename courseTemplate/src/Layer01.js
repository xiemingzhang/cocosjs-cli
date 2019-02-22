var Layer01 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function(){
    this._super()
    var size = cc.winSize
    var self = this

    var bg = new cc.Sprite(res.g_01背景)
    // bg.setScale(size.height / bg.height)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    // var sprs = this.sprites(layer01_data[0], true)
    // sprs[1].y = size.height

  },
  onStart: function(){
    var self = this
    
    this.scheduleOnce(function(){
      this.next()
    }, 2.5)
  }
  // update: function (dt) {

  // }
})

