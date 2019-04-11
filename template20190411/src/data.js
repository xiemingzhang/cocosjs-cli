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
  var width = size.width
  var height = size.height
  return {
    layer01_data: [
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.keyboard_num_delete, pos: [width/12*7+1, 3], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 3, group:1, flag: -1},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.keyboard_num_zero, pos: [width/12*9, 3], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 3, group:1, flag: 0},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.keyboard_num_check, pos: [width/12*11-1, 3], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 3, group:1, flag: 11},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.keyboard_num_seven, pos: [width/12*7+1, 3+btnSize.height+3], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 3, group:1, flag: 7},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.keyboard_num_eight, pos: [width/12*9, 3+btnSize.height+3], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 3, group:1, flag: 8},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.keyboard_num_nine, pos: [width/12*11-1, 3+btnSize.height+3], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 3, group:1, flag: 9},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.keyboard_num_four, pos: [width/12*7+1, 3+(btnSize.height+3)*2], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 3, group:1, flag: 4},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.keyboard_num_five, pos: [width/12*9, 3+(btnSize.height+3)*2], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 3, group:1, flag: 5},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.keyboard_num_six, pos: [width/12*11-1, 3+(btnSize.height+3)*2], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 3, group:1, flag: 6},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.keyboard_num_one, pos: [width/12*7+1, 3+(btnSize.height+3)*3], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 3, group:1, flag: 1},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.keyboard_num_two, pos: [width/12*9, 3+(btnSize.height+3)*3], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 3, group:1, flag: 2},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.keyboard_num_three, pos: [width/12*11-1, 3+(btnSize.height+3)*3], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 3, group:1, flag: 3},
      {id: 1003, chorPoint: [0.5, 0.5], sprUrl: res.S1, pos: [width/12*1, height/2], rotation: 0, zindex: 1, scale: [1/1.3, 1/1.3], opacity: 255, fix: 3},
      {id: 1005, chorPoint: [0.5, 0.5], sprUrl: res.signplus, pos: [width/12*2, height/2], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 3},
      {id: 1004, chorPoint: [0.5, 0.5], sprUrl: res.S1, pos: [width/12*3, height/2], rotation: 0, zindex: 1, scale: [1/1.3, 1/1.3], opacity: 255, fix: 3},
      {id: 1009, chorPoint: [0.5, 0.5], sprUrl: res.signequal, pos: [width/12*4, height/2], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 3},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.kuang, pos: [width/12*5 + 5 * fix, height/2], rotation: 0, zindex: 1, scale: [1/3.9, 1/1.35], opacity: 255, fix: 3},
      {id: 1002, chorPoint: [0.5, 0.2], sprUrl: res.zhibei, pos: [width/12*2, height/2], rotation: 0, zindex: 1, scale: [1.5, 1.5], opacity: 255, fix: 3},
      {id: 1001, chorPoint: [0, 0], sprUrl: res.hand, pos: [width/12*2, height/2], rotation: 0, zindex: 1, scale: [1.5, 1.5], opacity: 255, fix: 3},
      {id: 1006, chorPoint: [0.5, 0.5], sprUrl: res.n8, pos: [width/12*5 + 5 * fix, height/2], rotation: 0, zindex: 1, scale: [0.8, 0.8], opacity: 0, fix: 3},
      {id: 1007, chorPoint: [0.5, 0.5], sprUrl: res.n8, pos: [width/12*5 + 5 * fix - 15*fix, height/2], rotation: 0, zindex: 1, scale: [0.8, 0.8], opacity: 0, fix: 3},
      {id: 1008, chorPoint: [0.5, 0.5], sprUrl: res.n8, pos: [width/12*5 + 5 * fix + 15*fix, height/2], rotation: 0, zindex: 1, scale: [0.8, 0.8], opacity: 0, fix: 3},
    ]
  }
}
