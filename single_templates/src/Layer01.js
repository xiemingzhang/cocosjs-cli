var Layer01 = MyLayer.extend({
  ctor: function () {
    this._super()
    this.fix_height = 180 / fix - 180
    return true
  },
  onEnter: function(){
    this._super()
    var size = cc.winSize

    var sprs = this.sprites(layer01_data[0])
    var self = this
    // sprs.forEach(function(item){
    //   item.addOneByOneListener(
    //     function(touch, event){

    //     }.bind(self),
    //     function(touch, event){

    //     }.bind(self),
    //     function(touch, event){

    //     }.bind(self)
    //   )
    // })

    var bg = new cc.Sprite(res.bg)
    bg.setScale(size.height / bg.height)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    // cc.eventManager.addListener(this.listener(), this)
  },
  // update: function (dt) {

  // }
})

