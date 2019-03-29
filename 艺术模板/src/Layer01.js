var Layer01 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.fix_height = 180 / fix - 180

    var size = cc.winSize
    var bg = this.bg = new cc.Sprite(res.green_bg)
    bg.setScale(size.height / bg.height, size.height / bg.height * (1.2 / fix - 0.2))
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    var sprs = this.sprs = this.sprites(layer01_data[0], true)
    sprs[0].setScale(1 / 3 * fix, 1 / 3)

    var sprs1 = this.sprs1 = this.sprites(layer01_data[1], true)

    var sprs2 = this.sprs2 = this.sprites(layer01_data[2], true)
    sprs2[0].x -= 20 * fix
    sprs2[0].crashed = true
    sprs2.forEach(function(item, index) {
      // item.setVisible(0)
      var sprite = new MySprite(res.eye_1)
      sprite.setAnchorPoint(0, 0)
      sprite.setPosition(60, 20)
      item.addChild(sprite)
      item.child1 = sprite
      if(index % 2) {
        sprite.frame([res.eye_1, res.eye_4], 0.5 * Math.random() + 0.7, 0)
      }else{
        sprite.frame([res.eye_4, res.eye_1], 0.5 * Math.random() + 0.7, 0)
      }
    })
    sprs2[0].child1.stopAllActions()

    var sprs3 = this.sprs3 = this.sprites(layer01_data[3], true)
    sprs3[0].x -= 20 * fix
    sprs3[0].crashed = true
    sprs3.forEach(function(item, index) {
      item.setVisible(0)
      var sprite = new MySprite(res.eye_1)
      sprite.setAnchorPoint(0, 0)
      sprite.setPosition(160, 30)
      item.addChild(sprite)
      item.child1 = sprite
      if(index % 2) {
        sprite.frame([res.eye_1, res.eye_4], 0.5 * Math.random() + 0.7, 0)
      }else{
        sprite.frame([res.eye_4, res.eye_1], 0.5 * Math.random() + 0.7, 0)
      }
    })
    sprs3[0].child1.stopAllActions()

    var sprs5 = this.sprs5 = this.sprites(layer01_data[5], true)
    sprs5.forEach(function(item) {
      item.setVisible(0)
    })

    // 初始
    var spr100201 = this.getChildByTag(1002.01)
    if(Math.random() > 0.5){
      spr100201.setTexture(res.bird)
      spr100201.x += 20 * fix
    }else{
      spr100201.setTexture(res.binafu)
    }
    this.drawDotArr = []
    this.drawNodeArr = []
    sprs1[1].setTexture(sprs1[1].data.sprUrl2)
    this._spr1 = sprs1[0]
    this._spr2 = sprs2[0]
    this._spr3 = sprs3[0]
    this.getChildByTag(1001).setScale(1 / 3 * fix * 1.15, 1 / 3)
    this.getChildByTag(1000.1).setScale(1 / 3 * fix, 1 / 3)
    // this.getChildByTag(1001.1).setVisible(0)
    // this.getChildByTag(1001.1).setScale(1 / 3 * fix * 0.7, 1 / 3)
    this.flag = 'draw2'
    this._flag = 'draw2'
    this.clor1 = [27, 27, 27]
    this.clor2 = [27, 27, 27]
    this._arr = []// 装饰物选中的数组
    this.drawNodeArr = []// 线的数组
    this.thick = 1
    this._sprsArr = sprs3// 装饰物数组
    this._star = []// 生成装饰物数组

    sprs1.forEach(function(item) {
      item._listener = this.listener1()
      cc.eventManager.addListener(item._listener, item)
    }.bind(this))

    var spr1004 = this.getChildByTag(1004)
    spr1004._listener = this.listener2()
    cc.eventManager.addListener(spr1004._listener, spr1004)

    sprs2.forEach(function(item) {
      item._listener = this.listener3()
      cc.eventManager.addListener(item._listener, item)
    }.bind(this))

    // 画画检测的精灵数组
    this.spr1002Arr = []
    sprs.forEach(function(item) {
      if(item.id >= 1002 && item.id < 1003) {
        this.spr1002Arr.push(item)
      }
    }.bind(this))
    this.spr1002Arr.forEach(function(item) {
      item.setPosition(item.x, item.y + this.fix_height)
      item.setOpacity(255)
      item._listener = this.listener7()
      cc.eventManager.addListener(item._listener, item)
    }.bind(this))
  },
  // 选项监听
  listener1: function() {
    var sprs1 = this.sprs1
    var sprs2 = this.sprs2
    var sprs3 = this.sprs3
    var sprs5 = this.sprs5
    var spr1004 = this.getChildByTag(1004)
    // var spr10011 = this.getChildByTag(1001.1)
    return cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function(touch, event) {
        var target = event.getCurrentTarget()
        var touchPoint = touch.getLocation()
        var targetRect = target.getBoundingBox()
        if (!this.move && !target.crashed && cc.rectContainsPoint(targetRect, touchPoint)) {
          if(target.id === 1008 || target.id === 1009 || target.id === 1005) {
            return true
          }
          sound.buttonAudio()
          updata.finish_steps++
          // 如果上一步是橡皮则改成画的状态
          if(this.flag === 'clean' || target !== this._spr1) {
            // 橡皮和选项全部初始状态
            spr1004.setTexture(spr1004.data.sprUrl)
            spr1004.x = 796 * fix
            sprs1.forEach(function(item) {
              item.setTexture(item.data.sprUrl)
            })
            // 点击的选项高亮
            target.setTexture(target.data.sprUrl2)
            // 点击点笔选项
            // if(target.id === 1005) {
            //   // spr10011.setVisible(0)
            //   sprs3.forEach(function(item) {
            //     cc.eventManager.removeListener(item._listener)
            //     item.setVisible(0)
            //     item.stopAllActions()
            //   })
            //   sprs2.forEach(function(item) {
            //     item.stopAllActions()
            //     if(item.crashed) {
            //       item.x = item.data.pos[0] * fix + 10 * fix
            //     }else{
            //       item.x = item.data.pos[0] * fix + 30 * fix
            //     }
            //     item.runAction(cc.moveBy(0.35, -30 * fix, 0))
            //     item.setVisible(1)
            //     item._listener = this.listener3()
            //     cc.eventManager.addListener(item._listener, item)
            //   }.bind(this))
            //   // 标记为draw1状态
            //   this.flag = 'draw1'
            // }
            // 点击画笔选项
            if(target.id === 1006) {
              // spr10011.setVisible(0)
              sprs3.forEach(function(item) {
                cc.eventManager.removeListener(item._listener)
                item.setVisible(0)
                item.stopAllActions()
              })
              sprs2.forEach(function(item) {
                item.setVisible(1)
                item.stopAllActions()
                if(item.crashed) {
                  item.x = item.data.pos[0] * fix + 10 * fix
                }else{
                  item.x = item.data.pos[0] * fix + 30 * fix
                }
                item.runAction(cc.moveBy(0.35, -30 * fix, 0))
                item._listener = this.listener3()
                cc.eventManager.addListener(item._listener, item)
              }.bind(this))
              // 标记为draw2状态
              this.flag = 'draw2'
              this._flag = 'draw2'
            }
            // 点击水彩笔选项
            if(target.id === 1007) {
              // spr10011.setVisible(0)
              sprs2.forEach(function(item) {
                cc.eventManager.removeListener(item._listener)
                item.stopAllActions()
                item.setVisible(0)
              })
              sprs3.forEach(function(item) {
                item.stopAllActions()
                item.setVisible(1)
                if(item.crashed) {
                  item.x = item.data.pos[0] * fix + 30 * fix
                }else{
                  item.x = item.data.pos[0] * fix + 50 * fix
                }
                item.runAction(cc.moveBy(0.35, -50 * fix, 0))
                item._listener = this.listener4()
                cc.eventManager.addListener(item._listener, item)
              }.bind(this))
              // 标记为draw3状态
              this.flag = 'draw3'
              this._flag = 'draw3'
            }
            // 点击背景选项
            // if(target.id === 1008){
            //   spr10011.setVisible(1)
            //   sprs2.forEach(function(item){
            //     item.setVisible(0)
            //     cc.eventManager.removeListener(item._listener)
            //   })
            //   sprs3.forEach(function(item){
            //     item.setVisible(0)
            //     cc.eventManager.removeListener(item._listener)
            //   })
            //   //标记为nodraw状态
            //   this.flag = 'nodraw'
            //   //创建背景二级选项
            //   var sprs4 = this.sprs4 = this.sprites(layer01_data[4], true)
            //   sprs4.forEach(function(item){
            //     item._listener = this.listener5()
            //     item.x = item.data.pos[0] * fix + 50 * fix
            //     item.runAction(cc.moveBy(0.35, -50 * fix, 0))
            //     cc.eventManager.addListener(item._listener, item)
            //   }.bind(this))
            // }else{
            //   if(this.sprs4){
            //     this.sprs4.forEach(function(item){
            //       item.removeFromParent()
            //     })
            //   }
            // }
            // 点击装饰物选项
            // if(target.id === 1009){
            //   spr10011.setVisible(1)
            //   sprs2.forEach(function(item){
            //     item.setVisible(0)
            //     cc.eventManager.removeListener(item._listener)
            //   })
            //   sprs3.forEach(function(item){
            //     item.setVisible(0)
            //     cc.eventManager.removeListener(item._listener)
            //   })
            //   //标记为nodraw状态
            //   this.flag = 'nodraw'
            //   //装饰物二级选项添加监听
            //   sprs5.forEach(function(item){
            //     item.setVisible(1)
            //     item.stopAllActions()
            //     item.x = item.data.pos[0] * fix + 50 * fix
            //     item.runAction(cc.moveBy(0.35, -50 * fix, 0))
            //     item._listener = this.listener6()
            //     cc.eventManager.addListener(item._listener, item)
            //   }.bind(this))
            // }else{
            //   if(this.sprs5){
            //     this.sprs5.forEach(function(item){
            //       if(this._arr.indexOf(item) == -1){
            //         item.setVisible(0)
            //       }
            //       cc.eventManager.removeListener(item._listener)
            //     }.bind(this))
            //   }
            // }
            this._spr1 = target
          }
          return true
        }
        return false
      }.bind(this)
    })
  },
  // 橡皮监听
  listener2: function() {
    var sprs1 = this.sprs1
    return cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function(touch, event) {
        var target = event.getCurrentTarget()
        var touchPoint = touch.getLocation()
        var targetRect = target.getBoundingBox()
        if (!this.move && !target.crashed && cc.rectContainsPoint(targetRect, touchPoint)) {
          sound.buttonAudio()
          updata.finish_steps++
          if(this.flag !== 'clean'){
            // 橡皮高亮
            target.setTexture(target.data.sprUrl2)
            target.x = 776 * fix
            // 标记为擦除状态或其他状态
            this.flag = 'clean'
          }else{
            // 橡皮高亮
            target.setTexture(target.data.sprUrl)
            target.x = 796 * fix
            // 标记为擦除状态或其他状态
            this.flag = this._flag
          }
          return true
        }
        return false
      }.bind(this)
    })
  },
  // 点笔和画笔的监听
  listener3: function() {
    var sprs2 = this.sprs2
    return cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function(touch, event) {
        var target = event.getCurrentTarget()
        var touchPoint = touch.getLocation()
        var targetRect = target.getBoundingBox()
        if (!this.move && !target.crashed && cc.rectContainsPoint(targetRect, touchPoint)) {
          sound.buttonAudio()
          updata.finish_steps++
          // 两次点击不是同一个
          if(this.flag === 'clean' || target !== this._spr2) {
            // 点击过的要恢复动画
            this._spr2.child1.frame([res.eye_4, res.eye_1], 0.5 * Math.random() + 0.7, 0)
            // 标记颜色1
            this.clor1 = target.data.clor
            sprs2.forEach(function(item) {
              if(item !== target) {
                item.crashed = false
                item.stopAllActions()
                item.x = item.data.pos[0] * fix
              }
            })
            this._spr2 = target
            target.data.audio()
            target.child1.stopAllActions()
            target.child1.setTexture(res.eye_1)
            target.stopAllActions()
            target.x = target.data.pos[0] * fix - 20 * fix
            target.crashed = true
          }
          return true
        }
        return false
      }.bind(this),
      onTouchMoved: function(touch, event) {
        var target = event.getCurrentTarget()
        var targetRect = target.getBoundingBox()
        var delta = touch.getDelta()
        var touchPoint = touch.getLocation()

        var size = cc.winSize
        if(!this.move) {
          sprs2.forEach(function(item) {
            item.y += delta.y
            if(item.y >= (10 + 48 * 17) * fix) {
              item.y -= 48 * 25 * fix
            }
            if(item.y <= (10 - 48 * 8) * fix) {
              item.y += 48 * 25 * fix
            }
          })
        }
      }.bind(this)
    })
  },
  // 水彩笔监听
  listener4: function() {
    var sprs3 = this.sprs3
    return cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function(touch, event) {
        var target = event.getCurrentTarget()
        var touchPoint = touch.getLocation()
        var targetRect = target.getBoundingBox()
        if (!this.move && cc.rectContainsPoint(targetRect, touchPoint)) {
          sound.buttonAudio()
          updata.finish_steps++
          // 两次点击不是同一个
          if(this.flag === 'clean' || target !== this._spr3) {
            // 点击过的要恢复动画
            if(this._spr3) {
              this._spr3.child1.frame([res.eye_4, res.eye_1], 0.5 * Math.random() + 0.7, 0)
            }
            // 标记颜色2
            this.clor2 = target.data.clor
            sprs3.forEach(function(item) {
              if(item !== target) {
                item.crashed = false
                item.stopAllActions()
                item.x = item.data.pos[0] * fix
              }
            })
            this._spr3 = target
            target.data.audio()
            target.child1.stopAllActions()
            target.child1.setTexture(res.eye_1)
            target.stopAllActions()
            target.x = target.data.pos[0] * fix - 20 * fix
            target.crashed = true
          }
          return true
        }
        return false
      }.bind(this),
      onTouchMoved: function(touch, event) {
        var target = event.getCurrentTarget()
        var targetRect = target.getBoundingBox()
        var delta = touch.getDelta()
        var touchPoint = touch.getLocation()

        var size = cc.winSize
        if(!this.move) {
          sprs3.forEach(function(item) {
            item.y += delta.y
            if(item.y >= (10 + 48 * 17) * fix) {
              item.y -= 48 * 25 * fix
            }
            if(item.y <= (10 - 48 * 8) * fix) {
              item.y += 48 * 25 * fix
            }
          })
        }
      }.bind(this)
    })
  },
  // 二级背景选项监听
  // listener5: function() {
  //   var spr10001 = this.getChildByTag(1000.1)
  //   return cc.EventListener.create({
  //     event: cc.EventListener.TOUCH_ONE_BY_ONE,
  //     swallowTouches: true,
  //     onTouchBegan: function(touch, event) {
  //       var target = event.getCurrentTarget()
  //       var touchPoint = touch.getLocation()
  //       var targetRect = target.getBoundingBox()
  //       if (!this.move && !target.crashed && cc.rectContainsPoint(targetRect, touchPoint)) {
  //         sound.buttonAudio()
  //         updata.finish_steps++
  //         spr10001.setTexture(target.data.sprUrl2)
  //         spr10001.setScale(1 / 3 * fix * 1.1, 1 / 3 * 1.1)
  //         return true
  //       }
  //       return false
  //     }.bind(this)
  //   })
  // },
  // 二级装饰物选项监听
  // listener6: function() {
  //   var sprs5 = this.sprs5
  //   return cc.EventListener.create({
  //     event: cc.EventListener.TOUCH_ONE_BY_ONE,
  //     swallowTouches: true,
  //     onTouchBegan: function(touch, event) {
  //       var target = event.getCurrentTarget()
  //       var touchPoint = touch.getLocation()
  //       var targetRect = target.getBoundingBox()
  //       if (!this.move && !target.crashed && cc.rectContainsPoint(targetRect, touchPoint)) {

  //         sound.buttonAudio()
  //         updata.finish_steps++
  //         if(sprs5.indexOf(target) >= 0) {
  //           this._spr = this.createSprite(target.getTexture(), 1 / 3 * fix, [0, 0], [target.x, target.y], 10)
  //           this._star.push(this._spr)
  //           cc.eventManager.addListener(this.listener6(), this._spr)
  //         }

  //         return true
  //       }
  //       return false
  //     }.bind(this),
  //     onTouchMoved: function(touch, event) {
  //       var target = event.getCurrentTarget()
  //       var delta = touch.getDelta()
  //       var touchPoint = touch.getLocation()
  //       var spr = this._spr
  //       var sprRect = spr.getBoundingBox()
  //       var targetRect = target.getBoundingBox()
  //       var size = cc.winSize
  //       if(sprs5.indexOf(target) >= 0) {
  //         if(spr.x + delta.x < size.width - sprRect.width - 150 * fix && spr.x + delta.x > 20 * fix) {
  //           this._spr.x += delta.x
  //         }
  //         if(target.y + delta.y < size.height - sprRect.height - 10 * fix && target.y + delta.y > 20 * fix) {
  //           this._spr.y += delta.y
  //         }
  //       }else{
  //         if(target.x + delta.x < size.width - targetRect.width - 200 * fix && target.x + delta.x > 20 * fix) {
  //           target.x += delta.x
  //         }
  //         if(target.y + delta.y < size.height - targetRect.height - 10 * fix && target.y + delta.y > 20 * fix) {
  //           target.y += delta.y
  //         }
  //       }
  //     }.bind(this),
  //     onTouchEnded: function(touch, event) {
  //       var target = event.getCurrentTarget()
  //       var spr = this._spr
  //       var sprRect = spr.getBoundingBox()
  //       var size = cc.winSize
  //       if(sprs5.indexOf(target) >= 0) {
  //         if(spr.x >= size.width - sprRect.width - 150 * fix) {
  //           spr.x = size.width - sprRect.width - 200 * fix
  //         }
  //         if(target.id === 1022) {
  //           if(spr.x >= size.width - sprRect.width - 200 * fix) {
  //             spr.x = size.width - sprRect.width - 210 * fix
  //           }
  //         }
  //       }
  //     }.bind(this)
  //   })
  // },
  // 画画动作的监听
  listener7: function() {
    var hair = this.hair
    var spr1002 = this.getChildByTag(1002)
    var spr1003 = this.getChildByTag(1003)
    var spr10001 = this.getChildByTag(1000.1)
    cc.log(spr10001)
    return cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function(touch, event) {
        var target = event.getCurrentTarget()
        var touchPoint = touch.getLocation()
        var targetRect = target.getBoundingBox()
        var spr10001Rect = spr10001.getBoundingBox()
        var spr10001Rect1 = cc.rect(spr10001Rect.x + 15 * fix, spr10001Rect.y + 15 * fix, spr10001Rect.width - 160 * fix, spr10001Rect.height - 30 * fix)

        var locationInNode = target.convertToNodeSpace(touchPoint)
        var x = locationInNode.x
        var y = locationInNode.y
        // var pexels = target.getPixels(Math.round(x), Math.round(y))
        if (!this.move && !target.crashed && cc.rectContainsPoint(spr10001Rect1, touchPoint)) {
          sound.buttonAudio()
          updata.finish_steps++
          if(this.flag === 'draw1') {
            target.setColor(cc.color(this.clor1[0], this.clor1[1], this.clor1[2]))
          }else{
            sound.linmo_sound()
          }
          if(!this.listener88) {
            spr1003.setOpacity(255)
            this.listener88 = this.listener8().clone()
            cc.eventManager.addListener(this.listener88, spr1003)
          }
          return true
        }
        return false
      }.bind(this),
      onTouchMoved: function(touch, event) {
        var target = event.getCurrentTarget()
        var touchPoint = touch.getLocation()
        var targetRect = target.getBoundingBox()
        var spr10001Rect = spr10001.getBoundingBox()
        var spr10001Rect1 = cc.rect(spr10001Rect.x + 15 * fix, spr10001Rect.y + 15 * fix, spr10001Rect.width - 160 * fix, spr10001Rect.height - 30 * fix)

        var locationInNode = target.convertToNodeSpace(touchPoint)
        var x = locationInNode.x
        var y = locationInNode.y
        // var pexels = target.getPixels(Math.round(x), Math.round(y))
        if (!this.move && cc.rectContainsPoint(spr10001Rect1, touchPoint)) {
          if(this.flag === 'draw2' || this.flag === 'draw3') {
            this.drawColor(touch, event)
          }
          if(this.flag === 'clean') {
            this.rubber(touch, event)
          }
        }else{
          // this.move = true
          this.sX = null
          this.sY = null

          this._sX = null
          this._sY = null
        }
      }.bind(this),
      onTouchEnded: function(touch, event) {
        var target = event.getCurrentTarget()
        this.scheduleOnce(function() {
          sound.stopAllEffects()
        }, 0.1)
        this.move = false
        this.sX = null
        this.sY = null

        this._sX = null
        this._sY = null
      }.bind(this)
    })
  },
  // 结束监听
  listener8: function() {
    var spr1002 = this.getChildByTag(1002)
    var spr10031 = this.getChildByTag(1003.1)
    var self = this
    var size = cc.winSize

    var dataURLtoFile = function(dataurl, filename) {// 将base64转换为文件
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
      while(n--){
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, {type: mime})
    }
    var capture = function(start_x, start_y, width, height){
      var renderText = new cc.RenderTexture(size.width, size.height)
      renderText.begin()
      // self.bg.visit()
      self.visit()
      renderText.end()

      var _screen = cc.Sprite.create(renderText.getSprite().getTexture(), cc.rect(start_x, size.height - start_y - height, width, height))

      var canvas = cc.newElement('canvas') // 创建一个新的元素节点
      canvas.width = size.width
      canvas.height = size.height
      var ctx = canvas.getContext('2d')
      ctx.drawImage(renderText.getSprite().getTexture().getHtmlElementObj(), 0, 0)
      var href = canvas.toDataURL('image/jpeg')
      var file = dataURLtoFile(href, 'scree.png')
      App.upImg(file)
      return _screen
    }
    return cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function(touch, event) {
        var target = event.getCurrentTarget()
        var touchPoint = touch.getLocation()
        var targetRect = target.getBoundingBox()
        if (!this.move && !target.crashed && cc.rectContainsPoint(targetRect, touchPoint)) {
          sound.buttonAudio()
          updata.finish_steps++
          target.removeFromParent()
          this.reListen()
          // App.screenshotsStart()
          this.scheduleOnce(function(){
            this.right()
            sound.camera2_sound()
            var sp = capture(0, 0, size.width, size.height)
            sp.setPosition(size.width / 2, size.height / 2)
            sp.setAnchorPoint(0.5, 0.5)
            sp.setRotation(5)
            sp.setScale(3 / 4)
            self.addChild(sp, 10)

            var layer = new cc.LayerColor(cc.color(0, 0, 0), size.width, size.height)
            layer.setOpacity(200)
            self.addChild(layer, 9)
          }, 1)
          // test
          // screenshotsResult()

          // this.sprs1.concat(this.sprs2).concat(this.sprs3).concat(this.sprs).forEach(function(item){
          //   if(item.id < 1002 || item.id >= 1003){
          //     item.removeFromParent()
          //   }
          // })
          // if(this.getChildByTag(1016)){
          //   this.getChildByTag(1016).removeFromParent()
          //   this.getChildByTag(1017).removeFromParent()
          //   this.getChildByTag(1018).removeFromParent()
          //   this.getChildByTag(1019).removeFromParent()
          // }
          // this.colorBar()
          // self.parent.sp1 = capture(spr10031.x, spr10031.y, spr10031.getBoundingBox().width, spr10031.getBoundingBox().height)
          // self.parent.sp2 = capture(spr10031.x, spr10031.y, spr10031.getBoundingBox().width, spr10031.getBoundingBox().height)

          this.next(3)
          return true
        }
        return false
      }.bind(this)
    })
  },
  crash: function(target, item) {
    var itemBox = item.getBoundingBox()
    var targetBox = target.getBoundingBox()
    var targetRect = cc.rect(targetBox.x, targetBox.y, targetBox.width, targetBox.height)
    var itemRect = cc.rect(itemBox.x, itemBox.y, itemBox.width, itemBox.height)
    if(cc.rectIntersectsRect(itemRect, targetRect)) {
      return true
    }
    return false
  },
  rubber: function(touch, event){
    var target = event.getCurrentTarget()
    var touchPoint = touch.getLocation()
    var locationInNode = target.convertToNodeSpace(touchPoint)

    var x = locationInNode.x
    var y = locationInNode.y

    this.drawNodeArr.forEach(function(item, index){
      var sx = item.startx
      var ex = item.endx
      var sy = item.starty
      var ey = item.endy
      var x1, x2, y1, y2
      if(sx <= ex){
        if(ex - sx >= 20){
          x1 = sx
          x2 = ex
        }else{
          x1 = sx - 20
          x2 = sx + 2 * 20
        }
      }else{
        if(sx - ex >= 20){
          x1 = ex
          x2 = sx
        }else{
          x1 = sx - 20
          x2 = sx + 2 * 20
        }
      }
      if(sy <= ey){
        if(ey - sy >= 20){
          y1 = sy
          y2 = ey
        }else{
          y1 = sy - 20
          y2 = sy + 2 * 20
        }
      }else{
        if(sy - ey >= 20){
          y1 = ey
          y2 = sy
        }else{
          y1 = ey - 20
          y2 = ey + 2 * 20
        }
      }

      if(x > x1 && x < x2 && y > y1 && y < y2){
        this.drawNodeArr.splice(index, 1)
        this.drawDotArr.splice(index, 1)
        item.removeFromParent()
      }
    }.bind(this))
  },
  drawColor: function(touch, event){
    var target = event.getCurrentTarget()
    var touchPoint = touch.getLocation()
    var locationInNode = target.convertToNodeSpace(touchPoint)

    var x = locationInNode.x
    var y = locationInNode.y

    if(this.flag === 'draw2'){
      var r = this.clor1[0]
      var g = this.clor1[1]
      var b = this.clor1[2]
    }else{
      var r = this.clor2[0]
      var g = this.clor2[1]
      var b = this.clor2[2]
    }
    if(!this.sX){
      this.sX = touchPoint.x - 0.001
      this.sY = touchPoint.y - 0.001
    }
    if(!this._sX){
      this._sX = x - 10
      this._sY = y - 10
    }
    if(this.flag === 'draw2'){
      var thick = this.thick * 2
    }else{
      var thick = this.thick * 5.7
    }

    var dx = Math.abs(this.sX - touchPoint.x)
    var dy = Math.abs(this.sY - touchPoint.y)
    if(dx <= 60 && dy <= 60){
      var drawNode = new cc.DrawNode()
      drawNode.drawCardinalSpline(
        [cc.p(this.sX, this.sY), // 起点
          cc.p(touchPoint.x, touchPoint.y)], // 终点
        0.1,
        8,
        thick * fix * fix2, // 线粗
        // cc.color(this.colorObj.r, this.colorObj.b, this.colorObj.b, 255) // 颜色
        cc.color(r, g, b, 255) // 颜色
      )
      this.addChild(drawNode, 8)

      drawNode.startx = this._sX
      drawNode.endx = x

      drawNode.starty = this._sY
      drawNode.endy = y

      this.drawDotArr.push([thick, cc.color(r, g, b, 255), cc.p(this.sX, this.sY), cc.p(touchPoint.x, touchPoint.y), this._sX, x, this._sY, y])
      // this.drawDotArr.push([this._sX, x, this._sY, y])
      this.drawNodeArr.push(drawNode)

      this.sX = touchPoint.x
      this.sY = touchPoint.y

      this._sX = x
      this._sY = y
    }else if((dx > 60 && dx <= 120 && dy <= 120) || (dy > 60 && dy <= 120 && dx <= 120)){
      var sX = this.sX
      var sY = this.sY
      var eX = touchPoint.x
      var eY = touchPoint.y

      var drawNode = new cc.DrawNode()
      drawNode.drawCardinalSpline(
        [cc.p(sX, sY), // 起点
          cc.p(sX + (eX - sX) / 2, sY + (eY - sY) / 2)], // 终点
        0.1,
        8,
        thick * fix * fix2, // 线粗
        // cc.color(this.colorObj.r, this.colorObj.b, this.colorObj.b, 255) // 颜色
        cc.color(r, g, b, 255) // 颜色
      )
      this.addChild(drawNode, 8)

      drawNode.startx = this._sX
      drawNode.endx = this._sX + (x - this._sX) / 2

      drawNode.starty = this._sY
      drawNode.endy = this._sY + (y - this._sY) / 2

      this.drawDotArr.push([thick, cc.color(r, g, b, 255), cc.p(sX, sY), cc.p(sX + (eX - sX) / 2, sY + (eY - sY) / 2), this._sX, this._sX + (x - this._sX) / 2, this._sY, this._sY + (y - this._sY) / 2])
      // this.drawDotArr.push([this._sX, this._sX + (x - this._sX) / 2, this._sY, this._sY + (y - this._sY) / 2])
      this.drawNodeArr.push(drawNode)

      var drawNode = new cc.DrawNode()
      drawNode.drawCardinalSpline(
        [cc.p(sX + (eX - sX) / 2, sY + (eY - sY) / 2), // 起点
          cc.p(eX, eY)], // 终点
        0.1,
        8,
        thick * fix * fix2, // 线粗
        // cc.color(this.colorObj.r, this.colorObj.b, this.colorObj.b, 255) // 颜色
        cc.color(r, g, b, 255) // 颜色
      )
      this.addChild(drawNode, 8)

      drawNode.startx = this._sX + (x - this._sX) / 2
      drawNode.endx = x

      drawNode.starty = this._sY + (y - this._sY) / 2
      drawNode.endy = y

      this.drawDotArr.push([thick, cc.color(r, g, b, 255), cc.p(sX + (eX - sX) / 2, sY + (eY - sY) / 2), cc.p(eX, eY), this._sX + (x - this._sX) / 2, x, this._sY + (y - this._sY) / 2, y])
      // this.drawDotArr.push([this._sX + (x - this._sX) / 2, x, this._sY + (y - this._sY) / 2, y])
      this.drawNodeArr.push(drawNode)

      this.sX = touchPoint.x
      this.sY = touchPoint.y

      this._sX = x
      this._sY = y
    }else{
      var sX = this.sX
      var sY = this.sY
      var eX = touchPoint.x
      var eY = touchPoint.y

      var drawNode = new cc.DrawNode()
      drawNode.drawCardinalSpline(
        [cc.p(sX, sY), // 起点
          cc.p(sX + (eX - sX) / 3, sY + (eY - sY) / 3)], // 终点
        0.1,
        8,
        thick * fix * fix2, // 线粗
        // cc.color(this.colorObj.r, this.colorObj.b, this.colorObj.b, 255) // 颜色
        cc.color(r, g, b, 255) // 颜色
      )
      this.addChild(drawNode, 8)

      drawNode.startx = this._sX
      drawNode.endx = this._sX + (x - this._sX) / 3

      drawNode.starty = this._sY
      drawNode.endy = this._sY + (y - this._sY) / 3

      this.drawDotArr.push([thick, cc.color(r, g, b, 255), cc.p(sX, sY), cc.p(sX + (eX - sX) / 3, sY + (eY - sY) / 3), this._sX, this._sX + (x - this._sX) / 3, this._sY, this._sY + (y - this._sY) / 3])
      // this.drawDotArr.push([this._sX, this._sX + (x - this._sX) / 3, this._sY, this._sY + (y - this._sY) / 3])
      this.drawNodeArr.push(drawNode)

      var drawNode = new cc.DrawNode()
      drawNode.drawCardinalSpline(
        [cc.p(sX + (eX - sX) / 3, sY + (eY - sY) / 3), // 起点
          cc.p(sX + (eX - sX) / 3 * 2, sY + (eY - sY) / 3 * 2)], // 终点
        0.1,
        8,
        thick * fix * fix2, // 线粗
        // cc.color(this.colorObj.r, this.colorObj.b, this.colorObj.b, 255) // 颜色
        cc.color(r, g, b, 255) // 颜色
      )
      this.addChild(drawNode, 8)

      drawNode.startx = this._sX + (x - this._sX) / 3
      drawNode.endx = this._sX + (x - this._sX) / 3 * 2

      drawNode.starty = this._sY + (y - this._sY) / 3
      drawNode.endy = this._sY + (y - this._sY) / 3 * 2

      this.drawDotArr.push([thick, cc.color(r, g, b, 255), cc.p(sX + (eX - sX) / 3, sY + (eY - sY) / 3), cc.p(sX + (eX - sX) / 3 * 2, sY + (eY - sY) / 3 * 2), this._sX + (x - this._sX) / 3, this._sX + (x - this._sX) / 3 * 2, this._sY + (y - this._sY) / 3, this._sY + (y - this._sY) / 3 * 2])
      // this.drawDotArr.push([this._sX + (x - this._sX) / 3, this._sX + (x - this._sX) / 3 * 2, this._sY + (y - this._sY) / 3, this._sY + (y - this._sY) / 3 * 2])
      this.drawNodeArr.push(drawNode)

      var drawNode = new cc.DrawNode()
      drawNode.drawCardinalSpline(
        [cc.p(sX + (eX - sX) / 3 * 2, sY + (eY - sY) / 3 * 2), // 起点
          cc.p(eX, eY)], // 终点
        0.1,
        8,
        thick * fix * fix2, // 线粗
        // cc.color(this.colorObj.r, this.colorObj.b, this.colorObj.b, 255) // 颜色
        cc.color(r, g, b, 255) // 颜色
      )
      this.addChild(drawNode, 8)

      drawNode.startx = this._sX + (x - this._sX) / 3 * 2
      drawNode.endx = x

      drawNode.starty = this._sY + (y - this._sY) / 3 * 2
      drawNode.endy = y

      this.drawDotArr.push([thick, cc.color(r, g, b, 255), cc.p(sX + (eX - sX) / 3 * 2, sY + (eY - sY) / 3 * 2), cc.p(eX, eY), this._sX + (x - this._sX) / 3 * 2, x, this._sY + (y - this._sY) / 3 * 2, y])
      // this.drawDotArr.push([this._sX + (x - this._sX) / 3 * 2, x, this._sY + (y - this._sY) / 3 * 2, y])
      this.drawNodeArr.push(drawNode)

      this.sX = touchPoint.x
      this.sY = touchPoint.y

      this._sX = x
      this._sY = y
    }
  }
  // _next: function(){
  //   var layer = new Layer04()
  //   this.getParent().addChild(layer)
  //   this.removeFromParent()
  // }
  // update: function (dt) {

  // }
})

