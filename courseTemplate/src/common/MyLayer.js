var MyLayer = cc.LayerColor.extend({
  // 实例化 new时调用
  // ctor: function(){
  //   this._super()
  // },
  onEnter: function () {
    this._super()
    var self = this
    // cc.log("onEnter");
    // this.listenerArr = []
    this._listener = cc.EventListener.create({
      event: cc.EventListener.KEYBOARD,
      onKeyPressed: function (keyCode, event) {
        cc.log(keyCode)
        if(keyCode === 32){
          sound.stopAllEffects()
          cc.log("kongge")
          if(!self._go){
            cc.director.pause()
          }else{
            cc.director.resume()
          }
          self._go = !self._go
        }
        if(keyCode === 39){
          cc.log("xiayiye")
          if(!self._nextPage){
            sound.stopAllEffects()
            self.next()
          }
          self._nextPage = true
        }
        if(keyCode === 37){ 
          cc.log("shangyiye")
          if(!self._prePage){
            sound.stopAllEffects()
            self.pre()
          }
          self._prePage = true
        }
        // return true
      },
      onKeyReleased: function (keyCode, event) {
        cc.log("up")
      }
    })
    // 添加监听器到管理器
    cc.eventManager.addListener(this._listener, this)
  },
  onExit: function () {
    this._super()
    // cc.log("onExit");
    // cc.eventManager.removeListeners(cc.EventListener.KEYBOARD)
  },
  addSoundButton: function(spr){
    // var horn = this.createSprite(res.sound, 1 / 3 * fix, [0, 0], {x: 15, y: 15})
    // this.addChild(horn, 5)

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
            // cc.audioEngine.playEffect(spr.effect)
            spr.sound()
          }
          return true
        }
        return false
      }.bind(this)
    })
    cc.eventManager.addListener(this.hornListener, spr)
  },
  addHand: function(pointX, ponitY){
    var hander = new MySprite(res.hand)
    hander.setPosition(pointX, ponitY)
    hander.setAnchorPoint(0.1, 0.9)
    hander.setScale(1 / 3 * fix)
    this.addChild(hander, 6)
    return hander
  },
  //截屏 使用时注意start_x start_y需要用getBoundingBox()获得,防止锚点不是精灵的左下角
  capture: function(start_x, start_y, width, height){
    var size = cc.winSize
    var renderText = new cc.RenderTexture(size.width, size.height)
    renderText.begin()
    cc.director.getRunningScene().visit()
    renderText.end()

    var _screen = cc.Sprite.create(renderText.getSprite().getTexture(), cc.rect(start_x, size.height - start_y - height, width, height))
    // _screen.setTextureRect(cc.rect(0, 0, w1, 820));
    _screen.setPosition(0, 0)
    _screen.setAnchorPoint(0, 0)
    _screen.setScale(1 / 2)
    this.addChild(_screen, 10)
    return _screen
  },
  drawLine: function(ponitArr, lineWidth, colorArr){
    if(colorArr){
      var color = colorArr
    }else{
      var color = [0, 0, 0]
    }
    var drawNode = new cc.DrawNode()
    // 曲线，参数：点数组，张力，段落，线条宽度，颜色
    drawNode.drawCardinalSpline(ponitArr, 0, 50, lineWidth, cc.color(color[0], color[1], color[2]))
    // 加入Layer层
    this.addChild(drawNode, 11)
    return drawNode
  },
  drawRect: function(rect){
    var p1 = cc.p(rect.x, rect.y)
    var p2 = cc.p(rect.x + rect.width, rect.y + rect.height)
    var Rect = new cc.DrawNode()
    Rect.drawRect(p1, p2, cc.color.BLUE, 1, cc.color.BLACK)
    this.addChild(Rect, 11)
  },
  circleMove: function(spr){
    spr.angle += 1
    if(spr.angle >= 360){
      spr.angle = 0
    }
    if(spr.angle >= 270 && spr.angle <= 360){
      var _angle = ((360 - spr.angle) / 2) * (Math.PI / 180)
      var r = this.r
      var y = 2 * r * Math.sin(_angle) * Math.cos(_angle)
      var x = r - 2 * r * Math.sin(_angle) * Math.sin(_angle)
      spr.setPosition(x, y)
      // spr.canClick = true
      // spr.setOpacity(255)
    }
    // else{
    //   spr.canClick = false
    //   spr.setOpacity(0)
    // }
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
    var sprite = new MySprite(path)
    sprite.setScale(scale)
    sprite.setAnchorPoint(anchor[0], anchor[1])
    sprite.setPosition(pos[0], pos[1])
    sprite.setLocalZOrder(z ? z : 1)
    this.addChild(sprite)
    return sprite
  },
  sprites: function (sp, bool) {
    var sprite = []
    var len = sp.length
    for (var i = 0; i < len; i++) {
      sprite[i] = new MySprite(sp[i].sprUrl)
      sprite[i].setPosition(sp[i].pos[0], sp[i].pos[1])
      sprite[i].setAnchorPoint(sp[i].chorPoint[0], sp[i].chorPoint[1])
      sprite[i].setOpacity(sp[i].opacity)
      sprite[i].setScale(sp[i].scale[0], sp[i].scale[1])
      sprite[i].setRotation(sp[i].rotation)
      sprite[i].data = sp[i]
      sprite[i].id = sp[i].id
      sprite[i].zindex = sp[i].zindex
      if(bool){
        this.addChild(sprite[i], sprite[i].zindex, sprite[i].id)
      }
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
  next: function(t, n){
    if(this.hornListener){
      cc.eventManager.removeListener(this.hornListener)
    }
    this.getParent().nextLayer(this, t, n)
  },
  pre: function(t, n){
    if(this.hornListener){
      cc.eventManager.removeListener(this.hornListener)
    }
    this.getParent().preLayer(this, t, n)
  },
  becomeFalse: function(t) {
    if(t){
      // setTimeout(function(){this.move = false}.bind(this), t)
      this.scheduleOnce(function(){
        this.move = false
      }, t)
    }else{
      this.move = false
    }
  },
  colorBar: function(){
    var size = cc.director.getWinSize()
    var colorBar = new cc.ParticleSystem(res.bar_plist)
    colorBar.texture = cc.textureCache.addImage(res.color_bar)
    colorBar.x = size.width / 2
    colorBar.y = size.height * 1.2
    colorBar.setDuration(3)
    this.addChild(colorBar, 11)
  },
  boomStar: function(x, y){
    //星星
    // var particleSystem = new cc.ParticleSystem(res.star_plist)
    // particleSystem.x = 368 * fix
    // particleSystem.y = 268 * fix
    // this.addChild(particleSystem)
    var rainParticle = new cc.ParticleExplosion()
    rainParticle.texture = cc.textureCache.addImage(res.win_star)
    rainParticle.setTotalParticles(18)
    rainParticle.setStartSize(30)
    rainParticle.setEndSize(5)
    rainParticle.setSpeed(28)
    rainParticle.setLife(0.2)
    // rainParticle.setLifeVar(0.2);
    rainParticle.setDuration(0.5)
    rainParticle.setStartColor(cc.color(255, 212, 0))
    rainParticle.setStartColorVar(0)
    rainParticle.setEndColor(cc.color(255, 212, 0))
    rainParticle.setEndColorVar(100)
    // rainParticle.setStartRadius(40);
    // rainParticle.setEndRadius(40);
    rainParticle.setPosition(x, y)
    rainParticle.setZOrder(100)

    this.addChild(rainParticle)
  },
  // removeListeners
  reListen: function(){
    cc.eventManager.removeAllListeners()
    // 返回游戏列表
    this.getParent().starLayer.gameClose()
  },
  createBtn: function(name, fontSize){
    var size = cc.winSize
    if(fontSize){
      var _fontSize = fontSize 
    }else{
      var _fontSize = 40
    }

    var box = new cc.Sprite(res.box)
    box.setAnchorPoint(1, 0)
    box.setPosition(size.width - 30, 30)
    this.addChild(box, 10)

    var word = new cc.LabelTTF(name, '', _fontSize)
    word.setAnchorPoint(0.5, 0.5)
    word.setVerticalAlignment(1)
    word.setPosition(box.width / 2, box.height / 2 - 5)
    word.setColor(cc.color(255, 255, 255))
    box.addChild(word, 1)

    return box
  }
})

