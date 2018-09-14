
// 控制飞星层 数据
var common_data = [
  {id: 0, obtain: 0, taoal: 4},
  {id: 1, obtain: 0, taoal: 4}
]
var common_data2 = deepCopy(common_data)
// 数据上报
var updata = {
  task_id: 'sss',
  is_finish: 0, // 是否完成游戏
  finish_star: 0, // 获得几颗星
  finish_steps: 0, // 操作多少部
  finish_time: 0// 时长
}
var updata2 = deepCopy(updata)
/* 精灵相关的 数据全部在这写
 需要加载的精灵  坐标 阴影
 选择错误替换精灵
 声音提示
 resdata=  统一使用变量
 数据统一建值
 */
/* 字段 统一
 * sprUrl sprUrlY
 * 精灵坐标 sp_X sp_Y
 * 阴影坐标 sp_Xy sp_Yy
 * 选择作物精灵 errorSp
 * 个性声音 audioP
 * 答案 data
 * 图层 顺序 z-index
 * hw 是否显示 0渲染 1渲染
 * 缩放倍数Scale
 * 其他不确定字段 需要备注
 * */
// 加载精灵

// 默认初始位置
var spxy = [[],
  [
    // {id: 1001, chorPoint: [0, 0], sprurl: res.cat_one, sp_X: 116.3, sp_Y: 169, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
  ]
]

// 全屏拖拽定义tag
// var TAG_CLIPPERNODE=8001;
// var TAG_CONTENTNODE=8002;
//
// 纯色块精灵
// var layerArray= [
//	[
//		{id: 1000,color:[0,0,0,127.5], sp_X:300, sp_Y:33 ,width:140,height:68 , zindex: 10, hw: 1}
//	]
// ]
// //加载plist
// var arrsubject = [
//	[
//		{id: 2000, sprurl: "back.png", sp_X: 234, sp_Y: 0, zindex: 2, hw: 1,Scale:1},
//		{id: 2001, sprurl: "celebrate-girl.png", sp_X: 234, sp_Y: 110 , zindex: 2, hw: 1,Scale:1}
//	]
// ]
// 
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
