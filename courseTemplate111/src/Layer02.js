var Layer02 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg1)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：导入环节 2/2')

    this.sprs = this.sprites(gameData.layer021_data, true)

  },
  onStart: function() {
    sound.s2_sound()
    var self = this
    var sprs = this.sprs

    sprs[0].frame([res.miya3, res.miya4], 0.5, 0)

    this.scheduleOnce(function(){
      sprs[0].stopAllActions()
      sprs.forEach(function(item){
        item.runAction(cc.fadeOut(1))
      })
      sprs = this.sprites(gameData.layer02_data, true)
      sprs.forEach(function(item){
        item.runAction(cc.fadeIn(2))
      })
    }, 6)

    this.scheduleOnce(function(){
      sprs[0].enlarge(1.1, 0.6, 1)
    }, 10)

    this.scheduleOnce(function(){
      sprs[1].enlarge(1.1, 0.6, 1)
    }, 12)

    this.scheduleOnce(function(){
      sprs[2].enlarge(1.1, 0.6, 1)
    }, 14)

    this.scheduleOnce(function(){
      sprs[3].enlarge(1.1, 0.6, 1)
    }, 16)

    this.scheduleOnce(function() {
      this.next()
    }, 19)
  }
  // update: function (dt) {

  // }
})

