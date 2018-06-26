var Hand = cc.Sprite.extend({
  onEnter: function () {
    this._super()
    this.handClick()
  },
  onExit: function () {
    this._super()
  },
  handClick: function () {

    var fadeIn = cc.fadeIn(0.8)

    this.runAction(fadeIn)

    var cb1 = cc.callFunc(function(){
      this.initWithFile(res.handclick)
    }.bind(this))

    var cb2 = cc.callFunc(function(){
      this.initWithFile(res.hand)
    }.bind(this))

    var action = cc.sequence(cc.delayTime(0.5), cb1, cc.delayTime(0.5), cb2)
    action.repeatForever()

    this.runAction(action)

    var action1 = cc.fadeOut(0.5)
    var action2 = cc.fadeIn(0.5)
    var a = cc.sequence(action1, action2)
    this.runAction(a.repeatForever())
  }
})
var Layer01 = cc.Layer.extend({
  size: cc.winSize,
  ctor: function () {
    this._super()

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
        item.setPosition(item.getPosition().x, item.getPosition().y + 180 / fix - 180)
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
            this.becomeFalse()
          }.bind(this))
        ))

        // var choice
        // this.dragArr.forEach(function(item){
        //   if(item.id !== target.id){
        //     if(this.crash(item, target)){
        //       choice = item
        //       choice._x = choice.x
        //       choice._y = choice.y
        //     }
        //   }
        // }.bind(this))
      }.bind(this)
    })

    // this.dragArr.forEach(function(item){
    // 	cc.eventManager.addListener(listener.clone(),item);
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
  crash: function(item, target){
    var itemBox = item.getBoundingBox()
    var targetBox = target.getBoundingBox()
    if(cc.rectIntersectsRect(cc.rect(targetBox.x + targetBox.width / 4, targetBox.y, targetBox.width / 2, targetBox.height), cc.rect(itemBox.x + itemBox.width / 4, itemBox.y, itemBox.width / 2, itemBox.height))){
      return true
    }
    return false
  },
  right: function(){
    sound.stopAllEffects()
    sound.starAudio()
    common_data[1].obtain++
    this.getParent().starLayer.rightStar(common_data[1].obtain)
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
  next: function(){
    this.scheduleOnce(function(){
      var layer = new Layer02()
      this.getParent().addChild(layer)
      this.removeFromParent()
      // var transition = new cc.TransitionCrossFade(1, new playScene2(), false)
      // c.director.runScene(transition);
    }.bind(this), 1.5)
  },
  finish: function () {
    updata.is_finish = 1
    this.scheduleOnce(function(){
      sound.stopAudio()
      sound.stopAllEffects()
      sound.winAudio()
      this.getParent().starLayer.gameEnd(common_data[0].obtain)
      // common_data = deepCopy(common_data2);
    }.bind(this), 1.8)
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
  }
})
