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

          sound.buttonAudio()
          updata.finish_steps++
          this.move = true
          //   this.becomeFalse(0.8)
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
      }.bind(this),
      onTouchEnded: function(touch, event){
        var target = event.getCurrentTarget()
        this.move = false

      }.bind(this)
    })
  }
  // update: function(){

  // },
  // removeListeners
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

