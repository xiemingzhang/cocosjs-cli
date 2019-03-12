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
var layer01_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.月主题, pos: [0, 892 + 200], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.封面, pos: [960 + 360, 316 + 270], rotation: 0, zindex: 1, scale: [0, 0], opacity: 255},
  ]
]

var layer02_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.文字01, pos: [273, 935], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.图片01, pos: [169, 135], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.图片02, pos: [1019, 135], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
  ]
]

var layer03_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.对话框01, pos: [143, 307], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.人04, pos: [1247, 111], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
  ]
]

var layer04_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.music, pos: [687, 0], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
  ]
]

var layer05_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.对话框02, pos: [143, 307], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.人04, pos: [1247, 111], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
  ]
]

var layer06_data = [
  [
    // {id: getID(), chorPoint: [0, 1], sprUrl: res.小图01, pos: [-10, 1090], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    // {id: getID(), chorPoint: [1, 1], sprUrl: res.小图02, pos: [1922, 1090], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    // {id: getID(), chorPoint: [0, 0], sprUrl: res.小图03, pos: [-10, 0], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    // {id: getID(), chorPoint: [1, 0], sprUrl: res.小图04, pos: [1918, 0], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.数字01, pos: [836 + 15, 543 + 5], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.数字02, pos: [976 + 15, 543 + 5], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.数字03, pos: [836 + 15, 440 + 5], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.数字04, pos: [976 + 15, 440 + 5], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
  ]
]

var layer07_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.对话框03, pos: [143, 307], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.人04, pos: [1247, 111], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
  ]
]

var layer08_data = [
  [
    {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.鸟01, pos: [284 - 300, 663 + 200], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.鸟03, pos: [860 - 300, 340 + 250], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.草说话02, pos: [1107, 0], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.叶子01, pos: [172, 529], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.叶子02, pos: [617, 908], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.叶子03, pos: [1040, 709], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.柳树00, pos: [551, 713], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
  ]
]

var layer09_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.树说话02, pos: [0, -1], rotation: 0, zindex: 10, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.花02, pos: [0, 469], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.鸟06, pos: [537 + 1000, 739 + 100], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.鸟09, pos: [719 - 100, 282], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.鸟09, pos: [0, 0], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
  ]
]

var layer10_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.大山, pos: [0, 0], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.太阳, pos: [664, 715 + 100], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.云01, pos: [275, 740], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.鸟11, pos: [254 - 150, 318+ 50], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.河流01, pos: [850, -50], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
  ]
]

var layer11_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.大山, pos: [0, 0], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.太阳, pos: [1164, 256], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.云01, pos: [-75, 640], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.鸟03, pos: [1094 - 300, 706], rotation: 0, zindex: 1, scale: [0.65, 0.65], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.河流01, pos: [850, -50], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.鸟14, pos: [1433, 124], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
  ]
]

var layer12_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.星星01, pos: [28, 623], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.鸟18, pos: [458, 504], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.鸟03, pos: [871 + 800, 728 + 200], rotation: 0, zindex: 1, scale: [-0.65, 0.65], opacity: 255},
  ]
]

var layer13_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.对话框04, pos: [143, 307], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.人04, pos: [1247, 111], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
  ]
]

var layer15_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.对话框05, pos: [143, 307], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.人04, pos: [1247, 111], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
  ]
]

var layer17_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.黑板, pos: [97, 214], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.结束语, pos: [249, 538], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.人04, pos: [1418, 132], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
  ]
]
