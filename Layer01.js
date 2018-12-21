var Layer01 = MyLayer.extend({
  ctor: function () {
    this._super()
    this.fix_height = 180 / fix - 180
    return true
  },
  onEnter: function(){
    this._super()
    var size = cc.winSize
    var self = this
    this.sprites(layer01_data[0])
    this.sprs2 = this.sprites(layer01_data[2])

    var sprs1 = this.sprs1 = this.sprites(layer01_data[1])
    var random = [0, 1, 2, 3, 4, 5, 6, 7, 8].shuffle()
    sprs1.forEach(function(item, index){
      item.setPosition(sprs1[random[index]].data.pos[0] * fix, sprs1[random[index]].data.pos[1] * fix + self.fix_height)
      item.setRotation((Math.random() - 0.5) * 30)
      cc.eventManager.addListener(self.listener(), item)
    })

    var bg = new cc.Sprite(res.bg)
    bg.setScale(size.height / bg.height)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)
  },
  listener: function(){
    var sprs1 = this.sprs1
    var sprs2 = this.sprs2
    var self = this
    return cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function (touch, event) {
        //触摸点
        var touchPoint = touch.getLocation()
        //触摸的精灵
        var target = event.getCurrentTarget()
        //触摸精灵范围
        var s = target.getContentSize()
        var rect = cc.rect(0, 0, s.width, s.height)
        //触摸点所在精灵处的颜色及透明度
        var locationInNode = target.convertToNodeSpace(touchPoint)
        var x = locationInNode.x
        var y = locationInNode.y
        var pexels = target.getPixels(Math.round(x), Math.round(y))
        //判断点击到精灵并且点击的不是空白
        if (cc.rectContainsPoint(rect, locationInNode) && pexels[3] > 0) {

          sound.buttonAudio()
          updata.finish_steps++
          self.move = true
          //   this.becomeFalse(0.8)
          target._x = target.x
          target._y = target.y
          target._zIndex = target.getLocalZOrder()
          target.setLocalZOrder(10)
          return true
        }
        return false
      },
      onTouchMoved: function(touch, event){
        var target = event.getCurrentTarget()
        var targetRect = target.getBoundingBox()
        var delta = touch.getDelta()
        var touchPoint = touch.getLocation()

        var size = cc.winSize
        // if(!self.move){
          if(target.x + delta.x < size.width - targetRect.width / 3 && target.x + delta.x >  -targetRect.width / 3 * 2){
            target.x += delta.x
          }
          if(target.y + delta.y < size.height - targetRect.height / 3 && target.y + delta.y >  -targetRect.width / 3 * 2){
            target.y += delta.y
          }
        // }
      },
      onTouchEnded: function(touch, event){
        var target = event.getCurrentTarget()
        // self.move = false
        if(sprs2.some(function(item){
          if(self.crash(target, item) && target.data.flag === item.data.flag){
            target.crashed = true
            item.crashed = true
            var itemBox = item.getBoundingBox()
            target.runAction(cc.sequence(
              cc.moveTo(0.8, itemBox.x, itemBox.y),
              cc.callFunc(function(){
                target.setLocalZOrder(target._zIndex)
                self.becomeFalse()
              })
            ))
            return true
          }
        })){
          sound.rightAudio()
        }else{
          if(sprs2.some(function(item){
            if(self.crash(target, item)){
              return true
            }
          })){
            self.wrong()
          }
          target.runAction(cc.sequence(
            cc.moveTo(0.8, target._x, target._y),
            cc.callFunc(function(){
              target.setLocalZOrder(target._zIndex)
              self.becomeFalse()
            })
          ))
        }

        if(sprs2.every(function(item){
          return item.crashed
        })){
          self.reListen()
          self.right()
          self.next()
        }
      }
    })
  },
  // update: function (dt) {

  // }
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

