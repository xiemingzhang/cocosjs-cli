// 公共资源
var res = {
  // 声音 //部分公共配音
  Right_audio: 'common/audios/right.mp3',
  Wrong_audio: 'common/audios/wrong.mp3',
  Win_audio: 'common/audios/celebration.mp3',
  Star_audio: 'common/audios/star.mp3',
  Button_audio: 'common/audios/button.mp3',

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

/* 预加载资源*/
var g_resources = []
for (var i in res) {
  g_resources.push(res[i])
}
