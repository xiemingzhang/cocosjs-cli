
var tu = [
  // 'beaker_black.png',
]

var testObj = {}
var xintu = tu.forEach(function(v) {
  testObj[v.split('.')[0]] = 'source/' + v
})
// console.log(testObj)
// 公共资源
var res = {
  // 声音 //配音
  game_info: 'audio/voice/game_info.mp3', // 游戏介绍
  // 声音 //部分公共配音
  Right_audio: 'common/audios/right.mp3',
  Wrong_audio: 'common/audios/wrong.mp3',
  Win_audio: 'common/audios/celebration.mp3',
  Star_audio: 'common/audios/star.mp3',
  Button_audio: 'common/audios/button.mp3',

  bg: 'source/bg.png',

  // 声音 //背景音乐及音效
  GameBg_audio: 'audio/effect/bgm_happy.mp3', // 背景音乐

  // 图片 //头部公共部分
  Back: 'common/imgs/back.png',
  BlackStar: 'common/imgs/shape.png',
  FlyStar: 'common/imgs/flay-star.png',
  LightStar: 'common/imgs/light-star.png',
  ResultBg: 'common/imgs/result-image-bg.png',
  // RepeatPress: 'common/imgs/result-btn-done-pressed.png',
  // DoneNormal: 'common/imgs/result-btn-done-normal.png',
  // celebrateGirl: 'common/imgs/celebrate-girl.png',
  hand: 'common/imgs/hand.png',
  handclick: 'common/imgs/handclick.png',
  sound: 'common/imgs/sound_button.png',
  button_green: 'common/imgs/button_green.png',
  button_next: 'common/imgs/button_next.png',
  star_finish: 'common/imgs/star_finish.png'
}

// var overObj = Object.assign(res, testObj)
// cc.log(overObj)
for (var obj in testObj) {
  res[obj] = testObj[obj]
}

/* 预加载资源*/
var g_resources = []
for (var i in res) {
  g_resources.push(res[i])
}
