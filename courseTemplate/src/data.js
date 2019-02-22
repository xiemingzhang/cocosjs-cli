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
var getID = function(){
  var _id = idArr.length + 1
  idArr.push(_id)
  return _id
}

// 默认初始位置
var layer02_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_02字, pos: [623, 925], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer03_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_03字01, pos: [156, 876], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_03图, pos: [531, 162], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_03字02, pos: [254, 677], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_03箭头, pos: [491, 674], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_03米丫01, pos: [1240, -300], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer04_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_04黑板, pos: [136, 208], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_04字, pos: [211, 538], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_03米丫01, pos: [1240, -300], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer05_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_05字, pos: [447, 936], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_05图, pos: [467, 163], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer06_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_06字, pos: [100, 934], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_06图, pos: [109, 163], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.此处动图, pos: [1266, 436], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer07_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_11电视, pos: [258, 30], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_07字, pos: [386, 415], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_03米丫01, pos: [1306, -300], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer08_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.此处视频, pos: [687, 351], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer09_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_09字, pos: [188, 919], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_09图, pos: [471, 167], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer10_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_10字, pos: [124, 876], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_10图, pos: [148, 152], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.此处动图, pos: [1265, 423], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer11_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_11电视, pos: [258, 30], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_11字, pos: [375, 376], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_03米丫01, pos: [1306, -300], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer12_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.此处视频, pos: [687, 351], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer13_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_13字, pos: [427, 919], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_13图, pos: [575, 119], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer14_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_14字, pos: [276, 920], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_14图01, pos: [76, 227], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_14图02, pos: [972, 227], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer15_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_11电视, pos: [258, 30], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_15字, pos: [409, 412], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_03米丫01, pos: [1306, -300], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer16_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.此处视频, pos: [687, 351], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer17_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_04黑板, pos: [136, 208], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_17字, pos: [213, 502], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.g_03米丫01, pos: [1306, -300], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

