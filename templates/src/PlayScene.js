
var PlayScene = cc.Scene.extend({
  onEnter: function () {
    this._super()

    this.layerArr = [new Layer01()]
    // this.randomArr = shuffle([0])
    this.randomArr = [0]

    /* 飞星层*/
    this.starLayer = new StarLayer(common_data[1])
    this.addChild(this.starLayer, 2, 2)

    // 背景音乐
    // sound.gameBgAudio()

    var layer = new Layer01()
    this.addChild(layer)
  },
  wrong: function(){
    sound.wrongAudio()
    this.starLayer.wrongStar()
  },
  right: function(){
    // sound.stopAllEffects()
    sound.starAudio()
    common_data[1].obtain++
    this.starLayer.rightStar(common_data[1].obtain)
    this.dataRefresh()
  },
  dataRefresh: function () {
    var sum = 0
    common_data.slice(1).forEach(function (value, index, arr) {
      sum += value.obtain
    })

    common_data[0].obtain = sum
    // cc.log(common_data)
  },
  nextLayer: function(){
    if(common_data[1].obtain < common_data[1].taoal){
      this.scheduleOnce(function(){
        sound.stopAllEffects()
        var layer = this.layerArr[this.randomArr[common_data[1].obtain]]
        this.addChild(layer)
        this.layerArr[this.randomArr[common_data[1].obtain - 1]].removeFromParent()
        // var transition = new cc.TransitionCrossFade(1, new PlayScene2(), false)
        // cc.director.runScene(transition);
      }.bind(this), 1.5)
    }else{
      this.nextScene()
    }
  },
  nextScene: function(){
    if(common_data[0].obtain < common_data[0].taoal){
      this.scheduleOnce(function(){
        sound.stopAllEffects()
        // var layer = new Layer02()
        // this.getParent().addChild(layer)
        // this.removeFromParent()
        var transition = new cc.TransitionFade(1, new PlayScene2(), false)
        cc.director.runScene(transition)
      }.bind(this), 1.5)
    }else{
      this.finish()
    }
  },
  finish: function () {
    cc.eventManager.removeListener(this.hornListener)
    updata.is_finish = 1
    this.scheduleOnce(function(){
      sound.stopAudio()
      sound.stopAllEffects()
      sound.winAudio()
      this.starLayer.gameEnd(common_data[0].obtain)
      // common_data = deepCopy(common_data2);
    }.bind(this), 1.8)
  }
})
