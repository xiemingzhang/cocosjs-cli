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
  },camera2_sound: function() {
    cc.audioEngine.playEffect(res.camera2_sound)
  },cat_sound: function() {
    cc.audioEngine.playEffect(res.cat_sound)
  },click_1_sound: function() {
    cc.audioEngine.playEffect(res.click_1_sound)
  },click_2_sound: function() {
    cc.audioEngine.playEffect(res.click_2_sound)
  },click_3_sound: function() {
    cc.audioEngine.playEffect(res.click_3_sound)
  },click_4_sound: function() {
    cc.audioEngine.playEffect(res.click_4_sound)
  },click_5_sound: function() {
    cc.audioEngine.playEffect(res.click_5_sound)
  },click_6_sound: function() {
    cc.audioEngine.playEffect(res.click_6_sound)
  },click_7_sound: function() {
    cc.audioEngine.playEffect(res.click_7_sound)
  },click_8_sound: function() {
    cc.audioEngine.playEffect(res.click_8_sound)
  },click_9_sound: function() {
    cc.audioEngine.playEffect(res.click_9_sound)
  },linmo_sound: function() {
    cc.audioEngine.playEffect(res.linmo_sound)
  }
  }