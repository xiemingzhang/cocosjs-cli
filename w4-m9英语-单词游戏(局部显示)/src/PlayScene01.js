var PlayScene01 = MyScene.extend({
  ctor: function(){
    this._super()
    this.l = 0
    this.addedLayer = []
    this.okArr = []
    this.layerArr = [Scene01_Layer01, Scene01_Layer02, Scene01_Layer03]
    // this.randomArr = shuffle([0])
    this.randomArr = [0, 1, 2]
    /* 飞星层*/
    this.starLayer = new StarLayer(common_data[1])
    // this.starLayer = new StarLayer(common_data[0])
    this.addChild(this.starLayer, 100, 2)
    // 返回游戏列表
    this.starLayer.gameClose()
    sound.step01_audio()
    // 返回游戏首场景
    // this.starLayer.goBack()
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize

    this.sprites(Scene01_spr_data[0])
    var fix_height = 180 / fix - 180
    this.crashArr = []
    this.getChildren().forEach(function(item){
      if(item.id !== 1001 && item.id !== 1006){
        item.setPosition(item.getPosition().x, item.getPosition().y + fix_height)
      }
      if(item.id >= 1002 && item.id <= 1004){
        this.crashArr.push(item)
      }
    }.bind(this))

    var bg = new cc.Sprite(res.beijing)
    bg.setScale(size.height / bg.height)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    var clip = new cc.Sprite(res.modal)
    clip.setAnchorPoint(0, 0)
    clip.setPosition(0, 0)
    // clip.setScale(1 / 3 * fix)
    var clipping_layer = new cc.ClippingNode(clip)
    clipping_layer.setInverted(true)
    this.addChild(clipping_layer, 2)

    var black = new cc.Sprite(res.black_glowworm)
    black.setScale(size.height / black.height)
    black.setAnchorPoint(0.5, 0.5)
    black.setPosition({x: size.width / 2, y: size.height / 2})
    // this.addChild(this.black, 2)
    clipping_layer.addChild(black, 5)
    this.getChildByTag(1005).addChild(clip)

    cc.eventManager.addListener(this.listener(), this.getChildByTag(1005))
    // //test
    // var layer = new this.layerArr[this.randomArr[2]]()
    // this.addChild(layer, 20)
    // this.addedLayer.push(layer)
  },
  listener: function(){
    return cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function (touch, event) {
        var target = event.getCurrentTarget()
        var pos = touch.getLocation()
        var targetRect = target.getBoundingBox()
        if (!this.move && !target.crashed && cc.rectContainsPoint(targetRect, pos)) {
          sound.buttonAudio()
          updata.finish_steps++
          // this.move = true
          // this.scheduleOnce(function(){
          //   this.becomeFalse()
          // }.bind(this), 0.8)
          return true
        }
        return false
      }.bind(this),
      onTouchMoved: function(touch, event){
        var target = event.getCurrentTarget()
        var targetRect = target.getBoundingBox()
        var delta = touch.getDelta()
        var size = cc.winSize
        if(!this.move){
          if(target.x + delta.x < size.width - targetRect.width && target.x + delta.x > 0){
            target.x += delta.x
          }
          if(target.y + delta.y < size.height - targetRect.height && target.y + delta.y > 0){
            target.y += delta.y
          }
          this.crashArr.some(function(item){
            if(this.crash(target, item) && !item.crashed){
              this.move = true
              item.crashed = true
              this.reListen()
              sound.step03_audio()
              this.scheduleOnce(function(){
                var layer = new this.layerArr[this.randomArr[item.id - 1002]](item.id)
                this.addChild(layer, 20)
                this.addedLayer.push(layer)
              }, 1.5)
              return true
            }
          }.bind(this))
        }
      }.bind(this),
      onTouchEnded: function(touch, event){
        var target = event.getCurrentTarget()
      }
    })
  },
  reListen: function(){
    cc.eventManager.removeAllListeners()
    // 返回游戏列表
    this.starLayer.gameClose()
  },
  isFinished: function(){
    if(this.crashArr.every(function(item){
      return item.crashed
    })){
      this.finish()
    }else{
      cc.eventManager.addListener(this.listener(), this.getChildByTag(1005))
    }
  },
  crash: function(target, item){
    var itemBox = item.getBoundingBox()
    var targetBox = target.getBoundingBox()
    var itemRect = cc.rect(targetBox.x + targetBox.width / 8 * 3, targetBox.y + targetBox.width / 8 * 3, targetBox.width / 4, targetBox.height / 4)
    var targetRect = cc.rect(itemBox.x + itemBox.width / 8 * 3, itemBox.y + itemBox.height / 8 * 3, itemBox.width / 4, itemBox.height / 4)
    if(cc.rectIntersectsRect(itemRect, targetRect)){
      return true
    }
    return false
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
      }.bind(this), 1.5)
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
      }, 1.5)
    }else{
      this.finish()
    }
  }
})
