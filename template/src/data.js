var task_id = 'sss'

// 控制飞星层 数据
var common_data = [
  {id: 0, obtain: 0, total: 4},
  {id: 1, obtain: 0, total: 4}
]

// 数据上报
var updata = {
  task_id: task_id,
  is_finish: 0, // 是否完成游戏
  finish_star: 0, // 获得几颗星
  finish_steps: 1, // 操作多少部
  finish_time: 0// 时长
}

// 生成精灵随机ID
var idArr = []
var getID = function() {
  var _id = idArr.length + 1
  idArr.push(_id)
  return _id
}

// 默认初始位置
function getData() {
  var size = cc.winSize, width = size.width, height = size.height
  // var del = new cc.Sprite(res.keyboard_num_delete)
  // del.setScale(0.333 * fix)
  // var btnSize = del.getBoundingBox()
  return {
    layer01_data: [
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.keyboard_num_delete, pos: [width/12*7+1, 3], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 3, group:1, flag: -1},
    ]
  }
}
