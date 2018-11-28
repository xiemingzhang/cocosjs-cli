
/* 精灵相关的 数据全部在这写
 需要加载的精灵  坐标 阴影
 选择错误替换精灵
 声音提示
 resdata=  统一使用变量
 数据统一建值
 */
/* 字段 统一
 * sprUrl sprUrlY
 * 精灵坐标 sp_X sp_Y
 * 阴影坐标 sp_Xy sp_Yy
 * 选择作物精灵 errorSp
 * 个性声音 audioP
 * 答案 data
 * 图层 顺序 z-index
 * hw 是否显示 0渲染 1渲染
 * 缩放倍数Scale
 * 其他不确定字段 需要备注
 * */
// 加载精灵

// 默认初始位置
var Scene01_spr_data = [
  [
    {id: 1001, chorPoint: [0.5, 0], sprurl: res.zhuozi, sp_X: 368, sp_Y: -40, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1002, chorPoint: [0, 0], sprurl: res.gouxiao, sp_X: 535, sp_Y: 220, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1003, chorPoint: [0, 0], sprurl: res.tuxiao, sp_X: 9, sp_Y: 201, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1004, chorPoint: [0, 0], sprurl: res.niaoxiao, sp_X: 212, sp_Y: 250, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1005, chorPoint: [0, 0], sprurl: res.light, sp_X: 150, sp_Y: 150, rotation: 0, zindex: 5, Scale: 1, opacity: 0},
    {id: 1006, chorPoint: [1, 0], sprurl: res.miya, sp_X: 736, sp_Y: 0, rotation: 0, zindex: 10, Scale: 1, opacity: 255}
  ],
  [
    {id: 1000, chorPoint: [0, 0], sprurl: res.gou02, sprurl2: res.gou03, sp_X: 261, sp_Y: 112, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1001, chorPoint: [0.5, 0], sprurl: res.zhuozi, sp_X: 368, sp_Y: -40, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1002, chorPoint: [0, 0], sprurl: res.shipan, sp_X: 178, sp_Y: 106, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1003, chorPoint: [0, 0], sprurl: res.shiwu1, sp_X: 175, sp_Y: 119, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1004, chorPoint: [0, 0], sprurl: res.shiwu1, sp_X: 217, sp_Y: 116, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1005, chorPoint: [0, 0], sprurl: res.shiwu1, sp_X: 259, sp_Y: 119, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1006, chorPoint: [0, 0], sprurl: res.shiwu2, sp_X: 426, sp_Y: 130, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1007, chorPoint: [0, 0], sprurl: res.shiwu2, sp_X: 475, sp_Y: 130, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1008, chorPoint: [0, 0], sprurl: res.shiwu2, sp_X: 522, sp_Y: 130, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1009, chorPoint: [0, 0], sprurl: res.shuipen, sp_X: 9, sp_Y: 4, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1010, chorPoint: [0, 0], sprurl: res.maojin, sp_X: 35, sp_Y: 65, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1011, chorPoint: [0, 0], sprurl: res.ban, sp_X: 552, sp_Y: 182, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1012, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 246, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1013, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 247, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1014, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 302, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1015, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 303, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1016, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 190, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1017, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 191, rotation: 0, zindex: 1, Scale: 1, opacity: 0}
  ],
  [
    {id: 1000, chorPoint: [0, 0], sprurl: res.tu01, sprurl2: res.tu02, sprurl3: res.tu03, sp_X: 212, sp_Y: 126, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1001, chorPoint: [0.5, 0], sprurl: res.zhuozi, sp_X: 368, sp_Y: -40, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1002, chorPoint: [0, 0], sprurl: res.shipan, sp_X: 178, sp_Y: 106, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1003, chorPoint: [0, 0], sprurl: res.shiwu3, sp_X: 175, sp_Y: 119, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1004, chorPoint: [0, 0], sprurl: res.shiwu3, sp_X: 217, sp_Y: 116, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1005, chorPoint: [0, 0], sprurl: res.shiwu3, sp_X: 259, sp_Y: 119, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1006, chorPoint: [0, 0], sprurl: res.shiwu4, sp_X: 426, sp_Y: 130, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    // {id: 1007, chorPoint: [0, 0], sprurl: res.shiwu2, sp_X: 475, sp_Y: 130, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    // {id: 1008, chorPoint: [0, 0], sprurl: res.shiwu2, sp_X: 522, sp_Y: 130, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1009, chorPoint: [0, 0], sprurl: res.shuipen, sp_X: 9, sp_Y: 4, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1010, chorPoint: [0, 0], sprurl: res.maojin, sp_X: 35, sp_Y: 65, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1011, chorPoint: [0, 0], sprurl: res.ban, sp_X: 552, sp_Y: 182, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1012, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 246, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1013, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 247, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1014, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 302, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1015, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 303, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1016, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 190, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1017, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 191, rotation: 0, zindex: 1, Scale: 1, opacity: 0}
  ],
  [
    {id: 1000, chorPoint: [0, 0], sprurl: res.niao01, sprurl2: res.niao02, sprurl3: res.niao03, sp_X: 307, sp_Y: 113, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1001, chorPoint: [0.5, 0], sprurl: res.zhuozi, sp_X: 368, sp_Y: -40, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1002, chorPoint: [0, 0], sprurl: res.shipan, sp_X: 178, sp_Y: 106, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1003, chorPoint: [0, 0], sprurl: res.shiwu5, sp_X: 207, sp_Y: 151, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1004, chorPoint: [0, 0], sprurl: res.shiwu5, sp_X: 182, sp_Y: 124, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1005, chorPoint: [0, 0], sprurl: res.shiwu5, sp_X: 242, sp_Y: 123, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1006, chorPoint: [0, 0], sprurl: res.shiwu6, sp_X: 425, sp_Y: 122, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    // {id: 1007, chorPoint: [0, 0], sprurl: res.shiwu2, sp_X: 475, sp_Y: 130, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    // {id: 1008, chorPoint: [0, 0], sprurl: res.shiwu2, sp_X: 522, sp_Y: 130, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1009, chorPoint: [0, 0], sprurl: res.shuipen, sp_X: 9, sp_Y: 4, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1010, chorPoint: [0, 0], sprurl: res.maojin, sp_X: 35, sp_Y: 65, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1011, chorPoint: [0, 0], sprurl: res.ban, sp_X: 552, sp_Y: 182, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1012, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 246, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1013, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 247, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1014, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 302, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1015, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 303, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1016, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 190, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1017, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 191, rotation: 0, zindex: 1, Scale: 1, opacity: 0}
  ]
]

var Scene02_spr_data = [
  [
    {id: 1001, chorPoint: [0.5, 0], sprurl: res.zhuozi, sp_X: 368, sp_Y: -40, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1002, chorPoint: [0, 0], sprurl: res.guixiao, sp_X: 569, sp_Y: 239, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1003, chorPoint: [0, 0], sprurl: res.maoxiao, sp_X: 17, sp_Y: 219, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1004, chorPoint: [0, 0], sprurl: res.shuxiao, sp_X: 295, sp_Y: 225, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1005, chorPoint: [0, 0], sprurl: res.light, sp_X: 150, sp_Y: 150, rotation: 0, zindex: 5, Scale: 1, opacity: 0},
    {id: 1006, chorPoint: [1, 0], sprurl: res.miya, sp_X: 736, sp_Y: 0, rotation: 0, zindex: 10, Scale: 1, opacity: 255}
  ],
  [
    {id: 1000, chorPoint: [0, 0], sprurl: res.gui01, sprurl2: res.gui02, sprurl3: res.gui03, sp_X: 294, sp_Y: 127, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1001, chorPoint: [0.5, 0], sprurl: res.zhuozi, sp_X: 368, sp_Y: -40, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1002, chorPoint: [0, 0], sprurl: res.shipan, sp_X: 178, sp_Y: 106, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1003, chorPoint: [0, 0], sprurl: res.shiwu11, sp_X: 177, sp_Y: 152, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1004, chorPoint: [0, 0], sprurl: res.shiwu11, sp_X: 187, sp_Y: 136, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1005, chorPoint: [0, 0], sprurl: res.shiwu11, sp_X: 216, sp_Y: 116, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1006, chorPoint: [0, 0], sprurl: res.shiwu12, sp_X: 391, sp_Y: 117, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1007, chorPoint: [0, 0], sprurl: res.shiwu12, sp_X: 435, sp_Y: 117, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1008, chorPoint: [0, 0], sprurl: res.shiwu12, sp_X: 480, sp_Y: 117, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1009, chorPoint: [0, 0], sprurl: res.shuipen, sp_X: 9, sp_Y: 4, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1010, chorPoint: [0, 0], sprurl: res.maojin, sp_X: 35, sp_Y: 65, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1011, chorPoint: [0, 0], sprurl: res.ban2, sp_X: 552, sp_Y: 182, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1012, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 246, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1013, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 247, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1014, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 302, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1015, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 303, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1016, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 190, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1017, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 191, rotation: 0, zindex: 1, Scale: 1, opacity: 0}
  ],
  [
    {id: 1000, chorPoint: [0, 0], sprurl: res.mao01, sprurl2: res.mao02, sprurl3: res.mao03, sp_X: 66, sp_Y: 58, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1001, chorPoint: [0.5, 0], sprurl: res.zhuozi, sp_X: 368, sp_Y: -40, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1002, chorPoint: [0, 0], sprurl: res.shipan, sp_X: 178, sp_Y: 106, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1003, chorPoint: [0, 0], sprurl: res.shiwu9, sp_X: 176, sp_Y: 134, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1004, chorPoint: [0, 0], sprurl: res.shiwu9, sp_X: 219, sp_Y: 114, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1005, chorPoint: [0, 0], sprurl: res.shiwu9, sp_X: 252, sp_Y: 134, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1006, chorPoint: [0, 0], sprurl: res.shiwu10, sp_X: 467, sp_Y: 127, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    // {id: 1007, chorPoint: [0, 0], sprurl: res.shiwu2, sp_X: 475, sp_Y: 130, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    // {id: 1008, chorPoint: [0, 0], sprurl: res.shiwu2, sp_X: 522, sp_Y: 130, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1009, chorPoint: [0, 0], sprurl: res.shuipen, sp_X: 9, sp_Y: 4, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1010, chorPoint: [0, 0], sprurl: res.maojin, sp_X: 35, sp_Y: 65, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1011, chorPoint: [0, 0], sprurl: res.ban2, sp_X: 552, sp_Y: 182, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1012, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 246, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1013, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 247, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1014, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 302, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1015, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 303, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1016, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 190, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1017, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 191, rotation: 0, zindex: 1, Scale: 1, opacity: 0}
  ],
  [
    {id: 1000, chorPoint: [0, 0], sprurl: res.shu01, sprurl2: res.shu02, sprurl3: res.shu03, sp_X: 240, sp_Y: 104, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1001, chorPoint: [0.5, 0], sprurl: res.zhuozi, sp_X: 368, sp_Y: -40, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1002, chorPoint: [0, 0], sprurl: res.shipan, sp_X: 178, sp_Y: 106, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1003, chorPoint: [0, 0], sprurl: res.shiwu7, sp_X: 219, sp_Y: 124, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    // {id: 1004, chorPoint: [0, 0], sprurl: res.shiwu5, sp_X: 182, sp_Y: 124, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    // {id: 1005, chorPoint: [0, 0], sprurl: res.shiwu5, sp_X: 242, sp_Y: 123, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1006, chorPoint: [0, 0], sprurl: res.shiwu8, sp_X: 408, sp_Y: 130, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    // {id: 1007, chorPoint: [0, 0], sprurl: res.shiwu2, sp_X: 475, sp_Y: 130, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    // {id: 1008, chorPoint: [0, 0], sprurl: res.shiwu2, sp_X: 522, sp_Y: 130, rotation: 0, zindex: 1, Scale: 1, opacity: 255},
    {id: 1009, chorPoint: [0, 0], sprurl: res.shuipen, sp_X: 9, sp_Y: 4, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1010, chorPoint: [0, 0], sprurl: res.maojin, sp_X: 35, sp_Y: 65, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1011, chorPoint: [0, 0], sprurl: res.ban2, sp_X: 552, sp_Y: 182, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1012, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 246, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1013, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 247, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1014, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 302, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1015, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 303, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1016, chorPoint: [0, 0], sprurl: res.kuang, sp_X: 450, sp_Y: 190, rotation: 0, zindex: 1, Scale: 1, opacity: 0},
    {id: 1017, chorPoint: [0, 0], sprurl: res.yes, sp_X: 650, sp_Y: 191, rotation: 0, zindex: 1, Scale: 1, opacity: 0}
  ]
]
// 全屏拖拽定义tag
// var TAG_CLIPPERNODE=8001;
// var TAG_CONTENTNODE=8002;
//
// 纯色块精灵
// var colorBoxData = [
//   [
//     {id: 5000, color: [0, 0, 0, 0], sp_X: 354, sp_Y: 51, width: 60, height: 120, zindex: 100, opacity: 255}
//   ]
// ]
// //加载plist
// var arrsubject = [
//	[
//		{id: 2000, sprurl: "back.png", sp_X: 234, sp_Y: 0, zindex: 2, hw: 1,Scale:1},
//		{id: 2001, sprurl: "celebrate-girl.png", sp_X: 234, sp_Y: 110 , zindex: 2, hw: 1,Scale:1}
//	]
// ]

