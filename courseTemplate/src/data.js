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
      '下一页：情景学习 1/5',
      '下一页：情景学习 2/5',
      '下一页：情景学习 3/5',
      '下一页：情景学习 4/5',
      '下一页：情景学习 5/5',
      '下一页：思考练习 1/8',
      '下一页：思考练习 2/8',
      '下一页：思考练习 3/8',
      '下一页：思考练习 4/8',
      '下一页：思考练习 5/8',
      '下一页：思考练习 6/8',
      '下一页：思考练习 7/8',
      '下一页：思考练习 8/8',
      '下一页：总结结束 1/1'
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
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya1, pos: [1388, 133], rotation: 0, zindex: 4, scale: [0.85, 0.85], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wenhao, pos: [1642, 749], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.yifu1, pos: [-30, -50], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer03: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya1, pos: [1388, 133], rotation: 0, zindex: 4, scale: [0.85, 0.85], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.dengpao, pos: [1115, 646], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao_hou, pos: [1115, 646], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao_bao, pos: [1647, 699], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.yifu_mianyi, pos: [1276, 171], rotation: 0, zindex: 6, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.yifu_duanxiu, pos: [1588, 260], rotation: 0, zindex: 6, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.yifu1, pos: [-30, -50], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.yifu_mianyi, pos: [603, 604], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.yifu_duanxiu, pos: [1008, 682], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.yifu_dong, pos: [567, 292], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.yifu_xia, pos: [995, 348], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.chuang, pos: [0, 0], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.xinxin, pos: [146, 69], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
    ],
    layer04: [
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.zuozhi, pos: [232, 0], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.jimu1, pos: [584, 203], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.shadow_jimu, pos: [570, 181], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.jimu4, pos: [1053, 203], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.shadow_jimu, pos: [1038, 179], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ],
    layer05: [
      {id: getID(), chorPoint: [0, 1], sprUrl: res.zuozhi, pos: [232, 0], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 1], sprUrl: res.zhizhang1, pos: [388, 79], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhizhang2, pos: [1017 - 780, 111 + 100], rotation: 0, zindex: 4, scale: [0.5, 0.5], opacity: 0},
      {id: getID(), chorPoint: [0, 1], sprUrl: res.qipao_hou, pos: [264, 499], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 1], sprUrl: res.qipao_bao, pos: [1217, 436], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
    ],
    layer06: [
      {id: getID(), chorPoint: [0, 1], sprUrl: res.zuozhi, pos: [232, 0], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.bingan1, pos: [506, 138], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.bingan2, pos: [556, 546], pos1: [968, 156], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 1], sprUrl: res.qipao_hou, pos: [264, 599], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 1], sprUrl: res.qipao_bao, pos: [1217, 336], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
    ],
    layer07: [
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.zhidian, pos: [709, 638], rotation: 0, zindex: 4, byScale: 1, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.book, pos: [234, 180], rotation: 0, zindex: 4, byScale: 1, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhizhang2, pos: [1197, 158], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow1, pos: [472, 480], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow2, pos: [492, 451], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow3, pos: [795, 263], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow4, pos: [795, 169], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow5, pos: [1212, 422], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.arrow6, pos: [1250, 439], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.hou, pos: [441, 653], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.bao, pos: [646, 483], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.hou, pos: [860, 104], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.bao, pos: [957, 331], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.hou, pos: [1172, 486], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.bao, pos: [1441, 556], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
    ],
    layer08: [
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.miya1, pos: [1199, 93], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.duihuakuang2, pos: [158, 289], rotation: 0, zindex: 4, scale: [0, 0], opacity: 255, childs:
        [{id: getID(), chorPoint: [0, 0], sprUrl: res.talk1, pos: [208, 212], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255}]},
      {id: getID(), chorPoint: [1, 0], sprUrl: res.duihuakuang1, pos: [975, 417], rotation: 0, zindex: 4, scale: [0, 0], opacity: 255},
    ],
    layer09: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.zhidian, pos: [377, 367], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.book, pos: [1109, 429], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.hou, pos: [627, 222], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.bao, pos: [1321, 222], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
    ],
    layer10: [
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.dangao1, pos: [286, 326], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.dangao2, pos: [1091, 326], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.hou, pos: [510, 222], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.bao, pos: [1321, 222], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
    ],
    layer11: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.luntai1, pos: [169, 301], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.luntai2, pos: [1010, 301], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.hou, pos: [510, 202], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.bao, pos: [1321, 202], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
    ],
    layer12: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.feizhaohe, pos: [761, 316], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.feizhao2, pos: [827, 410], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.feizhao1, pos: [861, 560], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.arrow, pos: [604, 577], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.arrow, pos: [604, 437], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.bao, pos: [482, 572], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.hou, pos: [482, 424], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
    ],
    layer13: [
      {id: getID(), chorPoint: [0.5, 0], sprUrl: res.miya1, pos: [1199, 93], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [1, 0.5], sprUrl: res.duihuakuang2, pos: [158, 289], rotation: 0, zindex: 4, scale: [0, 0], opacity: 255, childs:
        [{id: getID(), chorPoint: [0, 0], sprUrl: res.talk2, pos: [190, 248], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255}]},
      {id: getID(), chorPoint: [1, 0], sprUrl: res.duihuakuang1, pos: [975, 417], rotation: 0, zindex: 4, scale: [0, 0], opacity: 255},
    ],
    layer14: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.img2, pos: [119, 345], rotation: 0, zindex: 5, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.img3, pos: [689, 345], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.img1, pos: [1262, 345], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhi1, pos: [291, 246], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhi2, pos: [873, 246], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhi3, pos: [1464, 246], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
    ],
    layer15: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.img5, pos: [119, 345], rotation: 0, zindex: 5, scale: [0.9, 0.9], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.img6, pos: [689, 345], rotation: 0, zindex: 4, scale: [0.9, 0.9], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.img4, pos: [1262, 345], rotation: 0, zindex: 4, scale: [0.9, 0.9], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhi4, pos: [202, 246], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhi5, pos: [756, 246], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhi6, pos: [1374, 246], rotation: 0, zindex: 4, scale: [1, 1], opacity: 0},
    ],
    layer16: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya1, pos: [1397, 93], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.blackboard, pos: [202, 299], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.end, pos: [281, 484], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shadow, pos: [1397 + 15, 93], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255},
    ]
  }
}

