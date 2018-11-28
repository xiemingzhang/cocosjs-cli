
// 控制飞星层 数据
var common_data = [
  {id: 0, obtain: 0, taoal: 1},
  {id: 1, obtain: 0, taoal: 4}
]
// 数据上报
var updata = {
  task_id: '6825c0644e7411e8a39f000c29c0401e',
  is_finish: 0, // 是否完成游戏
  finish_star: 0, // 获得几颗星
  finish_steps: 0, // 操作多少部
  finish_time: 0// 时长
}

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
var spxy = [
  [
		{id: 1000, chorPoint: [0, 0], sprurl: res.maze, sp_X: 138, sp_Y: 20, zindex: 1, hw: 1, Scale: 1, ipsdSp_Y: 180, newspr: res.dog_right_ok, answer: 1},
		{id: 1001, chorPoint: [0.5, 0.5], sprurl: res.miya, sp_X: 100, sp_Y: 283, zindex: 3, hw: 1, Scale: 1, ipsdSp_Y: 180, newspr: res.dog_right_ok, answer: 1},
		{id: 1002, chorPoint: [0.5, 0.5], sprurl: res.up, sp_X: 61, sp_Y: 82, zindex: 3, hw: 1, Scale: 1, ipsdSp_Y: 180, newspr: res.dog_right_ok, answer: 1},
		{id: 1003, chorPoint: [0.5, 0.5], sprurl: res.left, sp_X: 643, sp_Y: 39, zindex: 3, hw: 1, Scale: 1, ipsdSp_Y: 180, newspr: res.dog_right_ok, answer: 1},
		{id: 1004, chorPoint: [0.5, 0.5], sprurl: res.down, sp_X: 61, sp_Y: 33, zindex: 3, hw: 1, Scale: 1, ipsdSp_Y: 180, newspr: res.dog_right_ok, answer: 1},
		{id: 1005, chorPoint: [0.5, 0.5], sprurl: res.right, sp_X: 695, sp_Y: 39, zindex: 3, hw: 1, Scale: 1, ipsdSp_Y: 180, newspr: res.dog_right_ok, answer: 1}
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
]
