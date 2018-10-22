var Scene01_Layer01 = MyLayer.extend({
  ctor: function () {
    this._super()
    this.fix_height = 180 / fix - 180
    // this.pointArr = []
    // this.i = 0
    // var svgPath = 'M315.833,153.5c0,0-3.083-71.25,61.667-68.333c67.295,3.032,60.667,63,53,77S408.5,201.833,368,207c-7.556,0.964-6.475,6.611-1.667,7.558c10.635,2.093,77.833-0.39,82.667,61.776s-59.799,67.455-73.667,67.499c-12.667,0.04-48.667,6.334-68.833-64.833'
    // this.pointArr[0] = getPointArr(svgPath, 2, 0, this.fix_height)
    // this.move = true
    // this.delArr = []
    // this.drawNodeArr = []
    return true
  },
  onEnter: function(){
    this._super()
    // this.scheduleUpdate()

    var sprs = this.sprites(layer01_data[0])
    sprs.forEach(function(item){
      item.setPosition(item.getPosition().x, item.getPosition().y + this.fix_height)
    }.bind(this))

    var size = cc.winSize
    // add bg
    var bg = new cc.LayerColor(cc.color(105, 185, 220), size.width, size.height)
    // 颜色只能用cc.color,不能直接写”red“
    bg.setPosition(cc.p(0, 0))
    this.addChild(bg)

    // var bg = new cc.Sprite(res.beijing)
    // bg.setScale(size.height / bg.height)
    // bg.setAnchorPoint(0.5, 0.5)
    // bg.setPosition({x: size.width / 2, y: size.height / 2})
    // this.addChild(bg)

    // var clip = new cc.Sprite(res.modal)
    // clip.setAnchorPoint(0, 0)
    // clip.setPosition(0, 0)
    // // clip.setScale(1 / 3 * fix)
    // var clipping_layer = new cc.ClippingNode(clip)
    // clipping_layer.setInverted(true)
    // this.addChild(clipping_layer, 2)

    // var black = new cc.Sprite(res.black_glowworm)
    // black.setScale(size.height / black.height)
    // black.setAnchorPoint(0.5, 0.5)
    // black.setPosition({x: size.width / 2, y: size.height / 2})
    // // this.addChild(this.black, 2)
    // clipping_layer.addChild(black, 5)
    // this.getChildByTag(1005).addChild(clip)
    // 
    // var horn = this.createSprite(res.sound, 1 / 3 * fix, [0, 0], {x: 40 * fix, y: 240 * fix})
    // horn.sound = sound.che_audio
    // this.addSoundButton(horn)

    // this.hander = this.addHand(340 * fix, 235 * fix + this.fix_height)
    // this.hander.frameAnimate([res.hand, res.handclick], 0.5, 0)

    // this._point = this.pointArr[this.i].concat()

    // this.hander = this.addHand(this._point[0].x, this._point[0].y)
    // this.hander.frameAnimate([res.hand, res.handclick], 0.5, 0)

    // this.hander.runAction(cc.sequence(
    //   cc.moveTo(0.6, this._point[0].x, this._point[0].y),
    //   cc.moveTo(0.6, this._point[10].x, this._point[10].y)
    // ).repeatForever())

    // this.pencilSpr = this.createSprite(res.pencil, 1 / 3 * fix, [0, 0], {x: this._point[0].x, y: this._point[0].y})
    // this.pencilSpr.setLocalZOrder(13)

    // // 创建draw对象
    // this.drawLine(this._point, [0, 0, 0])
    //
    // cc.eventManager.addListener(this.listener(), this)

  },
  listener: function(){
    return cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function (touch, event) {
        var target = event.getCurrentTarget()
        var touchPoint = touch.getLocation()
        var targetRect = target.getBoundingBox()
        if (!this.move && !target.crashed && cc.rectContainsPoint(targetRect, touchPoint)) {

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
          //   this.becomeFalse(0.8)
          target._x = target.x
          target._y = target.y
          target._zIndex = target.getLocalZOrder()
          target.setLocalZOrder(10)
          return true
          // if(this.hander){
          //   this.hander.removeFromParent()
          // }
          // if(target.id === 1014){
          //   if(this.hander){
          //     this.hander.removeFromParent()
          //   }
          //   return true
          // }else{
          //   this.colorObj = target.data.color
          //   this.clickArr.forEach(function(item){
          //     item.initWithFile(item.data.sprurl)
          //   })
          //   target.initWithFile(target.data.sprurl2)
          //   if(!this.listener1){
          //     this.hander = this.createSprite(res.hand, 1 / 3 * fix, [0, 1], {x: this._point[0].x, y: this._point[0].y})
          //     this.hander.setLocalZOrder(15)

          //     this.hander.runAction(cc.sequence(
          //       cc.moveTo(0.5, this._point[0].x, this._point[0].y),
          //       cc.moveTo(0.5, this._point[10].x, this._point[10].y)
          //     ).repeatForever())
          //     this.listener1 = this.listener().clone()
          //     cc.eventManager.addListener(this.listener1, this.getChildByTag(1014))
          //   }
          //   return false
          // }

          // if(target.id === 1002){
          //   this.flag = 'clean'
          //   this.clickArr.forEach(function(item){
          //     item.initWithFile(item.data.sprurl)
          //     item.setPosition(item.data.sp_X * fix, item.data.sp_Y * fix)
          //   })
          //   target.initWithFile(target.data.sprurl2)
          //   target.setPosition(target.data.sp_X * fix, target.data.sp_Y * fix + this.fix_height)
          //   return false
          // }else if(target.id === 1014){
          //   // if(this.flag === 'move'){

          //   //   return false
          //   // }
          //   return true
          // }else if(target.id === 1013){
          //   this.reListen()
          //   return false
          // }else{
          //   this.flag = 'draw'
          //   this.colorObj = target.data.color
          //   this.clickArr.forEach(function(item){
          //     item.initWithFile(item.data.sprurl)
          //     if(item.id === 1002){
          //       item.setPosition(item.data.sp_X * fix, item.data.sp_Y * fix + this.fix_height)
          //     }else{
          //       item.setPosition(item.data.sp_X * fix, item.data.sp_Y * fix)
          //     }
          //   }.bind(this))
          //   target.initWithFile(target.data.sprurl2)
          //   target.setPosition(target.data.sp_X * fix, target.data.sp_Y * fix - 20 * fix)
          //   if(!this.listener1){
          //     this.listener1 = this.listener().clone()
          //     cc.eventManager.addListener(this.listener1, this.getChildByTag(1013))
          //   }
          //   return false
          // }
        }
        return false
      }.bind(this),
      onTouchMoved: function(touch, event){
        var target = event.getCurrentTarget()
        var targetRect = target.getBoundingBox()
        var delta = touch.getDelta()
        var touchPoint = touch.getLocation()

        var size = cc.winSize
        if(!this.move){
          if(target.x + delta.x < size.width - targetRect.width && target.x + delta.x > 0){
            target.x += delta.x
          }
          if(target.y + delta.y < size.height - targetRect.height && target.y + delta.y > 0){
            target.y += delta.y
          }
        }
        // var locationInNode = target.convertToNodeSpace(touchPoint)
        // var x = locationInNode.x
        // var y = locationInNode.y
        // var pexels = target.readPixels(Math.round(x), Math.round(y))
        // // cc.log(pexels[3])
        // if (cc.rectContainsPoint(targetRect, touchPoint) && pexels[3] >= 5 && pexels[3] <= 100) {
        //   if(this.flag === 'draw'){
        //     this.drawColor(touch, event)
        //   }
        //   if(this.flag === 'clean'){
        //     this.rubber(touch, event)
        //   }
        // }
        // if (!this.move && this.getDistance(this._point[0], touchPoint) <= 50) {
        //   this.drawLine(this._point.splice(0, 2), this.colorObj)
        //   // this.delArr.push(drawNode)
        //   if(this._point.length <= 0){
        //     this.move = true
        //     this.reListen()
        //     //this.pencilSpr.removeFromParent()
        //     this.right()
        //     this.next()
        //   }else{
        //     this.pencilSpr.setPosition(this._point[0].x, this._point[0].y)
        //   }
        // }
      }.bind(this),
      onTouchEnded: function(touch, event){
        var target = event.getCurrentTarget()
        // target.runAction(cc.sequence(
        //   cc.moveTo(0.8, target._x, target._y),
        //   cc.callFunc(function(){
        //     target.setLocalZOrder(target._zIndex)
        //     this.becomeFalse()
        //   }.bind(this))
        // ))
        // this.sX = null
        // this.sY = null

        // this._sX = null
        // this._sY = null

        // if(this.crashArr.some(function(item){
        //   if(this.crash(target, item) && target.data.flag === item.data.flag){
        //     target.crashed = true
        //     var itemBox = item.getBoundingBox()
        //     target.setAnchorPoint(0.5, 1)
        //     target.setPosition(itemBox.x + itemBox.width / 2, itemBox.y + itemBox.height)
        //     target.setLocalZOrder(target._zIndex)
        //     item.runAction(cc.sequence(
        //       cc.callFunc(function(){
        //         item.initWithFile(item.data.sprurl2)
        //       }),
        //       cc.delayTime(0.5),
        //       cc.callFunc(function(){
        //         item.initWithFile(item.data.sprurl)
        //       })
        //     ))
        //     return true
        //   }
        // }.bind(this))){
        //   sound.rightAudio()
        //   // this.right()
        //   target.runAction(cc.sequence(
        //     cc.moveBy(0.8, 0, -40 * fix),
        //     cc.callFunc(function(){
        //       this.becomeFalse()
        //     }.bind(this))
        //   ))
        // }else{
        //   if(this.crashArr.some(function(item){
        //     if(this.crash(target, item)){
        //       return true
        //     }
        //   }.bind(this))){
        //     this.wrong()
        //   }
        //   target.runAction(cc.sequence(
        //     cc.moveTo(0.8, target._x, target._y),
        //     cc.callFunc(function(){
        //       target.setLocalZOrder(target._zIndex)
        //       this.becomeFalse()
        //     }.bind(this))
        //   ))
        // }

        // if(this.dragArr.filter(function(item){
        //   return item.data.flag === 50
        // }).every(function(item){
        //   return item.crashed
        // }) && this.dragArr.filter(function(item){
        //   return item.data.flag === 1
        // }).every(function(item){
        //   return item.crashed
        // })){
        //   this.move = true
        //   this.right()
        //   this.next()
        // }
      }.bind(this)
    })
  },
  // update: function(){

  // },
  // removeListeners
  reListen: function(){
    cc.eventManager.removeAllListeners()
    // 返回游戏列表
    this.getParent().starLayer.gameClose()
  },
  next: function(t){
    if(this.hornListener){
      cc.eventManager.removeListener(this.hornListener)
    }
    this.getParent().nextLayer(t)
  },
  crash: function(target, item){
    var itemBox = item.getBoundingBox()
    var targetBox = target.getBoundingBox()
    var targetRect = cc.rect(targetBox.x, targetBox.y, targetBox.width, targetBox.height)
    var itemRect = cc.rect(itemBox.x, itemBox.y, itemBox.width, itemBox.height)
    if(cc.rectIntersectsRect(itemRect, targetRect)){
      return true
    }
    return false
  }
  // rubber: function(touch, event){
  //   var target = event.getCurrentTarget()
  //   var touchPoint = touch.getLocation()
  //   var locationInNode = target.convertToNodeSpace(touchPoint)

  //   var x = locationInNode.x
  //   var y = locationInNode.y

  //   this.drawNodeArr.forEach(function(item, index){
  //     if(x > item.startx && x < item.endx && y > item.starty && y < item.endy){
  //       this.drawNodeArr.splice(index, 1)
  //       item.removeFromParent()
  //     }
  //   }.bind(this))
  // },
  //   drawColor: function(touch, event){
  //   var target = event.getCurrentTarget()
  //   var touchPoint = touch.getLocation()
  //   var locationInNode = target.convertToNodeSpace(touchPoint)

  //   var x = locationInNode.x
  //   var y = locationInNode.y

  //   var r = this.colorObj[0]
  //   var g = this.colorObj[1]
  //   var b = this.colorObj[2]
  //   if(!this.sX){
  //     this.sX = touchPoint.x - 0.001
  //     this.sY = touchPoint.y - 0.001
  //   }
  //   if(!this._sX){
  //     this._sX = x - 10
  //     this._sY = y - 10
  //   }

  //   if(Math.abs(this.sX - touchPoint.x) < 35 && Math.abs(this.sY - touchPoint.y) < 35){

  //     var drawNode = new cc.DrawNode()
  //     drawNode.drawCardinalSpline(
  //       [cc.p(this.sX, this.sY), // 起点
  //         cc.p(touchPoint.x, touchPoint.y)], // 终点
  //       0.1,
  //       8,
  //       3 * fix * fix2, // 线粗
  //       // cc.color(this.colorObj.r, this.colorObj.b, this.colorObj.b, 255) // 颜色
  //       cc.color(r, g, b, 255) // 颜色
  //     )
  //     this.addChild(drawNode, 8)

  //     if(this._sX <= x){
  //       if(x - this._sX >= 20){
  //         drawNode.startx = this._sX
  //         drawNode.endx = x
  //       }else{
  //         drawNode.startx = this._sX - 20
  //         drawNode.endx = this._sX + 2 * 20
  //       }
  //     }else{
  //       if(this._sX - x >= 20){
  //         drawNode.startx = x
  //         drawNode.endx = this._sX
  //       }else{
  //         drawNode.startx = x - 20
  //         drawNode.endx = x + 2 * 20
  //       }
  //     }
  //     if(this._sY <= y){
  //       if(y - this._sY >= 20){
  //         drawNode.starty = this._sY
  //         drawNode.endy = y
  //       }else{
  //         drawNode.starty = this._sY - 20
  //         drawNode.endy = this._sY + 2 * 20
  //       }
  //     }else{
  //       if(this._sY - y >= 20){
  //         drawNode.starty = y
  //         drawNode.endy = this._sY
  //       }else{
  //         drawNode.starty = y - 20
  //         drawNode.endy = y + 2 * 20
  //       }
  //     }
  //     this.drawNodeArr.push(drawNode)

  //     this.sX = touchPoint.x
  //     this.sY = touchPoint.y

  //     this._sX = x
  //     this._sY = y
  //   }
  // }
})

