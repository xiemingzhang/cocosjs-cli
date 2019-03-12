var Layer06 = MyLayer.extend({
  ctor: function() {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    var layer1 = this.layer1 = new Layer08()
    layer1.ignoreAnchorPointForPosition(false)
    layer1.setAnchorPoint(0, 1)
    layer1.x = 0
    layer1.y = 1080
    layer1.scale = 0.5
    layer1.unschedule(layer1.onStart)
    this.addChild(layer1, 1)

    var layer2 = this.layer2 = new Layer09()
    layer2.ignoreAnchorPointForPosition(false)
    layer2.setAnchorPoint(1, 1)
    layer2.x = 1920
    layer2.y = 1080
    layer2.scale = 0.5
    layer2.unschedule(layer2.onStart)
    this.addChild(layer2, 2)

    var layer3 = this.layer3 = new Layer10()
    layer3.ignoreAnchorPointForPosition(false)
    layer3.setAnchorPoint(0, 0)
    layer3.x = 0
    layer3.y = 0
    layer3.scale = 0.5
    layer3.unschedule(layer3.onStart)
    this.addChild(layer3, 3)

    var layer5 = this.layer5 = new Layer12()
    layer5.ignoreAnchorPointForPosition(false)
    layer5.setAnchorPoint(1, 0)
    layer5.x = 1920
    layer5.y = 0
    layer5.scale = 0.5
    layer5.unschedule(layer5.onStart)
    this.addChild(layer5, 4)

    layer1.btn.visible = 0
    layer2.btn.visible = 0
    layer3.btn.visible = 0
    layer5.btn.visible = 0

    layer1.next = function() {
      layer1.runAction(cc.sequence(
        cc.scaleBy(2, 1 / 2),
        cc.callFunc(function() {
          layer1.setLocalZOrder(1)
        })
      ))
    }

    layer2.next = function() {
      layer2.runAction(cc.sequence(
        cc.scaleBy(2, 1 / 2),
        cc.callFunc(function() {
          layer2.setLocalZOrder(2)
        })
      ))
    }

    var self = this
    layer3.next = function() {
      self.scheduleOnce(function(){
        var layer4 = self.layer4 = new Layer11()
        layer4.ignoreAnchorPointForPosition(false)
        layer4.setAnchorPoint(0, 0)
        layer4.x = 0
        layer4.y = 0
        layer4.scale = 1
        layer4.unschedule(layer4.onStart)
        self.addChild(layer4, 10)
        layer4.onStart()
        layer4.btn.visible = 0

        layer4.getChildren().forEach(function(item){
          item.opacity = 0
          item.runAction(cc.fadeIn(1.2))
        })

        self.layer4.next = function() {
          self.layer4.runAction(cc.sequence(
            cc.scaleBy(2, 1 / 2),
            cc.callFunc(function() {
              self.layer4.setLocalZOrder(3)
            })
          ))
        }
      }, 1.3)
      self.scheduleOnce(function(){
        self.layer3.removeFromParent()
      }, 2)
    }

    layer5.next = function() {
      layer5.runAction(cc.sequence(
        cc.scaleBy(2, 1 / 2),
        cc.callFunc(function() {
          layer5.setLocalZOrder(4)
        })
      ))
    }

    // var bg = new cc.Sprite(res.f_g_背景03)
    // bg.setAnchorPoint(0, 0.5)
    // bg.setPosition({x: 0, y: size.height / 2})
    // this.addChild(bg)

    this.btn = this.createBtn('下一页：分句欣赏 1/10')
    this.btn.setLocalZOrder(12)

    this.sprs = this.sprites(layer06_data[0], true)
  },
  onStart: function() {
    // sound.s6_sound()
    var self = this
    var sprs = this.sprs
    var layer1 = this.layer1
    var layer2 = this.layer2
    var layer3 = this.layer3
    var layer5 = this.layer5

    layer1.setLocalZOrder(10)
    layer1.runAction(cc.scaleBy(2, 2))
    layer1.onStart()

    this.scheduleOnce(function() {
      layer2.setLocalZOrder(10)
      layer2.runAction(cc.scaleBy(2, 2))
      layer2.onStart()
    }, 20)

    this.scheduleOnce(function() {
      layer3.setLocalZOrder(10)
      layer3.runAction(cc.scaleBy(2, 2))
      layer3.onStart()
    }, 36)

    this.scheduleOnce(function() {
      layer5.setLocalZOrder(10)
      layer5.runAction(cc.scaleBy(2, 2))
      layer5.onStart()
    }, 53)

    this.scheduleOnce(function() {
      this.next()
    }, 60)
  }
  // update: function (dt) {

  // }
})

