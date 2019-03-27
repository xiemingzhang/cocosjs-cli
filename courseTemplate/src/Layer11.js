var Layer11 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg2)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    // this.btn = this.createBtn('下一页：物品点数 10/12')

    this.sprs = this.sprites(gameData.layer11_data, true)
  },
  onStart: function() {
    // sound.s11_sound()
    var self = this
    var sprs = this.sprs
    var size = cc.winSize

    sprs[0].setLocalZOrder(50)
    sprs[0]._x = sprs[0].x
    sprs[0]._y = sprs[0].y
    sprs[0].runAction(cc.moveTo(0.6, size.width / 2, size.height / 2))
    sprs[0].runAction(cc.sequence(
      cc.scaleBy(0.6, 2),
      cc.delayTime(1.2),
      cc.spawn(
        cc.scaleBy(0.6, 1 / 2),
        cc.moveTo(0.6, sprs[0]._x, sprs[0]._y)
      ),
      cc.delayTime(0.2),
      cc.callFunc(function() {
        sprs[0].setLocalZOrder(5)
      })
    ))

    this.scheduleOnce(function() {
      sprs[1].setLocalZOrder(50)
      sprs[1]._x = sprs[1].x
      sprs[1]._y = sprs[1].y
      sprs[1].runAction(cc.moveTo(0.6, size.width / 2, size.height / 2))
      sprs[1].runAction(cc.sequence(
        cc.scaleBy(0.6, 2),
        cc.delayTime(1.2),
        cc.spawn(
          cc.scaleBy(0.6, 1 / 2),
          cc.moveTo(0.6, sprs[1]._x, sprs[1]._y)
        ),
        cc.delayTime(0.2),
        cc.callFunc(function() {
          sprs[1].setLocalZOrder(5)
        })
      ))
    }, 2.4)

    this.scheduleOnce(function() {
      sprs[2].setLocalZOrder(50)
      sprs[2]._x = sprs[2].x
      sprs[2]._y = sprs[2].y
      sprs[2].runAction(cc.moveTo(0.6, size.width / 2, size.height / 2))
      sprs[2].runAction(cc.sequence(
        cc.scaleBy(0.6, 2),
        cc.delayTime(1.2),
        cc.spawn(
          cc.scaleBy(0.6, 1 / 2),
          cc.moveTo(0.6, sprs[2]._x, sprs[2]._y)
        ),
        cc.delayTime(0.2),
        cc.callFunc(function() {
          sprs[2].setLocalZOrder(5)
        })
      ))
    }, 4.8)

    this.scheduleOnce(function() {
      sprs[3].setLocalZOrder(50)
      sprs[3]._x = sprs[3].x
      sprs[3]._y = sprs[3].y
      sprs[3].runAction(cc.moveTo(0.6, size.width / 2, size.height / 2))
      sprs[3].runAction(cc.sequence(
        cc.scaleBy(0.6, 2),
        cc.delayTime(1.2),
        cc.spawn(
          cc.scaleBy(0.6, 1 / 2),
          cc.moveTo(0.6, sprs[3]._x, sprs[3]._y)
        ),
        cc.delayTime(0.2),
        cc.callFunc(function() {
          sprs[3].setLocalZOrder(5)
        })
      ))
    }, 7.2)

    this.scheduleOnce(function() {
      sprs[0].stopAllActions()
      this.next()
    }, 9)
  }
  // update: function (dt) {

  // }
})

