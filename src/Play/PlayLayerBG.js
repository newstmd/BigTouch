var PlayLayerBG = cc.Layer.extend({
	sprite:null,
	ctor:function () {
		//////////////////////////////
		// 1. super init first
		this._super();
		
		var size = cc.winSize;
		var bgSprite = cc.Sprite.create(res.BackGround_jpg);
		bgSprite.attr({
			x:size.width/2,
			y:size.height/2
		});
		this.addChild(bgSprite);
		
		scoreLabel = new cc.LabelTTF("score:0", "Arial", 50);
		scoreLabel.attr({
			x:size.width/2,
			y:size.height - 40
		});
		this.addChild(scoreLabel);
		
		timeoutLabel = cc.LabelTTF.create("" + this.timeout, "Arial", 50);
		timeoutLabel.x = 50;
		timeoutLabel.y = size.height - 40;
		this.addChild(timeoutLabel);
		
		
		return true;
	}
});