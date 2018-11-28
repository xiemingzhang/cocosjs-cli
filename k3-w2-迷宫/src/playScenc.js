// 背景层
var BgLayer = cc.Layer.extend({
  ctor: function (bg) {
    this._super()
    // 默认有公共场景在这里创建
    var size = cc.director.getWinSize()
    var sprite = cc.Sprite.create(bg)
    sprite.setPosition(size.width / 2, size.height / 2)
    sprite.setScale(size.height / sprite.height) // 全屏显示
    this.addChild(sprite, 1)
    sound.gameBgAudio()
  }
})

var MyScene = cc.Scene.extend({
  onEnter: function () {
    this._super()
    /* 添加背景层*/
    var layerBg = new BgLayer(res.bg)
    this.addChild(layerBg, 0)

    var layer01 = new Layer01()
    this.addChild(layer01, 1)

		var star = new StarLayer(common_data[0])// 初始化关卡数据
		this.addChild(star, 50, 50)// 添加公共头部
    // cc.textureCache.dumpCachedTextureInfo();
  }
})

// var MyScene1 = cc.Scene.extend({
//	onEnter: function () {
//		this._super();
//		var layerBg = new BgLayer(res.one_bg);
//		this.addChild(layerBg, 0);
//		/*添加背景层*/
//		var layer1 = new Layer1();
//		this.addChild(layer1, 1);
//	}
// })

