var PlayScene = MyScene.extend({
  ctor: function(){
    this._super()
    this.l = 0
     /* 飞星层*/
    this.starLayer = new StarLayer(common_data[1])
    // this.starLayer = new StarLayer(common_data[0])
    this.addChild(this.starLayer, 100, 2)
    // 返回游戏列表
    this.starLayer.gameClose()
    // 返回游戏首场景
    // this.starLayer.goBack()
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize

    // var bg = new cc.Sprite(res.beijing)
    // bg.setScale(size.height / bg.height)
    // bg.setAnchorPoint(0.5, 0.5)
    // bg.setPosition({x: size.width / 2, y: size.height / 2})
    // this.addChild(bg)

    // sound.gameBgAudio()
    this.layerArr = [Layer01]
    // this.randomArr = shuffle([0])
    this.randomArr = [0]

    var layer = new this.layerArr[this.randomArr[0]]()
    this.addChild(layer)
    this.addedLayer = layer
  },
  reListen: function(){
    cc.eventManager.removeAllListeners()
    // 返回游戏列表
    this.starLayer.gameClose()
  },
  right: function(){
    // sound.stopAllEffects()
    sound.starAudio()
    common_data[1].obtain++
    this.starLayer.rightStar(common_data[1].obtain)
    this.dataRefresh()
  },
  nextLayer: function(t, n){
    this.l++
    if(t >= 0){
      var time = t
    }else{
      var time = 1.5
    }
    if(this.l < this.randomArr.length){
      this.scheduleOnce(function(){
        // sound.stopAllEffects()
        var layer = new this.layerArr[this.randomArr[this.l]](n)
        this.addChild(layer)
        this.addedLayer.removeFromParent()
        this.addedLayer = layer
      }.bind(this), time)
    }else{
      this.finish(t)
    }
  },
  finish: function (t) {
    // updata.is_finish = 1
    if(t >= 0){
      var time = t
    }else{
      var time = 1.5
    }
    this.scheduleOnce(function(){
      sound.stopAudio()
      sound.stopAllEffects()
      sound.winAudio()
      this.starLayer.gameEnd(common_data[0].obtain)
    }.bind(this), time)
  }
})
