
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
var layer01_data = [
  [
    {id: 1001, chorPoint: [0, 0], sprUrl: res.cat_one, pos: [116, 169], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

// 全屏拖拽定义tag
// var TAG_CLIPPERNODE=8001;
// var TAG_CONTENTNODE=8002;
//
// 纯色块精灵
// var colorBoxData = [
//   [
//     {id: 5000, color: [0, 0, 0, 0], sp_X: 354, sp_Y: 51, width: 60, height: 120, zindex: 100, opacity: 255}
//   ]
// ]
// //加载plist
// var arrsubject = [
//	[
//		{id: 2000, sprurl: "back.png", sp_X: 234, sp_Y: 0, zindex: 2, hw: 1,Scale:1},
//		{id: 2001, sprurl: "celebrate-girl.png", sp_X: 234, sp_Y: 110 , zindex: 2, hw: 1,Scale:1}
//	]
// ]
// 

