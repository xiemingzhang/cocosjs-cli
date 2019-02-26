
var Layer16 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize
    var self = this

    var bg = new cc.Sprite(res.s02背景)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    var sprs = this.sprs = this.sprites(layer16_data[0], true)
  },
  onStart: function(){
    sound.s16_sound()
    var self = this
    var sprs = this.sprs

    sprs[1].frame([res.s03米丫01, res.s03米丫02], 0.5, 0)

    this.scheduleOnce(function(){
      sprs[1].stopAllActions()
      this.next()
    }, 12)
  }
  // update: function (dt) {

  // }
})

