var Layer01 = MyLayer.extend({
  onEnter: function() {
    this._super()
    this.fix_height = 180 / fix - 180
    var size = cc.winSize
    var self = this

    // add bg
    var layer = new cc.LayerColor(cc.color(105, 185, 220), size.width / 2, size.height)
    // 颜色只能用cc.color,不能直接写”red“
    layer.setPosition(cc.p(0, 0))
    this.addChild(layer)

    layer = new cc.LayerColor(cc.color(82, 152, 201), size.width / 2, size.height)
    layer.setPosition(cc.p(size.width / 2, 0))
    this.addChild(layer)

    var sprs = this.sprites(gameData.layer01_data, true)

    var hand = this.getChildByTag(1001)
    hand.frame([res.hand, res.handclick], 0.4, 2)
    this.scheduleOnce(function() {hand.runAction(cc.fadeOut(1))}, 1.6)

    this.numArr = []

    var saiziRes = [res.S1, res.S2, res.S3, res.S4, res.S5, res.S6]
    var numRes = this.numRes = [res.n0, res.n1, res.n2, res.n3, res.n4, res.n5, res.n6, res.n7, res.n8, res.n9]
    var random1 = this.parent.random1
    var random2 = this.parent.random2
    var index = this.parent.l
    cc.log(random1, random2)
    var soundArr = [sound.one_sound, sound.two_sound, sound.stree_sound, sound.four_sound, sound.five_sound, sound.six_sound, sound.seven_sound, sound.eight_sound, sound.nine_sound, sound.ten_sound]

    var spr1003 = this.getChildByTag(1003)// 运算前面的数
    var spr1004 = this.getChildByTag(1004)// 运算后面的数
    var spr1005 = this.getChildByTag(1005)// 运算符号
    var spr1006 = this.getChildByTag(1006)// 显示数字1
    var spr1007 = this.getChildByTag(1007)// 显示数字2
    var spr1008 = this.getChildByTag(1008)// 显示数字3
    var spr1009 = this.getChildByTag(1009)// 等于号

    spr1006.setColor(cc.color(70, 140, 192))
    spr1007.setColor(cc.color(70, 140, 192))
    spr1008.setColor(cc.color(70, 140, 192))
    spr1003.setTexture(saiziRes[random1[index]])
    spr1003.id = random1[index] + 1
    spr1004.setTexture(saiziRes[random2[index]])
    spr1004.id = random2[index] + 1
    if(random1[index] > random2[index]) {
      Math.random() > 0.45 ? spr1005.setTexture(res.signplus) : spr1005.setTexture(res.signminus)
    }else{
      spr1005.setTexture(res.signplus)
    }

    var btnArr = sprs.filter(function(item) {
      return item.data.group == 1
    })
    cc.log(btnArr)
    var beizi = this.getChildByTag(1002)
    beizi.clickEvent(
      function(target) {
        hand.removeFromParent()
        target.runAction(cc.moveBy(1.5, 0, 250))
        return true
      },
      function(target) {
        target.removeEvent()
        btnArr.forEach(function(item) {
          item.clickEvent(
            function() {
              return true
            },
            function(target) {
              var numArr = self.numArr
              var result, total
              if(target.data.flag === -1) {
                self.numArr = []
                self.write()
                return
              }
              if(target.data.flag === 11) {
                // cc.log(spr1005.data.sprUrl, res.signplus)
                cc.log(spr1005.getTexture().url == res.signplus)
                if(spr1005.getTexture().url == res.signplus) {
                  result = spr1003.id + spr1004.id
                }else{
                  result = spr1003.id - spr1004.id
                }

                if(numArr.length === 1) {
                  total = numArr[0]
                }else if(numArr.length === 2) {
                  total = numArr[0] * 10 + numArr[1]
                }
                cc.log(result, total)
                if(result === total) {
                  cc.log('right')
                  soundArr[spr1003.id - 1]()
                  spr1003.runAction(cc.sequence(cc.scaleBy(0.3, 1.1),cc.scaleBy(0.3, 1/1.1)))
                  self.scheduleOnce(function() {
                    spr1005.runAction(cc.sequence(cc.scaleBy(0.3, 1.1),cc.scaleBy(0.3, 1/1.1)))
                    if(spr1005.getTexture().url == res.signplus) {
                      sound.plus_sound()
                    }else{
                      sound.reduce_sound()
                    }
                  }, 0.85)
                  self.scheduleOnce(function() {
                    spr1004.runAction(cc.sequence(cc.scaleBy(0.3, 1.1),cc.scaleBy(0.3, 1/1.1)))
                    soundArr[spr1004.id - 1]()
                  }, 1.5)
                  self.scheduleOnce(function() {
                    spr1009.runAction(cc.sequence(cc.scaleBy(0.3, 1.1),cc.scaleBy(0.3, 1/1.1)))
                    sound.equal_sound()
                  }, 2.3)
                  self.scheduleOnce(function() {
                    spr1008.runAction(cc.sequence(cc.scaleBy(0.3, 1.1),cc.scaleBy(0.3, 1/1.1)))
                    spr1006.runAction(cc.sequence(cc.scaleBy(0.3, 1.1),cc.scaleBy(0.3, 1/1.1)))
                    spr1007.runAction(cc.sequence(cc.scaleBy(0.3, 1.1),cc.scaleBy(0.3, 1/1.1)))
                    if(total < 11) {
                      soundArr[total - 1]()
                    }else{
                      sound.ten_sound()
                      self.scheduleOnce(function() {
                        soundArr[numArr[1] - 1]()
                      }, 0.5)
                    }
                    self.scheduleOnce(function(){
                      self.right()
                      self.next()
                    },0.42)
                  }, 3.15)
                  
                }else{
                  cc.log('wrong')
                  self.wrong()
                  self.numArr = []
                  self.write()
                }
                return
              }
              if(self.numArr.length < 2) {
                self.numArr.push(target.data.flag)
                self.write()
              }
            }
          )
        })
      }
    )
  },
  write: function() {
    var numArr = this.numArr
    var spr1006 = this.getChildByTag(1006)
    var spr1007 = this.getChildByTag(1007)
    var spr1008 = this.getChildByTag(1008)
    if(numArr.length === 0) {
      spr1006.setOpacity(0)
      spr1007.setOpacity(0)
      spr1008.setOpacity(0)
    }else if(numArr.length === 1) {
      spr1006.setTexture(this.numRes[numArr[0]])
      spr1006.setOpacity(255)
      spr1007.setOpacity(0)
      spr1008.setOpacity(0)
    }else{
      spr1007.setTexture(this.numRes[numArr[0]])
      spr1008.setTexture(this.numRes[numArr[1]])
      spr1006.setOpacity(0)
      spr1007.setOpacity(255)
      spr1008.setOpacity(255)
    }
  }
  // update: function (dt) {

  // }
})

