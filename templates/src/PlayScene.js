var PlayScene = cc.Scene.extend({
  size: cc.winSize,
  onEnter: function () {
    this._super()

    /* 飞星层*/
    this.starLayer = new StarLayer(common_data[0])
    this.addChild(this.starLayer, 2, 2)
    // 返回列表
    this.starLayer.onTouchBegan()

    var layer = new Layer()
    this.addChild(layer)
  }
})

var Layer = cc.Layer.extend({
  size: cc.winSize,
  ctor: function () {
    this._super()

    this.fix_height = 180 / fix - 180

    this.bg = new cc.Sprite(res.bg01)
    this.bg.setScale(this.size.height / this.bg.height)
    this.bg.setAnchorPoint(0.5, 0.5)
    this.bg.setPosition({x: this.size.width / 2, y: this.size.height / 2})
    this.addChild(this.bg)

    var spcolor = new LayerExp()
    var color = spcolor.sprites(spxy[0])
    for(var i = 0;i < color.length;i++){
      // color[i].data = spxy[0][i]
      this.addChild(color[i], color[i].zindex, color[i].id)
    }

    this.getChildren().forEach(function(item){
      if(item !== this.bg){
        item.setPosition(item.getPosition().x, item.getPosition().y + this.fix_height)
      }
    }.bind(this))

    if(!playScene01.finished){
      this.getChildByTag(1001).runAction(cc.sequence(
        cc.scaleBy(0.85, 1.05),
        cc.scaleBy(0.85, 1 / 1.05)
      ).repeatForever())
    }

    if(!playScene02.finished){
      this.getChildByTag(1002).runAction(cc.sequence(
        cc.scaleBy(0.85, 1.05),
        cc.scaleBy(0.85, 1 / 1.05)
      ).repeatForever())
    }

    if(!playScene03.finished){
      this.getChildByTag(1003).runAction(cc.sequence(
        cc.scaleBy(0.85, 1.05),
        cc.scaleBy(0.85, 1 / 1.05)
      ).repeatForever())
    }

    // this.horn = this.createSprite(res.sound, 1 / 3 * fix, {x: 0, y: 0}, {x: 15, y: 15})
    // this.addChild(this.horn, 5)

    // this.hornListener = cc.EventListener.create({
    //   event: cc.EventListener.TOUCH_ONE_BY_ONE,
    //   swallowTouches: true,
    //   onTouchBegan: function (touch, event) {
    //     var target = event.getCurrentTarget()
    //     var pos = touch.getLocation()
    //     var targetObj = target.getBoundingBox()

    //     if (cc.rectContainsPoint(targetObj, pos)) {
    //       if(!this.finished){
    //         sound.stopAllEffects()
    //         sound.gameInfo()
    //       }
    //       return true
    //     }
    //     return false
    //   }.bind(this)
    // })

    // var action1 = cc.callFunc(function(){
    //   // cc.log('提示玩法')
    //   sound.gameInfo()
    // })
    // var action2 = cc.callFunc(function(){
    //   this.move = true
    //   this.begin()// 开始
    //   cc.eventManager.addListener(this.hornListener, this.horn)
    // }.bind(this))
    // this.soundAction = cc.sequence(action1, cc.delayTime(0), action2)
    // this.horn.runAction(this.soundAction)
    
    if(playScene01.finished && playScene02.finished && playScene03.finished){
      this.finish()
    }else{
      this.begin()
    }

    return true
  },
  begin: function(){
    this.move = false
    var listener = cc.EventListener.create({
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

    if(!playScene01.finished){
      cc.eventManager.addListener(listener.clone(), this.getChildByTag(1001))
    }
    if(!playScene02.finished){
      cc.eventManager.addListener(listener.clone(), this.getChildByTag(1002))
    }
    if(!playScene03.finished){
      cc.eventManager.addListener(listener.clone(), this.getChildByTag(1003))
    }
  },
  // isFinish: function(){
  //   var finished = this.dragArr.every(function(item){
  //     return item.texture.url === item.data.sprurl
  //   })

  //   if(finished){
  //     this.next()
  //   }
  // },
  crash: function(item, target){
    var itemBox = item.getBoundingBox()
    var targetBox = target.getBoundingBox()
    if(cc.rectIntersectsRect(cc.rect(targetBox.x + targetBox.width / 4, targetBox.y, targetBox.width / 2, targetBox.height), cc.rect(itemBox.x + itemBox.width / 4, itemBox.y, itemBox.width / 2, itemBox.height))){
      return true
    }
    return false
  },
  becomeFalse: function() {
    this.move = false
  },
  createSprite: function (path, scale, anchor, pos, z) {
    var sprite = new cc.Sprite(path)
    sprite.setScale(scale)
    sprite.setAnchorPoint(anchor)
    sprite.setPosition(pos)
    sprite.setLocalZOrder(z ? z : 0)
    // this.addChild(sprite,(z ? z:1));
    return sprite
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
    if(this.hornListener){
      cc.eventManager.removeListener(this.hornListener)
    }
    updata.is_finish = 1
    this.scheduleOnce(function(){
      sound.stopAudio()
      sound.stopAllEffects()
      sound.winAudio()
      this.getParent().starLayer.gameEnd(common_data[0].obtain)
      // common_data = deepCopy(common_data2);
    }.bind(this), 1.8)
  }
})

