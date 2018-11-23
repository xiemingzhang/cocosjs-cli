var Layer01 = MyLayer.extend({
  ctor: function () {
    this._super()
    this.fix_height = 180 / fix - 180
    this.move = true
    sound.step01_01_audio()
    return true
  },
  onEnter: function(){
    this._super()
    // this.scheduleUpdate()
    // 一点点显示
    // this.clip = new cc.LayerColor(cc.color(0, 0, 0), 830, 990) // 县市区
    // this.clip.setPosition(229 * fix, 300 * fix)
    // this.clip.setAnchorPoint(0, 0)
    // this.clip.setScale(1 / 3 * fix,1/3);

    // var clipTwo = new cc.ClippingNode(this.clip)
    // clipTwo.setAnchorPoint(0, 0)
    // this.addChild(clipTwo, 3);

    // var gray = new cc.Sprite(res.lie_wen) // xianshineirong
    // gray.setPosition(229 * fix, 0 * fix)
    // gray.setAnchorPoint(0, 0)
    // gray.setScale(1/3 * fix,1/3);
    // clipTwo.addChild(gray, 10);
    // this.clip.runAction(cc.moveTo(3, cc.p(229 * fix, 0 * fix)))

    var sprs = this.sprites(layer01_data[0])
    sprs.forEach(function(item){
      cc.eventManager.addListener(this.listener().clone(), item)
    }.bind(this))
    this.sprs = sprs

    var size = cc.winSize
    var bg = new cc.Sprite(res.bg)
    bg.setScale(size.height / bg.height)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    this.scheduleOnce(function(){
      this.hander = this.addHand(150 * fix, 275 * fix + this.fix_height)
      this.hander.frameAnimate([res.hand, res.handclick], 0.5, 0)
      this.move = false
    }, 3)
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
        //   this.drawLine(this._point.splice(0, 2), 5 * fix * fix2, this.colorObj)
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
            // item.crashed = true
            // var itemBox = item.getBoundingBox()
            // target.runAction(cc.sequence(
            //   cc.moveTo(0.8, itemBox.x, itemBox.y),
            //   cc.callFunc(function(){
            //     target.setLocalZOrder(target._zIndex)
            //     this.becomeFalse()
            //   }.bind(this))
            // ))
        //     return true
        //   }
        // }.bind(this))){
        //   sound.rightAudio()
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
})

