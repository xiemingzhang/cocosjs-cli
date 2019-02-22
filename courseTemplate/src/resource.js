var res = {
    // 公共声音
    Right_audio: 'common/audios/right.mp3',
    Wrong_audio: 'common/audios/wrong.mp3',
    Win_audio: 'common/audios/celebration.mp3',
    Star_audio: 'common/audios/star.mp3',
    Button_audio: 'common/audios/button.mp3',

    // 公共图片
    // bar_plist: 'common/imgs/bar.plist',
    // color_bar: 'common/imgs/color_bar.png',
    Back: 'common/imgs/back.png',
    BlackStar: 'common/imgs/shape.png',
    FlyStar: 'common/imgs/flay-star.png',
    LightStar: 'common/imgs/light-star.png',
    ResultBg: 'common/imgs/result-image-bg.png',
    hand: 'common/imgs/hand.png',
    handclick: 'common/imgs/handclick.png',
    sound: 'common/imgs/sound_button.png',
    button_green: 'common/imgs/button_green.png',
    button_next: 'common/imgs/button_next.png',
    star_finish: 'common/imgs/star_finish.png',//source图片box: 'source/box.png',g_01背景: 'source/g_01背景.png',g_02字: 'source/g_02字.png',g_02背景: 'source/g_02背景.png',g_03图: 'source/g_03图.png',g_03字01: 'source/g_03字01.png',g_03字02: 'source/g_03字02.png',g_03箭头: 'source/g_03箭头.png',g_03米丫01: 'source/g_03米丫01.png',g_03米丫02: 'source/g_03米丫02.png',g_04字: 'source/g_04字.png',g_04黑板: 'source/g_04黑板.png',g_05图: 'source/g_05图.png',g_05字: 'source/g_05字.png',g_06图: 'source/g_06图.png',g_06字: 'source/g_06字.png',g_07字: 'source/g_07字.png',g_08字: 'source/g_08字.png',g_09图: 'source/g_09图.png',g_09字: 'source/g_09字.png',g_10图: 'source/g_10图.png',g_10字: 'source/g_10字.png',g_11字: 'source/g_11字.png',g_11电视: 'source/g_11电视.png',g_12字: 'source/g_12字.png',g_13图: 'source/g_13图.png',g_13字: 'source/g_13字.png',g_14图01: 'source/g_14图01.png',g_14图02: 'source/g_14图02.png',g_14字: 'source/g_14字.png',g_15字: 'source/g_15字.png',g_16字: 'source/g_16字.png',g_17字: 'source/g_17字.png',此处动图: 'source/此处动图.png',此处视频: 'source/此处视频.png',//source声音s10_sound: 'audio/s10.mp3',s11_sound: 'audio/s11.mp3',s13_sound: 'audio/s13.mp3',s14_sound: 'audio/s14.mp3',s15_sound: 'audio/s15.mp3',s17_sound: 'audio/s17.mp3',s2_sound: 'audio/s2.mp3',s3_sound: 'audio/s3.mp3',s4_sound: 'audio/s4.mp3',s5_sound: 'audio/s5.mp3',s6_sound: 'audio/s6.mp3',s7_sound: 'audio/s7.mp3',s9_sound: 'audio/s9.mp3'}/* 预加载资源*/
  var g_resources = []
  for (var i in res) {
    g_resources.push(res[i])
  }