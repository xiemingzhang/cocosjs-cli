
var Layer17 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize
    var self = this

    var bg = new cc.Sprite(res.g_02背景)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    // this.createBtn('下一页：思考练习2/4')
    var sprs = this.sprs = this.sprites(layer17_data[0], true)
  },
  onStart: function(){
    sound.s17_sound()
    var self = this
    var sprs = this.sprs

     sprs[2].frame([res.g_03米丫01, res.g_03米丫02], 0.5, 0)

    this.scheduleOnce(function(){
      sprs[2].stopAllActions()
      this.next()
    }, 13)
  }
  // update: function (dt) {

  // }
})

