var StartScene = cc.Scene.extend({
  ctor: function(){
    this._super()

    // sound.gameBgAudio()
    this.l = 0
     /* 飞星层*/
    // this.starLayer = new StarLayer(common_data[1])
    // this.starLayer = new StarLayer(common_data[0])
    // this.addChild(this.starLayer, 100, 2)
    // 返回游戏列表
    // this.starLayer.gameClose()
    // 返回游戏首场景
    // this.starLayer.goBack()
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize

    // sound.gameBgAudio()
    this.layerArr = [Layer01, Layer02, Layer03, Layer04, Layer05, Layer07, Layer08, Layer081, Layer09, Layer10, Layer11, Layer12, Layer13, Layer14, Layer15, Layer16, Layer17, Layer18, Layer19, Layer20, Layer21]
    // this.randomArr = shuffle([0])
    this.randomArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21]

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
  wrong: function(){
    sound.wrongAudio()
    this.starLayer.wrongStar()
  },
  nextLayer: function(t, n){
    this.l++
    if(t >= 0){
      var time = t
    }else{
      var time = 2.5
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
      // this.finish(t)
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
  },
  dataRefresh: function () {
    var sum = 0
    common_data.slice(1).forEach(function (value, index, arr) {
      sum += value.obtain
    })

    common_data[0].obtain = sum
    // cc.log(common_data)
  }
})
