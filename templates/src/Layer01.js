var Layer01 = cc.Layer.extend({
  size: cc.winSize,
  move: true,
  ctor: function () {
    this._super()
    this.fix_height = 180 / fix - 180

    // this.svgPath = 'M368.5,38.5c0,0-60.5-0.5-99,48c-30.7,38.6-28,78-26,92s9,56,46,86c26.1,21.2,60,27,73,27c21,0,59.4-2.5,91-33 c29-28,33-49,36-57s12-48-8-93s-74-67-100-69'
    // this.pointArr = []
    // this.pointArr = []
    // var totalLen = Snap.path.getTotalLength(this.svgPath)
    // for(var pathLen = 0;pathLen < totalLen;pathLen += 2){
    //   var preMove = Snap.path.getPointAtLength(this.svgPath, pathLen)
    //   this.pointArr.push({x: preMove.x * fix, y: (414 * fix - preMove.y * fix) + this.fix_height})
    // }
    // cc.log(this.pointArr)


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
    var color = spcolor.sprites(spxy[1])
    for(var i = 0;i < color.length;i++){
      // color[i].data = spxy[0][i]
      this.addChild(color[i], color[i].zindex, color[i].id)
    }

    this.getChildren().forEach(function(item){
      if(item !== this.bg){
        item.setPosition(item.getPosition().x, item.getPosition().y + this.fix_height)
      }
    }.bind(this))

    // // 创建draw对象
    // this.drawNode = new cc.DrawNode()
    // // 曲线，参数：点数组，张力，段落，线条宽度，颜色
    // this.drawNode.drawCardinalSpline(this.pointArr, 0, 100, 8 * fix, cc.color(255, 255, 255))
    // // 加入Layer层
    // this.addChild(this.drawNode, 3)
    // this.pointArr = []
    // var totalLen = Snap.path.getTotalLength(this.svgPath)
    // console.log(totalLen)
    // for(var pathLen = 0;pathLen < totalLen;pathLen += 3){
    //   var preMove = Snap.path.getPointAtLength(this.svgPath, pathLen)
    //   this.pointArr.push({x: preMove.x, y: (414 - preMove.y)})
    // }
    // cc.log(this.pointArr)

    this.horn = this.createSprite(res.sound, 1 / 3 * fix, [0, 0], {x: 15, y: 15})
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
      // this.move = true
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
  _next: function(){
    this.scheduleOnce(function(){
      var layer = new Layer02()
      this.getParent().addChild(layer)
      this.removeFromParent()
    }, 3)
  },
  drawRect: function(rect){
    var p1 = cc.p(rect.x, rect.y)
    var p2 = cc.p(rect.x + rect.width, rect.y + rect.height)
    var Rect = new cc.DrawNode()
    Rect.drawRect(p1, p2, cc.color.BLUE, 1, cc.color.BLACK)
    this.addChild(Rect, 10)
  },
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
    var itemRect = cc.rect(targetBox.x, targetBox.y, targetBox.width, targetBox.height)
    var targetRect = cc.rect(itemBox.x, itemBox.y, itemBox.width, itemBox.height)
    if(cc.rectIntersectsRect(itemRect, targetRect)){
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
    sprite.setAnchorPoint(anchor[0], anchor[1])
    sprite.setPosition(pos)
    sprite.setLocalZOrder(z ? z : 0)
    // this.addChild(sprite,(z ? z:1));
    return sprite
  }
})

var PlayScene01 = cc.Scene.extend({
  onEnter: function () {
    this._super()
    // sound.gameBgAudio()
    this.layerArr = [Layer01]
    // this.randomArr = shuffle([0])
    this.randomArr = [0]

    this.addedLayer = []
    /* 飞星层*/
    this.starLayer = new StarLayer(common_data[1])
    // this.starLayer = new StarLayer(common_data[0])
    this.addChild(this.starLayer, 2, 2)
    // 返回首场景
    this.starLayer.onReturn()()

    var layer = new this.layerArr[this.randomArr[0]]()
    this.addChild(layer)
    this.addedLayer.push(layer)
  },
  wrong: function(){
    sound.wrongAudio()
    this.starLayer.wrongStar()
  },
  right: function(){
    // sound.stopAllEffects()
    sound.starAudio()
    common_data[1].obtain++
    this.starLayer.rightStar(common_data[1].obtain)
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
  nextLayer: function(){
    if(common_data[1].obtain < common_data[1].taoal){
      this.scheduleOnce(function(){
        sound.stopAllEffects()
        var layer = new this.layerArr[this.randomArr[common_data[1].obtain]]()
        this.addChild(layer)
        this.addedLayer[this.randomArr[common_data[1].obtain - 1]].removeFromParent()
        this.addedLayer.push(layer)
        // var transition = new cc.TransitionCrossFade(1, new PlayScene2(), false)
        // cc.director.runScene(transition);
      }.bind(this), 1.5)
    }else{
      this.nextScene()
    }
  },
  nextScene: function(){
    if(common_data[0].obtain < common_data[0].taoal){
      this.scheduleOnce(function(){
        sound.stopAllEffects()
        // var layer = new Layer02()
        // this.getParent().addChild(layer)
        // this.removeFromParent()
        var transition = new cc.TransitionFade(1, new PlayScene2(), false)
        cc.director.runScene(transition)
      }.bind(this), 1.5)
    }else{
      this.finish()
    }
  },
  finish: function () {
    cc.eventManager.removeListener(this.hornListener)
    updata.is_finish = 1
    this.scheduleOnce(function(){
      sound.stopAudio()
      sound.stopAllEffects()
      sound.winAudio()
      this.starLayer.gameEnd(common_data[0].obtain)
      // common_data = deepCopy(common_data2);
    }.bind(this), 1.8)
  }
})
