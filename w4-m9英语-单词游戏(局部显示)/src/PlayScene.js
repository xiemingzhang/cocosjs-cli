var Layer = MyLayer.extend({
  ctor: function () {
    this._super()
    this.fix_height = 180 / fix - 180
    this.move = true
    return true
  },
  onEnter: function(){
    this._super()

    var sprites = this.sprites(sprData[1])
    var len = sprites.length
    for(var i = 0;i < len;i++){
      // sprites[i].data = sprData[0][i]
      this.addChild(sprites[i], sprites[i].zindex, sprites[i].id)
    }

    this.getChildren().forEach(function(item){
      if(item !== this.bg){
        item.setPosition(item.getPosition().x, item.getPosition().y + this.fix_height)
      }
    }.bind(this))

    // this.hander = new cc.Sprite(res.hand)
    // this.hander.setPosition({x: 360 * fix, y: 220 * fix + this.fix_height})
    // this.hander.setScale(1 / 3 * fix)
    // this.addChild(this.hander, 2)

    // this.move = false
    // if(!playScene01.finished){
    //   this.getChildByTag(1001).runAction(cc.sequence(
    //     cc.scaleBy(0.85, 1.05),
    //     cc.scaleBy(0.85, 1 / 1.05)
    //   ).repeatForever())
    //   cc.eventManager.addListener(this.listener().clone(), this.getChildByTag(1001))
    // }

    // if(!playScene02.finished){
    //   this.getChildByTag(1002).runAction(cc.sequence(
    //     cc.scaleBy(0.85, 1.05),
    //     cc.scaleBy(0.85, 1 / 1.05)
    //   ).repeatForever())
    //   cc.eventManager.addListener(this.listener().clone(), this.getChildByTag(1002))
    // }

    // if(!playScene03.finished){
    //   this.getChildByTag(1003).runAction(cc.sequence(
    //     cc.scaleBy(0.85, 1.05),
    //     cc.scaleBy(0.85, 1 / 1.05)
    //   ).repeatForever())
    //   cc.eventManager.addListener(this.listener().clone(), this.getChildByTag(1003))
    // }

    // if(playScene01.finished && playScene02.finished && playScene03.finished){
    //   this.finish()
    // }else{
    //   this.begin()
    // }

  },
  listener: function(){
    return cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function (touch, event) {
        var target = event.getCurrentTarget()
        var pos = touch.getLocation()

        var targetRect = target.getBoundingBox()
        if (cc.rectContainsPoint(targetRect, pos) && !this.move) {
          sound.buttonAudio()
          updata.finish_steps++
          this.move = true
          // this.scheduleOnce(function(){
          //   this.becomeFalse()
          // }.bind(this), 0.8)
          if(target === this.getChildByTag(1001)){
            common_data[1].obtain = 0
            this.dataRefresh()
            var transition = new cc.TransitionFade(1, new PlayScene01(), false)
            cc.director.runScene(transition)
          }else if(target === this.getChildByTag(1002)){
            common_data[2].obtain = 0
            this.dataRefresh()
            var transition = new cc.TransitionFade(1, new PlayScene02(), false)
            cc.director.runScene(transition)
          }else{
            common_data[3].obtain = 0
            this.dataRefresh()
            var transition = new cc.TransitionFade(1, new PlayScene03(), false)
            cc.director.runScene(transition)
          }
          return true
        }
        return false
      }.bind(this)
    })
  },
  // isFinish: function(){
  //   var finished = this.dragArr.every(function(item){
  //     return item.texture.url === item.data.sprurl
  //   })

  //   if(finished){
  //     this.next()
  //   }
  // },
  crash: function(target, item){
    var itemBox = item.getBoundingBox()
    var targetBox = target.getBoundingBox()
    var itemRect = cc.rect(targetBox.x, targetBox.y, targetBox.width, targetBox.height)
    var targetRect = cc.rect(itemBox.x, itemBox.y, itemBox.width, itemBox.height)
    if(cc.rectIntersectsRect(itemRect, targetRect)){
      return true
    }
    return false
  },
  dataRefresh: function () {
    var sum = 0
    common_data.slice(1).forEach(function (value, index, arr) {
      sum += value.obtain
    })

    common_data[0].obtain = sum
    // cc.log(common_data)
  },
  finish: function () {
    this.move = true
    if(this.hornListener){
      cc.eventManager.removeListener(this.hornListener)
    }
    // updata.is_finish = 1
    this.scheduleOnce(function(){
      sound.stopAudio()
      sound.stopAllEffects()
      sound.winAudio()
      this.getParent().starLayer.gameEnd(common_data[0].obtain)
      // common_data = deepCopy(common_data2);
    }.bind(this), 3.8)
  }
})
var PlayScene = MyScene.extend({
  ctor: function(){
    this._super()
  },
  onEnter: function () {
    this._super()
    this.SceneArr = [PlayScene01, PlayScene02]
    this.randomArr = shuffle([0, 1])
    // this.randomArr = [0, 1]
    cc.director.runScene(new this.SceneArr[this.randomArr[0]]())

    // // 飞星层
    // this.starLayer = new StarLayer(common_data[0])
    // this.addChild(this.starLayer, 2, 2)
    // // 返回游戏列表
    // this.starLayer.gameClose()
    // // 返回游戏首场景
    // // this.starLayer.goBack()

    // var layer = new Layer()
    // this.addChild(layer)
  }
})

