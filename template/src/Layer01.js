var Layer01 = MyLayer.extend({
  onEnter: function() {
    this._super()
    this.fix_height = 180 / fix - 180
    var size = cc.winSize
    var self = this

    // add bg
    var layer = new cc.LayerColor(cc.color(105, 185, 220), size.width / 2, size.height)
    // 颜色只能用cc.color,不能直接写”red“
    layer.setPosition(cc.p(0, 0))
    this.addChild(layer)

    layer = new cc.LayerColor(cc.color(82, 152, 201), size.width / 2, size.height)
    layer.setPosition(cc.p(size.width / 2, 0))
    this.addChild(layer)

    var sprs = this.sprites(gameData.layer01_data, true)
  }
})

