var Layer01 = cc.Layer.extend({
  size: cc.winSize,
  ctor: function () {
    this._super()

    this.fix_height = 180 / fix - 180

    this.bg = new cc.Sprite(res.bg)
    this.bg.setScale(this.size.height / this.bg.height)
    this.bg.setAnchorPoint(0.5, 0.5)
    this.bg.setPosition({x: this.size.width / 2, y: this.size.height / 2})
    this.addChild(this.bg)

    // this.hander = new Hand(res.hand)
    // this.hander.setPosition({x: this.size.width / 736 * 140, y: this.size.height / 414 * 300})
    // this.hander.setScale(1 / 3 * fix)
    // this.hander.setOpacity(0)
    // this.addChild(this.hander, 2)

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

    this.horn = this.createSprite(res.sound, 1 / 3 * fix, {x: 0, y: 0}, {x: 15, y: 15})
    this.addChild(this.horn, 5)

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
            sound.gameInfo()
          }
          return true
        }
        return false
      }.bind(this)
    })

    var action1 = cc.callFunc(function(){
      // cc.log('提示玩法')
      sound.gameInfo()
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
    var listener = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function (touch, event) {
        var target = event.getCurrentTarget()
        var pos = touch.getLocation()

        var targetRect = target.getBoundingBox()
        if (cc.rectContainsPoint(targetRect, pos) && !this.move && !target.crashed) {

          // var touchPoint = touch.getLocation()
          // var locationInNode = target.convertToNodeSpace(touchPoint)

          // var x = locationInNode.x
          // var y = locationInNode.y

          // var pexels = target.readPixels(Math.round(x), Math.round(y))
          // cc.log(pexels)
          // if(pexels[3] === 0){
          //   // 透明

          // }
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

        if(target.x + delta.x < this.size.width - targetRect.width && target.x + delta.x > 0){
          target.x += delta.x
        }
        if(target.y + delta.y < this.size.height - targetRect.height && target.y + delta.y > 0){
          target.y += delta.y
        }
      }.bind(this),
      onTouchEnded: function(touch, event){
        var target = event.getCurrentTarget()

        target.runAction(cc.sequence(
          cc.moveTo(0.8, target._x, target._y),
          cc.callFunc(function(){
            target.setLocalZOrder(target._zIndex)
            this.becomeFalse()
          }.bind(this))
        ))

      }.bind(this)
    })

    // this.dragArr.forEach(function(item){
    //   cc.eventManager.addListener(listener.clone(), item)
    // })
  },
  // isFinish: function(){
  //   var finished = this.dragArr.every(function(item){
  //     return item.texture.url === item.data.sprurl
  //   })

  //   if(finished){
  //     this.next()
  //   }
  // },
  right: function(){
    this.getParent().right()
  },
  wrong: function(){
    this.getParent().wrong()
  },
  finish: function(){
    this.getParent().finish()
  },
  nextLayer: function(){
    if(this.hornListener){
      cc.eventManager.removeListener(this.hornListener)
    }
    this.getParent().nextLayer()
  },
  crash: function(target, item){
    var itemBox = item.getBoundingBox()
    var targetBox = target.getBoundingBox()
    if(cc.rectIntersectsRect(cc.rect(targetBox.x, targetBox.y, targetBox.width, targetBox.height), cc.rect(itemBox.x, itemBox.y, itemBox.width, itemBox.height))){
      return true
    }
    return false
  },
  becomeFalse: function() {
    this.move = false
  },
  colorBar: function(){
    var particleSystem2 = new cc.ParticleSystem(res.bar_plist)
    particleSystem2.texture = cc.textureCache.addImage(res.color_bar)
    particleSystem2.x = this.size.width / 2
    particleSystem2.y = this.size.height * 1.2
    this.addChild(particleSystem2, 2)
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
