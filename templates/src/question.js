
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
var spxy = [

  [
    // {id: 1001, chorPoint: [0, 0], sprurl: res.cat_one, sp_X: 116.3, sp_Y: 169, zindex: 1, Scale: 1, hidden: 0},
    // {id: 1002, chorPoint: [0, 0], sprurl: res.cat_two, sp_X: 317, sp_Y: 169, zindex: 1, Scale: 1},
    // {id: 1003, chorPoint: [0, 0], sprurl: res.cat_three, sp_X: 489.7, sp_Y: 169, zindex: 1, Scale: 1},
    // {id: 1004, chorPoint: [0, 0], sprurl: res.fish_tank_one, sp_X: 147, sp_Y: 23.7, zindex: 1, Scale: 1},
    // {id: 1005, chorPoint: [0, 0], sprurl: res.fish_tank_two, sp_X: 319.7, sp_Y: 23.7, zindex: 1, Scale: 1},
    // {id: 1006, chorPoint: [0, 0], sprurl: res.fish_tank_three, sp_X: 483, sp_Y: 23.7, zindex: 1, Scale: 1}
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
  }
  return o
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
