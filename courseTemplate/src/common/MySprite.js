var MySprite = cc.Sprite.extend({
  // 实例化 new时调用
  // ctor: function(){
  //   this._super()
  // },
  onEnter: function () {
    this._super()
    // cc.log("onEnter");
    this._pixels = []
    // this.addTouchEventListenser();
  },
  onExit: function () {
    this._super()
    // cc.log("onExit");
  },
  // 闪动
  flash: function(time, re){
    var opacity = this.getOpacity()
    var action1 = cc.fadeIn(time)
    var action3 = cc.fadeOut(time)
    var action
    if(opacity > 0){
      action = cc.sequence(action3, action1)
    }else{
      action = cc.sequence(action1, action3)
    }
    if(re == 0){
      this.runAction(action.repeatForever())
    }else{
      this.runAction(action.repeat(re))
    }
  },
  // 抖动
  shake: function(angle, time, re){
    var action1 = cc.rotateTo(time, angle)
    var action2 = cc.rotateTo(time, 0)
    var action3 = cc.rotateTo(time, -angle)
    var action4 = cc.rotateTo(time, 0)
    var action = cc.sequence(action1, action2, action3, action4)
    if(re == 0){
      this.runAction(action.repeatForever())
    }else{
      this.runAction(action.repeat(re))
    }
  },
  // 放大的动画
  enlarge: function(multiple, time, re){
    var action1 = cc.scaleBy(time, multiple)
    var action3 = cc.scaleBy(time, 1 / multiple)
    var action = cc.sequence(action1, action3)
    if(re == 0){
      this.runAction(action.repeatForever())
    }else{
      this.runAction(action.repeat(re))
    }
  },
  // 翻牌
  turn: function(reverse){
    var action1 = cc.scaleTo(0.2, 0.001 * fix, 1 / 3 * fix)
    var scale_ease1 = action1.easing(cc.easeOut(2))

    var action2 = cc.scaleTo(0.2, 1 / 3 * fix, 1 / 3 * fix)
    var scale_ease2 = action2.easing(cc.easeIn(2))

    var cb1 = cc.callFunc(function(){
      /* 换图 */
      this.setTexture(reverse)
    }.bind(this))

    var action = cc.sequence(scale_ease1, cb1, cc.delayTime(0.1), scale_ease2)

    this.runAction(action)
  },
  frame: function(arr, tim, re){
    var animation = new cc.Animation()
    for (var i = 0; i < arr.length; i++){
      animation.addSpriteFrameWithFile(arr[i])
    }
    // 设置帧动画属性
    animation.setDelayPerUnit(tim) // 每一帧停留的时间
    animation.setRestoreOriginalFrame(false) // 播放完后回到第一帧
    var animate = cc.animate(animation)
    if(re == 0){
      this.runAction(animate.repeatForever())
    }else{
      this.runAction(animate.repeat(re))
    }
  },
  progress : function(tim, type){

        var to2 = cc.progressTo(tim,100);
        var jin1 = new cc.ProgressTimer(new cc.Sprite(this.data.sprUrl));
        jin1.setAnchorPoint(0,0);
        jin1.type = cc.ProgressTimer.TYPE_BAR;
        jin1.midPoint = cc.p(0,1);
        if(type === 'left'){
          jin1.barChangeRate = cc.p(1, 0);
        }else if(type === 'top'){
          jin1.barChangeRate = cc.p(0, 1);
        }
        jin1.setLocalZOrder(this.data.zindex);
        jin1.setPosition(this.data.pos[0],this.data.pos[1]);
        this.parent.addChild(jin1);
        jin1.runAction(to2); 
    },
  getPixels: function(x, y){
    this._pixels = []
    var w = this.width
    var h = this.height
    if(!this._pixels || this._pixels.length == 0){
      var canvas = cc.newElement('canvas') // 创建一个新的元素节点
      canvas.width = w
      canvas.height = h
      var ctx = canvas.getContext('2d') // 获得一个2d的画布(通过它就可以这个画布上的像素信息,我们只在上面绘制一张图片)
      ctx.drawImage(this.getTexture().getHtmlElementObj(), 0, 0) // 因此获得的像素信息也就等于是这个图片的像素信息</span>

      this._pixels = ctx.getImageData(0, 0, w, h).data // 获得像素信息
    }

    var idx = (h - y) * w * 4 + x * 4 // 根据触摸坐标得到像素上的索引
    return [this._pixels[idx], this._pixels[idx + 1], this._pixels[idx + 2], this._pixels[idx + 3]] // 返回这个点上的的像素信息
  },
  // addOneByOneListener: function (fun0, fun1, fun2) {
  //   this.listener = cc.EventListener.create({
  //     event: cc.EventListener.TOUCH_ONE_BY_ONE,
  //     swallowTouches: true, // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
  //     onTouchBegan: function (touch, event) { //实现 onTouchBegan 事件处理回调函数
  //       fun0(touch, event)
  //     },
  //     onTouchMoved: function (touch, event) { //实现onTouchMoved事件处理回调函数, 触摸移动时触发
  //       fun1(touch, event)
  //     },
  //     onTouchEnded: function (touch, event) { // 实现onTouchEnded事件处理回调函数
  //       fun3(touch, event)
  //     }
  //   })
  //   // 添加监听器到管理器
  //   cc.eventManager.addListener(this.listener, this)
  // },
  clickEvent: function(fun1, fun2){
    //创建一个事件监听器 OneByOne 为单点触摸
    this.listener = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true, // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
      onTouchBegan: function (touch, event) { //实现 onTouchBegan 事件处理回调函数
        var target = event.getCurrentTarget() // 获取事件所绑定的 target, 通常是cc.Node及其子类
        // 获取当前触摸点相对于按钮所在的坐标
        var locationInNode = target.convertToNodeSpace(touch.getLocation()) //转换为本地坐标系的坐标
        var s = target.getContentSize() //获取 touch 元素的数据(宽高)
        var rect = cc.rect(0, 0, s.width, s.height) //元素范围

        if (cc.rectContainsPoint(rect, locationInNode)) { // 判断触摸点是否在按钮范围内
          sound.buttonAudio()
          updata.finish_steps++

          fun1(target)
          return true
        }
        return false
      },
      onTouchEnded: function (touch, event) { // 实现onTouchEnded事件处理回调函数
        var target = event.getCurrentTarget()
        if(fun2){
          fun2(target)
        }
      }
    })
    // 添加监听器到管理器
    cc.eventManager.addListener(this.listener, this)
  },
  removeEvent: function(){
    cc.eventManager.removeListener(this.listener)
    this.listener = null
  }
})
