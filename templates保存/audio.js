// fish:['fish.mp3',0.01,1,1,0],
// 1 声音名称
// 2 音量 0-1
// 3 是否自动播放
// 4 是否循环播放
// 5 是否为背景音效
var audioMp3 = [
  // ['res/Normal/audio/hammering.mp3', 0.01, 0, 0, 0],
  // ['res/Normal/audio/axe_impact.mp3', 0.1, 0, 0, 0],
  // ['res/Normal/audio/voice/game_info.mp3', 0.1, 0, 0, 1],
  ['res/Normal/audio/effect/bgm_happy.mp3', 0.1, 0, 1, 0]
]

var autoFun = {
  num: 0,
  array: {},
  load: function(music){
    var audio = new Audio(music[0])
    if(audio.canPlayType('audio/mp3') == 'probably' && audio.error == null){
      audio.preload = 'auto' // 预加载
      var eventCanPlayThrough = function(e){
        audio.addEventListener(e, (function(){
          // console.log((new Date()).getTime(), e)
          if(music[1] !== ''){
            audio.volume = music[1]
          }
          if(music[2] == true){// 自动播放
            audio.autoplay = true
          }
          if(music[3] == true){// 循环播放
            audio.loop = true
          }
          autoFun.num++
        }(autoFun)))
      }
      eventCanPlayThrough('canplaythrough')
      var muName = music[0].split('.')
      var muNamePath = muName[0].split('/')
      this.array[muNamePath[muNamePath.length - 1]] = audio
    }else {
      console.log(audio.error)
    }
  }, stopAll: function(){
    for(var i in this.array){
      this.array[i].pause()
      this.array[i] = {}
    }
  }, stopAllEffect: function(){
    for(var i in this.array){
      if(this.array[i][5] != 1){
        this.currentTime = 0
        this.array[i].pause()
      }
    }
  }, stopMusic: function(){
    for(var i in this.array){
      if(this.array[i][4] == 1){
        this.currentTime = 0
        this.array[i].pause()
      }
    }
  }
}
Audio.prototype.stop = function(){
  this.currentTime = 0
  this.pause()
}
var pauselist = []
// 判断浏览器是否为最前端
document.addEventListener('visibilitychange', function() {
  if(document.hidden == true){
    var array = autoFun.array
    pauselist = []
    for(var i in array){
      if(array[i].paused == false){
        array[i].pause()
        pauselist.push(array[i])
      }
    }
  }else{
    if(pauselist.length != 0){
      for(var i in pauselist){
        pauselist[i].play()
      }
    }
  }
  // console.log(document.hidden)
})

// autoFun.array['game_info'].play();
// stop 自定义方法
// autoFun.array['game_info'].stop();
// 其他方法使用api
// https://www.cnblogs.com/luckk/p/5239991.html
// 媒介事件 http://www.w3school.com.cn/html5/html5_ref_eventattributes.asp#Media_Events

for(var i in audioMp3){
  autoFun.load(audioMp3[i])
  // console.log(autoFun.num)
}
var len = audioMp3.length
