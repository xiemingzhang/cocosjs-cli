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
    gameBgAudio: function () {// 背景
      cc.audioEngine.playMusic(res.bgm_happyday_sound, true)
      cc.audioEngine.setMusicVolume(0.2)
    },
//声音
s11_sound: function() {
    cc.audioEngine.playEffect(res.s11_sound)
  },
s13_sound: function() {
    cc.audioEngine.playEffect(res.s13_sound)
  },
s15_sound: function() {
    cc.audioEngine.playEffect(res.s15_sound)
  },
s17_sound: function() {
    cc.audioEngine.playEffect(res.s17_sound)
  },
s19_sound: function() {
    cc.audioEngine.playEffect(res.s19_sound)
  },
s9_sound: function() {
    cc.audioEngine.playEffect(res.s9_sound)
  }
  }