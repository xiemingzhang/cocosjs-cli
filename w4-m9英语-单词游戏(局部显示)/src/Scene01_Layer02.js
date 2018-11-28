var Scene01_Layer02 = MyLayer.extend({
  ctor: function (num) {
    this._super()
    this.fix_height = 180 / fix - 180
    // this.move = true
    // this.delArr = []
    // this.drawNodeArr = []
    this.num = num
    sound.step06_audio()
    return true
  },
  onEnter: function(){
    this._super()

    this.sprites(Scene01_spr_data[2])
    this.dragArr = []
    this.getChildren().forEach(function(item){
      if(item.id >= 1011 && item.id >= 1013){
        item.setPosition(item.getPosition().x, item.getPosition().y + this.fix_height)
      }
      if(item.id >= 1003 && item.id <= 1008){
        this.dragArr.push(item)
      }
    }.bind(this))

    var size = cc.winSize
    var bg = new cc.Sprite(res.beijing)
    bg.setScale(size.height / bg.height)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.hander = new MySprite(res.hand)
    this.hander.setPosition({x: 295 * fix, y: 170 * fix})
    this.hander.setAnchorPoint(0, 1)
    this.hander.setScale(1 / 3 * fix)
    this.addChild(this.hander, 6)
    this.hander.frameAnimate([res.hand, res.handclick], 0.8, 0)

    this.hander.runAction(cc.sequence(
      cc.moveBy(0.6, 55 * fix, 100 * fix),
      cc.moveBy(0.6, -55 * fix, -100 * fix)
    ).repeatForever())

    this.dragArr.forEach(function(item){
      cc.eventManager.addListener(this.listener(), item)
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
        if (!this.move && !target.crashed && cc.rectContainsPoint(targetRect, pos)) {
          if(this.hander){
            this.hander.removeFromParent()
          }
          sound.buttonAudio()
          updata.finish_steps++
          this.move = true
          // this.scheduleOnce(function(){
          //   this.becomeFalse()
          // }.bind(this), 0.8)
          target._x = target.x
          target._y = target.y
          target._zIndex = target.getLocalZOrder()
          target.setLocalZOrder(10)
          return true
        }
        return false
      }.bind(this),
      onTouchMoved: function(touch, event){
        var target = event.getCurrentTarget()
        var targetRect = target.getBoundingBox()
        var delta = touch.getDelta()
        var size = cc.winSize
        if(target.x + delta.x < size.width - targetRect.width && target.x + delta.x > 0){
          target.x += delta.x
        }
        if(target.y + delta.y < size.height - targetRect.height && target.y + delta.y > 0){
          target.y += delta.y
        }
      },
      onTouchEnded: function(touch, event){
        var target = event.getCurrentTarget()

        if(target.id === 1010){
          if(this.crash(target, this.getChildByTag(1000))){
            this.reListen()
            target.setPosition(348 * fix, 196 * fix)
            this.getChildByTag(1000).initWithFile(res.tu01)
            target.runAction(cc.sequence(
              cc.moveTo(0.8, target._x, target._y),
              cc.callFunc(function(){
                target.setLocalZOrder(target._zIndex)
                var okArr = this.getParent().okArr
                if(okArr.indexOf(0) > -1){
                  this.getChildByTag(1012).setOpacity(255)
                  this.getChildByTag(1013).setOpacity(255)
                }
                if(okArr.indexOf(1) > -1){
                  this.getChildByTag(1014).setOpacity(255)
                  this.getChildByTag(1015).setOpacity(255)
                }
                if(okArr.indexOf(2) > -1){
                  this.getChildByTag(1016).setOpacity(255)
                  this.getChildByTag(1017).setOpacity(255)
                }
                this.getChildByTag(1011).setOpacity(255)
                this.getChildByTag(1014).setOpacity(255)
                this.getChildByTag(1015).runAction(cc.fadeIn(1.5, 255))
                this.right()
                this.scheduleOnce(function(){
                  this.getParent().move = false
                  this.getParent().getChildByTag(this.num).setOpacity(0)
                  this.getParent().okArr.push(1)
                  this.getParent().isFinished()
                  this.removeFromParent()
                }, 2)
              }.bind(this))
            ))
          }else{
            target.runAction(cc.sequence(
              cc.moveTo(0.8, target._x, target._y),
              cc.callFunc(function(){
                target.setLocalZOrder(target._zIndex)
              })
            ))
            this.becomeFalse()
          }
        }else{
          if(this.crash(target, this.getChildByTag(1000))){
            this.getChildByTag(1000).stopAllActions()
            this.getChildByTag(1000).frameAnimate([res.tu01, res.tu02, res.tu03], 0.5, 1)
            target.crashed = true
            target.setOpacity(0)
          }else{
            target.runAction(cc.sequence(
              cc.moveTo(0.8, target._x, target._y),
              cc.callFunc(function(){
                target.setLocalZOrder(target._zIndex)
              })
            ))
          }

          if(this.dragArr.every(function(item){
            return item.crashed
          })){
            this.dragArr.every(function(item){
              item.crashed = false
            })
            this.getChildByTag(1009).setOpacity(255)
            this.getChildByTag(1010).setOpacity(255)
            this.reListen()
            sound.step18_audio()
            this.scheduleOnce(function(){
              sound.step16_audio()
              var okArr = this.getParent().okArr
              if(okArr.length === 0){
                this.hander = new MySprite(res.hand)
                this.hander.setPosition({x: 65 * fix, y: 120 * fix})
                this.hander.setAnchorPoint(0, 1)
                this.hander.setScale(1 / 3 * fix)
                this.addChild(this.hander, 6)
                this.hander.frameAnimate([res.hand, res.handclick], 0.8, 0)

                this.hander.runAction(cc.sequence(
                  cc.moveBy(1, 275 * fix, 140 * fix),
                  cc.moveBy(1, -275 * fix, -140 * fix)
                ).repeatForever())
              }

              cc.eventManager.addListener(this.listener(), this.getChildByTag(1010))
            }, 4)
          }
          this.becomeFalse()
        }
      }.bind(this)
    })
  },
  next: function(){
    if(this.hornListener){
      cc.eventManager.removeListener(this.hornListener)
    }
    this.getParent().nextLayer()
  },
  reListen: function(){
    cc.eventManager.removeAllListeners()
    // 返回游戏列表
    this.getParent().starLayer.gameClose()
  },
  crash: function(target, item){
    var itemBox = item.getBoundingBox()
    var targetBox = target.getBoundingBox()
    var targetRect = cc.rect(targetBox.x, targetBox.y, targetBox.width, targetBox.height)
    var itemRect = cc.rect(itemBox.x, itemBox.y + itemBox.height / 2, itemBox.width, itemBox.height / 2)
    if(cc.rectIntersectsRect(itemRect, targetRect)){
      return true
    }
    return false
  }
})

