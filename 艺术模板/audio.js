
// var step04 = load('./res/Normal/audio/voice/step04.mp3')
// var step06 = load('./res/Normal/audio/voice/step06.mp3')
// var step07 = load('./res/Normal/audio/voice/step07.mp3')
// var step08 = load('./res/Normal/audio/voice/step08.mp3')
// var step09 = load('./res/Normal/audio/voice/step09.mp3')
// var step11 = load('./res/Normal/audio/voice/step11.mp3')

var audio_list_play = []
function load(src){
  var audio = new Audio(src)
  // if(audio.canPlayType('audio/mp3') == 'probably' && audio.error == null){
  audio.preload = 'auto' // 预加载
  // console.log('load success')
  // }
  // else {
  // console.log(audio.error)
  // }
  audio.flag = true
  audio.addEventListener('play', function(){
    if(audio_list_play.every(function(item){
      return item !== audio
    }) && audio.flag){
      audio_list_play.push(audio)
    }
    // console.log(audio_list_play)
  })

  audio.addEventListener('pause', function(){
    if(audio.flag){
      audio.play()
    }
  })

  audio.addEventListener('ended', function(){
    setTimeout(function(){
      audio.load()
      audio.flag = true
    }, 150)
    audio.flag = false
    // audio.currentTime = 0
    audio_list_play.forEach(function(item, index){
      if(item === audio){
        audio_list_play.splice(index, 1)
      }
    })
    // console.log(audio_list_play)
  })
  return audio
}

document.addEventListener('visibilitychange', function() {
  if(document.hidden === true){
    audio_list_play.forEach(function(item){
      item.flag = false
      item.pause()
    })
  }else{
    audio_list_play.forEach(function(item){
      item.flag = true
      item.play()
    })
  }
})

// sound.step04_audio = function() {
//   step04.play()
// }
// sound.step06_audio = function() {
//   step06.play()
// }
// sound.step07_audio = function() {
//   step07.play()
// }
// sound.step08_audio = function() {
//   step08.play()
// }
// sound.step09_audio = function() {
//   step09.play()
// }
// sound.step11_audio = function() {
//   step11.play()
// }
// sound.stopAllEffects = function () {
//   audio_list_play.forEach(function(item){
//     setTimeout(function(){
//       item.currentTime = 0
//       item.flag = true
//     }, 150)
//     item.flag = false
//     item.pause()
//   })
//   audio_list_play = []
//   cc.audioEngine.stopAllEffects()
// }