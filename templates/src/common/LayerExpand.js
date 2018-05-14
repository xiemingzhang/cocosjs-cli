/**
 * Created by Dellnb on 2018/2/2.
 */
var LayerExp = cc.Layer.extend({
	Lres1: [],
	sprite: [],
	spriteOne:[],
	spritePlist:[],
	lColor:[],
	size: cc.director.getWinSize(),
	ctor: function (array) {
		this._super();
	}, sprites: function (sp) {
		this.Lres1=[];
		this.sprite=[];
		this.Lres1 = sp;
		for (var i in this.Lres1) {
				// if(fix!=1){
				// 	var fixXh=this.Lres1[i].ipsdSp_Y;
				// }else{
				// 	var fixXh=this.Lres1[i].sp_Y;
				// }
				this.sprite[i] = cc.Sprite.create(this.Lres1[i].sprurl);
				// this.sprite[i].setVisible(this.Lres1[i].hw)
				if(this.Lres1[i].hidden){
				  this.sprite[i].setOpacity(0)
				}
				this.sprite[i].setPosition(this.Lres1[i].sp_X* fix, this.Lres1[i].sp_Y* fix);
				this.sprite[i].setAnchorPoint(this.Lres1[i].chorPoint[0],this.Lres1[i].chorPoint[1]);
				this.sprite[i].id = this.Lres1[i].id;
				this.sprite[i].setScale(this.Lres1[i].Scale / 3 * fix);
				this.sprite[i].zindex=this.Lres1[i].zindex;
			}
		return this.sprite;
	}, spritesOne: function (imgurl, spX, spY, id, anchor, angle, pedXY, Scale,ipadScale) {
		var psNum = this.sprite.length
		var rote = angle == "" ? 0 : angle;
		this.spriteOne[psNum] = cc.Sprite.create(imgurl);
		this.spriteOne[psNum].setPosition(spX * fix, spY);
		if (typeof(anchor) == "object") {
			this.spriteOne[psNum].setAnchorPoint(anchor[0], anchor[1]);
		} else {
			this.spriteOne[psNum].setAnchorPoint(0, 0);
		}
		this.spriteOne[psNum].id = id;
		this.spriteOne[psNum].setRotation(rote);
		switch (pedXY) {
			case 1:
				this.spriteOne[psNum].setFlippedX(true); //x轴翻转
				break;
			case 2:
				this.spriteOne[psNum].setFlippedY(true); //y轴翻转
				break;
			case 3:
				this.spriteOne[psNum].setFlippedX(true); //x轴翻转
				this.spriteOne[psNum].setFlippedY(true); //y轴翻转
				break;
			default:
				break;
		}
		this.spriteOne[psNum].setScale(Scale / 3 * fix,ipadScale);
		return this.spriteOne;
	},layerColor:function(sparray){
		this.Lres1=[];
		this.sprite=[];
		this.Lres1=sparray;
		for (var i = 0; i < this.Lres1.length; i++) {
			if(this.Lres1[i].hw == 1){
				this.lColor[i] = new cc.LayerColor(cc.color(this.Lres1[i].color[0], this.Lres1[i].color[1], this.Lres1[i].color[2], this.Lres1[i].color[3]));
				this.lColor[i].anchorX = 0.5;
				this.lColor[i].anchorY = 0.5;
				this.lColor[i].x =  this.Lres1[i].sp_X * fix;
				this.lColor[i].y = this.Lres1[i].sp_Y;
				this.lColor[i].setContentSize(this.Lres1[i].width,this.Lres1[i].height);
				this.lColor[i].id = this.Lres1[i].id;
				this.lColor[i].zindex =this.Lres1[i].zindex;
				//this.addChild(this.lColor[i], this.lColor[i].zindex,this.Lres1[i].id);
			}
		}
		return this.lColor;
	}
	,addplist: function (common, commonpng) {
		cc.spriteFrameCache.addSpriteFrames(common, commonpng);
	}, plistSp: function (list) {
		if (typeof (list) == "object") {
			for (var i = 0; i < list.length; i++) {
				this.spritePlist[i] = new cc.Sprite.create("#" + list[i].sprurl);
				this.spritePlist[i].setPosition(list[i].sp_X * fix, list[i].sp_Y);
				this.spritePlist[i].setAnchorPoint(0, 0);
				this.spritePlist[i].id = list[i].id;
				this.spritePlist[i].setScale(list[i].Scale / 3 * fix);
				//this.addChild(this.spritePlist[i],10);
				//此方法需要在 调用的层addChild添加精灵
			}
		}
		return this.spritePlist;
	},scaleAction : function(time,sca){
		var action = cc.scaleTo(time,sca);
		return action;
		//this.runAction(action);
	},
	shakeAction : function(angle){ //抖动
		var action1 = cc.rotateTo(0.1,angle);
		var action2 = cc.rotateTo(0.1,0);
		var action3 = cc.rotateTo(0.1,-angle);
		var action4 = cc.rotateTo(0.1,0);
		var action = cc.sequence(action1,action2,action3,action4);
		return action;
		//this.runAction(action);
	},
	cardTurnOver : function(flag,front,reverse){  //翻牌
		var action1 = cc.scaleTo(0.2, 0.001*fix,0.333*fix);
		var scale_ease1 = action1.easing(cc.easeOut(2));

		var action2 = cc.scaleTo(0.2, 0.333*fix,0.333*fix);
		var scale_ease2 = action2.easing(cc.easeIn(2));

		var cb1 = cc.callFunc(function(){
			/* 换图 */
			flag ? this.setTexture(front) : this.setTexture(reverse);
		}.bind(this))

		var action = cc.sequence(scale_ease1,cb1,cc.delayTime(0.1),scale_ease2);
		return action;
		//this.runAction(action);
	},
	fadeAction : function(flag){ //淡入淡出
		if(flag){
			var action = cc.fadeOut(0.3);
		}else{
			var action = cc.fadeIn(0.3);
		}
		return action;
		//this.runAction(action);
	},
	scaleAction : function(time,sca){
		var action = cc.scaleTo(time,sca);
		return action;
		//this.runAction(action);
	},
	rotateAction : function(time,angle){ //旋转
		var action = cc.rotateBy(time,angle);
		var move_ease = action.easing(cc.easeOut(2));
		return move_ease;
		//this.runAction(move_ease);
	},
	moveAction : function(time,x,y,num){
		var action = cc.moveTo(time,x,y);

		switch (num){
			case 1 :
				var move_ease = action.easing(cc.easeIn(2));
				break;
			case 2 :
				var move_ease = action.easing(cc.easeOut(2));
				break;
			case 3 :
				var move_ease = action.easing(cc.easeInOut(2));
				break;
			default :
				var move_ease = action.easing(cc.easeInOut(2));
				break;
		}
		return move_ease;
			//this.runAction(move_ease);
	}
})