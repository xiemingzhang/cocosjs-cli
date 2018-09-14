var Hand = cc.Sprite.extend({
  onEnter: function () {
    this._super()
    this.handClick()
  },
  onExit: function () {
    this._super()
  },
  handClick: function () {

    var fadeIn = cc.fadeIn(0.8)

    this.runAction(fadeIn)

    var cb1 = cc.callFunc(function(){
      this.initWithFile(res.handclick)
    }.bind(this))

    var cb2 = cc.callFunc(function(){
      this.initWithFile(res.hand)
    }.bind(this))

    var action = cc.sequence(cc.delayTime(0.5), cb1, cc.delayTime(0.5), cb2)
    action.repeatForever()

    this.runAction(action)

    var action1 = cc.fadeOut(0.5)
    var action2 = cc.fadeIn(0.5)
    var a = cc.sequence(action1, action2)
    this.runAction(a.repeatForever())
  }
})

cc.Sprite.prototype._pixels = []

cc.Sprite.prototype.readPixels = function(x, y){
  var w = this.width
  var h = this.height
  if(!this._pixels || this._pixels.length == 0){
    var canvas = cc.newElement('canvas') // 创建一个新的元素节点
    canvas.width = w
    canvas.height = h
    var ctx = canvas.getContext('2d') // 获得一个2d的画布(通过它就可以这个画布上的像素信息,我们只在上面绘制一张图片)
    ctx.drawImage(this.getTexture().getHtmlElementObj(), 0, 0) // 因此获得的像素信息也就等于是这个图片的像素信息

    this._pixels = ctx.getImageData(0, 0, w, h).data // 获得像素信息
  }
  var idx = (h - y) * w * 4 + x * 4 // 根据触摸坐标得到像素上的索引
  return [this._pixels[idx], this._pixels[idx + 1], this._pixels[idx + 2], this._pixels[idx + 3]] // 返回这个点上的的像素信息
}

  // rubber: function(touch, event){
  //   var target = event.getCurrentTarget()
  //   var touchPoint = touch.getLocation()
  //   var locationInNode = target.convertToNodeSpace(touchPoint)

  //   var x = locationInNode.x
  //   var y = locationInNode.y

  //   this.drawNodeArr.forEach(function(item, index){
  //     if(x > item.startx && x < item.endx && y > item.starty && y < item.endy){
  //       this.drawNodeArr.splice(index, 1)
  //       item.removeFromParent()
  //     }
  //   }.bind(this))
  // },
  // drawLine: function(touch, event){
  //   var target = event.getCurrentTarget()
  //   var touchPoint = touch.getLocation()
  //   var locationInNode = target.convertToNodeSpace(touchPoint)

  //   var x = locationInNode.x
  //   var y = locationInNode.y

  //   var r = this.colorObj.r
  //   var g = this.colorObj.g
  //   var b = this.colorObj.b
  //   if(!this.sX){
  //     this.sX = touchPoint.x - 0.001
  //     this.sY = touchPoint.y - 0.001
  //   }
  //   if(!this._sX){
  //     this._sX = x - 10
  //     this._sY = y - 10
  //   }

  //   if(Math.abs(this.sX - touchPoint.x) < 35 && Math.abs(this.sY - touchPoint.y) < 35){

  //     var drawNode = new cc.DrawNode()
  //     drawNode.drawCardinalSpline(
  //       [cc.p(this.sX, this.sY), // 起点
  //         cc.p(touchPoint.x, touchPoint.y)], // 终点
  //       0.1,
  //       8,
  //       8, // 线粗
  //       // cc.color(this.colorObj.r, this.colorObj.b, this.colorObj.b, 255) // 颜色
  //       cc.color(r, g, b, 255) // 颜色
  //     )
  //     this.addChild(drawNode, 8)

  //     if(this._sX <= x){
  //       if(x - this._sX >= 20){
  //         drawNode.startx = this._sX
  //         drawNode.endx = x
  //       }else{
  //         drawNode.startx = this._sX - 20
  //         drawNode.endx = this._sX + 2 * 20
  //       }
  //     }else{
  //       if(this._sX - x >= 20){
  //         drawNode.startx = x
  //         drawNode.endx = this._sX
  //       }else{
  //         drawNode.startx = x - 20
  //         drawNode.endx = x + 2 * 20
  //       }
  //     }
  //     if(this._sY <= y){
  //       if(y - this._sY >= 20){
  //         drawNode.starty = this._sY
  //         drawNode.endy = y
  //       }else{
  //         drawNode.starty = this._sY - 20
  //         drawNode.endy = this._sY + 2 * 20
  //       }
  //     }else{
  //       if(this._sY - y >= 20){
  //         drawNode.starty = y
  //         drawNode.endy = this._sY
  //       }else{
  //         drawNode.starty = y - 20
  //         drawNode.endy = y + 2 * 20
  //       }
  //     }
  //     this.drawNodeArr.push(drawNode)

  //     this.sX = touchPoint.x
  //     this.sY = touchPoint.y

  //     this._sX = x
  //     this._sY = y
  //   }
  // },