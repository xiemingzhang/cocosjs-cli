
// 控制飞星层 数据
var common_data = [
  {id: 0, obtain: 0, taoal: 3},
  {id: 1, obtain: 0, taoal: 3}
]
var common_data2 = deepCopy(common_data)
// 数据上报
var updata = {
  task_id: '92430a044e7011e8a39f000c29c0401e',
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
var spxy = [

  [
    {id: 1001, chorPoint: [0, 0], sprurl: res.fridge_close, sp_X: 48.3, sp_Y: 0, zindex: 1, hw: 1, Scale: 1},
    {id: 1002, chorPoint: [0, 0], sprurl: res.tray, sp_X: 441.7, sp_Y: 69.7, zindex: 1, hw: 1, Scale: 1},
    {id: 1003, chorPoint: [0, 0], sprurl: res.little_carambola, sp_X: 75, sp_Y: 300.7, zindex: 1, hw: 1, Scale: 1},
    {id: 1004, chorPoint: [0, 0], sprurl: res.little_orange, sp_X: 143.7, sp_Y: 299, zindex: 1, hw: 1, Scale: 1},
    {id: 1005, chorPoint: [0, 0], sprurl: res.little_kiwifruit, sp_X: 203.3, sp_Y: 253.3, zindex: 1, hw: 1, Scale: 1},
    {id: 1006, chorPoint: [0, 0], sprurl: res.little_apple, sp_X: 82, sp_Y: 161, zindex: 1, hw: 1, Scale: 1},
    {id: 1007, chorPoint: [0, 0], sprurl: res.little_papaya, sp_X: 134, sp_Y: 162, zindex: 1, hw: 1, Scale: 1},
    {id: 1008, chorPoint: [0, 0], sprurl: res.little_watermalon, sp_X: 186.3, sp_Y: 158.7, zindex: 1, hw: 1, Scale: 1}
    // {id: 1009, chorPoint: [0, 0], sprurl: res.little_watermalon, sp_X: 443.3, sp_Y: 99.7, zindex: 1, hw: 1, Scale: 1.35},
    // {id: 1010, chorPoint: [0, 0], sprurl: res.little_watermalon, sp_X: 528.3, sp_Y: 99.7, zindex: 1, hw: 1, Scale: 1.35},
    // {id: 1011, chorPoint: [0, 0], sprurl: res.little_watermalon, sp_X: 613.3, sp_Y: 98.7, zindex: 1, hw: 1, Scale: 1.35}
  ],
  [
    {id: 1001, chorPoint: [0, 0], sprurl: res.board, sp_X: 165.3, sp_Y: 45, zindex: 1, hw: 1, Scale: 1},
    {id: 1002, chorPoint: [0, 0], sprurl: res.dish, sp_X: 19, sp_Y: 191.3, zindex: 1, hw: 1, Scale: 1},
    {id: 1003, chorPoint: [0, 0], sprurl: res.kinfe, sp_X: 522.7, sp_Y: 68.7, zindex: 1, hw: 1, Scale: 1},
    {id: 1004, chorPoint: [0, 0], sprurl: res.little_papaya, sp_X: 112.3, sp_Y: 266.7, zindex: 1, hw: 1, Scale: 1.6},
    {id: 1005, chorPoint: [0, 0], sprurl: res.little_papaya, sp_X: 32, sp_Y: 266.7, zindex: 1, hw: 1, Scale: 1.6},
    {id: 1006, chorPoint: [0, 0], sprurl: res.little_papaya, sp_X: 67.7, sp_Y: 208, zindex: 1, hw: 1, Scale: 1.6},
    {id: 1007, chorPoint: [0, 0], sprurl: res.papaya02, sp_X: 322.7, sp_Y: 113, zindex: 1, hw: 1, Scale: 1},
    {id: 1008, chorPoint: [0.5, 0.7], sprurl: res.kinfe2, sp_X: 371, sp_Y: 188, zindex: 1, hw: 1, Scale: 1},
    {id: 1009, chorPoint: [1, 0], sprurl: res.papaya03, sp_X: 366, sp_Y: 113.7, zindex: 2, hw: 1, Scale: 1},
    {id: 1010, chorPoint: [0, 0], sprurl: res.papaya03, sp_X: 396, sp_Y: 113.7, zindex: 2, hw: 1, Scale: 1},
    {id: 1011, chorPoint: [0, 0], sprurl: res.watermalon06, sp_X: 602.7, sp_Y: 176, zindex: 1, hw: 1, Scale: 1},
    {id: 1012, chorPoint: [0, 0], sprurl: res.watermalon04, sp_X: 602.7, sp_Y: 19.7, zindex: 1, hw: 1, Scale: 1}
  ],
  [
    {id: 1001, chorPoint: [0.5, 0], sprurl: res.papaya, sp_X: 170, sp_Y: 261, zindex: 1, hw: 1, Scale: 0.6},
    {id: 1002, chorPoint: [0.5, 0], sprurl: res.watermalon, sp_X: 361, sp_Y: 261, zindex: 1, hw: 1, Scale: 0.6},
    {id: 1003, chorPoint: [0.5, 0], sprurl: res.apple, sp_X: 560, sp_Y: 261, zindex: 1, hw: 1, Scale: 0.6},
    {id: 1004, chorPoint: [0.5, 1], sprurl: res.apple04, sp_X: 170, sp_Y: 123, zindex: 1, hw: 1, Scale: 0.6},
    {id: 1005, chorPoint: [0.5, 1], sprurl: res.papaya03, sp_X: 361, sp_Y: 123, zindex: 1, hw: 1, Scale: 0.6},
    {id: 1006, chorPoint: [0.5, 1], sprurl: res.watermalon03, sp_X: 565, sp_Y: 123, zindex: 1, hw: 1, Scale: 0.6}
    // {id: 1007, chorPoint: [0.5, 1], sprurl: res.point01, sp_X: 164, sp_Y: 248, zindex: 1, hw: 1, Scale: 1},
    // {id: 1008, chorPoint: [0.5, 1], sprurl: res.point01, sp_X: 358, sp_Y: 248, zindex: 1, hw: 1, Scale: 1},
    // {id: 1009, chorPoint: [0.5, 1], sprurl: res.point01, sp_X: 562.7, sp_Y: 248, zindex: 1, hw: 1, Scale: 1},
    // {id: 1010, chorPoint: [0.5, 1], sprurl: res.point01, sp_X: 164, sp_Y: 143.3, zindex: 1, hw: 1, Scale: 1},
    // {id: 1011, chorPoint: [0.5, 1], sprurl: res.point01, sp_X: 358, sp_Y: 143.3, zindex: 1, hw: 1, Scale: 1},
    // {id: 1012, chorPoint: [0.5, 1], sprurl: res.point01, sp_X: 562.7, sp_Y: 143.3, zindex: 1, hw: 1, Scale: 1}
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

// deep拷贝
function deepCopy(o) {
  if (o instanceof Array) {
    var n = []
    for (var i = 0; i < o.length; ++i) {
      n[i] = deepCopy(o[i])
    }
    return n

  } else if (o instanceof Object) {
    var n = {}
    for (var i in o) {
      n[i] = deepCopy(o[i])
    }
    return n
  } else {
    return o
  }
}
// 随机排序
function shuffle(arr){
  var len = arr.length
  if(len === 0){
    return []
  }
  if(len === 1){
    return arr
  }
  var arr1 = deepCopy(arr)
  for(var i = 0; i < len - 1; i++){
    var idx = Math.floor(Math.random() * (len - i))
    var temp = arr1[idx]
    arr1[idx] = arr1[len - i - 1]
    arr1[len - i - 1] = temp
  }
  if(JSON.stringify(arr) === JSON.stringify(arr1)){
    console.log('相等')
    return shuffle(arr)
  }
  return arr1
}
// 完全打乱顺序，没有一项是相同的
// shuffletwo:function(arr) {
//  // cc.log("arr,arr1,flag")
//  var len = arr.length;
//  if(len === 0){
//      return;
//  }
//  if(len === 1){
//      return;
//  }
//  var arr1 = shuffle(arr);
//  var flag = true;
//  for(var i = 0;i < len ;i++){
//      if(arr[i] === arr1[i]){
//          flag = false;
//      }
//  }
//  if(flag){
//      return arr1;
//  }
//  return this.shuffletwo(arr);

// },
function contains(a, obj) { // 检查数组中是否包含指定的值 并返回建值
  var i = a.length
  while (i--) {
    if (a[i] === obj) {
      return i
    }
  }
  return false
}
function randomArray(numbers, countNum){ // 返回指定长度的数组 值为指定数字长度的随机数
  for (var i = 0; i < numbers; i++) {
    var num = Math.round(Math.random() * numbers)
    if(contains(countNum, num) === false && countNum.length < numbers && num !== numbers){
      countNum.push(num)
    }
  }
  if(countNum.length < numbers){
    return randomArray(numbers, countNum)
  }else{
    return countNum
  }
}
