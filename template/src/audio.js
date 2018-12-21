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
  }
}
