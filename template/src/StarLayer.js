/* 公共效果 飞星 完成提示 */
var StarLayer = cc.Layer.extend({
  size: cc.director.getWinSize(),
  ctor: function (num) {
    this._super()
    this.flag = true
    if(num != ''){this.starNum(num)}
    // if(num.id === 0){
    //   this.onTouchBegan()
    // }else{
    //   this.onReturn()
    // }
  },
  starNum: function (num) {// 初始星星
    var size = cc.director.getWinSize()
    var h1 = (size.height - 52 * fix)
    var h2 = (size.height - 47 * fix)
    this.shape = []
    this.backSprite = cc.Sprite.create(res.Back)
    this.backSprite.id = 'back'
    this.backSprite.setAnchorPoint(0, 0)
    this.backSprite.setPosition(16, h1)
    this.backSprite.setScale(0.25 * fix)
    this.addChild(this.backSprite, 105)
    var jianju = 36
    var chushi = 692
    var weizhi = 0
    for (var i = num.total; i >= 1; i--) {
      if (i == num.total) {
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
  rightStar: function (count) {// 飞星效果
    updata.finish_star++
    var randX = this.random(100 * fix, 400 * fix)
    /* 出现飞星*/
    this.star = cc.Sprite.create(res.FlyStar)
    this.star.setAnchorPoint(0, 0)
    this.star.setPosition(randX, -150)
    this.star.setScale(0.2)
    this.addChild(this.star, 10)
    /* 动画 贝塞尔*/
    var array = [
      cc.p(randX, 0),
      cc.p(randX + 80 * fix, 110),
      cc.p(randX + 160 * fix, 220),
      cc.p(this.shape[count].x, this.shape[count].y)
    ]
    /* 星星曲线*/
    var action1 = cc.cardinalSplineTo(0.8, array, 0)
    var move_ease = action1.easing(cc.easeInOut(3))
    /* 星星缩放*/
    var scale1 = cc.scaleTo(0.4, 0.25)
    var scale2 = cc.scaleTo(0.4, 0.04)
    /* 依次执行*/
    var action2 = cc.sequence(scale1, scale2)
    /* 同时执行*/
    var action3 = cc.spawn(move_ease, action2)
    /* 回调函数*/
    var cb = cc.callFunc(function () {
      this.star.removeFromParent()
      this.shape[count].setTexture(res.LightStar)
    }.bind(this))
    var action = cc.sequence(action3, cb)
    this.star.runAction(action)
  },
  wrongStar: function () {// 错误的星星效果
    if (this.flag) {
      this.flag = false
      var randX = this.random(100 * fix, 400 * fix)
      /* 出现飞星*/
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
  goBack: function () {// 返回游戏首页
    var listener1 = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true, // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
      onTouchBegan: function (touch, event) {
        var target = event.getCurrentTarget() // 获取事件所绑定的 target, 通常是cc.Node及其子类

        // 获取当前触摸点相对于按钮所在的坐标
        var locationInNode = target.convertToNodeSpace(touch.getLocation())
        var s = target.getContentSize()
        var rect = cc.rect(0, 0, s.width, s.height)

        if (cc.rectContainsPoint(rect, locationInNode)) // 判断触摸点是否在按钮范围内
        {
          if (target.id == 'back') {
            if(target.getParent().star){
              target.getParent().star.stopAllActions()
              target.getParent().star.removeFromParent()
            }
            cc.director.runScene(new PlayScene())
            return false
          }
          return true
        }
        return false
      }
    })
    cc.eventManager.addListener(listener1.clone(), this.backSprite)
  },
  gameClose: function (touch, event) { // 返回游戏列表
    var listener1 = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true, // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
      onTouchBegan: function (touch, event) {
        var target = event.getCurrentTarget() // 获取事件所绑定的 target, 通常是cc.Node及其子类

        // 获取当前触摸点相对于按钮所在的坐标
        var locationInNode = target.convertToNodeSpace(touch.getLocation())
        var s = target.getContentSize()
        var rect = cc.rect(0, 0, s.width, s.height)

        if (cc.rectContainsPoint(rect, locationInNode)) // 判断触摸点是否在按钮范围内
        {
          if (target.id == 'back') {
            this.reportData()
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
  gameEnd: function (num) {
    var size = cc.director.getWinSize()
    // sound.stopAllEffects()
    // sound.stopAudio()
    // sound.winAudio()
    updata.is_finish = 1
    var endTime = new Date().getTime()
    var gametime = endTime - startTime
    updata.finish_time = gametime
    cc.log(updata)
    this.reportData()
    common_data.forEach(function(item){
      item.obtain = 0
    })
    updata = {
      task_id: task_id,
      is_finish: 0, // 是否完成游戏
      finish_star: 0, // 获得几颗星
      finish_steps: 0, // 操作多少部
      finish_time: 0// 时长
    }
    var MsgBoxLayer = cc.LayerColor.extend({
      sprite: null,
      ctor: function(color, width, height){
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
      onExit: function(){
        if(this._touchListener) {
          cc.eventManager.removeListener(this._touchListener, 1)
          this._touchListener = null
        }
      }
    })

    var shadow = new MsgBoxLayer(cc.color(0, 0, 0), size.width, size.height)
    shadow.setPosition(cc.p(0, 0))
    shadow.setLocalZOrder(30)
    shadow.setOpacity(160)
    this.addChild(shadow, 100)

    var board = new cc.Sprite(res.ResultBg)
    board.setAnchorPoint(0.5, 0)
    board.setScale(1 / 3 * fix)
    board.setPosition(368 * fix, 80 * fix + 180 / fix - 180)
    this.addChild(board, 101)

    this.text_great = new cc.LabelTTF('小朋友你真棒！', 'STYuanti-TC-Regular', 18)
    this.text_great.setAnchorPoint(0.5, 0)
    this.text_great.setPosition(368 * fix, 231 * fix + 180 / fix - 180)
    this.text_great.setColor(cc.color(79, 53, 48))
    this.addChild(this.text_great, 101)

    this.text_x = new cc.LabelTTF('x', 'STYuanti-TC-Regular', 32)
    this.text_x.setAnchorPoint(0, 0)
    this.text_x.setPosition(363 * fix, 162 * fix + 160 / fix - 160)
    this.text_x.setColor(cc.color(79, 53, 48))
    this.addChild(this.text_x, 101)

    this.text_num = new cc.LabelTTF(num, 'STYuanti-TC-Regular', 44)
    this.text_num.setAnchorPoint(0, 0)
    this.text_num.setPosition(392 * fix, 152 * fix + 160 / fix - 160)
    this.text_num.setColor(cc.color(79, 53, 48))
    this.addChild(this.text_num, 101)

    this.star_finish = new cc.Sprite(res.star_finish)
    this.star_finish.setAnchorPoint(1, 0)
    this.star_finish.setScale(1 / 3 * fix)
    this.star_finish.setPosition(351 * fix, 153 * fix + 180 / fix - 180)
    this.addChild(this.star_finish, 101)

    this.btn_rePlay = new cc.Sprite(res.button_green)
    this.btn_rePlay.setAnchorPoint(1, 0)
    this.btn_rePlay.setScale(1 / 3 * fix)
    this.btn_rePlay.setPosition(348 * fix, 55 * fix + 180 / fix - 180)
    this.addChild(this.btn_rePlay, 101)

    this.btn_next = new cc.Sprite(res.button_next)
    this.btn_next.setAnchorPoint(0, 0)
    this.btn_next.setScale(1 / 3 * fix)
    this.btn_next.setPosition(388 * fix, 55 * fix + 180 / fix - 180)
    this.addChild(this.btn_next, 101)

    var listener2 = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true, // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
      onTouchBegan: function (touch, event) { // 实现 onTouchBegan 事件处理回调函数
        var target = event.getCurrentTarget() // 获取事件所绑定的 target, 通常是cc.Node及其子类
        // 获取当前触摸点相对于按钮所在的坐标
        var locationInNode = target.convertToNodeSpace(touch.getLocation()) // 转换为本地坐标系的坐标
        var s = target.getContentSize() // 获取 touch 元素的数据(宽高)
        var rect = cc.rect(0, 0, s.width, s.height) // 元素范围
        if(cc.rectContainsPoint(rect, locationInNode)) { // 判断触摸点是否在按钮范围内
          sound.buttonAudio()
          // this.reportData()
          startTime = new Date().getTime()
          if(target === this.btn_rePlay){
            cc.director.runScene(new StartScene())
          }else if(target === this.btn_next){
            // cc.log(Boolean(App.getP('game_id')) == true)
            if(App.getP('game_id')){
              cc.director.end()

              var str = App.getP('game_id')
              var game_id_arr = str.split('_')

              var url = window.location.href
              var url_head = url.split('?')[0]
              var url_head_arr = url_head.split('/')
              url_head_arr[url_head_arr.length - 2] = game_id_arr[0]
              url_head = url_head_arr.join('/')

              var url_tail = url.split('?')[1]
              var url_tail_arr = url_tail.split('&')
              var len = url_tail_arr.length
              var obj = {}
              for(var i = 0; i < len; i++) {
                obj[url_tail_arr[i].split('=')[0]] = url_tail_arr[i].split('=')[1]
              }
              obj.game_id = game_id_arr.slice(1).join('_')

              var param_arr = []
              Object.keys(obj).forEach(function(key){
                param_arr.push(key + '=' + obj[key])
              })
              cc.log(url_head + '?' + param_arr.join('&'))
              window.location.href = url_head + '?' + param_arr.join('&')
            }else{
              cc.director.end()
              App.jsBack('close')
            }

          }
          return true
        }
        return false
      }.bind(this)
    })
    cc.eventManager.addListener(listener2, this.btn_rePlay)
    cc.eventManager.addListener(listener2.clone(), this.btn_next)
  },
  reportData: function () {
    var endTime = new Date().getTime()
    var gametime = endTime - startTime
    updata.finish_time = gametime
    cc.log(updata)
    App.report(updata)
  },
  random: function (max, min) { // 随机数生成
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
})
