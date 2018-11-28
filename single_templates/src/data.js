var task_id = 'sss'

// 控制飞星层 数据
var common_data = [
  {id: 0, obtain: 0, total: 10},
  {id: 1, obtain: 0, total: 4}
]

// 数据上报
var updata = {
  task_id: task_id,
  is_finish: 0, // 是否完成游戏
  finish_star: 0, // 获得几颗星
  finish_steps: 0, // 操作多少部
  finish_time: 0// 时长
}

// 默认初始位置
var layer01_data = [
  [
    {id: 1001, chorPoint: [0, 0], sprUrl: res.cat_one, pos: [116, 169], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1}
  ]
]

