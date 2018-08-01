
var tu = [
  // 'beaker_black.png',
  // 'beaker_blue.png',
  // 'beaker_green.png',
  // 'beaker_orange.png',
  // 'beaker_purple.png',
  // 'beaker_red.png',
  // 'beaker_yellow.png',
  // 'beaker01.png',
  // 'bg.png',
  // 'bg01.png',
  // 'black.png',
  // 'blue.png',
  // 'display.png',
  // 'foam_black01.png',
  // 'foam_black02.png',
  // 'foam_blue01.png',
  // 'foam_blue02.png',
  // 'foam_green01.png',
  // 'foam_green02.png',
  // 'foam_orange01.png',
  // 'foam_orange02.png',
  // 'foam_purple01.png',
  // 'foam_purple02.png',
  // 'foam_red01.png',
  // 'foam_red02.png',
  // 'foam_yellow01.png',
  // 'foam_yellow02.png',
  // 'green.png',
  // 'orange.png',
  // 'pigment_blue01.png',
  // 'pigment_blue02.png',
  // 'pigment_blue03.png',
  // 'pigment_red01.png',
  // 'pigment_red02.png',
  // 'pigment_red03.png',
  // 'pigment_yellow01.png',
  // 'pigment_yellow02.png',
  // 'pigment_yellow03.png',
  // 'purple.png',
  // 'red.png',
  // 'right.png',
  // 'smile01.png',
  // 'smile02.png',
  // 'soda01.png',
  // 'soda02.png',
  // 'spoon.png',
  // 'vinegar01.png',
  // 'vinegar02.png',
  // 'vinegar03.png',
  // 'wave01.png',
  // 'wave02.png',
  // 'wave03.png',
  // 'yellow.png'
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
  RepeatPress: 'common/imgs/result-btn-done-pressed.png',
  DoneNormal: 'common/imgs/result-btn-done-normal.png',
  celebrateGirl: 'common/imgs/celebrate-girl.png',
  hand: 'common/imgs/hand.png',
  handclick: 'common/imgs/handclick.png',
  sound: 'common/imgs/sound_button.png'
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
