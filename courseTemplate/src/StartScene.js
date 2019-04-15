var StartScene = cc.Scene.extend({
  ctor: function() {
    this._super()

    // sound.bgm_happyday_sound()
    this.l = this.l ? this.l : 0
    if(cc.sys.isMobile){
      /* 飞星层*/
      // this.starLayer = new StarLayer(common_data[1])
      this.starLayer = new StarLayer(common_data[0])
      this.addChild(this.starLayer, 100, 2)
      // 返回游戏列表
      this.starLayer.gameClose()
      // 返回游戏首场景
      // this.starLayer.goBack()
    }
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    // sound.gameBgAudio()
    // this._layerArr = [Layer05]
    this._layerArr = [
      [Layer01],
      [Layer02],
      [Layer03],
      [Layer04],
      [Layer05],
      [Layer06],
      [Layer07],
      [Layer08],
      [Layer09],
      [Layer10],
      [Layer11]]
    this.layerArr = this.doArr(this._layerArr)
    // this.randomArr = shuffle([0])
    this.randomArr = util.getIncreaseArr(this.layerArr.length)
    // this.randomArr = [15]

    var layer = new this.layerArr[this.randomArr[this.l]]()
    layer.v = this.layerArr[this.randomArr[this.l]].v
    this.addChild(layer)
    this.addedLayer = layer
  },
  // 转换为一维数组，并标记对应位置
  doArr: function(arr) {
    var res = []
    for(var i = 0;i < arr.length;i++) {
      arr[i].v = i
      if(cc.isArray(arr[i])) {
        res = res.concat(this.doArr(arr[i]))
      }else{
        arr[i].v = [arr.v, i]
        res.push(arr[i])
      }
    }
    return res
  },
  // reListen: function() {
  //   cc.eventManager.removeAllListeners()
    // 返回游戏列表
    // this.starLayer.gameClose()
  // },
  wrong: function(){
    sound.wrongAudio()
    this.starLayer.wrongStar()
  },
  right: function() {
    // sound.stopAllEffects()
    if(cc.sys.isMobile){
      sound.starAudio()
      common_data[1].obtain++
      this.starLayer.rightStar(common_data[1].obtain)
      this.dataRefresh()
    }
  },
  nextLayer: function(self, t, n) {
    this.l++
    if(t >= 0) {
      var time = t
    }else{
      var time = 1.5
    }
    if(this.l < this.randomArr.length) {
      if(this._layerArr[self.v[0]].length === self.v[1] + 1) {
        var myScene = new StartScene()
        myScene.l = this.l 
        var transition = new cc.TransitionCrossFade(1, myScene, false)
        cc.director.runScene(transition)
      }else{
        this.scheduleOnce(function() {
          // sound.stopAllEffects()
          var layer = new this.layerArr[this.randomArr[this.l]](n)
          layer.v = this.layerArr[this.randomArr[this.l]].v
          this.addChild(layer)
          this.addedLayer.removeFromParent()
          this.addedLayer = layer
        }.bind(this), time)
      }
    }else{
      if(cc.sys.isMobile){
        this.finish(t)
      }
    }
  },
  preLayer: function(self, t, n) {
    this.l > 0 && this.l--
    if(t >= 0) {
      var time = t
    }else{
      var time = 1.5
    }

    var myScene = new StartScene()
    myScene.l = this.l 
    var transition = new cc.TransitionCrossFade(1, myScene, false)
    cc.director.runScene(transition)
  },
  finish: function(t) {
    // updata.is_finish = 1
    if(t >= 0) {
      var time = t
    }else{
      var time = 1.5
    }
    this.scheduleOnce(function() {
      sound.stopAudio()
      sound.stopAllEffects()
      sound.winAudio()
      this.starLayer.gameEnd(common_data[0].obtain)
    }.bind(this), time)
  },
  dataRefresh: function() {
    var sum = 0
    common_data.slice(1).forEach(function(value, index, arr) {
      sum += value.obtain
    })

    common_data[0].obtain = sum
    // cc.log(common_data)
  }
})

