// 共性
  var sound = {
    rightAudio: function () {// 正确
      cc.audioEngine.playEffect(res.Right_audio)
    },
    wrongAudio: function () {// 错误
      cc.audioEngine.playEffect(res.Wrong_audio)
    },
    winAudio: function () {// 完成 欢呼
      cc.audioEngine.playEffect(res.Win_audio)
    },
    starAudio: function () {// 飞星
      cc.audioEngine.playEffect(res.Star_audio)
    },
    buttonAudio: function () {// 点击
      cc.audioEngine.playEffect(res.Button_audio)
    },
    stopAudio: function () {// 停止
      cc.audioEngine.stopMusic()
    },
    stopAllEffects: function () {
      cc.audioEngine.stopAllEffects()
    },
    // 个性
    //gameBgAudio: function () {// 背景
      // cc.audioEngine.playMusic(res.GameBg_audio, true)
      //cc.audioEngine.setMusicVolume(0.2)
    //},
//声音
a_10_sound: function() {
    // cc.audioEngine.playEffect(res.a_10_sound)
  },
a_11_sound: function() {
    // cc.audioEngine.playEffect(res.a_11_sound)
  },
a_12_sound: function() {
    // cc.audioEngine.playEffect(res.a_12_sound)
  },
a_13_sound: function() {
    // cc.audioEngine.playEffect(res.a_13_sound)
  },
a_15_sound: function() {
    // cc.audioEngine.playEffect(res.a_15_sound)
  },
a_17_sound: function() {
    // cc.audioEngine.playEffect(res.a_17_sound)
  },
a_2_sound: function() {
    // cc.audioEngine.playEffect(res.a_2_sound)
  },
a_3_sound: function() {
    // cc.audioEngine.playEffect(res.a_3_sound)
  },
a_4_sound: function() {
    // cc.audioEngine.playEffect(res.a_4_sound)
  },
a_5_sound: function() {
    // cc.audioEngine.playEffect(res.a_5_sound)
  },
a_7_sound: function() {
    // cc.audioEngine.playEffect(res.a_7_sound)
  },
a_8_sound: function() {
    // cc.audioEngine.playEffect(res.a_8_sound)
  },
a_9_sound: function() {
    // cc.audioEngine.playEffect(res.a_9_sound)
  }
  }