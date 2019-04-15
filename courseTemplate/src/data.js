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
      '下一页：科学认知1/8',
      '下一页：科学认知2/8',
      '下一页：科学认知3/8',
      '下一页：科学认知4/8',
      '下一页：科学认知5/8',
      '下一页：科学认知6/8',
      '下一页：科学认知7/8',
      '下一页：科学认知8/8',
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
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzi1, pos: [197, 894], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.miya3, pos: [1349, 98], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.tu01, pos: [143, 476], rotation: 0, zindex: 4, byScale: 1, scale: [0.45, 0.45], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.tu02, pos: [771, 476], rotation: 0, zindex: 4, byScale: 1, scale: [0.45, 0.45], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.tu03, pos: [143, 48], rotation: 0, zindex: 4, byScale: 1, scale: [0.45, 0.45], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.tu04, pos: [771, 48], rotation: 0, zindex: 4, byScale: 1, scale: [0.45, 0.45], opacity: 255},
    ],
    layer03: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzi2_1, pos: [196 + 90, 884 + 65], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzi2_2, pos: [196, 884], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.miya3, pos: [797, 120], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.talk_tu1, pos: [261, 474], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.talk_tu3, pos: [1244, 488], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.talk_tu2, pos: [188, 76], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.talk_tu4, pos: [1319, 97], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
    ],
    layer04: [
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.qipao, pos: [343, 350], rotation: 0, zindex: 4, scale: [0, 0], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.talk1, pos: [477, 539], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.miyawen1, pos: [1238, 97], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer05: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.dianshiji, pos: [335, 32], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zd1, pos: [400, 195], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.nf1, pos: [739, 251], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shuidaoyang, pos: [739 + 180, 251 + 24], rotation: 0, zindex: 4, scale: [1, 1.1], opacity: 0},
      {id: getID(), chorPoint: [1, 0], sprUrl: res.shachongji1, pos: [1011, 217], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [1, 0], sprUrl: res.padong1, pos: [824, 491], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0.4], sprUrl: res.feiliao2, pos: [896 + 50, 490], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.luofeiliao, pos: [887, 434], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.shuidaosg1, pos: [384, 274], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.tuolaji, pos: [883, 335], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.shougegun, pos: [846, 363], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.chelun2, pos: [1024, 353], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.chelun1, pos: [1226, 349], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.chukou, pos: [692, 720], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.luoliangshi, pos: [782, 619], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.luoliangshi, pos: [816, 498], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.chumiguan, pos: [516, 202], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.liangshihe, pos: [400, 195], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.liangshi2, pos: [473, 468], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.liangshi1, pos: [1063, 348], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.liangshi3, pos: [441, 196], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
    ],
    layer06: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzi3, pos: [177, 844 + 300], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.liangshi, pos: [258, 141], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.miya3, pos: [1187, 97], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer07: [
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.tu01, pos: [664, 613], rotation: 0, zindex: 4, byScale: 1, scale: [0.5, 0.5], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [589, 431], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.fenzhi_mibing, pos: [253, 86], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.fenzhi_mifan, pos: [1192, 86], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer08: [
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.tu04, pos: [664, 613], rotation: 0, zindex: 4, byScale: 1, scale: [0.5, 0.5], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [589, 431], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.fenzhi_mb, pos: [253, 86], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.fenzhi_mantou, pos: [1192, 86], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer09: [
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.tu03, pos: [664, 613], rotation: 0, zindex: 4, byScale: 1, scale: [0.5, 0.5], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [589, 431], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.fenzhi_yumib, pos: [253, 86], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.fenzhi_bmh, pos: [1192, 86], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer10: [
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.tu02, pos: [664, 613], rotation: 0, zindex: 4, byScale: 1, scale: [0.5, 0.5], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [589, 431], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.fenzhi_tudouni, pos: [253, 86], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.fenzhi_shutiao, pos: [1192, 86], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer11: [
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.miya1, pos: [77, 113], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.blackbaord, pos: [621, 233], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.end, pos: [774, 488], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
    ]
  }
}

