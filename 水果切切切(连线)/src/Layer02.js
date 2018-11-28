var Layer02 = cc.Layer.extend({
  size: cc.winSize,
  ctor: function () {
    this._super()
    // cc.log(fruitSprit)
    this.bg = new cc.Sprite(res.bg2)
    this.bg.setScale(this.size.height / this.bg.height)
    this.bg.setAnchorPoint(0.5, 0.5)
    this.bg.setPosition({x: this.size.width / 2, y: this.size.height / 2})
    this.addChild(this.bg)

    var spcolor = new LayerExp()
    var color = spcolor.sprites(spxy[1])
    for(var i = 0;i < color.length;i++){
      color[i].data = spxy[0][i]
      this.addChild(color[i], color[i].zindex, color[i].id)
    }

    this.getChildren().forEach(function(item){
      if(item !== this.bg){
        item.setPosition(item.getPosition().x, item.getPosition().y + 180 / fix - 180)
      }
    }.bind(this))

    this.getChildByTag(1007).setOpacity(0)
    this.getChildByTag(1008).setOpacity(0)
    this.getChildByTag(1009).setOpacity(0)
    this.getChildByTag(1010).setOpacity(0)
    this.fruitArr = [this.getChildByTag(1004), this.getChildByTag(1005), this.getChildByTag(1006)]

    // if(!fruitSprit || fruitSprit.length === 0){
    //   var fruitSprit = [
    //     {src1: res.little_watermalon, src2: res.watermalon, src3: res.watermalon02, src4: res.watermalon03, src5: res.watermalon05, src6: res.watermalon06, src7: res.watermalon04},
    //     {src1: res.little_apple, src2: res.apple, src3: res.apple02, src4: res.apple04, src5: res.apple03, src6: res.apple05, src7: res.apple06},
    //     {src1: res.little_papaya, src2: res.papaya, src3: res.papaya02, src4: res.papaya03, src5: res.papaya03, src6: res.papaya04, src7: res.papaya04}
    //   ]
    // }
    this.fruitArr.forEach(function(item, index){
      item.data = fruitSprit[index]
      item.initWithFile(fruitSprit[index].src1)
    })

    this.crashArr = [this.getChildByTag(1011), this.getChildByTag(1012)]

    this.horn = this.createSprite(res.sound, 1 / 3 * fix, {x: 0, y: 0}, {x: 15, y: 15})
    this.addChild(this.horn, 1)

    this.hornListener = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function (touch, event) {
        var target = event.getCurrentTarget()
        var pos = touch.getLocation()
        var targetObj = target.getBoundingBox()

        if (cc.rectContainsPoint(targetObj, pos)) {
          if(!this.finished){
            sound.stopAllEffects()
            sound._voice()
          }
          return true
        }
        return false
      }.bind(this)
    })

    var action1 = cc.callFunc(function(){
      cc.log('提示玩法')
      sound._voice = sound.step01V
      sound.step01V()
    })
    var action2 = cc.callFunc(function(){
      this.move = true
      this.begin()// 开始
      cc.eventManager.addListener(this.hornListener, this.horn)
    }.bind(this))
    this.soundAction = cc.sequence(action1, cc.delayTime(0), action2)
    this.horn.runAction(this.soundAction)

    return true
  },
  begin: function(){
    this.move = false

    this.listener1 = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function (touch, event) {
        var target = event.getCurrentTarget()
        var pos = touch.getLocation()

        var targetRect = target.getBoundingBox()
        if (cc.rectContainsPoint(cc.rect(targetRect.x + targetRect.width / 4, targetRect.y + targetRect.height / 4, targetRect.width / 2, targetRect.height / 2), pos) && !target.clicked) {
          if(this.listener3){
            cc.eventManager.removeListener(this.listener3)
            cc.eventManager.removeListener(this.listener4)
          }
          this.crashArr.forEach(function(item){
            item.crashed = false
            item.setOpacity(255)
          })
          this.getChildByTag(1009).crashed = false
          this.getChildByTag(1010).crashed = false
          sound.buttonAudio()
          if(!this.move){
            updata.finish_steps++
            this.move = true
            this.fruitArr.forEach(function(item){
              if(!item.clicked){
                item.setOpacity(255)
              }
            })
            target.runAction(cc.sequence(
              cc.spawn(
                cc.fadeOut(0.6),
                cc.callFunc(function(){
                  this.getChildByTag(1009).setOpacity(0)
                  this.getChildByTag(1010).setOpacity(0)
                  this.getChildByTag(1007).setOpacity(0)
                  this.getChildByTag(1007).initWithFile(target.data.src2)
                  this.getChildByTag(1007).runAction(cc.fadeIn(0.6))
                  this.getChildByTag(1007).data = target.data

                  this.getChildByTag(1011).initWithFile(target.data.src6)
                  this.getChildByTag(1012).initWithFile(target.data.src7)
                }.bind(this))),
              cc.callFunc(function(){
                var _flag = false
                this.fruitArr.forEach(function(item){
                  if(item.clicked){
                    _flag = true
                  }
                })
                if(_flag){
                  sound._voice = sound.step02V
                }else{
                  sound._voice = sound.step02V
                  sound.stopAllEffects()
                  sound.step02V()
                }

                this.becomeFalse()
                cc.eventManager.removeListener(this.listener2)
                cc.eventManager.addListener(this.listener2, this.getChildByTag(1003))
              }.bind(this))
            ))
            return true
          }
        }
        return false
      }.bind(this)
    })

    this.listener2 = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function (touch, event) {
        var target = event.getCurrentTarget()
        var pos = touch.getLocation()

        var targetRect = target.getBoundingBox()
        if (cc.rectContainsPoint(targetRect, pos)) {
          cc.eventManager.removeListener(this.listener1_1)
          cc.eventManager.removeListener(this.listener1_2)
          cc.eventManager.removeListener(this.listener1_3)
          sound.buttonAudio()
          if(!this.move){
            updata.finish_steps++
            this.move = true
            target.runAction(cc.fadeOut(0.6))
            var _rect = this.getChildByTag(1007).getBoundingBox()
            this.getChildByTag(1008).setPosition(_rect.x + _rect.width / 2, _rect.y + _rect.height / 2)

            this.fruitArr.forEach(function(item){
              if(item.texture.url === this.getChildByTag(1007).data.src1){
                item.clicked = true
              }
            }.bind(this))
            this.getChildByTag(1008).runAction(cc.sequence(
              cc.delayTime(0.3),
              cc.callFunc(function(){
                this.getChildByTag(1009).initWithFile(this.getChildByTag(1007).data.src4)
                this.getChildByTag(1010).initWithFile(this.getChildByTag(1007).data.src5)
                this.getChildByTag(1009).setAnchorPoint(1, 0)
                this.getChildByTag(1009).setPosition(_rect.x + _rect.width / 2 - 15 * fix, _rect.y)
                this.getChildByTag(1010).setPosition(_rect.x + _rect.width / 2 + 15 * fix, _rect.y)
              }.bind(this)),
              cc.fadeIn(0.6),
              cc.callFunc(function(){
                this.getChildByTag(1008).runAction(cc.sequence(
                  cc.moveBy(0.3, 0, 30 * fix),
                  cc.moveBy(0.3, 0, -60 * fix),
                  cc.moveBy(0.3, 0, 30 * fix)
                ))
              }.bind(this)),
              cc.callFunc(function(){
                this.getChildByTag(1007).runAction(cc.sequence(
                  cc.callFunc(function(){
                    this.getChildByTag(1007).initWithFile(this.getChildByTag(1007).data.src3)
                  }.bind(this))
                ))
              }.bind(this)),
              cc.delayTime(1),
              cc.callFunc(function(){
                sound.cutV()
                this.getChildByTag(1007).setOpacity(0)
                this.getChildByTag(1009).runAction(cc.fadeIn(0.35))
                this.getChildByTag(1010).runAction(cc.fadeIn(0.35))
              }.bind(this)),
              cc.delayTime(0.6),
              cc.callFunc(function(){
                this.getChildByTag(1008).setOpacity(0)
                this.getChildByTag(1003).runAction(cc.fadeIn(0.3))
              }.bind(this)),
              cc.delayTime(0.3),
              cc.callFunc(function(){
                this.getChildByTag(1009).data = this.getChildByTag(1007).data
                this.getChildByTag(1010).data = this.getChildByTag(1007).data
                this.getChildByTag(1009).setAnchorPoint(0, 0)
                this.getChildByTag(1009).setPosition(this.getChildByTag(1009).x - this.getChildByTag(1009).getBoundingBox().width, this.getChildByTag(1009).y)
                // this.getChildByTag(1009).runAction(cc.moveTo(0.8, this.getChildByTag(1011).x, this.getChildByTag(1011).y))
                // this.getChildByTag(1010).runAction(cc.moveTo(0.8, this.getChildByTag(1012).x, this.getChildByTag(1012).y))
                if(target.clicked){
                  sound._voice = sound.step03V
                }else{
                  sound._voice = sound.step03V
                  sound.stopAllEffects()
                  sound.step03V()
                }
                target.clicked = true
                this.becomeFalse()
                this.listener4 = this.listener3.clone()
                cc.eventManager.addListener(this.listener3, this.getChildByTag(1009))
                cc.eventManager.addListener(this.listener4, this.getChildByTag(1010))
                // this.isFinish()
              }.bind(this))
            ))
            return true
          }
        }
        return false
      }.bind(this)
    })

    this.listener3 = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function (touch, event) {
        var target = event.getCurrentTarget()
        var pos = touch.getLocation()

        var targetRect = target.getBoundingBox()
        if (cc.rectContainsPoint(targetRect, pos)) {
          cc.eventManager.removeListener(this.listener2)
          sound.buttonAudio()
          if(!this.move && !target.crashed){
            updata.finish_steps++
            this.move = true
            target._x = target.x
            target._y = target.y
            target._zIndex = target.getLocalZOrder()
            target.setLocalZOrder(10)
            return true
          }
        }
        return false
      }.bind(this),
      onTouchMoved: function(touch, event){
        var target = event.getCurrentTarget()
        var targetRect = target.getBoundingBox()
        var delta = touch.getDelta()

        if(target.x + delta.x < this.size.width - targetRect.width && target.x + delta.x > 0){
          target.x += delta.x
        }
        if(target.y + delta.y < this.size.height - targetRect.height && target.y + delta.y > 0){
          target.y += delta.y
        }
      }.bind(this),
      onTouchEnded: function(touch, event){
        var target = event.getCurrentTarget()

        if(target === this.getChildByTag(1009)){
          target._src = target.data.src6
        }else{
          target._src = target.data.src7
        }

        var choice
        this.crashArr.forEach(function(item){
          if(this.crash(item, target) && !item.crashed){
            choice = item
          }
        }.bind(this))

        if(choice){
          if(choice.texture.url === target._src){
            sound.rightAudio()
            target.runAction(cc.sequence(
              cc.moveTo(0.8, choice.x, choice.y),
              cc.callFunc(function(){
                choice.setOpacity(0)
                target.crashed = true
                choice.crashed = true
                this.becomeFalse()
                target.setLocalZOrder(target._zIndex)
                if(this.getChildByTag(1011).crashed && this.getChildByTag(1012).crashed){
                  this.scheduleOnce(function(){
                    this.getChildByTag(1009).setOpacity(0)
                    this.getChildByTag(1010).setOpacity(0)
                    this.fruitArr.forEach(function(item, index){
                      if(index === 0){
                        cc.eventManager.addListener(this.listener1_1, item)
                      }
                      if(index === 1){
                        cc.eventManager.addListener(this.listener1_2, item)
                      }
                      if(index === 2){
                        cc.eventManager.addListener(this.listener1_3, item)
                      }
                    }.bind(this))
                    this.isFinish()
                  }.bind(this), 0.5)

                }

              }.bind(this))
            ))
          }else{
            sound.wrongAudio()
            target.runAction(cc.sequence(
              cc.moveTo(0.8, target._x, target._y),
              cc.callFunc(function(){
                this.becomeFalse()
                target.setLocalZOrder(target._zIndex)
              }.bind(this))
            ))
          }
        }else{
          target.runAction(cc.sequence(
            cc.moveTo(0.8, target._x, target._y),
            cc.callFunc(function(){
              this.becomeFalse()
              target.setLocalZOrder(target._zIndex)
            }.bind(this))
          ))
        }

      }.bind(this)
    })

    this.listener1_1 = this.listener1.clone()
    this.listener1_2 = this.listener1.clone()
    this.listener1_3 = this.listener1.clone()
    this.fruitArr.forEach(function(item, index){
      if(index === 0){
        cc.eventManager.addListener(this.listener1_1, item)
      }
      if(index === 1){
        cc.eventManager.addListener(this.listener1_2, item)
      }
      if(index === 2){
        cc.eventManager.addListener(this.listener1_3, item)
      }
    }.bind(this))
  },
  isFinish: function(){
    var finished = true
    this.fruitArr.forEach(function(item){
      if(!item.clicked){
        finished = false
      }
    })

    if(finished){
      this.right()
      this.next()
    }else{
      sound.step04V()
    }
  },
  crash: function(item, target){
    var itemBox = item.getBoundingBox()
    var targetBox = target.getBoundingBox()
    if(cc.rectIntersectsRect(cc.rect(targetBox.x, targetBox.y, targetBox.width + targetBox.height / 4, targetBox.height / 2), cc.rect(itemBox.x, itemBox.y + itemBox.height / 4, itemBox.width, itemBox.height / 2))){
      return true
    }
    return false
  },
  right: function(){
    this.finished = true
    sound.stopAllEffects()
    sound.starAudio()
    this.getParent().starLayer.rightStar(2)
  },
  next: function(){
    common_data[1].obtain = 2
    this.dataRefresh()
    this.scheduleOnce(function(){
      var layer = new Layer03()
      this.getParent().addChild(layer)
      this.removeFromParent()
      // var transition = new cc.TransitionCrossFade(1, new playScene2(), false)
      // c.director.runScene(transition);
    }.bind(this), 1.5)
  },
  dataRefresh: function () {
    var sum = 0
    common_data.slice(1).forEach(function (value, index, arr) {
      sum += value.obtain
    })

    common_data[0].obtain = sum
    // cc.log(common_data)
  },
  // finish: function () {
  //   updata.is_finish = 1
  //   this.scheduleOnce(function(){
  //     sound.stopAudio()
  //     sound.stopAllEffects()
  //     sound.winAudio()
  //     this.getParent().starLayer.gameEnd(4)
  //     // common_data = deepCopy(common_data2);
  //   }.bind(this), 1.8)
  // },
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
  }
})
