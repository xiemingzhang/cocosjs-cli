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
      cc.audioEngine.playMusic(res.GameBg_audio, true)
      cc.audioEngine.setMusicVolume(0.2)
    },
    gameInfo: function() {
      cc.audioEngine.playEffect(res.game_info)
    },//配音step01_audio: function() {
    cc.audioEngine.playEffect(res.step01_audio)
  },step02_audio: function() {
    cc.audioEngine.playEffect(res.step02_audio)
  },step03_audio: function() {
    cc.audioEngine.playEffect(res.step03_audio)
  },step04_audio: function() {
    cc.audioEngine.playEffect(res.step04_audio)
  },step05_audio: function() {
    cc.audioEngine.playEffect(res.step05_audio)
  },step06_audio: function() {
    cc.audioEngine.playEffect(res.step06_audio)
  },step07_audio: function() {
    cc.audioEngine.playEffect(res.step07_audio)
  },step08_audio: function() {
    cc.audioEngine.playEffect(res.step08_audio)
  },step09_audio: function() {
    cc.audioEngine.playEffect(res.step09_audio)
  },step10_audio: function() {
    cc.audioEngine.playEffect(res.step10_audio)
  },step11_audio: function() {
    cc.audioEngine.playEffect(res.step11_audio)
  },step12_audio: function() {
    cc.audioEngine.playEffect(res.step12_audio)
  },step13_audio: function() {
    cc.audioEngine.playEffect(res.step13_audio)
  },step14_audio: function() {
    cc.audioEngine.playEffect(res.step14_audio)
  },step15_audio: function() {
    cc.audioEngine.playEffect(res.step15_audio)
  },step16_audio: function() {
    cc.audioEngine.playEffect(res.step16_audio)
  },step17_audio: function() {
    cc.audioEngine.playEffect(res.step17_audio)
  },step18_audio: function() {
    cc.audioEngine.playEffect(res.step18_audio)
  },step19_audio: function() {
    cc.audioEngine.playEffect(res.step19_audio)
  },step20_audio: function() {
    cc.audioEngine.playEffect(res.step20_audio)
  },step21_audio: function() {
    cc.audioEngine.playEffect(res.step21_audio)
  },step22_audio: function() {
    cc.audioEngine.playEffect(res.step22_audio)
  }}