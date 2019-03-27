var Layer03 = MyLayer.extend({
  onEnter: function() {
    this._super()
    var size = cc.winSize
    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.bg02)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：完整欣赏 1/11')

    this.sprs = this.sprites(gameData.layer03_data, true)
  },
  onStart: function() {
    // sound.s3_sound()
    var self = this
    var sprs = this.sprs

    this.t = 0
    this.f = Math.random() // 多长时间生成一个音符
    this.sArr = []// 音符精灵数组
    this.sRes = [res.yinfu1, res.yinfu2, res.yinfu3, res.yinfu4, res.yinfu5]// 音符图片数组
    this.scheduleUpdate()

    sprs[2].frame([res.music1, res.music2, res.music3, res.music4, res.music5, res.music6, res.music7, res.music8], 0.1, 1)

    this.scheduleOnce(function() {
      sprs[2].frame([res.music9, res.music10], 0.6, 0)
    }, 0.8)

    var left = new cc.ProgressTimer(new cc.Sprite(res.wen1))
    left.setAnchorPoint(0, 0)
    left.type = cc.ProgressTimer.TYPE_BAR
    //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
    left.midPoint = cc.p(0, 1)
    //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
    left.barChangeRate = cc.p(0, 1)
    left.x = 426
    left.y = 189
    this.addChild(left, 5)
    left.runAction(cc.progressTo(26, 100))

    this.scheduleOnce(function() {
      this.sArr.forEach(function(item){item.removeFromParent()})
      sprs[2].stopAllActions()
      this.next()
    }, 30)
  },
  update: function(dt) {
    var self = this
    this.t += dt
    var _r = getNum(0, 5)
    if(this.t > this.f) {
      this.t = 0
      this.f = getNum(4, 6) / 10
      var note = new cc.Sprite(this.sRes[_r])
      note.setAnchorPoint(0, 0)
      note.setPosition(getNum(997, 1682), getNum(262, 500))
      this.addChild(note, 10)
      note.speed = Math.random() * 4 + 6
      note.runAction(cc.sequence(cc.scaleBy(0.5, 1 / 1.1), cc.scaleBy(0.5, 1.1)).repeatForever())
      this.sArr.push(note)
    }
    this.sArr.forEach(function(item, index) {
      if(item.y > 800) {
        item.stopAllActions()
        item.removeFromParent()
        self.sArr.splice(index, 1)
      }else{
        item.y += item.speed
      }
    })
  }
})

