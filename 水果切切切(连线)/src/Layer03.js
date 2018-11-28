var Layer03 = cc.Layer.extend({
  size: cc.winSize,
  ctor: function () {
    this._super()

    this.bg = new cc.Sprite(res.bg2)
    this.bg.setScale(this.size.height / this.bg.height)
    this.bg.setAnchorPoint(0.5, 0.5)
    this.bg.setPosition({x: this.size.width / 2, y: this.size.height / 2})
    this.addChild(this.bg)

    var spcolor = new LayerExp()
    var color = spcolor.sprites(spxy[2])
    for(var i = 0;i < color.length;i++){
      this.addChild(color[i], color[i].zindex, color[i].id)
    }

    // this.getChildren().forEach(function(item){
    //   if(item !== this.bg){
    //     item.setPosition(item.getPosition().x, item.getPosition().y + 180 / fix - 180)
    //   }
    // }.bind(this))

    this.fruitArr = [this.getChildByTag(1001), this.getChildByTag(1002), this.getChildByTag(1003)]
    this.cutFruitArr = [this.getChildByTag(1004), this.getChildByTag(1005), this.getChildByTag(1006)]
    this.lineArr = []

    var fruitSprit = [
      {src1: res.little_watermalon, src2: res.watermalon, src3: res.watermalon02, src4: res.watermalon03, src5: res.watermalon05, src6: res.watermalon06, src7: res.watermalon04},
      {src1: res.little_apple, src2: res.apple, src3: res.apple02, src4: res.apple04, src5: res.apple03, src6: res.apple05, src7: res.apple06},
      {src1: res.little_papaya, src2: res.papaya, src3: res.papaya02, src4: res.papaya03, src5: res.papaya03, src6: res.papaya04, src7: res.papaya04}
    ]

    var random1 = shuffle([0, 1, 2])
    var random2 = shuffle([0, 1, 2])

    this.fruitArr.forEach(function(item, index){
      item.id = random1[index]
      item.flag = 'up'
      item.initWithFile(fruitSprit[random1[index]].src2)

      var dot = new cc.DrawNode()
      this.addChild(dot, 2, 1)
      var itemRect = item.getBoundingBox()
      dot.drawDot(cc.p(itemRect.x + itemRect.width / 2, itemRect.y - 20 * fix), 5, cc.color(255, 110, 127, 255))

      // 线
      var line = new cc.DrawNode()
      line.id = index
      this.addChild(line, 3, 1)
      this.lineArr.push(line)
    }.bind(this))

    this.cutFruitArr.forEach(function(item, index){
      item.id = random2[index]
      item.flag = 'down'
      item.initWithFile(fruitSprit[random2[index]].src4)

      var dot = new cc.DrawNode()
      this.addChild(dot, 2, 1)
      var itemRect = item.getBoundingBox()
      dot.drawDot(cc.p(itemRect.x + itemRect.width / 2, itemRect.y + itemRect.height + 20 * fix), 5, cc.color(255, 110, 127, 255))
    }.bind(this))

    this.getChildren().forEach(function(item){
      if(item !== this.bg){
        item.setPosition(item.getPosition().x, item.getPosition().y + 180 / fix - 180)
      }
    }.bind(this))

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
            sound.line_upV()
          }
          return true
        }
        return false
      }.bind(this)
    })

    var action1 = cc.callFunc(function(){
      cc.log('提示玩法')
      sound.line_upV()
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

        if(target.flag === 'up'){
          var targetRect = cc.rect(targetRect.x, targetRect.y - 20 * fix, targetRect.width, targetRect.height + 20 * fix)
        }else if(target.flag === 'down'){
          var targetRect = cc.rect(targetRect.x, targetRect.y, targetRect.width, targetRect.height + 20 * fix)
        }
        if (cc.rectContainsPoint(targetRect, pos)) {
          sound.buttonAudio()
          if(!this.move && !target.clicked){
            this.move = true
            updata.finish_steps++
            // target._x = target.x
            // target._y = target.y
            // target.setLocalZOrder(10)

            return true
          }
        }
        return false
      }.bind(this),
      onTouchMoved: function(touch, event){
        var target = event.getCurrentTarget()
        var targetRect = target.getBoundingBox()

        var startX, startY, endX, endY
        if(target.flag === 'up'){
          startX = targetRect.x + targetRect.width / 2
          startY = targetRect.y - 20 * fix - 180 / fix + 180
        }else{
          startX = targetRect.x + targetRect.width / 2
          startY = targetRect.y + targetRect.height + 20 * fix - 180 / fix + 180
        }

        endX = touch._point.x
        endY = touch._point.y - 180 / fix + 180

        this.drawLine(target, startX, startY, endX, endY)
      }.bind(this),
      onTouchEnded: function(touch, event){
        var target = event.getCurrentTarget()
        var targetRect = target.getBoundingBox()

        this.move = false
        /* 判断*/
        this.judgeEach(target, touch)
        // 回到原位
        if(!target.clicked){
          if(target.flag === 'up'){
            startX = targetRect.x + targetRect.width / 2
            startY = targetRect.y - 20 * fix - 180 / fix + 180
          }else{
            startX = targetRect.x + targetRect.width / 2
            startY = targetRect.y + targetRect.height + 20 * fix - 180 / fix + 180
          }
          this.drawLine(target, startX, startY, startX, startY)
        }
        this.yes = false
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

    this.fruitArr.forEach(function(item){
      cc.eventManager.addListener(listener.clone(), item)
    })
    this.cutFruitArr.forEach(function(item){
      cc.eventManager.addListener(listener.clone(), item)
    })
  },
  // isFinish: function(){
  //   var finished = true
  //   this.dragArr.forEach(function(item){
  //     if(item.texture.url !== item.data.sprurl){
  //       finished = false
  //     }
  //   })

  //   if(finished){
  //     this.next()
  //   }
  // },
  // crash: function(item, target){
  //   var itemBox = item.getBoundingBox()
  //   var targetBox = target.getBoundingBox()
  //   if(cc.rectIntersectsRect(cc.rect(targetBox.x + targetBox.width / 4, targetBox.y, targetBox.width / 2, targetBox.height), cc.rect(itemBox.x + itemBox.width / 4, itemBox.y, itemBox.width / 2, itemBox.height))){
  //     return true
  //   }
  //   return false
  // },
  drawLine: function(target, x1, y1, x2, y2) {
    for(var i = 0; i < this.lineArr.length; i++){
      if(target.id === this.lineArr[i].id){
        this.lineArr[i].clear()
        this.lineArr[i].drawSegment(cc.p(x1, y1), cc.p(x2, y2), 1 * fix, cc.color(255, 110, 127, 255))
        break
      }
    }
  },
  judgeEach: function(target, touch){
    var targetRect = target.getBoundingBox()
    if(target.flag === 'up'){
      var _crashArr = this.cutFruitArr
    }else{
      var _crashArr = this.fruitArr
    }
    _crashArr.forEach(function(item){
      var itemRect = item.getBoundingBox()
      if(item.flag === 'up'){
        var itemRect1 = cc.rect(itemRect.x, itemRect.y - 20 * fix, itemRect.width, itemRect.height + 20 * fix)
      }else{
        var itemRect1 = cc.rect(itemRect.x, itemRect.y, itemRect.width, itemRect.height + 20 * fix)
      }

      if(cc.rectContainsPoint(itemRect1, touch._point)) {
        if(target.id === item.id){
          target.clicked = true
          item.clicked = true
          /* 正确提示*/
          sound.rightAudio()

          /* 根据上下排确定不同起始点 和 终点*/
          var startX, startY, endX, endY
          if(target.flag === 'up'){
            startX = targetRect.x + targetRect.width / 2
            startY = targetRect.y - 20 * fix - 180 / fix + 180
          }else{
            startX = targetRect.x + targetRect.width / 2
            startY = targetRect.y + targetRect.height + 20 * fix - 180 / fix + 180
          }

          if(item.flag === 'up'){
            endX = itemRect.x + itemRect.width / 2
            endY = itemRect.y - 20 * fix - 180 / fix + 180
          }else{
            endX = itemRect.x + itemRect.width / 2
            endY = itemRect.y + itemRect.height + 20 * fix - 180 / fix + 180
          }
          /* 完成时定位动画*/
          this.drawLine(target, startX, startY, endX, endY)

          this.isFinish()
          this.yes = true
        }
      }
    }.bind(this))

    if(!this.yes){
      sound.wrongAudio()
      // 回到原位
      if(!target.clicked){
        if(target.flag === 'up'){
          startX = targetRect.x + targetRect.width / 2
          startY = targetRect.y - 20 * fix
        }else{
          startX = targetRect.x + targetRect.width / 2
          startY = targetRect.y + targetRect.height + 20 * fix
        }
        this.drawLine(target, startX, startY, startX, startY)
      }
    }
  },
  isFinish: function(){
    var finished = true
    this.fruitArr.forEach(function(item){
      if(!item.clicked){
        finished = false
      }
    })

    if(finished){
      sound.correctV()
      this.right()
      this.finish()
    }
  },
  right: function(){
    this.finished = true
    sound.stopAllEffects()
    sound.starAudio()
    this.getParent().starLayer.rightStar(3)
  },
  // next: function(){
  //   common_data[1].obtain = 1
  //   this.dataRefresh()
  //   this.scheduleOnce(function(){
  //     var layer = new Layer02()
  //     this.getParent().addChild(layer)
  //     this.removeFromParent()
  //     // var transition = new cc.TransitionCrossFade(1, new playScene2(), false)
  //     // c.director.runScene(transition);
  //   }.bind(this), 1.5)
  // },
  dataRefresh: function () {
    var sum = 0
    common_data.slice(1).forEach(function (value, index, arr) {
      sum += value.obtain
    })

    common_data[0].obtain = sum
    // cc.log(common_data)
  },
  finish: function () {
    updata.is_finish = 1
    this.scheduleOnce(function(){
      sound.stopAudio()
      sound.stopAllEffects()
      sound.winAudio()
      this.getParent().starLayer.gameEnd(3)
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
