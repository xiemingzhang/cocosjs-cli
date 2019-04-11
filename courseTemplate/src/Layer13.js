
var Layer13 = MyLayer.extend({
  ctor: function() {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    // this.btn = this.createBtn('下一页：分句欣赏10/18')
    // var clip = new cc.LayerColor(cc.color(0, 0, 0), 1920, 1080)
    // clip.setAnchorPoint(0, 0)
    // clip.setScale(1)
    // clip.setPosition(0, 0)

    // var mask = new cc.ClippingNode(clip)
    // mask.setAnchorPoint(0, 0)
    // this.addChild(mask, 12)
    // mask.addChild(bg)

    this.sprs = this.sprites(gameData.layer13_data, true)
    // this.sprs.forEach(function(item){
    //   mask.addChild(item, item.data.zindex)
    // })
  },
  onStart: function(num) {
    num !== 1 && sound.s13_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].runAction(cc.moveBy(18, -800, 0))

    this.schedule(function(){
      sprs[1].frame([res.dashu2, res.dashu1], 0.7, 1)
    }, 3.8, cc.repeat(2), 1)

    sprs.forEach(function(item, index){
      if(index > 1){
        item.frame([res.cao2, res.cao1], getNum(8, 11) / 10 , 0)
      }
    })
    // sprs[1].frame([res.miya5, res.miya6], 0.5, 0)

    this.scheduleOnce(function() {
      sprs[1].stopAllActions()
      this.next()
    }, 2)
  }
  // update: function (dt) {

  // }
})

