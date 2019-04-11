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

var textArr = ['',
      '下一页：导入环节2/2',
      '下一页：欣赏故事1/7',
      '下一页：欣赏故事2/7',
      '下一页：欣赏故事3/7',
      '下一页：欣赏故事4/7',
      '下一页：欣赏故事5/7',
      '下一页：欣赏故事6/7',
      '下一页：欣赏故事7/7',
      '下一页：回忆巩固1/5',
      '下一页：回忆巩固2/5',
      '下一页：回忆巩固3/5',
      '下一页：回忆巩固4/5',
      '下一页：回忆巩固5/5',
      '下一页：总结结束1/1'
    ]
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
    layer02: [
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.talk1, pos: [252, 215], rotation: 0, zindex: 4, scale: [0, 0], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.miya1, pos: [1349, 98], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      // {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.shadow, pos: [1350, 57], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
    ],
    layer03: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzi0_1, pos: [200, 915], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzi0_2, pos: [110, 855], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhi_tao, pos: [1597, 732], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhi_shu, pos: [1597, 560], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhi_xia, pos: [1597, 391], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhi_de, pos: [1601, 224], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhi_xiao, pos: [1427, 693], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhi_bai, pos: [1405, 533], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhi_tu, pos: [1428, 366], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer04: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzi1, pos: [1049, 866], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer05: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzi2, pos: [295, 818], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer06: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzi3, pos: [257, 731], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer07: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzi4, pos: [268, 848], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer08: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzi5, pos: [238, 706], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer09: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzi6, pos: [100, 794], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer10: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzi7, pos: [717, 856], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer11: [
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.talk2, pos: [252, 306], rotation: 0, zindex: 3, scale: [0, 0], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.miya3, pos: [1122, 154], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.shadow, pos: [1212, 108], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
    ],
    layer12: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.gl_yang, pos: [0, 0], rotation: 0, zindex: 3, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.gl_mao, pos: [0, 0], rotation: 0, zindex: 3, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.gl_songshu, pos: [0, 0], rotation: 0, zindex: 3, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.gl_tuzhi, pos: [0, 0], rotation: 0, zindex: 3, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzi8, pos: [742, 859], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
    ],
    layer13: [
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.talk3, pos: [252, 306], rotation: 0, zindex: 3, scale: [0, 0], opacity: 255},
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.miya3, pos: [1121, 154], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.shadow, pos: [1212, 108], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
    ],
    layer14: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.img1, pos: [321, 559], rotation: 0, zindex: 3, scale: [0, 0], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.img2, pos: [1159, 559], rotation: 0, zindex: 3, scale: [0, 0], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.img4, pos: [321, 64], rotation: 0, zindex: 3, scale: [0, 0], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.img3, pos: [1159, 64], rotation: 0, zindex: 3, scale: [0, 0], opacity: 255},
    ],
    layer15: [
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.talk4, pos: [252, 306], rotation: 0, zindex: 3, scale: [0, 0], opacity: 255},
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.miya3, pos: [1121, 154], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.shadow, pos: [1212, 108], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
    ],
    layer16: [
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.talk6, pos: [252, 306], rotation: 0, zindex: 3, scale: [0, 0], opacity: 255},
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.miya3, pos: [1121, 154], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.shadow, pos: [1212, 108], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
    ]
  }
}

