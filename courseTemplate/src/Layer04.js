var Layer04 = MyLayer.extend({
  ctor: function () {
    this._super()

    this.scheduleOnce(this.onStart, 1)
    return true
  },
  onEnter: function () {
    this._super()
    var size = cc.winSize
    var self = this

    var bg = new cc.Sprite(res.背景)
    bg.setScale(size.height / bg.height * 1.25)
    bg.setAnchorPoint(0, 0.5)
    bg.setPosition({x: 0, y: size.height / 2})
    this.addChild(bg)

    this.createBtn('下一页：情景学习 2/14')

    var sprs = this.sprs = this.sprites(layer04_data[0], true)
  },
  onStart: function(){

    sound.a_4_sound()
    var self = this
    var sprs = this.sprs

    sprs[1].frame([res.米丫1, res.米丫5], 0.5, 0)

    // var action1 = cc.scaleTo(0.5, 0.8/3)
    // var action2 = cc.scaleTo(0.5, 1/3)
    // var action3 = cc.rotateBy(2, 360)
    // var action4 = cc.rotateBy(2, -360)

    // sprs[1].runAction(cc.sequence(action1.clone(), action2.clone()).repeatForever())

    // sprs[2].runAction(cc.sequence(action3.clone()).repeatForever())

    // sprs[3].runAction(cc.sequence(action1.clone(), action2.clone()).repeatForever())

    // sprs[4].runAction(action4.repeatForever())

    // sprs[5].runAction(cc.sequence(action1.clone(), action2.clone()).repeatForever())

    this.scheduleOnce(function(){
      this.next()
    }, 6)
  }
  // update: function (dt) {

  // }
})
// var Layer02 = MyLayer.extend({
//   ctor: function () {
//     this._super()

//     this.scheduleOnce(this.onStart, 1)
//     return true
//   },
//   onEnter: function(){
//     this._super()
//     var size = cc.winSize
//     var self = this

//     var bg = new cc.Sprite(res.g_02背景)
//     bg.setScale(size.height / bg.height)
//     bg.setAnchorPoint(0, 0.5)
//     bg.setPosition({x: 0, y: size.height / 2})
//     this.addChild(bg)

//     this.createBtn('下一页：认识沙漠1/5')

//     var sprs = this.sprs = this.sprites(layer02_data[0], true)

//   },
//   onStart: function(){

//     sound.a_2_sound()
//     var self = this
//     var sprs = this.sprs

//     var action1 = cc.scaleTo(0.5, 0.8/3)
//     var action2 = cc.scaleTo(0.5, 1/3)
//     var action3 = cc.rotateBy(2, 360)
//     var action4 = cc.rotateBy(2, -360)

//     sprs[1].runAction(cc.sequence(action1.clone(), action2.clone()).repeatForever())

//     sprs[2].runAction(cc.sequence(action3.clone()).repeatForever())

//     sprs[3].runAction(cc.sequence(action1.clone(), action2.clone()).repeatForever())

//     sprs[4].runAction(action4.repeatForever())

//     sprs[5].runAction(cc.sequence(action1.clone(), action2.clone()).repeatForever())

//     this.scheduleOnce(function(){
//       this.next()
//     }, 3.5)
//   }
//   // update: function (dt) {

//   // }
// })



