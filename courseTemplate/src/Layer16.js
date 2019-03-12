var Layer16 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize

    var bg = new cc.Sprite(res.bg02)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：总结结束 1/1')

    this.sprs = this.sprites(layer04_data[0], true)
  },
  onStart: function(){

    sound.s4_sound()
    var self = this
    var sprs = this.sprs

    this.t = 0
    this.f = Math.random() //多长时间生成一个音符
    this.sArr = []//音符精灵数组
    this.sRes = [res.note1819, res.note1820, res.note1821, res.note1822, res.note1823]//音符图片数组
    this.scheduleUpdate()

    // var action1 = cc.scaleTo(0.5, 0.8/3)
    // var action2 = cc.scaleTo(0.5, 1/3)
    // var action3 = cc.rotateBy(2, 360)
    // var action4 = cc.rotateBy(2, -360)

    // sprs[1].runAction(cc.sequence(action1.clone(), action2.clone()).repeatForever())

    // sprs[2].runAction(cc.sequence(action3.clone()).repeatForever())

    // sprs[3].runAction(cc.sequence(action1.clone(), action2.clone()).repeatForever())

    // sprs[4].runAction(action4.repeatForever())

    // sprs[5].runAction(cc.sequence(action1.clone(), action2.clone()).repeatForever())
    // 
    
    this.scheduleOnce(function(){
      this.unscheduleUpdate()
      this.sArr.forEach(function(item){
        item.removeFromParent()
      })
      this.next()
    }, 53)
  },
  update: function (dt) {
    var self = this
    this.t += dt
    var _r = getNum(0, 5)
    if(this.t > this.f){
      this.t = 0
      this.f = getNum(6, 8) / 10
      var note = new cc.Sprite(this.sRes[_r])
      note.setAnchorPoint(0, 0)
      note.setPosition(getNum(409, 1423), getNum(179, 541))
      this.addChild(note, 0)
      note.speed = Math.random() * 4 + 6
      note.runAction(cc.sequence(cc.scaleBy(0.5, 1/1.1),cc.scaleBy(0.5, 1.1)).repeatForever())
      this.sArr.push(note)
    }
    this.sArr.forEach(function(item, index){
      if(item.y > 800){
        item.stopAllActions()
        item.removeFromParent()
        self.sArr.splice(index, 1); 
      }else{
        item.y += item.speed
      }
    })
  }
})

