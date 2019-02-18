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
    {id: getID(), chorPoint: [0, 0], sprUrl: res.对话1, pos: [108, 227], rotation: 0, zindex: 1, scale: [1.1, 1.1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.人1, pos: [1377, 152], rotation: 0, zindex: 1, scale: [1.1, 1.1], opacity: 255, fix: 1},
  ]
]

var layer03_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.导语1, pos: [333, 912], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer04_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.对话2, pos: [197, 316], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.米丫1, pos: [1210, 171], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.问号, pos: [1601, 558], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer05_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.对话3, pos: [390, 479], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.米丫3, pos: [836, 122], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer06_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.对话4, pos: [108, 227], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.人1, pos: [1377, 152], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer07_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.对话5, pos: [197, 316], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.米丫3, pos: [1210, 171], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer08_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.导语2, pos: [485, 941], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer081_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.导语2, pos: [485, 941], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.彩笔盖1, pos: [1329, 121], rotation: 0, zindex: 1, scale: [1.1, 1.1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.彩笔盖2, pos: [1132, 129], rotation: 0, zindex: 1, scale: [1.1, 1.1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.彩笔盖3, pos: [927, 124], rotation: 0, zindex: 1, scale: [1.1, 1.1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.彩笔盖4, pos: [729, 156], rotation: 0, zindex: 1, scale: [1.1, 1.1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.彩笔盖5, pos: [626, 276], rotation: 0, zindex: 1, scale: [1.1, 1.1], opacity: 255, fix: 1},
  ]
]

var layer09_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.对话6, pos: [370, 479], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.米丫3, pos: [836, 122], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer10_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.导语4, pos: [485, 941], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.彩笔盖6, pos: [714, 188], rotation: 0, zindex: 1, scale: [1.1, 1.1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.彩笔盖7, pos: [920, 197], rotation: 0, zindex: 1, scale: [1.1, 1.1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.彩笔盖8, pos: [1118, 213], rotation: 0, zindex: 1, scale: [1.1, 1.1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.彩笔盖9, pos: [1314, 271], rotation: 0, zindex: 1, scale: [1.1, 1.1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.彩笔盖10, pos: [1342, 482], rotation: 0, zindex: 1, scale: [1.1, 1.1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.彩笔盖11, pos: [1314, 687], rotation: 0, zindex: 1, scale: [1.1, 1.1], opacity: 255, fix: 1},
  ]
]

var layer11_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.对话7, pos: [370, 479], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.米丫3, pos: [836, 122], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer12_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.导语5, pos: [485, 941], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.彩笔盖12, pos: [536, 160], rotation: 0, zindex: 1, scale: [1.1, 1.1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.彩笔盖13, pos: [729, 140], rotation: 0, zindex: 1, scale: [1.1, 1.1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.彩笔盖14, pos: [932, 147], rotation: 0, zindex: 1, scale: [1.1, 1.1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.彩笔盖15, pos: [1127, 196], rotation: 0, zindex: 1, scale: [1.1, 1.1], opacity: 255, fix: 1},
  ]
]

var layer13_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.圆1, pos: [128, 343], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.圆2, pos: [696, 343], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.圆3, pos: [1269, 343], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.介绍1, pos: [228, 220], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.介绍2, pos: [799, 220], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.介绍3, pos: [1381, 220], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.介绍3, pos: [1381, 220], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.导语6, pos: [282, 890], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer14_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.对话8, pos: [370, 479], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.米丫3, pos: [836, 122], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
   ]
]

var layer15_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.对话9, pos: [197, 316], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.米丫1, pos: [1210, 171], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1}
  ]
]

var layer16_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.圆2, pos: [278, 317], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.圆3, pos: [1103, 317], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.介绍4, pos: [381, 194], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.介绍5, pos: [1203, 194], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.导语7, pos: [521, 848], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer17_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.对话10, pos: [108, 227], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.人1, pos: [1377, 152], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1}
  ]
]

var layer18_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.对话11, pos: [108, 227], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.人1, pos: [1377, 152], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1}
  ]
]

var layer19_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.尺子2, pos: [458, 90], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer20_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.床, pos: [382, 73], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.尺子3, pos: [393, 169], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.尺子4, pos: [393, 247], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.尺子2, pos: [393, 74], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.l_14厘米, pos: [583, 245], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.l_35厘米, pos: [770, 168], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.l_150厘米, pos: [1404, 78], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
  ]
]

var layer21_data = [
  [
    {id: getID(), chorPoint: [0, 0], sprUrl: res.对话12, pos: [108, 227], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1},
    {id: getID(), chorPoint: [0, 0], sprUrl: res.人1, pos: [1377, 152], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255, fix: 1}
  ]
]
