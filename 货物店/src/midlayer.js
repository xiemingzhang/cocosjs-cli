/* 中间层*/
var MidLayer = cc.Layer.extend({
  ctor: function () { // 初始化
    this._super()
    this.count = 0

    var size = cc.director.getWinSize() // 获取显示区大小

    var sprite1 = new cc.Sprite(res.board)
    sprite1.setAnchorPoint(0, 0)
    sprite1.setScale(0.33 * fix)
    sprite1.setPosition(222.7 * fix, 152)
    this.addChild(sprite1, 1)

    var sprite1 = new cc.Sprite(res.board_white)
    sprite1.setAnchorPoint(0, 0)
    sprite1.setScale(0.33 * fix)
    sprite1.setPosition(232 * fix, 161)
    this.addChild(sprite1)

    this.hand = new cc.Sprite(res.hand)
    this.hand.setAnchorPoint(0, 0)
    this.hand.setScale(0.33 * fix)
    this.hand.setPosition(350 * fix, 161)
    this.addChild(this.hand, 3)
    var self = this
    this.schedule(function () {
      self.hand.initWithFile(res.handclick)
      this.scheduleOnce(function () {
        self.hand.initWithFile(res.hand)
      }, 0.3)
    }, 0.5, cc.repeatForever(), 0)

    var sprite3 = new cc.Sprite(res.strip)
    sprite3.setAnchorPoint(0, 0)
    sprite3.setScale(0.33 * fix)
    sprite3.setPosition(231 * fix, 149 + 171 * fix) // 375*fix
    this.addChild(sprite3, 5)

    this.init()
    sound.cargo()
  },
  init: function () {
    this.dragArr = []
    this.cardArr = []
    this.leveEndArr = []// 一关结束后要删除的数组
    var spriteArr = data.spr[this.count].abso // 数字和提示语
    var cookieObj = data.spr[this.count].cookie // 食品

    // 遮罩
    this.clip = new cc.Sprite(res.curtain)
    this.clip.setScale(1 / 3 * fix)
    this.clip.setPosition(0, 0)
    this.sprite2 = new cc.ClippingNode(this.clip)
    // this.lableSp.setScale(1/3);
    this.sprite2.setInverted(false)

    this.sprite2.setAnchorPoint(0, 0)
    this.sprite2.setPosition(367 * fix, 149 + 100 * fix)
    this.addChild(this.sprite2, 2)
    this.lable = new cc.Sprite(res.curtain)
    this.lable.name = 'ban'
    this.lable.setScale(1 / 3 * fix)
    this.dragArr.push(this.lable)
    this.sprite2.addChild(this.lable, 2)

    var foodNum = Math.ceil(Math.random() * 8)
    var numbersprArr = [res.one, res.two, res.three, res.four, res.five, res.six, res.seven, res.enight]
    var bumbersprOpArr = [{x: 186, y: 62}, {x: 366, y: 62}, {x: 546, y: 62}]
    var numberspr = numbersprArr[foodNum - 1] // 对的数
    var numberOp = bumbersprOpArr[Math.floor(Math.random() * bumbersprOpArr.length)] // 随机取位置给对的
    numbersprArr.splice(foodNum - 1, 1)
    var Vnumberspr1 = numbersprArr[Math.floor(Math.random() * 7)]
    numbersprArr.splice(numbersprArr.indexOf(Vnumberspr1), 1)[Math.floor(Math.random() * 3)]
    var Vnumberspr2 = numbersprArr[Math.floor(Math.random() * 6)]
    bumbersprOpArr.splice(bumbersprOpArr.indexOf(numberOp), 1)
    var VnumopArr = bumbersprOpArr
    for (var i = 0; i < spriteArr.length; i++) {
      var sprite = new cc.Sprite(spriteArr[i].name)
      sprite.setPosition(spriteArr[i].pos.x * fix, spriteArr[i].pos.y)
      if(spriteArr[i].tip === 'pro') {
        sprite.name = 'pro'
        sprite.setPosition(spriteArr[i].pos.x, 149 + 99 * fix)
      }

      this.cardArr.push(sprite)
      if(spriteArr[i].id !== 1 && sprite.name !== 'pro') {
        // this.dragArr.push(sprite)
      }
      this.leveEndArr.push(sprite)
      // sprite.setAnchorPoint(0, 0);
      if (sprite.name !== 'pro') {
        sprite.setScale(0.33 * fix)
        this.addChild(sprite, spriteArr[i].id)
      } else {
        this.lable.addChild(sprite)
      }
    }
    var newnumArr = [
      {spr: numberspr, x: numberOp.x, y: numberOp.y, trueBack: '1'},
      {spr: res.chooseTrue, x: numberOp.x, y: numberOp.y, trueBack: '1', id: 1},
      {spr: Vnumberspr1, x: VnumopArr[0].x, y: VnumopArr[0].y},
      {spr: Vnumberspr2, x: VnumopArr[1].x, y: VnumopArr[1].y}
    ]
    for (var i = 0; i < newnumArr.length; i++) {
      var sprite = new cc.Sprite(newnumArr[i].spr)
      sprite.setPosition(newnumArr[i].x * fix, newnumArr[i].y)
      sprite.setScale(1 / 3 * fix)
      sprite.name = i
      this.cardArr.push(sprite)
      this.leveEndArr.push(sprite)
      if(newnumArr[i].trueBack === '1') {
        sprite.trueBack = '1'
      }
      if(newnumArr[i].id === 1) {
        sprite.id = newnumArr[i].id
        sprite.setOpacity(0)
      } else {
				 this.dragArr.push(sprite) // 三个牌
			}
      this.addChild(sprite, 6)
    }
    // 添加食品
    for (var i = 0;i < foodNum;i++) {
      var cookie = new cc.Sprite(cookieObj.spr)
      this.leveEndArr.push(cookie)
      cookie.setAnchorPoint(0, 0)
      // this.dragArr.push(cookie)
      cookie.setScale(0.33 * fix)
      switch (foodNum) {
        case 1: {
          cookie.setPosition(339 * fix, 220)
          break
        }
        case 2: {
          cookie.setPosition((287 + i * 108) * fix, 222)
          break
        }
        case 9: {
          if(i < 5) {
            cookie.setPosition((245 + i * 50) * fix, 190 + 56 * fix)
          } else {
            cookie.setPosition((270 + (i - 5) * 50) * fix, 190 + 6 * fix)
          }
          break
        }
        case 5: {
          if(i < 3) {
            cookie.setPosition((279 + i * 60) * fix, 190 + 56 * fix)
          } else {
            cookie.setPosition((310 + (i - 3) * 60) * fix, 190 + 6 * fix)
          }
          break
        }
        case 6: {
          if(i < 3) {
            cookie.setPosition((279 + i * 60) * fix, 190 + 56 * fix)
          } else {
            cookie.setPosition((300 + (i - 3) * 60) * fix, 190 + 6 * fix)
          }
          break
        }
				case 7: {
					if(i < 3) {
						cookie.setPosition((279 + i * 60) * fix, 190 + 56 * fix)
					} else {
						cookie.setPosition((250 + (i - 3) * 60) * fix, 190 + 6 * fix)
					}
					break
				}
				case 8: {
					if(i < 4) {
						cookie.setPosition((269 + i * 60) * fix, 190 + 56 * fix)
					} else {
						cookie.setPosition((240 + (i - 4) * 60) * fix, 190 + 6 * fix)
					}
					break
				}
        case 4: {
          if(i < 3) {
            cookie.setPosition((279 + i * 60) * fix, 190 + 56 * fix)
          } else {
            cookie.setPosition((279 + 60) * fix, 190 - 4 * fix)
          }
          break
        }
        case 3: {
          cookie.setPosition((285.3 + i * 60) * fix, 190 + 30 * fix)
        }

      }

      // this.dragArr.push(cookie)
      this.addChild(cookie)
    }

    this.dragAction()
  },
  dragAction: function () {
    // 创建一个事件监听器 OneByOne 为单点触摸
		this.flag = true
    this.listener1 = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true, // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
      onTouchBegan: function (touch, event) { // 实现 onTouchBegan 事件处理回调函数
        var target = event.getCurrentTarget()
        // 获取事件所绑定的 target, 通常是cc.Node及其子类
        // 获取当前触摸点相对于按钮所在的坐标

        var locationInNode = target.convertToNodeSpace(touch.getLocation()) // 转换为本地坐标系的坐标
        var s = target.getContentSize() // 获取 touch 元素的数据(宽高
        var rect = target._rect
        if ((cc.rectContainsPoint(rect, locationInNode) && this.flag)) { // 判断触摸点是否在按钮范围内
					this.flag = false
					updata.finish_steps++
          return true
          // sound.buttonAudio();
        }
        return false
      }.bind(this),
      // onTouchMoved: function (touch, event) { // 实现onTouchMoved事件处理回调函数,
      //   var size = cc.director.getWinSize()
      //   // 移动当前按钮精灵的坐标位置
      //   var target = event.getCurrentTarget()
      //   var delta = touch.getDelta() // 获取事件数据: delta
      //   /* 设置层级*/
      //   target.setLocalZOrder(2)

      //   /* 判断边界*/

      //   var moveX = target.x += delta.x
      //   var moveY = target.y += delta.y
      //   var wid = target.getBoundingBox().width
      //   var heg = target.getBoundingBox().height
      //   if (moveX + wid > size.width) {
      //     target.x = size.width - wid
      //   }
      //   if (moveY + heg > size.height) {
      //     target.y = size.height - heg
      //   }
      //   if (target.x < 0) {
      //     target.x = 0
      //   }
      //   if (target.y < 0) {
      //     target.y = 0
      //   }
      // },
      onTouchEnded: function (touch, event) { // 实现onTouchEnded事件处理回调函数
        var _this = cc.director.getRunningScene().getChildByTag(1)
        var target = event.getCurrentTarget()
        updata.finish_steps++
        if (target.height === 536) {
          this.hand.removeFromParent()
          var action = cc.moveBy(1, cc.p(0, 150 * fix))
          var action1 = cc.fadeOut(1)
          var action2 = cc.fadeIn(1)
          if (this.count === 3) {
            sound.problem2()
          } else{
            sound.problem1()
          }
          if (this.lable.y < 20) {
            this.lable.runAction(action)
            this._children.forEach(function (v) {
              if (v.name === 'pro') {
                v.runAction(action1.clone())
              }
            })
						this.scheduleOnce(function() {
							this.flag = true
						}, 1)
          } else {
            this.lable.runAction(action.reverse())
            this._children.forEach(function (v) {
              if (v.name === 'pro') {
                v.runAction(action2.clone())
              }
            })
						this.scheduleOnce(function() {
							this.flag = true
						}, 1)
          }

        }
        if (target.trueBack === '1' && this.count !== 4 && this.lable.y > 20) {
          var Cthis = this
          this._children.forEach(function (v) {
            if(v.id === 1) {

              v.setLocalZOrder(13)
              v.setOpacity(255)
            }
          })
          this.cardArr.forEach(function (v) {
            if(v.trueBack !== '1' && v.tip !== 'pro') {
              Cthis.cardTurnOver(v)
            }
          })
          var _this = cc.director.getRunningScene().getChildByTag(1)
          _this.rightStar(this.count)
          updata.finish_star++
          sound.rightAudio()
          this.count++
          this.sprite2.removeFromParent()

          this._children.forEach(function (v) { // 删除提示
            if(v.name === 'pro') {
              v.removeFromParent()
            }
          }, 1)
          this.scheduleOnce(function () {
            this.leveEndArr.forEach(function (v) { // 删除上一关精灵
              v.removeFromParent()
            })
            this.init()
						this.flag = true

					}, 2)

        } else if (target.trueBack === '1' && this.count === 4 && this.lable.y > 20) {
          var Cthis = this
          this._children.forEach(function (v) {
            if(v.id === '1') {
              v.setLocalZOrder(7)
              v.setOpacity(255)
            }
          })
          this.cardArr.forEach(function (v) {
            if(v.trueBack !== '1' && v.tip !== 'pro') {
              Cthis.cardTurnOver(v)
            }
          })
					_this.rightStar(this.count)
          sound.rightAudio()
          updata.finish_star++
          this.count++
          this.sprite2.removeFromParent()

          this._children.forEach(function (v) { // 删除提示
            if(v.name === 'pro') {
              v.removeFromParent()
            }
          }, 1)
          this.scheduleOnce(function () {
            updata.finish_star = 5
            updata.is_finish = 1
            _this.gameEnd(5)
            sound.winAudio()
          }, 2)
        } else if(target.height !== 536) {
					this.flag = true

					sound.wrongAudio()
          _this.wrongStar()
        }
      }.bind(this)

    })
    // 添加监听器到管理器

    var len = this.dragArr.length
    for (var i = 0; i < len; i++) {
      cc.eventManager.addListener(this.listener1.clone(), this.dragArr[i])
    }
  },
  // cardTurnOver : function(flag,front,reverse){  //翻牌
  cardTurnOver: function (sprite) {
    var action1 = cc.scaleTo(0.2, 0.001 * fix, 0.333 * fix)
    var scale_ease1 = action1.easing(cc.easeOut(2))

    var action2 = cc.scaleTo(0.2, 0.333 * fix, 0.333 * fix)
    var scale_ease2 = action2.easing(cc.easeIn(2))

    var cb1 = cc.callFunc(function () {
      /* 换图 */
      sprite.setTexture(res.brand)
    })

    var action = cc.sequence(scale_ease1, cb1, cc.delayTime(0.2), scale_ease2)

    sprite.runAction(action)
  },
  random: function (arr) {
    index = Math.floor((Math.random() * arr.length))
    return arr[index]

  }

})
