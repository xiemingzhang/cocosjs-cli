var Layer12 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize
    var self = this

    var bg = new cc.Sprite(res.背景5)
    bg.setScale(size.height / bg.height)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：情景学习 11/14')

    var sprs = this.sprs = this.sprites(layer12_data[0], true)
  },
  onStart: function(){
    sound.a_12_sound()
    var self = this
    var sprs = this.sprs

    sprs.forEach(function(item, index){
      if(index !== 0){
        self.scheduleOnce(function(){
          item.flash(0.5,1)
        }, index)
      }
    })
    
    this.scheduleOnce(function(){
      this.next()
    }, 8)
  }
  // update: function (dt) {

  // }
})
