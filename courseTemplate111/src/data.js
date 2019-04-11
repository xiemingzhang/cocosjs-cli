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
  var size = cc.winSize
  return {
    layer01_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.title, pos: [43, 916 + 200], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhuti, pos: [931, 364], rotation: 0, zindex: 2, scale: [0, 0], opacity: 255},
      // {id: getID(), chorPoint: [0, 0], sprUrl: res.huaban, pos: [15, 0], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255}
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzi, pos: [178, 88], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    ],
    layer021_data: [
      {id: getID(), chorPoint: [0.5, 0.5], offset: [-1/2, 0], sprUrl: res.miya3, pos: [size.width/ 2, 100], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], offset: [-1/2, 0], sprUrl: res.shadow, pos: [size.width/ 2- 8, 50], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
    ],
    layer02_data: [
      // {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzi1, pos: [309, 910], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shiliu1, pos: [341, 624], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shiliu2, pos: [1199, 624], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shiliu3, pos: [341, 172], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shiliu4, pos: [1199, 172], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shiliuz1, pos: [420, 565], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shiliuz2, pos: [1286, 565], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shiliuz3, pos: [375, 104], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shiliuz4, pos: [1248, 104], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
    ],
    layer03_data: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.miya1, pos: [59, 32], rotation: 0, zindex: 12, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.shadow, pos: [179, 5], rotation: 0, zindex: 10, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.yunn, pos: [171, 808], rotation: 0, zindex: 10, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.blackBoard, pos: [438, 119], rotation: 0, zindex: 10, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.white, pos: [655, 278], rotation: 0, zindex: 10, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.shiliud, pos: [761, 340], rotation: 0, zindex: 10, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wenhao, pos: [1556, 654], rotation: 0, zindex: 10, scale: [0, 0], opacity: 255},
    ],
    layer04_data: [
      {id: getID(), chorPoint: [0, 1], offset: [0, -1], sprUrl: res.curtain3, pos: [0, size.height], rotation: 0, zindex: 12, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [1, 0], offset: [-1, 0], sprUrl: res.curtain1, pos: [405, 0], rotation: 0, zindex: 10, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.curtain2, pos: [1528, 0], rotation: 0, zindex: 10, scale: [1, 1], opacity: 255},
    ],
    layer05_data: [
      // {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenzi6, pos: [220, 898], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.miya3, pos: [804, 67], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.kaihua, pos: [113, 324], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.jieguo, pos: [1150, 324], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.shadow, pos: [780, 29], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.wenhao, pos: [1149, 716], rotation: 0, zindex: 2, scale: [0, 0], opacity: 255},
    ],
    layer06_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.gc1, pos: [355, 99], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.gc2, pos: [68, 362], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.gc3, pos: [352, 638], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.gc4, pos: [771, 654], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.gc5, pos: [1189, 654], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.gc6, pos: [1478, 362], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.gc7, pos: [1185, 99], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.gc8, pos: [762, 99], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [346, 359], rotation: -135, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [364, 696], rotation: -45, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [696, 815], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [1104, 820], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [1464, 671], rotation: 45, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [1505, 358], rotation: 135, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [1101, 205], rotation: 180, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [686, 207], rotation: 180, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.gcz1, pos: [465, 139], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.gcz2, pos: [221, 405], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.gcz3, pos: [492, 667], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.gcz4, pos: [930, 684], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.gcz5, pos: [1340, 671], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.gcz6, pos: [1638, 387], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.gcz7, pos: [1335, 128], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.gcz8, pos: [858, 133], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    ],
    layer07_data: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.miya1, pos: [0, 0], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.kh, pos: [300, 376], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.jg, pos: [1102, 122], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
    ],
    layer08_data: [
      // {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzi7, pos: [267, 918], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      // {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzi8, pos: [167, 848], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.zhidao1, pos: [251, 250], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.zhidao2, pos: [1031, 250], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    ],
    layer09_data: [
      {id: getID(), chorPoint: [0.5, 0.5], offset: [-1/2, 0], sprUrl: res.miya1, pos: [size.width/ 2, 100], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], offset: [-1/2, 0], sprUrl: res.shadow, pos: [size.width/ 2 + 30, 50], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
    ],
    layer10_data: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.p10lh, pos: [74, 559], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.p10l, pos: [519, 559], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.p10th, pos: [1013, 559], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.p10t, pos: [1447, 559], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.p10hh, pos: [81, 88], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.p10o, pos: [526, 88], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.p10jh, pos: [1020, 94], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.p10j, pos: [1454, 94], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [454, 706], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [1395, 706], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [454, 242], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow, pos: [1395, 242], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
    ],
    layer11_data: [
      // {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzi10, pos: [821, 334], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.endzhi, pos: [183, 289], rotation: 0, zindex: 3, scale: [0, 0], opacity: 255},
      {id: getID(), chorPoint: [1, 0], sprUrl: res.miya1, pos: [1075, 61], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], offset: [-1, 0], sprUrl: res.bianl, pos: [360, 400], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.bianr, pos: [1500, 400], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    ]
    // layer12_data: [
    //   {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzi11, pos: [545, 910 + 200], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    //   {id: getID(), chorPoint: [0, 0], sprUrl: res.animal4, pos: [778, 284], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    //   {id: getID(), chorPoint: [0, 0], sprUrl: res.shadow, pos: [863, 245], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    // ],
    // layer13_data: [
    //   {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.miya1, pos: [721, 0], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
    //   {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.endzhi, pos: [253, 289], rotation: 0, zindex: 3, scale: [1, 1], opacity: 255},
    // ],
    // layer14_data: [
    //   {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzi13, pos: [625, 910 + 200], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    //   {id: getID(), chorPoint: [0, 0], sprUrl: res.animal2, pos: [846, 234], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    //   {id: getID(), chorPoint: [0, 0], sprUrl: res.shadow, pos: [868, 225], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    // ]
  }
}

