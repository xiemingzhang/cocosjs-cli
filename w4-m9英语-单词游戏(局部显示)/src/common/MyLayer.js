var MyLayer = cc.Layer.extend({
  // 实例化 new时调用
  // ctor: function(){
  //   this._super()
  // },
  onEnter: function () {
    this._super()
    // cc.log("onEnter");
    // this.listenerArr = []
  },
  onExit: function () {
    this._super()
    // cc.log("onExit");
  },
  addSoundButton: function(effect){
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
            // sound.gameInfo()
            cc.audioEngine.playEffect(effect)
          }
          return true
        }
        return false
      }.bind(this)
    })
    cc.eventManager.addListener(this.hornListener, this.horn)
  },
  drawLine: function(ponitArr, colorArr){
    if(colorArr){
      var color = colorArr
    }else{
      var color = [0, 0, 0]
    }
    var drawNode = new cc.DrawNode()
    // 曲线，参数：点数组，张力，段落，线条宽度，颜色
    drawNode.drawCardinalSpline(ponitArr, 0, 50, 2 * fix, cc.color(color[0], color[1], color[2]))
    // 加入Layer层
    this.addChild(drawNode, 11)
  },
  drawRect: function(rect){
    var p1 = cc.p(rect.x, rect.y)
    var p2 = cc.p(rect.x + rect.width, rect.y + rect.height)
    var Rect = new cc.DrawNode()
    Rect.drawRect(p1, p2, cc.color.BLUE, 1, cc.color.BLACK)
    this.addChild(Rect, 11)
  },
  // addEvent: function (LnerName, sprite, fun0, fun1, fun2) {
  //   this.listenerArr[LnerName - 1000] = cc.EventListener.create({
  //     event: cc.EventListener.TOUCH_ONE_BY_ONE,
  //     swallowTouches: true,
  //     onTouchBegan: fun0,
  //     onTouchMoved: fun1,
  //     onTouchEnded: fun2
  //   })
  //   cc.eventManager.addListener(this.listenerArr[LnerName - 1000], sprite)
  // },
  getAngle: function(ponit1, point2){
    var angle = -Math.atan2(point2.y - ponit1.y, point2.x - ponit1.x) * 180 / Math.PI
    return angle
  },
  getDistance: function(ponit1, point2){
    return Math.sqrt(Math.pow((ponit1.x - point2.x), 2) + Math.pow((ponit1.y - point2.y), 2))
  },
  createSprite: function (path, scale, anchor, pos, z) {
    var sprite = new cc.Sprite(path)
    sprite.setScale(scale)
    sprite.setAnchorPoint(anchor[0], anchor[1])
    sprite.setPosition(pos)
    sprite.setLocalZOrder(z ? z : 1)
    this.addChild(sprite)
    // return sprite
  },
  sprites: function (sp) {
    var sprite = []
    for (var i in sp) {
      sprite[i] = new MySprite(sp[i].sprurl)
      sprite[i].setPosition(sp[i].sp_X * fix, sp[i].sp_Y * fix)
      sprite[i].setAnchorPoint(sp[i].chorPoint[0], sp[i].chorPoint[1])
      sprite[i].setOpacity(sp[i].opacity)
      sprite[i].setScale(sp[i].Scale / 3 * fix)
      sprite[i].setRotation(sp[i].rotation)
      sprite[i].data = sp[i]
      sprite[i].id = sp[i].id
      sprite[i].zindex = sp[i].zindex
      this.addChild(sprite[i], sprite[i].zindex, sprite[i].id)
    }
    return sprite
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
  becomeFalse: function() {
    this.move = false
  },
  colorBar: function(){
    var size = cc.director.getWinSize()
    var particleSystem2 = new cc.ParticleSystem(res.bar_plist)
    particleSystem2.texture = cc.textureCache.addImage(res.color_bar)
    particleSystem2.x = size.width / 2
    particleSystem2.y = size.height * 1.2
    this.addChild(particleSystem2, 2)
  }
})
