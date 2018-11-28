var Layer0 = cc.Layer.extend({
  ctor: function () {
    this._super()
    cc.log(0, '层')
    var layer4 = new StarLayer(common_data[1])
    this.addChild(layer4, 50, 50)
    // 返回按钮
    layer4.onTouchBegan()

    var spcolor = new LayerExp()
    var color = spcolor.layerColor(layercolor[0])
    var listner = new nodeExpand()
    for(var i = 0;i < color.length;i++) {
      this.addChild(color[i], color[i].zindex, color[i].id)
      listner.EventL(color[i].id, this.getChildByTag(color[i].id),
        function (target) {
          cc.log(target.id)
        }, '',
        function (target) {
          if(target.id === 1000) {
            layer4.rightStar(1)
            listner.rovmlistn(target.id)
            this.scheduleOnce(function () {
              layer4.gameEnd(1)
            }, 1)
          }
        }.bind(this)
      )
    }
    // plist 调用i

    //		var addlist = new LayerExp();
    //		addlist.addplist(res.common,res.commonpng);
    //		var splare= addlist.plistSp(list);
    //		//需要在当前层添加
    //		for(var i =0;i<splare.length;i++){
    //			this.addChild(splare[i],2,splare[i].id);
    //		}
    //		var ll=addlist.shakeAction(10);
    //		this.getChildByTag(2001).runAction(ll);
    //		//cc.log(this.getChildren());

    //		//星星
    //		var layer4 = new StarLayer(common_data[4]);
    //		this.addChild(layer4, 50, 50);
    //		//飞星调用
    //		layer4.rightStar(1)
    //
    //		//返回按钮
    //		layer4.onReturn();
    //
    //		//调用native
    //		layer4.onTouchBegan();
    //
    //		//加载层需要的数据
    //		var Lres1= arrsubject[0];
    //
    //		//初始化ui 精灵布局
    //		var Lresn=commonlist;
    //		var splayer=new LayerExp();
    //
    //		for(var i =0;i<splayer.sprites(Lresn).length;i++){
    //			this.addChild(splayer.sprites(Lresn)[i],splayer.sprites(Lresn)[i],splayer.sprites(Lresn)[i].id);
    //		}
    // 加载一个精灵
    /*
		精灵地址imgurl,x坐标spX,y坐标spY,锚点anchor,显示层级zindex,初始角度angle,翻转pedXY
		翻转pedXY 调整精灵是否翻转 参数0不翻转 1:x轴翻转 2:y轴分翻转 3:xy轴同时翻转
		获取 spritesOne的精灵 按照 数据Lres1 长度累加
		缩放比例Scale
		*/
    //
    //		splayer.spritesOne(
    //			list[0].sprurl,
    //			list[0].sp_X,
    //			list[0].sp_Y,
    //			list[0].zindex,
    //			[0.5,0.5],
    //			20,3).scaleAction(0.5,4)
    //		//获取精灵
    //		var sprite=splayer.getChildren();
    //
    //		cc.log(sprite);
    //		//将精灵添加到当前层
    //		this.addChild(splayer, 1);
    //
    //		//添加控制类
    //		var listner=new nodeExpand()
    //		//更新完成关卡数据
    //		listner.dataUp(4);
    //
    //		cc.log(common_data);

    // 添加监控注册事件
    /*
		 1 监听事件的名字
		 2 监听的精灵
		 3 点下事件 fun
		 4 拖动事件 fun
         5 离开事件 fun
		 */
    //		var listner=new nodeExpand()
    //		listner.EventL("li",this.getChildByTag(2001),function(target){
    //			//点下的时候触发
    //			target.runAction(cc.sequence(cc.scaleTo(1, 2), cc.scaleTo(1, 1)))
    //		},function(target){
    //			//拖动
    //			var blink = new cc.Blink(0.5, 2);
    //			target.runAction(blink);
    //		},function(){
    //			//离开时触发
    //			listner.rovmlistn("li");//注销监听事件
    //		})
    //
    //		//添加注册监听事件 2

    //
    //		listner.EventL("lo",sprite[7],'',function(target){
    //			cc.log(target.id)
    //			//listner.rovmlistn("vi");
    //		},'')
    //
    //		//生成 一个指定长度的数组
    //		//数组 建值为 指定长度的随机数
    //		var cun=[]
    //		listner.randomArray(6,cun)
    //		cc.log(cun);
    //
    //
    //		var clipper = new cc.ClippingNode();
    //		clipper.tag = TAG_CLIPPERNODE;
    //		clipper.width = size.width;
    //		clipper.height =size.height;
    //		clipper.anchorX = 0.5;
    //		clipper.anchorY = 0.5;
    //		clipper.x = this.width / 2;
    //		clipper.y = this.height / 2;
    //		this.addChild(clipper);
    //
    //		var stencil = new cc.DrawNode();
    //		var rectangle = [cc.p(0, 0),cc.p(clipper.width, 0),cc.p(clipper.width, clipper.height),cc.p(0, clipper.height)];
    //		var white = cc.color(255, 255, 255, 255);
    //		stencil.drawPoly(rectangle, white, 1, white);
    //		clipper.stencil = stencil;
    //
    //		var content = new cc.Sprite(png);
    //		content.tag = TAG_CONTENTNODE;
    //		content.anchorX = 0.5;
    //		content.anchorY = 0.5;
    //		content.x = clipper.width / 2;
    //		content.y = clipper.height / 2;
    //		clipper.addChild(content);
    //
    //		this._scrolling = false;
    //		cc.eventManager.addListener(cc.EventListener.create({
    //			event: cc.EventListener.TOUCH_ALL_AT_ONCE,
    //			onTouchesBegan: function (touches, event) {
    //				if (!touches || touches.length == 0)
    //					return;
    //				var target = event.getCurrentTarget();
    //				var touch = touches[0];
    //				var clipper = target.getChildByTag(TAG_CLIPPERNODE);
    //				var point = clipper.convertToNodeSpace(touch.getLocation());
    //				var rect = cc.rect(0, 0, clipper.width, clipper.height);
    //				this._scrolling = cc.rectContainsPoint(rect, point);
    //				this._lastPoint = point;
    //			},
    //			onTouchesMoved: function (touches, event) {
    //				if (!this._scrolling)
    //					return;
    //				var target = event.getCurrentTarget();
    //
    //				if (!touches || touches.length == 0)
    //					return;
    //				var touch = touches[0];
    //				var clipper = target.getChildByTag(TAG_CLIPPERNODE);
    //				var point = clipper.convertToNodeSpace(touch.getLocation());
    //				var diff = cc.pSub(point, this._lastPoint);
    //				var content = clipper.getChildByTag(TAG_CONTENTNODE);
    //				content.setPosition(cc.pAdd(content.getPosition(), diff));
    //				this._lastPoint = point;
    //				//超出屏幕界定需要自己添加
    //			},
    //			onTouchesEnded: function (touches, event) {
    //				if (!this._scrolling) return;
    //				this._scrolling = false;
    //			}
    //		}), this);
    //		return this;
  }
})
