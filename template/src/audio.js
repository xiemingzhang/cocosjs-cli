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
    },//声音bgm_happyday_sound: function() {
    cc.audioEngine.playEffect(res.bgm_happyday_sound)
  },eight_sound: function() {
    cc.audioEngine.playEffect(res.eight_sound)
  },equal_sound: function() {
    cc.audioEngine.playEffect(res.equal_sound)
  },five_sound: function() {
    cc.audioEngine.playEffect(res.five_sound)
  },four_sound: function() {
    cc.audioEngine.playEffect(res.four_sound)
  },nine_sound: function() {
    cc.audioEngine.playEffect(res.nine_sound)
  },one_sound: function() {
    cc.audioEngine.playEffect(res.one_sound)
  },plus_sound: function() {
    cc.audioEngine.playEffect(res.plus_sound)
  },reduce_sound: function() {
    cc.audioEngine.playEffect(res.reduce_sound)
  },seven_sound: function() {
    cc.audioEngine.playEffect(res.seven_sound)
  },six_sound: function() {
    cc.audioEngine.playEffect(res.six_sound)
  },stree_sound: function() {
    cc.audioEngine.playEffect(res.stree_sound)
  },ten_sound: function() {
    cc.audioEngine.playEffect(res.ten_sound)
  },two_sound: function() {
    cc.audioEngine.playEffect(res.two_sound)
  },zero_sound: function() {
    cc.audioEngine.playEffect(res.zero_sound)
  }
  }