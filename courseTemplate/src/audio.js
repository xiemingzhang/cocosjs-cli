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
    voice: function (voice) {
      cc.audioEngine.playEffect(voice)
    },
    voiceTrue: function (voice) {
      cc.audioEngine.playEffect(voice, true)
    },
    // 个性
    gameBgAudio: function () {// 背景
      cc.audioEngine.playMusic(res.bgm_happyday_sound, true)
      cc.audioEngine.setMusicVolume(0.2)
    },//声音s10_sound: function() {
    cc.audioEngine.playEffect(res.s10_sound)
  },s11_sound: function() {
    cc.audioEngine.playEffect(res.s11_sound)
  },s12_sound: function() {
    cc.audioEngine.playEffect(res.s12_sound)
  },s13_sound: function() {
    cc.audioEngine.playEffect(res.s13_sound)
  },s14_sound: function() {
    cc.audioEngine.playEffect(res.s14_sound)
  },s2_sound: function() {
    cc.audioEngine.playEffect(res.s2_sound)
  },s3_sound: function() {
    cc.audioEngine.playEffect(res.s3_sound)
  },s4_sound: function() {
    cc.audioEngine.playEffect(res.s4_sound)
  },s6_sound: function() {
    cc.audioEngine.playEffect(res.s6_sound)
  },s61_sound: function() {
    cc.audioEngine.playEffect(res.s61_sound)
  },s62_sound: function() {
    cc.audioEngine.playEffect(res.s62_sound)
  },s7_sound: function() {
    cc.audioEngine.playEffect(res.s7_sound)
  },s8_sound: function() {
    cc.audioEngine.playEffect(res.s8_sound)
  },s9_sound: function() {
    cc.audioEngine.playEffect(res.s9_sound)
  }
  }