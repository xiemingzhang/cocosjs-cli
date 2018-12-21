// 公共资源
var res = {
  // 声音
  // 公共
  Right_audio: 'common/audios/right.mp3',
  Wrong_audio: 'common/audios/wrong.mp3',
  Win_audio: 'common/audios/celebration.mp3',
  Star_audio: 'common/audios/star.m4a',
  Button_audio: 'common/audios/button.wav',
  GameBg_audio: 'common/audios/game-bg.mp3',

  // 图片
  // 公共
  celebrateGirl: 'common/imgs/celebrate-girl.png',
  Back: 'common/imgs/back.png', // 头部公共部分
  BlackStar: 'common/imgs/shape.png',
  FlyStar: 'common/imgs/flay-star.png',
  LightStar: 'common/imgs/light-star.png',
  ResultBg: 'common/imgs/result-image-bg.png',
  DoneNormal: 'common/imgs/result-btn-done-normal.png',
  DonePress: 'common/imgs/result-btn-done-pressed.png',
  // 游戏个性
  // 背景层

  Bg: 'source/bg.jpg',
  one: 'source/card-1.png',
  two: 'source/card-2.png',
  three: 'source/card-3.png',
  four: 'source/card-4.png',
  five: 'source/card-5.png',
  six: 'source/card-6.png',
  seven: 'source/card-7.png',
  enight: 'source/card-8.png',
  nine: 'source/card-9.png',
  ten: 'source/card-10.png',
  brand: 'source/card-star.png',

  board: 'source/board.png',
  board_white: 'source/board_whiteboard.png',
  cake: 'source/cake.png',
  cat: 'source/cat.png',
  cookies: 'source/cookies.png',
  curtain: 'source/curtain.png',
  doughnut: 'source/doughnut.png',
  gift: 'source/gift.png',
  problemOne: 'source/problem_one.png',
  problemTwo: 'source/problem_two.png',
  problemThree: 'source/problem_stree.png',
  problemFour: 'source/problem_four.png',
  problemFive: 'source/problem_five.png',
  strip: 'source/strip.png',

  LightStar: 'common/imgs/light-star.png',
  BlackStar: 'common/imgs/shape.png',
  FlyStar: 'common/imgs/flay-star.png',
  ResultBg: 'common/imgs/result-image-bg.png',
  hand: 'common/imgs/hand.png',
  handclick: 'common/imgs/handclick.png',

  cargo: 'audio/cargo_store.mp3',
  problem1: 'audio/problem_01.mp3',
  problem2: 'audio/problem_02.mp3',
  chooseTrue: 'source/chooseTrue.png'
}
/* 预加载资源*/
var g_resources = []
for (var i in res) {
  g_resources.push(res[i])
}
