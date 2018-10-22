var PlayScene = MyScene.extend({
  ctor: function(){
    this._super()
    this.fix_height = 180 / fix - 180
    return true
  },
  onEnter: function () {
    this._super()
    // cc.director.runScene(new PlayScene01())
    var size = cc.winSize
    var bg = new cc.Sprite(res.background)
    bg.setScale(size.height / bg.height)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)
    // 飞星层
    this.starLayer = new StarLayer(common_data[0])
    this.addChild(this.starLayer, 2, 2)
    // 返回游戏列表
    this.starLayer.gameClose()
    // // 返回游戏首场景
    // // this.starLayer.goBack()

    // var layer = new Layer()
    // this.addChild(layer)

    var sprites = this.sprites(playScene_data)

    sprites.forEach(function(item){
      item.setPosition(item.getPosition().x, item.getPosition().y + this.fix_height)
    }.bind(this))

    // this.hander = new cc.Sprite(res.hand)
    // this.hander.setPosition({x: 360 * fix, y: 220 * fix + this.fix_height})
    // this.hander.setScale(1 / 3 * fix)
    // this.addChild(this.hander, 2)

    // this.move = false
    // if(!scene01Finish.finished){
    //   this.getChildByTag(1001).runAction(cc.sequence(
    //     cc.scaleBy(0.85, 1.05),
    //     cc.scaleBy(0.85, 1 / 1.05)
    //   ).repeatForever())
    //   cc.eventManager.addListener(this.listener().clone(), this.getChildByTag(1001))
    // }

    // if(!scene02Finish.finished){
    //   this.getChildByTag(1002).runAction(cc.sequence(
    //     cc.scaleBy(0.85, 1.05),
    //     cc.scaleBy(0.85, 1 / 1.05)
    //   ).repeatForever())
    //   cc.eventManager.addListener(this.listener().clone(), this.getChildByTag(1002))
    // }

    // if(!scene03Finish.finished){
    //   this.getChildByTag(1003).runAction(cc.sequence(
    //     cc.scaleBy(0.85, 1.05),
    //     cc.scaleBy(0.85, 1 / 1.05)
    //   ).repeatForever())
    //   cc.eventManager.addListener(this.listener().clone(), this.getChildByTag(1003))
    // }

    // if(scene01Finish.finished && scene02Finish.finished && scene03Finish.finished){
    //   this.finish()
    // }else{
    //   this.begin()
    // }

    this.clickArr = [
      this.getChildByTag(1001),
      this.getChildByTag(1002),
      this.getChildByTag(1003)
    ]

    this.clickArr.forEach(function(item){
      cc.eventManager.addListener(this.listener().clone(), item)
    }.bind(this))
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
          if(target.id === 1001){
            common_data[1].obtain = 0
            this.dataRefresh()
            var transition = new cc.TransitionCrossFade(1.5, new PlayScene01(), false)
            cc.director.runScene(transition)
          }else if(target.id === 1002){
            common_data[2].obtain = 0
            this.dataRefresh()
            var transition = new cc.TransitionCrossFade(1.5, new PlayScene02(), false)
            cc.director.runScene(transition)
          }else{
            common_data[3].obtain = 0
            this.dataRefresh()
            var transition = new cc.TransitionCrossFade(1.5, new PlayScene03(), false)
            cc.director.runScene(transition)
          }
          return true
        }
        return false
      }.bind(this)
    })
  },
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
