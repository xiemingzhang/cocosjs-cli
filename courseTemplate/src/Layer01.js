var Layer01 = MyLayer.extend({
  ctor: function(){
    this._super(cc.color(255,255,255,255))
  },
  onEnter: function() {
    this._super()
    var size = cc.winSize

    this.scheduleOnce(this.onStart, 1)

    var bg = new cc.Sprite(res.学习薄厚)
    bg.setAnchorPoint(0.5, 0.5)
    bg.setPosition({x: size.width / 2, y: size.height / 2})
    this.addChild(bg)

    // this.btn = this.createBtn(textArr[0])
  },
  onStart: function(num) {
    var self = this
    var sprs = this.sprs

    this.scheduleOnce(function() {
      this.next()
    }, 2)
  }
  // update: function (dt) {

  // }
})

