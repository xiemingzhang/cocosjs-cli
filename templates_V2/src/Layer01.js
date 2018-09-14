var Layer01 = MyLayer.extend({
  ctor: function () {
    this._super()
    this.fix_height = 180 / fix - 180
    this.move = true
    // this.delArr = []
    // this.drawNodeArr = []
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

    // var svgPath = 'M315.833,153.5c0,0-3.083-71.25,61.667-68.333c67.295,3.032,60.667,63,53,77S408.5,201.833,368,207c-7.556,0.964-6.475,6.611-1.667,7.558c10.635,2.093,77.833-0.39,82.667,61.776s-59.799,67.455-73.667,67.499c-12.667,0.04-48.667,6.334-68.833-64.833'
    // this.pointArr = getPonitArr(svgPath, 2, 0, this.fix_height)
    // cc.log(this.pointArr)
    // this._point = this.pointArr.concat()

    // this.hander = new MySprite(res.hand)
    // this.hander.setPosition({x: 360 * fix, y: 220 * fix + this.fix_height})
    // this.hander.setAnchorPoint(0, 1)
    // this.hander.setScale(1 / 3 * fix)
    // this.addChild(this.hander, 6)
    // this.hander.handClick()

    // this.hander.setPosition(this.pointArr[0].x, this.pointArr[0].y)

    // this.hander.runAction(cc.sequence(
    //   cc.moveTo(0.6, this.pointArr[0].x, this.pointArr[0].y),
    //   cc.moveTo(0.6, this.pointArr[10].x, this.pointArr[10].y)
    // ).repeatForever())

    // // 创建draw对象
    // this.drawNode = new cc.DrawNode()
    // // 曲线，参数：点数组，张力，段落，线条宽度，颜色
    // this.drawNode.drawCardinalSpline(this.pointArr, 0, 100, 2 * fix, cc.color(0, 0, 0))
    // // 加入Layer层
    // this.addChild(this.drawNode, 3)
    // cc.log(this.pointArr)

  },
  listener: function(){
    return cc.EventListener.create({
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
        // var pos = touch.getLocation()
        // if (cc.rectContainsPoint(targetRect, pos)) {
        //   // cc.log(this.colorObj)

        //   if(this.flag === 'draw'){
        //     cc.log(1)
        //     this.drawLine(touch, event)
        //   }
        //   if(this.flag === 'clean'){
        //     cc.log(12)
        //     this.rubber(touch, event)
        //   }

        // }
        //  var touchPoint = touch.getLocation()
        // if (!this.move && this.getDistance(this._point[0], touchPoint) <= 50 && !this._point[0].crashed) {
        //   this._point[0].crashed = true
        //   // 创建draw对象
        //   var drawNode = new cc.DrawNode()
        //   // 曲线，参数：点数组，张力，段落，线条宽度，颜色
        //   var color = this.colr
        //   drawNode.drawCardinalSpline(this._point.splice(0, 1), 0, 40, 6 * fix, cc.color(color[0], color[1], color[2]))
        //   // 加入Layer层
        //   this.addChild(drawNode, 3)
        //   // this.delArr.push(drawNode)
        //   if(this._point.length <= 0){
        //     this.move = true
        //     cc.eventManager.removeListener(this.listener1)
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
        target.runAction(cc.sequence(
          cc.moveTo(0.8, target._x, target._y),
          cc.callFunc(function(){
            target.setLocalZOrder(target._zIndex)
            this.becomeFalse()
          }.bind(this))
        ))
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
  // _next: function(){
  //   if(this.hornListener){
  //     cc.eventManager.removeListener(this.hornListener)
  //   }
  //   this.scheduleOnce(function(){
  //     var layer = new Layer02()
  //     this.getParent().addChild(layer)
  //     this.removeFromParent()
  //   }, 3)
  // },
  next: function(){
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
  // drawLine: function(touch, event){
  //   var target = event.getCurrentTarget()
  //   var touchPoint = touch.getLocation()
  //   var locationInNode = target.convertToNodeSpace(touchPoint)

  //   var x = locationInNode.x
  //   var y = locationInNode.y

  //   var r = this.colorObj.r
  //   var g = this.colorObj.g
  //   var b = this.colorObj.b
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
  //       8, // 线粗
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
  // },
})

