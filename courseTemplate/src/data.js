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
      {id: getID(), chorPoint: [0, 0], sprUrl: res.title, pos: [40, 908 + 200], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0.5, 0.5], sprUrl: res.zhuti, pos: [1031 + 327, 364 + 270], rotation: 0, zindex: 1, scale: [0, 0], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.wenzi, pos: [286, 180], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255}
    ],
    layer02_data: [
      // {id: getID(), chorPoint: [0, 0], sprUrl: res.talk1, pos: [258, 802], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.jieni1, pos: [494, 124], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shadow, pos: [532, 110], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.anna1, pos: [1062, 128], rotation: 0, zindex: 1, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shadow, pos: [1070, 110], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255}
    ],
    layer03_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.aimi1, pos: [239, 143], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      // {id: getID(), chorPoint: [0, 0], sprUrl: res.talk6, pos: [587, 898], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.whiteboard, pos: [617, 141], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.peach1, pos: [747, 540], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.peach1, pos: [1038, 540], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.peach1, pos: [1330, 540], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.peach1, pos: [747, 264], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.peach1, pos: [1038, 264], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.peach1, pos: [1330, 264], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255}
    ],
    layer04_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.blackboard1, pos: [233, 134], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.peach1, pos: [370, 632], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.peach1, pos: [670, 632], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.peach1, pos: [970, 632], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.peach1, pos: [370, 327], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.peach1, pos: [670, 327], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.peach1, pos: [970, 327], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu1, pos: [473, 588], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu2, pos: [767, 588], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu3, pos: [1061, 588], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu4, pos: [473, 297], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu5, pos: [767, 297], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu6, pos: [1061, 297], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.taozi6ge, pos: [1268, 501], rotation: 0, zindex: 5, scale: [1.3, 1.3], opacity: 255}
    ],
    layer05_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.aimi1, pos: [239, 143], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      // {id: getID(), chorPoint: [0, 0], sprUrl: res.talk6, pos: [587, 898], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.whiteboard, pos: [617, 141], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chengzi1, pos: [813, 608], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chengzi1, pos: [1034, 608], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chengzi1, pos: [1268, 608], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chengzi1, pos: [813, 424], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chengzi1, pos: [1034, 424], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chengzi1, pos: [1268, 424], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chengzi1, pos: [813, 219], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255}
    ],
    layer06_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.blackboard1, pos: [233, 89], rotation: 0, zindex: 5, scale: [1, 1.1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chengzi1, pos: [426, 735 + 10], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chengzi1, pos: [703, 735 + 10], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chengzi1, pos: [977, 735 + 10], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chengzi1, pos: [426, 495 + 10], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chengzi1, pos: [703, 495 + 10], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chengzi1, pos: [978, 495 + 10], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chengzi1, pos: [426, 254 + 10], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu1, pos: [531, 665 + 10], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu2, pos: [797, 665 + 10], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu3, pos: [1074, 665 + 10], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu4, pos: [531, 418 + 10], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu5, pos: [797, 418 + 10], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu6, pos: [1074, 418 + 10], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu7, pos: [526, 183 + 10], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chengzi7ge, pos: [1268, 501 + 10], rotation: 0, zindex: 5, scale: [1.3, 1.3], opacity: 255}
    ],
    layer07_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.aimi1, pos: [239, 143], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      // {id: getID(), chorPoint: [0, 0], sprUrl: res.talk6, pos: [587, 898], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.whiteboard, pos: [617, 141], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana1, pos: [716, 580], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana1, pos: [948, 580], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana1, pos: [1161, 580], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana1, pos: [1397, 580], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana1, pos: [716, 319], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana1, pos: [948, 319], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana1, pos: [1161, 319], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana1, pos: [1397, 319], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)}
    ],
    layer08_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.blackboard1, pos: [233, 129], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana1, pos: [424 - 50, 637], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana1, pos: [660 - 50, 637], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana1, pos: [873 - 50, 637], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana1, pos: [1109 - 50, 637], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana1, pos: [424 - 50, 373], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana1, pos: [660 - 50, 373], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana1, pos: [873 - 50, 373], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana1, pos: [1109 - 50, 373], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu1, pos: [492 - 25, 568], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu2, pos: [731 - 25, 568], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu3, pos: [940 - 25, 568], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu4, pos: [1169 - 25, 568], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu5, pos: [492 - 25, 301], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu6, pos: [731 - 25, 301], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu7, pos: [940 - 25, 301], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu8, pos: [1169 - 25, 301], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana8ge, pos: [1268 + 25, 501], rotation: 0, zindex: 5, scale: [1.3, 1.3], opacity: 255}
    ],
    layer09_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.aimi1, pos: [239, 143], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      // {id: getID(), chorPoint: [0, 0], sprUrl: res.talk6, pos: [587, 898], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.whiteboard, pos: [617, 141], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [758, 629], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [962, 629], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [1166, 629], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [1370, 629], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [758, 439], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [962, 439], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [1166, 439], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [1370, 439], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [758, 259], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)}
    ],
    layer10_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.blackboard1, pos: [233, 129 - 30], rotation: 0, zindex: 5, scale: [1, 1.1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [434, 735], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [638, 735], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [842, 735], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [1046, 735], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [434, 517], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [638, 517], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [842, 517], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [1046, 517], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango1, pos: [434, 289], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu1, pos: [492, 652], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu2, pos: [701, 652], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu3, pos: [910, 652], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu4, pos: [1107, 652], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu5, pos: [492, 445], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu6, pos: [701, 445], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu7, pos: [910, 445], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu8, pos: [1107, 445], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu9, pos: [492, 216], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango9ge, pos: [1268, 501], rotation: 0, zindex: 5, scale: [1.6, 1.6], opacity: 255}
    ],
    layer11_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.aimi1, pos: [239, 143], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      // {id: getID(), chorPoint: [0, 0], sprUrl: res.talk6, pos: [587, 898], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.whiteboard, pos: [617, 141], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [807, 644], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [983, 644], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [1158, 644], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [1330, 644], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [807, 424], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [983, 424], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [1158, 424], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [1330, 424], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [807, 204], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [983, 204], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, dY: 280 * (fixY - 1)}
    ],
    layer12_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.blackboard1, pos: [233, 129 - 30], rotation: 0, zindex: 5, scale: [1, 1.1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [434, 735 + 20], rotation: 0, zindex: 5, scale: [0.9, 0.9], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [638, 735 + 20], rotation: 0, zindex: 5, scale: [0.9, 0.9], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [842, 735 + 20], rotation: 0, zindex: 5, scale: [0.9, 0.9], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [1046, 735 + 20], rotation: 0, zindex: 5, scale: [0.9, 0.9], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [434, 517], rotation: 0, zindex: 5, scale: [0.9, 0.9], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [638, 517], rotation: 0, zindex: 5, scale: [0.9, 0.9], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [842, 517], rotation: 0, zindex: 5, scale: [0.9, 0.9], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [1046, 517], rotation: 0, zindex: 5, scale: [0.9, 0.9], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [434, 289], rotation: 0, zindex: 5, scale: [0.9, 0.9], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple1, pos: [638, 289], rotation: 0, zindex: 5, scale: [0.9, 0.9], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu1, pos: [492, 652 + 20], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu2, pos: [701, 652 + 20], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu3, pos: [910, 652 + 20], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu4, pos: [1107, 652 + 20], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu5, pos: [492, 445], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu6, pos: [701, 445], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu7, pos: [910, 445], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu8, pos: [1107, 445], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu9, pos: [492, 216], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu10, pos: [701, 216], rotation: 0, zindex: 5, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple10ge, pos: [1268, 501], rotation: 0, zindex: 5, scale: [1.6, 1.6], opacity: 255}
    ],
    layer13_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao, pos: [275, 261], rotation: 0, zindex: 2, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.talk4, pos: [446, 501], rotation: 0, zindex: 2, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya1, pos: [1262, 151], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shadow, pos: [1281, 126], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255}
    ],
    layer14_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.blackboard1, pos: [130, 126], rotation: 0, zindex: 2, scale: [1 / 1.25, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.peach6, pos: [303, 694], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.orange7, pos: [809, 681], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana8, pos: [190, 379], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango9, pos: [551, 353], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple10, pos: [933, 336], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.taozi6ge, pos: [363, 622], rotation: 0, zindex: 2, scale: [1.3 / 1.6, 1.3 / 1.6], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.chengzi7ge, pos: [864, 622], rotation: 0, zindex: 2, scale: [1.3 / 1.6, 1.3 / 1.6], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana8ge, pos: [258, 276], rotation: 0, zindex: 2, scale: [1.3 / 1.6, 1.3 / 1.6], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango9ge, pos: [629, 276], rotation: 0, zindex: 2, scale: [1.6 / 1.3, 1.6 / 1.3], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple10ge, pos: [1002, 276], rotation: 0, zindex: 2, scale: [1.6 / 1.3, 1.6 / 1.3], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya1, pos: [1262, 151], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shadow, pos: [1281, 126], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255}
    ],
    layer15_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao, pos: [275, 261], rotation: 0, zindex: 2, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.talk2, pos: [425, 466], rotation: 0, zindex: 2, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya3, pos: [1257, 141], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shadow, pos: [1281, 126], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255}
    ],
    layer16_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.blackboard2, pos: [130, 117], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.peach6, pos: [231, 694], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.mango9, pos: [521, 705], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.orange7, pos: [863, 677], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.apple10, pos: [1100, 680], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.banana8, pos: [1399, 726], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      // {id: getID(), chorPoint: [0, 0], sprUrl: res.lianxian1, pos: [330, 393], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      // {id: getID(), chorPoint: [0, 0], sprUrl: res.lianxian2, pos: [961, 396], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      // {id: getID(), chorPoint: [0, 0], sprUrl: res.lianxian3, pos: [1220, 396], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      // {id: getID(), chorPoint: [0, 0], sprUrl: res.lianxian4, pos: [330, 396], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      // {id: getID(), chorPoint: [0, 0], sprUrl: res.lianxian5, pos: [961, 396], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu9, pos: [275, 265], rotation: 0, zindex: 2, scale: [2, 2], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu6, pos: [517, 265], rotation: 0, zindex: 2, scale: [2, 2], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu8, pos: [916, 265], rotation: 0, zindex: 2, scale: [2, 2], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu7, pos: [1196, 265], rotation: 0, zindex: 2, scale: [2, 2], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shu10, pos: [1414, 265], rotation: 0, zindex: 2, scale: [2, 2], opacity: 255}
    ],
    layer17_data: [
      {id: getID(), chorPoint: [0, 0], sprUrl: res.qipao, pos: [275, 261], rotation: 0, zindex: 2, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.talk3, pos: [389, 509], rotation: 0, zindex: 2, scale: [1, 1], opacity: 0},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.miya3, pos: [1257, 141], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255},
      {id: getID(), chorPoint: [0, 0], sprUrl: res.shadow, pos: [1281, 126], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255}
    ]
  }
}

