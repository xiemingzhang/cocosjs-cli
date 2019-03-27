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

// 生成精灵随机ID
var idArr = []
var getID = function() {
  var _id = idArr.length + 1
  idArr.push(_id)
  return _id
}

function getData() {
  return {
    layer01_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.title, pos: [40, 930 + 200], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhuti, pos: [1031 + 327, 364 + 270], rotation: 0, zindex: 1, scale: [0, 0], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzi, pos: [286, 180], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255}
    ],
    layer02_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao1, pos: [163, 310], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzi2, pos: [319, 547], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao2, pos: [980, 438], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya5, pos: [1214, 68], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    ],
    layer03_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.tupian1, pos: [156, 521], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.tupian2, pos: [923, 521], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.tupian3, pos: [279, 76], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.tupian4, pos: [1074, 76], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ],
    layer04_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.blackboard, pos: [129, 263], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzi3, pos: [443, 556], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya5, pos: [1317, 68], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    ],
    layer05_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.video, pos: [146, 120], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ],
    layer06_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzi4, pos: [126, 822], rotation: 0, zindex: 5, scale: [1, 1.1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.zl1, pos: [149, 438], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.zl2, pos: [717, 438], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.zl3, pos: [149, 60], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.zl4, pos: [717, 60], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya1, pos: [1350, 58], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    ],
    layer07_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.zz1, pos: [220, 519], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.light, pos: [220 + 6, 519 + 6], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.zz2, pos: [993, 519], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.light, pos: [993 + 6, 519 + 6], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.zz3, pos: [219, 73], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.light, pos: [219 + 6, 73 + 6], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.zz4, pos: [997, 73], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.light, pos: [997 + 6, 73 + 6], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
    ],
    layer08_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao1, pos: [163, 310], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzi5, pos: [360, 497], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao2, pos: [980, 438], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya5, pos: [1214, 68], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    ],
    layer09_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.video, pos: [146, 120], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ],
    layer10_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao1, pos: [163, 310], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzi6, pos: [324, 497], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao2, pos: [980, 438], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya5, pos: [1214, 68], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    ],
    layer11_data: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zz1, pos: [220, 519], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zz2, pos: [993, 519], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zz3, pos: [219, 73], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zz4, pos: [997, 73], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ],
    layer12_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.video, pos: [146, 120], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ],
    layer16_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.blackboard, pos: [129, 263], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzi7, pos: [296, 536], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya5, pos: [1317, 68], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    ]
  }
}

