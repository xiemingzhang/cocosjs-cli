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
  // clickAnimation: function(){
  //   this.runAction(cc.sequence(
  //     cc.delayTime(0.5),
  //     cc.callFunc(function(){
  //       this.initWithFile(res.handclick)
  //     }.bind(this)),
  //     cc.delayTime(0.5),
  //     cc.callFunc(function(){
  //       this.initWithFile(res.hand)
  //     }.bind(this))
  //   ).repeatForever())
  // },
  // 抖动
  shake: function(angle, re){
    var action1 = cc.rotateTo(0.1, angle)
    var action2 = cc.rotateTo(0.1, 0)
    var action3 = cc.rotateTo(0.1, -angle)
    var action4 = cc.rotateTo(0.1, 0)
    var action = cc.sequence(action1, action2, action3, action4)
    if(re == 0){
      this.runAction(action.repeatForever())
    }else{
      this.runAction(action.repeat(re))
    }
  },
  // 翻牌
  cardTurnOver: function(reverse){
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
  frameAnimate: function(arr, time, re){
    var animation = new cc.Animation()
    for (var i = 0; i < arr.length; i++){
      animation.addSpriteFrameWithFile(arr[i])
    }
    // 设置帧动画属性
    animation.setDelayPerUnit(time) // 每一帧停留的时间
    animation.setRestoreOriginalFrame(false) // 播放完后回到第一帧
    var animate = cc.animate(animation)
    if(re == 0){
      this.runAction(animate.repeatForever())
    }else{
      this.runAction(animate.repeat(re))
    }
  },
  readPixels: function(x, y){
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
  }
})
