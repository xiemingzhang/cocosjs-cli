
var Layer15 = MyLayer.extend({
  onEnter: function () {
    this._super()
    var size = cc.winSize
    var self = this
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    // this.btn = this.createBtn('下一页：分句欣赏12/18')
    // var clip = new cc.LayerColor(cc.color(0, 0, 0), 1920, 1080)
    // clip.setAnchorPoint(0, 0)
    // clip.setScale(1)
    // clip.setPosition(0, 0)

    // var mask = new cc.ClippingNode(clip)
    // mask.setAnchorPoint(0, 0)
    // this.addChild(mask, 12)
    // mask.addChild(bg)

    this.sprs = this.sprites(gameData.layer15_data, true)
    // this.sprs.forEach(function(item){
    //   mask.addChild(item, item.data.zindex)
    // })

    this.sprs.forEach(function(item, index){
      if(index > 5 && index < 15){
        item.y = 635
      }
    })
  },
  onStart: function(num){
    num !== 1 && sound.s15_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].runAction(cc.moveBy(18, -800, 0))

    sprs.forEach(function(item, index){
      var r = getNum(4, 6)
      var dy = 635 - item.data.pos[1]
      var _x = item.x
      var _y = item.y
      if(index > 5 && index < 15){
        item.runAction(cc.cardinalSplineTo(r, [cc.p(_x, _y), cc.p(_x-25, _y-dy/4), cc.p(_x-50, _y-dy/2), cc.p(_x-50, _y-dy/4*3), cc.p(_x-25, _y-dy)], 0))
      }
    })

    sprs.forEach(function(item, index){
      if(index > 14){
        item.frame([res.cao2, res.cao1], getNum(8, 11) / 10 , 0)
      }
    })

    sprs[2].frame([res.youniao1, res.youniao2], 0.45, 0)
    sprs[3].frame([res.youniao1, res.youniao2], 0.47, 0)

    sprs[4].frame([res.niao2, res.niao1], 0.5, 0)
    sprs[4].runAction(cc.moveBy(9, 1300, 0))
    sprs[5].frame([res.niao2, res.niao1], 0.45, 0)
    sprs[5].runAction(cc.moveBy(9, -1000, 0))

    this.scheduleOnce(function(){
      sprs[2].runAction(cc.sequence(
        cc.moveBy(0.6, -30, 0),
        cc.moveBy(1.2, 60, 0),
        cc.moveBy(0.6, -30, 0)
      ))
      sprs[3].runAction(cc.sequence(
        cc.moveBy(0.6, -30, 0),
        cc.moveBy(1.2, 60, 0),
        cc.moveBy(0.6, -30, 0)
      ))
      sprs[1].runAction(cc.sequence(
        cc.rotateBy(0.6, -1.5),
        cc.rotateBy(1.2, 3),
        cc.rotateBy(0.6, -1.5)
      ).repeat(1))
    },3)

    this.scheduleOnce(function() {
      sprs[2].stopAllActions()
      sprs[3].stopAllActions()
      sprs[4].stopAllActions()
      sprs[5].stopAllActions()
      this.next()
    }, 9)
  }
  // update: function (dt) {

  // }
})

