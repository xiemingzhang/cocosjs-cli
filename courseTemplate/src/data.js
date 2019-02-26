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
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s鸟飞01, pos: [179 - 400, 561], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s文字01, pos: [418, 911], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
  ]
]

var layer03_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s04黑板, pos: [136, 208], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s03字, pos: [207, 486], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s03米丫01, pos: [1240, 0], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
  ]
]

var layer04_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s04, pos: [352, 914], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s04图, pos: [468, 0], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
  ]
]

var layer06_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s06字, pos: [365, 914], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
  ]
]

var layer07_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s07字, pos: [0, 0], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
  ]
]

var layer08_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s06, pos: [483, 932], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
  ]
]

var layer09_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s09字, pos: [0, 0], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
  ]
]

var layer10_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s10字, pos: [471, 967], rotation: 0, zindex: 6, scale: [1, 1], opacity: 255},
  ]
]

var layer11_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s10, pos: [0, 0], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
  ]
]

var layer12_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s12字, pos: [177, 192], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s03米丫01, pos: [1240, 0], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
  ]
]

var layer13_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13纸, pos: [197, 29], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13字, pos: [454, 944], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13图01, pos: [419, 628], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13图02, pos: [1064, 607], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13图03, pos: [475, 131], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13图04, pos: [1013, 140], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13字01, pos: [576, 564], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13字02, pos: [1238, 564], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13字03, pos: [579, 79], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13字04, pos: [1225, 79], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
  ]
]

var layer14_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13纸, pos: [197, 29], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s14字, pos: [552, 944], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13图01, pos: [419, 628], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13图02, pos: [1064, 607], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13图03, pos: [475, 131], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13图04, pos: [1013, 140], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13字01, pos: [576, 564], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13字02, pos: [1238, 564], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13字03, pos: [579, 79], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13字04, pos: [1225, 79], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s1735, pos: [504, 642], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s1734, pos: [1190, 695], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.image15, pos: [558, 258], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
  ]
]

var layer15_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13纸, pos: [197, 29], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s15字, pos: [620, 944], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s15图01, pos: [419, 628], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s15图02, pos: [1064, 607], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s15图03, pos: [475, 131], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s15图04, pos: [1013, 140], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13字01, pos: [576, 564], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13字02, pos: [1238, 564], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13字03, pos: [579, 79], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s13字04, pos: [1225, 79], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
  ]
]

var layer16_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s16字, pos: [177, 192], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.s03米丫01, pos: [1240, 0], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
  ]
]

// var layer17_data = [
//   [
//     {id: getID(), chorPoint: [0, 0], sprUrl: res.g_04黑板, pos: [136, 208], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
//     {id: getID(), chorPoint: [0, 0], sprUrl: res.g_17字, pos: [213, 502], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
//     {id: getID(), chorPoint: [0, 0], sprUrl: res.g_03米丫01, pos: [1306, -300], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
//   ]
// ]

