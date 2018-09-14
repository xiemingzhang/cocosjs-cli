var PlayScene01 = MyScene.extend({
  ctor: function(){
    this._super()
    this.l = 0
    this.addedLayer = []
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize

    this.bg = new cc.Sprite(res.bg)
    this.bg.setScale(size.height / this.bg.height)
    this.bg.setAnchorPoint(0.5, 0.5)
    this.bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(this.bg)

    // sound.gameBgAudio()
    this.layerArr = [Layer01]
    // this.randomArr = shuffle([0])
    this.randomArr = [0]

    /* 飞星层*/
    this.starLayer = new StarLayer(common_data[1])
    // this.starLayer = new StarLayer(common_data[0])
    this.addChild(this.starLayer, 2, 2)
    // 返回游戏列表
    this.starLayer.gameClose()
    // 返回游戏首场景
    // this.starLayer.goBack()

    var layer = new this.layerArr[this.randomArr[0]]()
    this.addChild(layer)
    this.addedLayer.push(layer)
  },
  right: function(){
    // sound.stopAllEffects()
    sound.starAudio()
    common_data[1].obtain++
    this.starLayer.rightStar(common_data[1].obtain)
    this.dataRefresh()
  },
  nextLayer: function(){
    this.l++
    if(this.l < this.randomArr.length){
      this.scheduleOnce(function(){
        sound.stopAllEffects()
        var layer = new this.layerArr[this.randomArr[this.l]]()
        this.addChild(layer)
        this.addedLayer[this.l - 1].removeFromParent()
        this.addedLayer.push(layer)
      }.bind(this), 3.5)
    }else{
      // scene01Finish = true
      this.nextScene()
    }
  },
  nextScene: function(){
    if(common_data[0].obtain < common_data[0].taoal){
      this.scheduleOnce(function(){
        sound.stopAllEffects()
        var transition = new cc.TransitionFade(1, new PlayScene02(), false)
        cc.director.runScene(transition)
      }, 3.5)
    }else{
      this.finish()
    }
  },
})