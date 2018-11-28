/* 公共效果 飞星 完成提示 */
var StarLayer = cc.Layer.extend({
	ctor: function (num) {
		this._super()
		this.flag = true
		if (num !== '') {
			this.comCon(num)
		}
		this.onTouchBegan()
	}, onReturn: function () {// 重玩
		var listener1 = cc.EventListener.create({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true, // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
			onTouchBegan: function (touch, event) {
				var target = event.getCurrentTarget() // 获取事件所绑定的 target, 通常是cc.Node及其子类

				// 获取当前触摸点相对于按钮所在的坐标
				var locationInNode = target.convertToNodeSpace(touch.getLocation())
				var s = target.getContentSize()
				var rect = cc.rect(0, 0, s.width, s.height)

				if (cc.rectContainsPoint(rect, locationInNode)) {
					if (target.id === 'back') {
						cc.director.runScene(new MyScene())
						return false
					}
					return true
				}
				return false
			}
		})
		cc.eventManager.addListener(listener1.clone(), this.backSprite)
	},
	comCon: function (num) {// 初始星星
		var size = cc.director.getWinSize()
		var h1 = (size.height - 52 * fix)
		var h2 = (size.height - 47 * fix)
		this.shape = []
		this.backSprite = cc.Sprite.create(res.Back)
		this.backSprite.id = 'back'
		this.backSprite.setAnchorPoint(0, 0)
		this.backSprite.setPosition(16, h1)
		this.backSprite.setScale(0.25 * fix)
		this.addChild(this.backSprite, 5)
		var jianju = 36
		var chushi = 692
		var weizhi = 0
		for (var i = num.taoal; i >= 1; i--) {
			if (i == num.taoal) {
				weizhi = chushi
			} else {
				weizhi -= jianju
			}
			if (num.obtain >= i) {
				this.shape[i] = cc.Sprite.create(res.LightStar)
			} else {
				this.shape[i] = cc.Sprite.create(res.BlackStar)
			}
			this.shape[i].setAnchorPoint(0, 0)
			this.shape[i].setPosition(weizhi * fix, h2)
			this.shape[i].setScale(0.333 * fix)
			this.addChild(this.shape[i], 3)
		}

	},
	rightStar: function (count) {//飞星效果
		updata.finish_star++
		var randX = this.random(100 * fix, 400 * fix)
		/*出现飞星*/
		this.star = cc.Sprite.create(res.FlyStar)
		this.star.setAnchorPoint(0, 0)
		this.star.setPosition(randX, -150)
		this.star.setScale(0.2)
		this.addChild(this.star, 10)
		/*动画 贝塞尔*/
		var array = [
			cc.p(randX, 0),
			cc.p(randX + 80 * fix, 110),
			cc.p(randX + 160 * fix, 220),
			cc.p(this.shape[count].x, this.shape[count].y)
		]
		/*星星曲线*/
		var action1 = cc.cardinalSplineTo(0.8, array, 0)
		var move_ease = action1.easing(cc.easeInOut(3))
		/*星星缩放*/
		var scale1 = cc.scaleTo(0.4, 0.25)
		var scale2 = cc.scaleTo(0.4, 0.04)
		/*依次执行*/
		var action2 = cc.sequence(scale1, scale2)
		/*同时执行*/
		var action3 = cc.spawn(move_ease, action2)
		/*回调函数*/
		var cb = cc.callFunc(function () {
			this.star.removeFromParent()
			this.shape[count].setTexture(res.LightStar)
		}.bind(this))
		var action = cc.sequence(action3, cb)
		this.star.runAction(action)
	},
	wrongStar: function () {//错误的星星效果
		if (this.flag) {
			this.flag = false
			var randX = this.random(100 * fix, 400 * fix)
			/*出现飞星*/
			this.wStar = cc.Sprite.create(res.FlyStar)
			this.wStar.setAnchorPoint(0, 0)
			this.wStar.setPosition(randX, -100)
			this.wStar.setScale(0.16)
			this.addChild(this.wStar, 10)

			var action1 = cc.moveBy(0.5, 0, 200)
			var move_ease1 = action1.easing(cc.easeOut(2))

			var action2 = cc.moveBy(0.5, 0, -200)
			var move_ease2 = action2.easing(cc.easeIn(2))

			var cb = cc.callFunc(function () {
				this.wStar.removeFromParent()
				this.flag = true
			}.bind(this))
			var action = cc.sequence(move_ease1, move_ease2, cb)
			this.wStar.runAction(action)
		} else {
			var action3 = cc.moveTo(0.3, this.wStar.x, 20)
			var cb2 = cc.callFunc(function () {
				this.wStar.removeFromParent()
				this.flag = true
			}.bind(this))
			var action5 = cc.sequence(action3, cb2)
			this.wStar.runAction(action5)
		}
	},
	random: function (max, min) { //随机数生成
		return Math.floor(Math.random() * (max - min + 1) + min)
	},
	onTouchBegan: function (touch, event) { //返回退出调用
		var listener1 = cc.EventListener.create({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,                       // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
			onTouchBegan: function (touch, event) {
				var target = event.getCurrentTarget()  // 获取事件所绑定的 target, 通常是cc.Node及其子类

				// 获取当前触摸点相对于按钮所在的坐标
				var locationInNode = target.convertToNodeSpace(touch.getLocation())
				var s = target.getContentSize()
				var rect = cc.rect(0, 0, s.width, s.height)

				if (cc.rectContainsPoint(rect, locationInNode))     // 判断触摸点是否在按钮范围内
				{
					if (target.id == 'back') {
						this.countTime()
						App.jsBack('close')
						cc.director.end()
						return false
					}
					return true
				}
				return false
			}.bind(this)
		})
		cc.eventManager.addListener(listener1.clone(), this.backSprite)
	},
	gameEnd: function (num) {//完成游戏提示 +退出
		var size = cc.director.getWinSize()
		sound.stopAudio()
		var MsgBoxLayer = cc.LayerColor.extend({
			sprite: null,
			ctor: function (color, width, height) {
				this._super(color, width, height)
				this._touchListener = cc.EventListener.create({
					event: cc.EventListener.TOUCH_ONE_BY_ONE,
					swallowTouches: true,
					onTouchBegan: function () {
						return true
					}
				})
				cc.eventManager.addListener(this._touchListener, this)
				// 添加你的UI布局
				return true
			},
			onExit: function () {
				if (this._touchListener) {
					cc.eventManager.removeListener(this._touchListener, 1)
					this._touchListener = null
				}
			}
		})
		this.shade = new MsgBoxLayer(cc.color(0, 0, 0), size.width, size.height)
		this.shade.setPosition(cc.p(0, 0))
		this.shade.setLocalZOrder(30)
		this.shade.setOpacity(160)
		this.addChild(this.shade, 100)

		this.msgBg = new cc.Sprite(res.ResultBg)
		this.msgBg.setAnchorPoint(0.5, 0.5)
		this.msgBg.setScale(0.333)
		this.msgBg.setPosition(size.width / 2, size.height / 2)
		this.addChild(this.msgBg, 101)

		this.msg = new cc.Sprite(res.celebrateGirl)
		this.msg.setAnchorPoint(0.5, 0)
		this.msg.setScale(0.333)
		this.msg.setPosition(size.width / 2, size.height / 414 * 192)
		this.addChild(this.msg, 101)

		if (num % 2) {//不是2的整数倍
			var index = 0.5//锚点设置在width中间
			this.scoreStar = new cc.Sprite(res.LightStar)
			this.scoreStar.setAnchorPoint(0.5, 0)
			this.scoreStar.setScale(0.38)
			this.scoreStar.setOpacity(0)
			this.scoreStar.setPosition(size.width / 2, size.height / 414 * 134)
			this.addChild(this.scoreStar, 101)
			var scoreWidth = 35 * fix

		} else {//是2的整数倍
			var index = 1//锚点设置在width最右
			this.scoreStar = new cc.Sprite(res.LightStar)
			this.scoreStar.setAnchorPoint(1, 0)
			this.scoreStar.setScale(0.38)
			this.scoreStar.setOpacity(0)
			this.scoreStar.setPosition(size.width / 2, size.height / 414 * 134)
			this.addChild(this.scoreStar, 101)
			var scoreWidth = 35 * fix
		}
		if (num == 1) {
			var pos = [{
				x: size.width / 2,
				y: size.height / 414 * 134
			}]
		} else if (num == 2) {
			var pos = [{
				x: size.width / 2,
				y: size.height / 414 * 134
			}, {
				x: size.width / 2 + scoreWidth + 8,
				y: size.height / 414 * 134
			}]
		} else if (num == 3) {
			var pos = [
				{
					x: size.width / 2 - scoreWidth - 8,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth + 8,
					y: size.height / 414 * 134
				}]
		} else if (num == 4) {
			var pos = [
				{
					x: size.width / 2 - scoreWidth - 8,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth + 8,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth * 2 + 8 * 2,
					y: size.height / 414 * 134
				}]
		} else if (num == 5) {
			pos = [
				{
					x: size.width / 2 - scoreWidth * 2 - 8 * 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 - scoreWidth - 8,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth + 8,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth * 2 + 8 * 2,
					y: size.height / 414 * 134
				}]
		} else if (num == 6) {
			pos = [
				{
					x: size.width / 2 - scoreWidth * 2 - 8 * 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 - scoreWidth - 8,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth + 8,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth * 2 + 8 * 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth * 3 + 8 * 3,
					y: size.height / 414 * 134
				}]
		} else if (num == 7) {
			pos = [
				{
					x: size.width / 2 - scoreWidth * 3 - 8 * 3,
					y: size.height / 414 * 134
				},
				{
					x: size.width / 2 - scoreWidth * 2 - 8 * 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 - scoreWidth * 2 - 8 * 2,
					y: size.height / 414 * 140
				}, {
					x: size.width / 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth + 8,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth * 2 + 8 * 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth * 3 + 8 * 3,
					y: size.height / 414 * 134
				}]
		} else if (num == 8) {
			pos = [
				{
					x: size.width / 2 - scoreWidth * 3 - 8 * 3,
					y: size.height / 414 * 134
				},
				{
					x: size.width / 2 - scoreWidth * 2 - 8 * 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 - scoreWidth - 8,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth + 8,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth * 2 + 8 * 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth * 3 + 8 * 3,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth * 4 + 8 * 4,
					y: size.height / 414 * 134
				}]
		} else if (num == 9) {
			pos = [
				{
					x: size.width / 2 - scoreWidth * 4 - 8 * 4,
					y: size.height / 414 * 134
				},
				{
					x: size.width / 2 - scoreWidth * 3 - 8 * 3,
					y: size.height / 414 * 134
				},
				{
					x: size.width / 2 - scoreWidth * 2 - 8 * 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 - scoreWidth - 8,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth + 8,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth * 2 + 8 * 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth * 3 + 8 * 3,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth * 4 + 8 * 4,
					y: size.height / 414 * 134
				}]
		} else if (num == 10) {
			pos = [
				{
					x: size.width / 2 - scoreWidth * 4 - 8 * 4,
					y: size.height / 414 * 134
				},
				{
					x: size.width / 2 - scoreWidth * 3 - 8 * 3,
					y: size.height / 414 * 134
				},
				{
					x: size.width / 2 - scoreWidth * 2 - 8 * 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 - scoreWidth - 8,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth + 8,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth * 2 + 8 * 2,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth * 3 + 8 * 3,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth * 4 + 8 * 4,
					y: size.height / 414 * 134
				}, {
					x: size.width / 2 + scoreWidth * 5 + 8 * 5,
					y: size.height / 414 * 134
				}]
		}

		this.starArr = []

		for (var i = 0; i < num; i++) {
			var x = new cc.Sprite(res.LightStar)
			x.setAnchorPoint(index, 0)
			x.setScale(0.01)
			//x.setPosition(pos[i].x,pos[i].y);
			x.setPosition(size.width * 2, pos[i].y)
			this.addChild(x, 101)
			this.starArr.push(x)
		}

		for (var n = 0; n < this.starArr.length; n++) {
			var action1 = cc.moveTo(0.1, cc.p(pos[n].x, pos[n].y))
			var action2 = cc.callFunc(function () {
				sound.buttonAudio()
			}.bind(this))
			var action3_1 = cc.fadeIn(0.2)
			var action3_2 = cc.scaleTo(0.2, 0.444)
			var action3 = cc.spawn(action3_1, action3_2)
			var action4 = cc.scaleTo(0.1, 0.333)

			this.starArr[n].runAction(cc.sequence(cc.delayTime(0.2 * n), action1, action2, action3, action4))
		}


		this.ok = new cc.Sprite(res.DoneNormal)
		this.ok.id = 'ok'
		this.ok.setAnchorPoint(0.5, 0)
		this.ok.setScale(0.25)
		this.ok.setPosition(size.width / 2, size.height / 414 * 38)
		this.addChild(this.ok, 101)

		this.listener1 = cc.EventListener.create({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,      // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
			onTouchBegan: function (touch, event) {       //实现 onTouchBegan 事件处理回调函数
				var target = event.getCurrentTarget()    // 获取事件所绑定的 target, 通常是cc.Node及其子类
				// 获取当前触摸点相对于按钮所在的坐标
				var locationInNode = target.convertToNodeSpace(touch.getLocation())  //转换为本地坐标系的坐标
				var s = target.getContentSize()   //获取 touch 元素的数据(宽高)
				var rect = cc.rect(0, 0, s.width, s.height) //元素范围
				if (cc.rectContainsPoint(rect, locationInNode)) {     // 判断触摸点是否在按钮范围内
					/*正确*/
					var sles = this
					if (target.id == 'ok') {
						var action1 = cc.callFunc(function () {
							target.initWithFile(res.RepeatPress)
						})
						var action2 = cc.callFunc(function () {
							updata.is_finish = 1
							sles.countTime()
							App.jsBack('close')

							cc.director.end()
						})
						target.runAction(cc.sequence(action1, cc.delayTime(0.5), action2))
					} else if (target.id == 're') {
						var action1 = cc.callFunc(function () {
							target.initWithFile(res.RepeatPress)
						})
						var action2 = cc.callFunc(function () {
							cc.director.runScene(new MyScene())
						})
						target.runAction(cc.sequence(action1, cc.delayTime(0.5), action2))
					}
					return true
				}
				return false
			}.bind(this)
		})
		cc.eventManager.addListener(this.listener1.clone(), this.ok)
	},
	countTime: function () {
		var endTime = new Date().getTime()
		var gametime = endTime - startTime
		updata.finish_time = gametime
		cc.log(updata)
		App.report(updata)
	}
})
