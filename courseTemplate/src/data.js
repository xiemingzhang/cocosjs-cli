var task_id = 'sss'

// 控制飞星层 数据
var common_data = [
  {id: 0, obtain: 0, total: 1},
  {id: 1, obtain: 0, total: 1}
]

// 数据上报
var updata = {
  task_id: task_id,
  is_finish: 0, // 是否完成游戏
  finish_star: 0, // 获得几颗星
  finish_steps: 0, // 操作多少部
  finish_time: 0// 时长
}

var textArr = []
// 生成精灵随机ID
var idArr = []
var getID = function() {
  var _id = idArr.length + 1
  idArr.push(_id)
  return _id
}

function getData() {
  var size = cc.winSize
  return {
    layer09_data: [
      // {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.dashu3, pos: [-115, -115], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.niao1, pos: [162, 445], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      // {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.niao1, pos: [1029, 405], rotation: 0, zindex: 4, scale: [-1, 1], opacity: 255},
      // {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.niao3, pos: [1406, 762], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      // {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.youniao1, pos: [693 - 15, 761 + 70], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      // {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.youniao1, pos: [782 - 15, 761 + 70], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255}
    ],
    layer11_data: [
      {id: getID(), chorPoint: [0.5, 0.75], offset:[0, -1/5], sprUrl: res.dashu3, pos: [0, 0], rotation: 0, zindex: 3, scale: [1.4, 1.4], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.niao1, pos: [210, 606], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.niao1, pos: [1354, 160], rotation: 0, zindex: 4, scale: [-1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.youniao1, pos: [987 - 280, 420], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.youniao1, pos: [1104 - 280, 420], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255}
    ],
    layer13_data: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.yun, pos: [166 + 300, 540 + 100], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], offset:[-1/3, -1/5], sprUrl: res.dashu1, pos: [0, 0], rotation: 0, zindex: 6, scale: [2.5, 2.5], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [186, 258], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [81, 107], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [530, 53], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [432, 286], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [551, 220], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [799, 284], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [1236, 218], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [1520, 131], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [1553, 298], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [1724, 215], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255}
    ],
    layer15_data: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.yun, pos: [166 + 300, 540 + 100], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.dashu3, pos: [0, -170], rotation: 0, zindex: 7, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.youniao1, pos: [793, 771], rotation: 0, zindex: 7, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.youniao1, pos: [882, 771], rotation: 0, zindex: 7, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.niao1, pos: [162, 445], rotation: 0, zindex: 7, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.niao1, pos: [1029, 405], rotation: 0, zindex: 7, scale: [-1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.dashuye, pos: [99, 195], rotation: 0, zindex: 6, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.dashuye, pos: [289, 75], rotation: 0, zindex: 6, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.dashuye, pos: [290, 217], rotation: 0, zindex: 6, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.dashuye, pos: [487, 173], rotation: 0, zindex: 6, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.dashuye, pos: [707, 223], rotation: 0, zindex: 6, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.dashuye, pos: [1267, 153], rotation: 0, zindex: 6, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.dashuye, pos: [1340, 277], rotation: 0, zindex: 6, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.dashuye, pos: [1549, 95], rotation: 0, zindex: 6, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.dashuye, pos: [1753, 246], rotation: 0, zindex: 6, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [186, 258], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [81, 107], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [530, 53], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [432, 286], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [551, 220], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [799, 284], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [1236, 218], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [1520, 131], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [1553, 298], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [1724, 215], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255}
    ],
    layer17_data: [
      {id: getID(), chorPoint: [0.5, 0.75], offset:[0, -1/5], sprUrl: res.dashu3, pos: [0, 0], rotation: 0, zindex: 3, scale: [1.4, 1.4], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.niao6, pos: [403 - 280, 591 - 110], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.youniao1, pos: [987 - 280, 420], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.youniao1, pos: [1104 - 280, 420], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255}
    ],
    layer19_data: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.dashu3, pos: [-115, -115], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.niao1, pos: [162, 445], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.niao1, pos: [1029, 405], rotation: 0, zindex: 4, scale: [-1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.niao3, pos: [1406, 762], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.youniao1, pos: [693 - 15, 761 + 70], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.youniao1, pos: [782 - 15, 761 + 70], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [186, 258], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [81, 107], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [530, 53], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [432, 286], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [551, 220], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [799, 284], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [1236, 218], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [1520, 131], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [1553, 298], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.cao1, pos: [1724, 215], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255}
    ]
  }
}

