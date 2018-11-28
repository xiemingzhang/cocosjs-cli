// 公共资源
var res = {
  // 声音 //配音
  game_info: 'audio/voice/game_info.mp3', // 游戏介绍
  correctV: 'audio/voice/correct.mp3',
  line_upV: 'audio/voice/line_up.mp3',
  step01V: 'audio/voice/step01.mp3',
  step02V: 'audio/voice/step02.mp3',
  step03V: 'audio/voice/step03.mp3',
  step04V: 'audio/voice/step04.mp3',
  cutV: 'audio/effect/cut.mp3',

  // 声音 //部分公共配音
  Right_audio: 'common/audios/right.mp3',
  Wrong_audio: 'common/audios/wrong.mp3',
  Win_audio: 'common/audios/celebration.mp3',
  Star_audio: 'common/audios/star.mp3',
  Button_audio: 'common/audios/button.mp3',

  bg: 'source/bg.png',
  bg2: 'source/bg02.png',
  fridge_close: 'source/fridge_close.png',
  fridge_open: 'source/fridge_open.png',
  tray: 'source/tray.png',
  little_carambola: 'source/little_carambola.png',
  little_orange: 'source/little_orange.png',
  little_kiwifruit: 'source/little_kiwifruit.png',
  little_apple: 'source/little_apple.png',
  little_papaya: 'source/little_papaya.png',
  little_watermalon: 'source/little_watermalon.png',
  apple: 'source/apple.png',
  apple02: 'source/apple02.png',
  apple03: 'source/apple03.png',
  apple04: 'source/apple04.png',
  apple05: 'source/apple05.png',
  apple06: 'source/apple06.png',
  carambola: 'source/carambola.png',
  carambola02: 'source/carambola02.png',
  carambola03: 'source/carambola03.png',
  carambola04: 'source/carambola04.png',
  kiwifruit01: 'source/kiwifruit01.png',
  kiwifruit02: 'source/kiwifruit02.png',
  kiwifruit03: 'source/kiwifruit03.png',
  kiwifruit04: 'source/kiwifruit04.png',
  orange01: 'source/orange01.png',
  orange02: 'source/orange02.png',
  orange03: 'source/orange03.png',
  orange04: 'source/orange04.png',
  orange05: 'source/orange05.png',
  orange06: 'source/orange06.png',
  papaya: 'source/papaya.png',
  papaya02: 'source/papaya02.png',
  papaya03: 'source/papaya03.png',
  papaya04: 'source/papaya04.png',
  watermalon: 'source/watermalon.png',
  watermalon02: 'source/watermalon02.png',
  watermalon03: 'source/watermalon03.png',
  watermalon04: 'source/watermalon04.png',
  watermalon05: 'source/watermalon05.png',
  watermalon06: 'source/watermalon06.png',
  board: 'source/board.png',
  dish: 'source/dish.png',
  kinfe: 'source/kinfe.png',
  kinfe2: 'source/kinfe02.png',
  point01: 'source/point01.png',

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

/* 预加载资源*/
var g_resources = []
for (var i in res) {
  g_resources.push(res[i])
}
