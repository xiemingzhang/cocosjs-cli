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
  finish_steps: 1, // 操作多少部
  finish_time: 0// 时长
}

// 截图数据
var screenImg = {
  type: 2, // type为1是音效，2是截图
  data: [{page: 1, url: ''}]// 内部数组的第一项是页数，第二项是图片路径
}

// 生成精灵随机ID
var idArr = []
var getID = function() {
  var _id = idArr.length + 1
  idArr.push(_id)
  return _id
}

// 默认初始位置
var layer01_data = [
  [
    {id: 1000, chorPoint: [0, 0], sprUrl: res.bluck_bg, pos: [50, 0], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, fix: 0},
    {id: 1000.1, chorPoint: [0, 0], sprUrl: res.white, pos: [0, 5], rotation: 0, zindex: 1, scale: [1, 1.01], opacity: 255, fix: 0},
    {id: 1001, chorPoint: [1, 0], sprUrl: res.di_pai, pos: [740, 0], rotation: 0, zindex: 8, scale: [1, 1], opacity: 255, fix: 0},
    // {id: 1001.1, chorPoint: [1, 0], sprUrl: res.blue22, pos: [700, 0], rotation: 0, zindex: 4, scale: [0.7, 1], opacity: 255, fix: 0},
    {id: 1002.01, chorPoint: [0, 0], sprUrl: res.binafu, sprUrl2: res.bird, pos: [88, 77], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, fix: 0},
    // {id: 1002.02, chorPoint: [0, 0], sprUrl: res.flower_1_2, pos: [136.3, 57.7], rotation: 0, zindex: 2, scale: [1, 1], opacity: 0, fix: 0},
    // {id: 1002.03, chorPoint: [0, 0], sprUrl: res.flower_1_3, pos: [135, 59], rotation: 0, zindex: 2, scale: [1, 1], opacity: 0, fix: 0},
    {id: 1003, chorPoint: [0, 0], sprUrl: res.btn_check, pos: [25, 45], rotation: 0, zindex: 90, scale: [0.7, 0.7], opacity: 0, fix: 0},
    // {id: 1003.1, chorPoint: [0, 0], sprUrl: res.flower_1, pos: [138.3, 58.7], rotation: 0, zindex: 2, scale: [1, 1], opacity: 255, fix: 0},
    {id: 1004, chorPoint: [1, 0], sprUrl: res.rubber, sprUrl2: res.select_rubber, pos: [796, 20], rotation: 0, zindex: 8, scale: [1, 1], opacity: 255, fix: 0}
  ],
  [
    {id: 1005, chorPoint: [0, 0], sprUrl: res.yellow_btn_1, sprUrl2: res.yellow_btn_blink, pos: [675, 312], rotation: 0, zindex: 8, scale: [1.15, 1.15], opacity: 255, fix: 0},
    {id: 1006, chorPoint: [0, 0], sprUrl: res.pink_btn_1, sprUrl2: res.pink_btn_blink, pos: [675, 252], rotation: 0, zindex: 8, scale: [1.15, 1.15], opacity: 255, fix: 0},
    {id: 1007, chorPoint: [0, 0], sprUrl: res.red_btn_1, sprUrl2: res.red_btn_blink, pos: [675, 194], rotation: 0, zindex: 8, scale: [1.15, 1.15], opacity: 255, fix: 0},
    {id: 1008, chorPoint: [0, 0], sprUrl: res.blue_btn_1, sprUrl2: res.blue_btn_blink, pos: [675, 137], rotation: 0, zindex: 8, scale: [1.15, 1.15], opacity: 255, fix: 0},
    {id: 1009, chorPoint: [0, 0], sprUrl: res.green_btn_1, sprUrl2: res.green_btn_blink, pos: [675, 78], rotation: 0, zindex: 8, scale: [1.15, 1.15], opacity: 255, fix: 0}
  ],
  [
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_1, sprUrl2: res.eye_pen_1, pos: [554 + 20, 10], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [27, 27, 27], audio: sound.click_1_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_2, sprUrl2: res.eye_pen_2, pos: [554 + 20, 10 + 48 * 1], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [41, 27, 109], audio: sound.click_2_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_3, sprUrl2: res.eye_pen_3, pos: [554 + 20, 10 + 48 * 2], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [89, 30, 113], audio: sound.click_3_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_4, sprUrl2: res.eye_pen_4, pos: [554 + 20, 10 + 48 * 3], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [127, 34, 118], audio: sound.click_4_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_5, sprUrl2: res.eye_pen_5, pos: [554 + 20, 10 + 48 * 4], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [168, 33, 120], audio: sound.click_5_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_6, sprUrl2: res.eye_pen_6, pos: [554 + 20, 10 + 48 * 5], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [219, 29, 123], audio: sound.click_6_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_7, sprUrl2: res.eye_pen_7, pos: [554 + 20, 10 + 48 * 6], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [219, 33, 106], audio: sound.click_7_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_8, sprUrl2: res.eye_pen_8, pos: [554 + 20, 10 + 48 * 7], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [218, 36, 87], audio: sound.click_8_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_9, sprUrl2: res.eye_pen_9, pos: [554 + 20, 10 + 48 * 8], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [216, 39, 65], audio: sound.click_9_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_10, sprUrl2: res.eye_pen_10, pos: [554 + 20, 10 + 48 * 9], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [216, 40, 38], audio: sound.click_1_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_11, sprUrl2: res.eye_pen_11, pos: [554 + 20, 10 + 48 * 10], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [225, 95, 37], audio: sound.click_2_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_12, sprUrl2: res.eye_pen_12, pos: [554 + 20, 10 + 48 * 11], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [233, 137, 45], audio: sound.click_3_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_13, sprUrl2: res.eye_pen_13, pos: [554 + 20, 10 + 48 * 12], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [244, 183, 43], audio: sound.click_4_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_14, sprUrl2: res.eye_pen_14, pos: [554 + 20, 10 + 48 * 13], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [254, 243, 54], audio: sound.click_5_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_15, sprUrl2: res.eye_pen_15, pos: [554 + 20, 10 + 48 * 14], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [173, 209, 43], audio: sound.click_6_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_16, sprUrl2: res.eye_pen_16, pos: [554 + 20, 10 + 48 * 15], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [107, 183, 57], audio: sound.click_7_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_17, sprUrl2: res.eye_pen_17, pos: [554 + 20, 10 + 48 * 16], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [23, 164, 63], audio: sound.click_8_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_18, sprUrl2: res.eye_pen_18, pos: [554 + 20, 10 - 48 * 8], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [19, 145, 67], audio: sound.click_9_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_19, sprUrl2: res.eye_pen_19, pos: [554 + 20, 10 - 48 * 7], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [20, 146, 106], audio: sound.click_1_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_20, sprUrl2: res.eye_pen_20, pos: [554 + 20, 10 - 48 * 6], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [21, 147, 140], audio: sound.click_2_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_21, sprUrl2: res.eye_pen_21, pos: [554 + 20, 10 - 48 * 5], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [22, 148, 176], audio: sound.click_3_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_22, sprUrl2: res.eye_pen_22, pos: [554 + 20, 10 - 48 * 4], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [24, 148, 218], audio: sound.click_4_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_23, sprUrl2: res.eye_pen_23, pos: [554 + 20, 10 - 48 * 3], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [18, 119, 186], audio: sound.click_5_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_24, sprUrl2: res.eye_pen_24, pos: [554 + 20, 10 - 48 * 2], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [12, 94, 159], audio: sound.click_6_sound},
    {id: 1015, chorPoint: [0, 0], sprUrl: res.colour_pen_25, sprUrl2: res.eye_pen_25, pos: [554 + 20, 10 - 48 * 1], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [15, 66, 136], audio: sound.click_7_sound}
  ],
  [
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_1, pos: [527, 10], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [27, 27, 27], audio: sound.click_1_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_2, pos: [527, 10 + 48], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [41, 27, 109], audio: sound.click_2_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_3, pos: [527, 10 + 48 * 2], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [89, 30, 113], audio: sound.click_3_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_4, pos: [527, 10 + 48 * 3], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [127, 34, 118], audio: sound.click_4_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_5, pos: [527, 10 + 48 * 4], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [168, 33, 120], audio: sound.click_5_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_6, pos: [527, 10 + 48 * 5], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [219, 29, 123], audio: sound.click_6_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_7, pos: [527, 10 + 48 * 6], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [219, 33, 106], audio: sound.click_7_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_8, pos: [527, 10 + 48 * 7], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [218, 36, 87], audio: sound.click_8_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_9, pos: [527, 10 + 48 * 8], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [216, 39, 65], audio: sound.click_9_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_10, pos: [527, 10 + 48 * 9], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [216, 40, 38], audio: sound.click_1_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_11, pos: [527, 10 + 48 * 10], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [225, 95, 37], audio: sound.click_2_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_12, pos: [527, 10 + 48 * 11], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [233, 137, 45], audio: sound.click_3_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_13, pos: [527, 10 + 48 * 12], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [244, 183, 43], audio: sound.click_4_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_14, pos: [527, 10 + 48 * 13], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [254, 243, 54], audio: sound.click_5_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_15, pos: [527, 10 + 48 * 14], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [173, 209, 43], audio: sound.click_6_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_16, pos: [527, 10 + 48 * 15], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [107, 183, 57], audio: sound.click_7_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_17, pos: [527, 10 + 48 * 16], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [23, 164, 63], audio: sound.click_8_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_18, pos: [527, 10 - 48 * 8], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [19, 145, 67], audio: sound.click_9_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_19, pos: [527, 10 - 48 * 7], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [20, 146, 106], audio: sound.click_1_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_20, pos: [527, 10 - 48 * 6], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [21, 147, 140], audio: sound.click_2_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_21, pos: [527, 10 - 48 * 5], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [22, 148, 176], audio: sound.click_3_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_22, pos: [527, 10 - 48 * 4], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [24, 148, 218], audio: sound.click_4_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_23, pos: [527, 10 - 48 * 3], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [18, 119, 186], audio: sound.click_5_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_24, pos: [527, 10 - 48 * 2], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [12, 94, 159], audio: sound.click_6_sound},
    {id: 1010, chorPoint: [0, 0], sprUrl: res.eye_pen_25, pos: [527, 10 - 48 * 1], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 2, clor: [15, 66, 136], audio: sound.click_7_sound}
  ],
  [
    {id: 1016, chorPoint: [0, 0.5], sprUrl: res.wallpaper_1, sprUrl2: res.big_wallpaper_1, pos: [560, 333], rotation: 0, zindex: 4, scale: [0.6, 1], opacity: 255, fix: 0},
    {id: 1017, chorPoint: [0, 0.5], sprUrl: res.wallpaper_2, sprUrl2: res.big_wallpaper_2, pos: [560, 237], rotation: 0, zindex: 4, scale: [0.6, 1], opacity: 255, fix: 0},
    {id: 1018, chorPoint: [0, 0.5], sprUrl: res.wallpaper_3, sprUrl2: res.big_wallpaper_3, pos: [560, 150], rotation: 0, zindex: 4, scale: [0.6, 1], opacity: 255, fix: 0},
    {id: 1019, chorPoint: [0, 0.5], sprUrl: res.wallpaper_4, sprUrl2: res.big_wallpaper_4, pos: [560, 59], rotation: 0, zindex: 4, scale: [0.6, 1], opacity: 255, fix: 0}
  ],
  [
    {id: 1020, chorPoint: [0, 0.5], sprUrl: res.orament_1, pos: [560, 333], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 0},
    {id: 1021, chorPoint: [0, 0.5], sprUrl: res.orament_2, pos: [560, 237], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 0},
    {id: 1022, chorPoint: [0, 0.5], sprUrl: res.orament_3, pos: [560, 150], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 0},
    {id: 1023, chorPoint: [0, 0.5], sprUrl: res.orament_4, pos: [560, 59], rotation: 0, zindex: 4, scale: [1, 1], opacity: 255, fix: 0}
  ]
]
