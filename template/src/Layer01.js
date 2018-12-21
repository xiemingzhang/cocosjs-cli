var Layer01 = MyLayer.extend({
  ctor: function () {
    this._super()
    this.fix_height = 180 / fix - 180

    return true
  },
  onEnter: function(){
    this._super()
    var size = cc.winSize
    var self = this

    var bg = new cc.Sprite(res.bg)
    bg.setScale(size.height / bg.height)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    var sprs = this.sprites(layer01_data[0], true)

    // sprs[3].clickEvent(
    //   function(target){
    //     sprs[4].removeFromParent()
    //     sprs[5].removeFromParent()
    //     sprs[3].frame([res.cat_1_close_eye, res.cat_1_smail], 0.5, 0)
    //     sprs[7].setOpacity(255)
    //     sprs[7].runAction(cc.sequence(
    //       cc.rotateBy(0.6, -5),
    //       cc.rotateBy(0.6, 5)
    //     ).repeatForever())
    //     sprs[8].setOpacity(255)
    //     sprs[8].runAction(cc.sequence(
    //       cc.rotateBy(0.6, 5),
    //       cc.rotateBy(0.6, -5)
    //     ).repeatForever())

    //     self.scheduleOnce(function(){
    //       sound.camera2_sound()
    //       var layer = new cc.LayerColor(cc.color(255, 255, 255), size.width, size.height)
    //       layer.setOpacity(255)
    //       self.addChild(layer, 9)
    //       layer.runAction(cc.fadeOut(0.1))
    //     }, 0.8)

    //     self.scheduleOnce(function(){
    //       var sp = capture(0, 0, size.width, size.height)
    //       sp.setPosition(size.width / 2, size.height / 2)
    //       sp.setAnchorPoint(0.5, 0.5)
    //       sp.setRotation(5)
    //       sp.setScale(3 / 4)
    //       self.addChild(sp, 3)

    //       var layer = new cc.LayerColor(cc.color(0, 0, 0), size.width, size.height)
    //       layer.setOpacity(200)
    //       self.addChild(layer, 2)

    //       sprs[7].removeFromParent()
    //       sprs[8].removeFromParent()
    //       sprs[3].removeFromParent()

    //       self.next()

    //     }, 1)
    //   },
    //   function(target){
    //     target.removeEvent()
    //   }
    // )
  }
  // update: function (dt) {

  // }
})

