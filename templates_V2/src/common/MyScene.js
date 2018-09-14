var MyScene = cc.Scene.extend({
  // 实例化 new时调用
  // ctor: function(){
  //   this._super()
  // },
  onEnter: function () {
    this._super()
    // cc.log("onEnter");
    this._pixels = []
    // this.addTouchEventListenser();
  },
  onExit: function () {
    this._super()
    // cc.log("onExit");
  },
  // nextLayer: function(){
  //   this.l++
  //   if(common_data[1].obtain < common_data[1].taoal){
  //     this.scheduleOnce(function(){
  //       sound.stopAllEffects()
  //       var layer = new this.layerArr[this.randomArr[common_data[1].obtain]]()
  //       this.addChild(layer)
  //       this.addedLayer[common_data[1].obtain - 1].removeFromParent()
  //       this.addedLayer.push(layer)
  //       // var transition = new cc.TransitionCrossFade(1, new PlayScene2(), false)
  //       // cc.director.runScene(transition);
  //     }.bind(this), 3.5)
  //   }else{
  //     // PlayScene.PlayScene01 = true
  //     this.nextScene()
  //   }
  // },
  wrong: function(){
    sound.wrongAudio()
    this.starLayer.wrongStar()
  },
  finish: function () {
    // updata.is_finish = 1
    this.scheduleOnce(function(){
      sound.stopAudio()
      sound.stopAllEffects()
      sound.winAudio()
      this.starLayer.gameEnd(common_data[0].obtain)
    }.bind(this), 3.8)
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
