// var scene01Finish
// var scene02Finish
// var scene03Finish

// 控制飞星层 数据
var common_data

// 数据上报
var updata

var StartScene = cc.Scene.extend({
  ctor: function (){
    this._super()
    // scene01Finish = false
    // scene02Finish = false
    // scene03Finish = false

    common_data = [
      {id: 0, obtain: 0, total: 10},
      {id: 1, obtain: 0, total: 4},
      {id: 2, obtain: 0, total: 3},
      {id: 3, obtain: 0, total: 3}
    ]

    updata = {
      task_id: 'sss',
      is_finish: 0, // 是否完成游戏
      finish_star: 0, // 获得几颗星
      finish_steps: 0, // 操作多少部
      finish_time: 0// 时长
    }
    sound.gameBgAudio()
  },
  onEnter: function () {
    this._super()

    cc.director.runScene(new PlayScene())
  }
})
