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
  },
  correctV: function() {
    cc.audioEngine.playEffect(res.correctV)
  },
  line_upV: function() {
    cc.audioEngine.playEffect(res.line_upV)
  },
  step01V: function() {
    cc.audioEngine.playEffect(res.step01V)
  },
  step02V: function() {
    cc.audioEngine.playEffect(res.step02V)
  },
  step03V: function() {
    cc.audioEngine.playEffect(res.step03V)
  },
  step04V: function() {
    cc.audioEngine.playEffect(res.step04V)
  },
  cutV: function() {
    cc.audioEngine.playEffect(res.cutV)
  }
}
