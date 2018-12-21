// 共性
var sound = {
  rightAudio: function () {
    cc.audioEngine.playEffect(res.Right_audio)
  },
  wrongAudio: function () {
    cc.audioEngine.playEffect(res.Wrong_audio)
  },
  winAudio: function () {
    cc.audioEngine.playEffect(res.Win_audio)
  },
  stopAudio: function () {
    cc.audioEngine.stopMusic()
  },
  buttonAudio: function () {
    cc.audioEngine.playEffect(res.Button_audio)
  },
  // 个性
  gameBgAudio: function () {
    cc.audioEngine.playMusic(res.GameBg_audio, true)

  },
  hintOneAudio: function () {
    cc.audioEngine.playEffect(res.HintOne_audio)
  },
  hintTwoAudio: function () {
    cc.audioEngine.playEffect(res.HintTwo_audio)
  },
  slideAudio: function () {
    cc.audioEngine.playEffect(res.Slide_audio)
  },
  cargo: function () {
    cc.audioEngine.playEffect(res.cargo)
  },
  problem1: function () {
    cc.audioEngine.playEffect(res.problem1)
  },
  problem2: function () {
    cc.audioEngine.playEffect(res.problem2)
  }
}
