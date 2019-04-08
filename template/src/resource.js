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
    star_finish: 'common/imgs/star_finish.png',//source图片S1: 'source/S1.png',S2: 'source/S2.png',S3: 'source/S3.png',S4: 'source/S4.png',S5: 'source/S5.png',S6: 'source/S6.png',keyboard_num_check: 'source/keyboard_num_check.png',keyboard_num_delete: 'source/keyboard_num_delete.png',keyboard_num_eight: 'source/keyboard_num_eight.png',keyboard_num_five: 'source/keyboard_num_five.png',keyboard_num_four: 'source/keyboard_num_four.png',keyboard_num_nine: 'source/keyboard_num_nine.png',keyboard_num_one: 'source/keyboard_num_one.png',keyboard_num_seven: 'source/keyboard_num_seven.png',keyboard_num_six: 'source/keyboard_num_six.png',keyboard_num_three: 'source/keyboard_num_three.png',keyboard_num_two: 'source/keyboard_num_two.png',keyboard_num_zero: 'source/keyboard_num_zero.png',kuang: 'source/kuang.png',n0: 'source/n0.png',n1: 'source/n1.png',n2: 'source/n2.png',n3: 'source/n3.png',n4: 'source/n4.png',n5: 'source/n5.png',n6: 'source/n6.png',n7: 'source/n7.png',n8: 'source/n8.png',n9: 'source/n9.png',signequal: 'source/signequal.png',signminus: 'source/signminus.png',signplus: 'source/signplus.png',zhibei: 'source/zhibei.png',//source声音bgm_happyday_sound: 'audio/bgm_happyday.mp3',eight_sound: 'audio/eight.mp3',equal_sound: 'audio/equal.mp3',five_sound: 'audio/five.mp3',four_sound: 'audio/four.mp3',nine_sound: 'audio/nine.mp3',one_sound: 'audio/one.mp3',plus_sound: 'audio/plus.mp3',reduce_sound: 'audio/reduce.mp3',seven_sound: 'audio/seven.mp3',six_sound: 'audio/six.mp3',stree_sound: 'audio/stree.mp3',ten_sound: 'audio/ten.mp3',two_sound: 'audio/two.mp3',zero_sound: 'audio/zero.mp3'}/* 预加载资源*/
  var g_resources = []
  for (var i in res) {
    g_resources.push(res[i])
  }