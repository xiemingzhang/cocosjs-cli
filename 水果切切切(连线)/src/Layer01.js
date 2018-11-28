var fruitSprit = []
var fruitAll = [
  {src1: res.little_carambola, src2: res.carambola, src3: res.carambola02, src4: res.carambola03, src5: res.carambola03, src6: res.carambola04, src7: res.carambola04},
  {src1: res.little_orange, src2: res.orange01, src3: res.orange02, src4: res.orange04, src5: res.orange03, src6: res.orange06, src7: res.orange05},
  {src1: res.little_kiwifruit, src2: res.kiwifruit01, src3: res.kiwifruit02, src4: res.kiwifruit03, src5: res.kiwifruit03, src6: res.kiwifruit04, src7: res.kiwifruit04},
  {src1: res.little_apple, src2: res.apple, src3: res.apple02, src4: res.apple04, src5: res.apple03, src6: res.apple05, src7: res.apple06},
  {src1: res.little_papaya, src2: res.papaya, src3: res.papaya02, src4: res.papaya03, src5: res.papaya03, src6: res.papaya04, src7: res.papaya04},
  {src1: res.little_watermalon, src2: res.watermalon, src3: res.watermalon02, src4: res.watermalon03, src5: res.watermalon05, src6: res.watermalon06, src7: res.watermalon04}
]
// var Hand = cc.Sprite.extend({
//   onEnter: function () {
//     this._super()
//     this.handClick()
//   },
//   onExit: function () {
//     this._super()
//   },
//   handClick: function () {

//     var fadeIn = cc.fadeIn(0.8)

//     this.runAction(fadeIn)

//     var cb1 = cc.callFunc(function(){
//       this.initWithFile(res.handclick)
//     }.bind(this))

//     var cb2 = cc.callFunc(function(){
//       this.initWithFile(res.hand)
//     }.bind(this))

//     var action = cc.sequence(cc.delayTime(0.5), cb1, cc.delayTime(0.5), cb2)
//     action.repeatForever()

//     this.runAction(action)

//     var action1 = cc.fadeOut(0.5)
//     var action2 = cc.fadeIn(0.5)
//     var a = cc.sequence(action1, action2)
//     this.runAction(a.repeatForever())
//   }
// })
var Layer01 = cc.Layer.extend({
  size: cc.winSize,
  fruitNum: 0,
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
      color[i].data = spxy[0][i]
      this.addChild(color[i], color[i].zindex, color[i].id)
    }

    this.fruitArr = [this.getChildByTag(1003), this.getChildByTag(1004), this.getChildByTag(1005), this.getChildByTag(1006), this.getChildByTag(1007), this.getChildByTag(1008)]
    this.fruitArr.forEach(function(item, index){
      item.index = index
      item.setOpacity(0)
    })

    this.getChildren().forEach(function(item){
      // if(item !== this.bg){
      //   item.setPosition(item.getPosition().x, item.getPosition().y + 180 / fix - 180)
      // }
      if(item.id === 1002){
        item.setPosition(item.getPosition().x, item.getPosition().y + 55 / fix - 55)
      }
    })

    this.pos = [{x: 443.3 * fix, y: 99.7 * fix + 55 / fix - 55}, {x: 528.3 * fix, y: 99.7 * fix + 55 / fix - 55}, {x: 613.3 * fix, y: 99.7 * fix + 55 / fix - 55}]

    this.scheduleOnce(function(){
      this.getChildByTag(1001).initWithFile(res.fridge_open)
      this.fruitArr.forEach(function(item){
        item.setOpacity(255)
      })
    }.bind(this), 3)

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
            sound.gameInfo()
          }
          return true
        }
        return false
      }.bind(this)
    })

    var action1 = cc.callFunc(function(){
      cc.log('提示玩法')
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
    this.listener1 = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function (touch, event) {
        var target = event.getCurrentTarget()
        var pos = touch.getLocation()

        var targetRect = target.getBoundingBox()
        if (cc.rectContainsPoint(targetRect, pos)) {
          sound.buttonAudio()
          if(!this.move){
            updata.finish_steps++
            this.getChildByTag(1001).initWithFile(res.fridge_open)
            this.fruitArr.forEach(function(item){
              item.setOpacity(255)
              cc.eventManager.addListener(this.listener2.clone(), item)
            }.bind(this))
            cc.eventManager.removeListener(this.listener1)
            return true
          }
        }
        return false
      }.bind(this)
    })

    // this.listener2 = cc.EventListener.create({
    //   event: cc.EventListener.TOUCH_ONE_BY_ONE,
    //   swallowTouches: true,
    //   onTouchBegan: function (touch, event) {
    //     var target = event.getCurrentTarget()
    //     var pos = touch.getLocation()

    //     var targetRect = target.getBoundingBox()
    //     if (cc.rectContainsPoint(targetRect, pos) && !target.clicked) {
    //       sound.buttonAudio()
    //       if(!this.move){
    //         this.move = true
    //         updata.finish_steps++
    //         target.clicked = true
    //         this.fruitNum++
    //         if(this.fruitNum < 4){
    //           target.setLocalZOrder(5)
    //           fruitSprit.push(fruitAll[target.index])
    //           target.runAction(cc.sequence(
    //             cc.spawn(
    //               cc.moveTo(0.8, this.pos[this.fruitNum - 1].x, this.pos[this.fruitNum - 1].y),
    //               cc.scaleBy(0.8, 1.35)
    //             ),
    //             cc.callFunc(function(){
    //               this.move = false
    //               if(this.fruitNum >= 3){
    //                 this.getChildByTag(1001).setLocalZOrder(5)
    //                 this.getChildByTag(1001).initWithFile(res.fridge_close)
    //                 this.right()
    //                 this.next()
    //               }
    //             }.bind(this))
    //           ))
    //         }

    //         return true
    //       }
    //     }
    //     return false
    //   }.bind(this)
    // })

    this.listener2 = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function (touch, event) {
        var target = event.getCurrentTarget()
        var pos = touch.getLocation()

        var targetRect = target.getBoundingBox()
        if (cc.rectContainsPoint(targetRect, pos) && !target.crashed) {
          sound.buttonAudio()
          if(!this.move){
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

        if(this.crash(this.getChildByTag(1002), target)){
          target.clicked = true
          this.fruitNum++
          if(this.fruitNum < 4){
            fruitSprit.push(fruitAll[target.index])
            target.runAction(cc.sequence(
              cc.spawn(
                cc.moveTo(0.8, this.pos[this.fruitNum - 1].x, this.pos[this.fruitNum - 1].y),
                cc.scaleBy(0.8, 1.35)
              ),
              cc.callFunc(function(){
                target.setLocalZOrder(target._zIndex)
                this.becomeFalse()
                if(this.fruitNum >= 3){
                  this.getChildByTag(1001).setLocalZOrder(5)
                  this.getChildByTag(1001).initWithFile(res.fridge_close)
                  this.right()
                  this.next()
                }
              }.bind(this))
            ))
          }
        }else{
          this.move = false
          target.runAction(cc.sequence(
            cc.moveTo(0.8, target._x, target._y),
            cc.callFunc(function(){
              this.becomeFalse()
            }.bind(this))
          ))
        }
      }.bind(this)
    })

    cc.eventManager.addListener(this.listener1, this.getChildByTag(1001))
  },
  crash: function(item, target){
    var itemBox = item.getBoundingBox()
    var targetBox = target.getBoundingBox()
    if(cc.rectIntersectsRect(cc.rect(targetBox.x + targetBox.width / 4, targetBox.y, targetBox.width / 2, targetBox.height), cc.rect(itemBox.x, itemBox.y, itemBox.width, itemBox.height * 2))){
      return true
    }
    return false
  },
  right: function(){
    this.finished = true
    sound.stopAllEffects()
    sound.starAudio()
    this.getParent().starLayer.rightStar(1)
  },
  next: function(){
    common_data[1].obtain = 1
    this.dataRefresh()
    this.scheduleOnce(function(){
      var layer = new Layer02()
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
