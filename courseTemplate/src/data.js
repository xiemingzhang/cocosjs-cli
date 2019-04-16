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
      '下一页：导入环节 2/2',
      '下一页：热的传递 1/10',
      '下一页：热的传递 2/10',
      '下一页：热的传递 3/10',
      '下一页：热的传递 4/10',
      '下一页：热的传递 5/10',
      '下一页：热的传递 6/10',
      '下一页：热的传递 7/10',
      '下一页：热的传递 8/10',
      '下一页：热的传递 9/10',
      '下一页：热的传递 10/10',
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
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzhi1, pos: [511, 879 + 300], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.tvbg, pos: [296 + 100, 147 + 35], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer03: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzhi2, pos: [230, 806], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.board, pos: [208, 132], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.shaohui1, pos: [265, 256], rotation: 0, zindex: 4, scale: [0.85, 0.85], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.huomiao, pos: [383, 256], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [834, 390], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.zhumian1, pos: [1104, 293], rotation: 0, zindex: 4, scale: [0.85, 0.85], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.huomiao, pos: [1172, 259], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
    ],
    layer04: [
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.wenzhi3, pos: [321, 896], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.miya3, pos: [166, 112], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.board2, pos: [617, 153], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.zhumian1, pos: [812 + 100, 292 + 50], rotation: 0, zindex: 4, scale: [0.85, 0.85], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.huomiao, pos: [893 + 100, 248 + 53], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer05: [
      {id: getID(), chorPoint: [0, 1], offset: [0, -1], sprUrl: res.zhuozhi, pos: [-50, 129], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 1], sprUrl: res.tv, pos: [285, 124], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer06: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzhi4_2, pos: [177 + 70, 844 + 70], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.miya3, pos: [166, 112], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.board2, pos: [617, 153], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.huo1, pos: [617 + 100, 342], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [885 + 85, 388], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shaohui1, pos: [812 + 350, 292 + 50], rotation: 0, zindex: 4, scale: [0.85, 0.85], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.huomiao, pos: [898 + 345, 248 + 53], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzhi4_1, pos: [177, 844 + 10], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
    ],
    layer07: [
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.wenzhi5, pos: [191 - 1920, 793], rotation: 0, zindex: 4, byScale: 1, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.tvbg, pos: [296 + 100, 147], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer08: [
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.wenzhi6, pos: [191 - 1920, 793], rotation: 0, zindex: 4, byScale: 1, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.tvbg, pos: [296 + 100, 147], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer09: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzhi7, pos: [771 + 1920, 657], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.tvbg, pos: [215, 684], rotation: 0, zindex: 4, scale: [1/3, 1/3], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.tvbg, pos: [215, 397], rotation: 0, zindex: 4, scale: [1/3, 1/3], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.tvbg, pos: [215, 113], rotation: 0, zindex: 4, scale: [1/3, 1/3], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shaohui1, pos: [959, 177], rotation: 0, zindex: 4, scale: [0.85, 0.85], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.huomiao, pos: [1050, 137], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer10: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzhi8, pos: [711, 869 + 300], rotation: 0, zindex: 4, byScale: 1, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.sun, pos: [222, 653], rotation: 0, zindex: 4, byScale: 1, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], offset:[0, -1], sprUrl: res.boy1, pos: [991, 803], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer11: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya3, pos: [1313, -142], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.blackboard, pos: [233, 129], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzhi9, pos: [427, 470], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
    ],
    layer12: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzhi10, pos: [566 + 1920, 710], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.sun2, pos: [181, 493], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.sunshine, pos: [305 - 120, 325 - 120], rotation: -31, zindex: 3, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.earth, pos: [526, 135], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0.5], sprUrl: res.img1, pos: [754, 248], rotation: 0, zindex: 4, scale: [0, 0], opacity: 255},
    ],
    layer13: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzhi11, pos: [151, 362], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 1], offset: [-0.5, 0], sprUrl: res.dengpao1, pos: [size.width / 2, 278 + 180], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.movehand, pos: [1149 + 1000, -35], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    ],
    layer14: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya3, pos: [1313, -142], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.blackboard, pos: [233, 129], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.end, pos: [427, 523], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
    ]
  }
}

