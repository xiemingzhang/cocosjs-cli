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
      {id: getID(), chorPoint: [0, 0], sprUrl: res.title, pos: [43, 916 + 200], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhuti, pos: [1031 + 327, 364 + 270], rotation: 0, zindex: 1, scale: [0, 0], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzi, pos: [234, 134], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255}
    ],
    layer02_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao2, pos: [185, 352], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.talk1, pos: [335, 535], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao1, pos: [1002, 480], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya3, pos: [1202, 88], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.front, pos: [0, -80], rotation: 0, zindex: 12, scale: [1, 1], opacity: 255},
    ],
    layer03_data: [
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.front, pos: [0, -80], rotation: 0, zindex: 12, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wen, pos: [426, 189], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.music1, pos: [1226, 107], rotation: 0, zindex: 13, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miyashadow, pos: [1226, 70], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ],
    layer04_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao2, pos: [185, 352], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.talk2, pos: [364, 535], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao1, pos: [1002, 480], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya3, pos: [1202, 88], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.front, pos: [0, -80], rotation: 0, zindex: 12, scale: [1, 1], opacity: 255},
    ],
    layer05_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wen, pos: [273, 169], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya1, pos: [797, 0], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ],
    layer06_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao2, pos: [185, 352], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.talk3, pos: [370, 567], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao1, pos: [1002, 480], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya3, pos: [1202, 88], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.front, pos: [0, -80], rotation: 0, zindex: 12, scale: [1, 1], opacity: 255},
    ],
    layer07_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chi1, pos: [817, 910], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ],
    layer08_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chi3, pos: [817, 910], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [1209, 438], rotation: 0, zindex: 2, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [853, 218], rotation: 0, zindex: 2, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [901, 67], rotation: 0, zindex: 2, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [1202, 55], rotation: 0, zindex: 2, scale: [1, 1], opacity: 0},
    ],
    layer09_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chi5, pos: [817, 910], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ],
    layer10_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chi7, pos: [817, 910], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frogg1, pos: [1209, 438], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frogg1, pos: [853, 218], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frogg1, pos: [901, 67], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frogg1, pos: [1202, 55], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ],
    layer11_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.child91, pos: [817, 910], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [1089, 438], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [853, 218], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [901, 67], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [1202, 55], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.h1, pos: [0, 0], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ],
    layer12_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chi8, pos: [817, 910], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [718, 575], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [489, 387], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [901, 67], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [1202, 55], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.h2, pos: [0, 0], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ],
    layer13_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chi10, pos: [817, 910], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [718, 575], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [489, 387], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [357, 198], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [400, 91], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.h3, pos: [0, 0], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ],
    layer14_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chi12, pos: [817, 910], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [718, 575], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [489, 387], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [357, 198], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [400, 91], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.h3, pos: [0, 0], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ],
    layer15_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chi14, pos: [817, 910], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [718, 575], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [489, 387], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [357, 198], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.frog1, pos: [400, 91], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.h3, pos: [0, 0], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ],
    layer16_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao2, pos: [185, 352], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.talk4, pos: [368, 567], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao1, pos: [1002, 480], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya3, pos: [1202, 88], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.front, pos: [0, -80], rotation: 0, zindex: 12, scale: [1, 1], opacity: 255},
    ],
    layer17_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wen, pos: [1103, 230], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ],
    layer18_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao2, pos: [185, 352], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.talk5, pos: [373, 604], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao1, pos: [1002, 480], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya3, pos: [1202, 88], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.front, pos: [0, -80], rotation: 0, zindex: 12, scale: [1, 1], opacity: 255},
    ],
    layer19_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wen, pos: [1103, 230], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ],
    layer20_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya5, pos: [85, 89], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.blackboard, pos: [637, 256], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.end, pos: [860, 477], rotation: 0, zindex: 2, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.front, pos: [0, -80], rotation: 0, zindex: 12, scale: [1, 1], opacity: 255},
    ]
  }
}

