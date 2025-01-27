"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/Instance/GameDate.ts
  var GameDate = class _GameDate {
    // 私有构造函数，防止外部实例化
    constructor() {
      // 玩家游玩次数
      this._playTimes = 0;
      // 玩家是否通关
      this._isPass = false;
      this._playTimes = Laya.LocalStorage.getJSON("playTimes") || 0;
      this._isPass = Laya.LocalStorage.getJSON("isPass") || 0;
    }
    static getInstance() {
      if (!this._instance) {
        this._instance = new _GameDate();
      }
      return this._instance;
    }
    /** 获取游玩次数的方法 */
    getPlayTimes() {
      return this._playTimes;
    }
    /** 增加游玩次数的方法 */
    incrementPlayTimes() {
      this._playTimes++;
      Laya.LocalStorage.setJSON("playTimes", this._playTimes.toString());
      return this._playTimes;
    }
    /** 获取玩家是否通关 */
    getIsPass() {
      return this._isPass;
    }
    /** 设置玩家通关 */
    setIsPass(isPass) {
      this._isPass = isPass;
      Laya.LocalStorage.setJSON("isPass", this._isPass.toString());
    }
  };

  // src/Instance/MusicManager.ts
  var { regClass, property } = Laya;
  var MusicManager = class extends Laya.Script {
    // 私有构造函数，防止外部实例化
    constructor() {
      super();
      this._basketballSound = new Laya.SoundNode();
      this._basketballSound.source = "./resources/music/basketball1.MP3";
      this._basketballSound.loop = 1;
      Laya.stage.addChild(this._basketballSound);
      this._yesSound = new Laya.SoundNode();
      this._yesSound.source = "./resources/music/yes.MP3";
      this._yesSound.loop = 1;
      Laya.stage.addChild(this._yesSound);
    }
    static getInstance() {
      if (!this._instance) {
        this._instance = new MusicManager();
      }
      return this._instance;
    }
    playGameHomeMusic() {
      this._musicManager = Laya.SoundManager.playMusic("./resources/music/LaoSiJiTakeMeWithYou.mp3", 0);
    }
    playGamePassMusic() {
      this._musicManager = Laya.SoundManager.playMusic("./resources/music/NeverGonnaGiveYouUp.mp3", 0);
    }
    playGameMainMusic() {
      this._musicManager = Laya.SoundManager.playMusic("./resources/music/Remix1.mp3", 0);
    }
    playBasketballSound() {
      this._basketballSound.play();
    }
    playYesSound() {
      this._yesSound.play();
    }
    musicPause() {
      this._musicManager.pause();
    }
    musicContinue() {
      this._musicManager.resume();
    }
  };
  MusicManager = __decorateClass([
    regClass("rrWCU0iYQqGpevdRaoRE4w")
  ], MusicManager);

  // src/utils/Assert.ts
  var Assert = class {
    constructor() {
    }
    /**
     * 直接报错
     * 无法找到对应的子节点，请检查名称是否正确
     * 使用方法：this.txt_HeightScore = (this.owner.getChildByName("txt_HightScore") as Laya.Text) || Assert.ChildNotNull;
     */
    static get ChildNotNull() {
      (() => {
        alert("无法找到对应的子节点，请检查名称是否正确。");
        throw new Error("无法找到对应的子节点，请检查名称是否正确。");
      })();
    }
    /**
     * 直接报错
     * 无法找到对应的子组件，请检查类型是否正确，脚本是否挂载
     * 使用方法：const autoMoveScript: AutoMove = car.getComponent(AutoMove) || Assert.ComponentNotNull;
     */
    static get ComponentNotNull() {
      (() => {
        alert("无法找到对应的子组件，请检查名称是否正确。");
        throw new Error("无法找到对应的子组件，请检查名称是否正确。");
      })();
    }
  };

  // src/GameHome/GameHomeManager.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var GameHomeManager = class extends Laya.Script {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      const MainButton = this.owner.getChildByName("MainButton") || Assert.ChildNotNull;
      MainButton.on(Laya.Event.CLICK, this, () => {
        Laya.Scene.open("./Scenes/GameMain.ls", true);
      });
      if (GameDate.getInstance().getIsPass()) {
        MusicManager.getInstance().playGamePassMusic();
      } else {
        MusicManager.getInstance().playGameHomeMusic();
      }
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  GameHomeManager = __decorateClass([
    regClass2("6CqyMU4nQeqIV_Rd4y0Kxg")
  ], GameHomeManager);

  // src/GameMain/DisappearAnimation.ts
  var { regClass: regClass3, property: property3 } = Laya;
  var DisappearAnimation = class extends Laya.Script {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      this._Card1 = this.owner.getChildByName("Card1") || Assert.ChildNotNull;
      this._Card2 = this.owner.getChildByName("Card2") || Assert.ChildNotNull;
      this._Card3 = this.owner.getChildByName("Card3") || Assert.ChildNotNull;
    }
    showDisappearAnimation(x, callBack) {
      this.owner.x = x;
      this.owner.visible = true;
      this._showCardDisapperAnimation(this._Card1);
      this._showCardDisapperAnimation(this._Card2);
      this._showCardDisapperAnimation(this._Card3, () => {
        callBack && callBack();
      });
    }
    _resetCard(card) {
      for (let i = 1; i <= 6; i++) {
        const Star = card.getChildByName("Star" + i) || Assert.ChildNotNull;
        Star.alpha = 1;
        Star.scaleX = 1;
        Star.scaleY = 1;
        Star.rotation = 0;
        Star.x = 30;
        Star.y = 30;
      }
    }
    _showCardDisapperAnimation(card, callBack) {
      for (let i = 1; i <= 6; i++) {
        const Star = card.getChildByName("Star" + i) || Assert.ChildNotNull;
        const randomAngle = Math.random() * 2 * Math.PI;
        const radius = 18;
        const centerX = 30;
        const centerY = 30;
        const x = centerX + radius * Math.cos(randomAngle);
        const y = centerY + radius * Math.sin(randomAngle);
        Laya.Tween.to(
          Star,
          { x, y, alpha: 0, scaleX: 0.5, scaleY: 0.3, rotation: Math.random() * 90 },
          500,
          null,
          Laya.Handler.create(this, () => {
            if (i == 6) {
              callBack && callBack();
            }
          })
        );
      }
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  DisappearAnimation = __decorateClass([
    regClass3("fAkPFzoMSz64AMDhH40OZg")
  ], DisappearAnimation);

  // src/GameMain/GameWinManager.ts
  var { regClass: regClass4, property: property4 } = Laya;
  var GameWinManager = class extends Laya.Script {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      const Sunshine = this.owner.getChildByName("Sunshine") || Assert.ChildNotNull;
      this._chicken1 = Sunshine.getChildByName("chicken1") || Assert.ChildNotNull;
      this._chicken2 = Sunshine.getChildByName("chicken2") || Assert.ChildNotNull;
      this._chicken3 = Sunshine.getChildByName("chicken3") || Assert.ChildNotNull;
      this._chicken4 = Sunshine.getChildByName("chicken4") || Assert.ChildNotNull;
      const BackHome = this.owner.getChildByName("BackHome") || Assert.ChildNotNull;
      BackHome.on(Laya.Event.CLICK, () => {
        Laya.Scene.open("./Scenes/GameHome.ls", true);
      });
    }
    _showChickenAnimation() {
      this._chicken3.visible = false;
      this._chicken4.visible = false;
      this._chicken2.x = 180;
      Laya.Tween.to(
        this._chicken2,
        { x: 208 },
        300,
        Laya.Ease.backOut,
        Laya.Handler.create(this, () => {
          this._chicken3.x = 80;
          this._chicken3.visible = true;
          Laya.Tween.to(
            this._chicken3,
            { x: 140 },
            400,
            Laya.Ease.backOut,
            Laya.Handler.create(this, () => {
              this._chicken4.x = -47;
              this._chicken4.visible = true;
              Laya.Tween.to(this._chicken4, { x: 73 }, 600, Laya.Ease.backOut);
            })
          );
        })
      );
    }
    showGameWin() {
      this.owner.visible = true;
      GameDate.getInstance().setIsPass(true);
      this._showChickenAnimation();
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  GameWinManager = __decorateClass([
    regClass4("oSN1F1BqTLyyYhi5nQL0EQ")
  ], GameWinManager);

  // src/VideoScene/VideoSceneManager.ts
  var { regClass: regClass5, property: property5 } = Laya;
  var VideoSceneManager = class extends Laya.Script {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      this.owner.visible = false;
      this._video = this.owner.getChildByName("Video") || Assert.ChildNotNull;
      const TopLeft = this.owner.getChildByName("TopLeft") || Assert.ChildNotNull;
      const TopLeftRect = TopLeft.getChildByName("Rect") || Assert.ChildNotNull;
      this._info = TopLeftRect.getChildByName("info") || Assert.ChildNotNull;
      const RightLeft = this.owner.getChildByName("RightLeft") || Assert.ChildNotNull;
      RightLeft.on(Laya.Event.CLICK, () => {
        if (this._video) {
          this._video.pause();
        }
        clearInterval(this._timer);
        this.owner.visible = false;
        MusicManager.getInstance().musicContinue();
      });
      this._frostedGlass = this.owner.getChildByName("FrostedGlass") || Assert.ChildNotNull;
    }
    _randomVideoSource() {
      const list = ["./resources/videos/1.mp4", "./resources/videos/2.mp4"];
      const randomIndex = Math.floor(Math.random() * list.length);
      return list[randomIndex];
    }
    showVideo(awardCallback) {
      MusicManager.getInstance().musicPause();
      this._frostedGlass.visible = false;
      this._info.text = `倒计时${30}秒`;
      this.owner.visible = true;
      Laya.loader.load(this._randomVideoSource()).then((args) => {
        this._video.source = args.url;
        this._video.reload();
        this._video.play();
        this._video.loop = true;
        this._countTime = 30;
        this._timer = setInterval(() => {
          this._countTime--;
          this._info.text = `倒计时${this._countTime}秒`;
          if (this._countTime <= 0) {
            clearInterval(this._timer);
            this._info.text = `已获得奖励`;
            this._video.pause();
            this._frostedGlass.visible = true;
            awardCallback && awardCallback();
          }
        }, 1e3);
      });
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    onDisable() {
      this._video.source = "";
    }
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  VideoSceneManager = __decorateClass([
    regClass5("FhMmzaWBTuStl8cqp1iWiQ")
  ], VideoSceneManager);

  // src/GameMain/ButtonManager.ts
  var { regClass: regClass6, property: property6 } = Laya;
  var ButtonManager = class extends Laya.Script {
    constructor() {
      super(...arguments);
      /** 可以洗牌的次数 */
      this._refresh = 0;
      /** 移除道具数量 */
      this._pushCount = 0;
      /** 可撤回数量 */
      this._backCount = 0;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      const Background = this.owner.parent || Assert.ChildNotNull;
      const VideoScene = Background.getChildByName("VideoScene") || Assert.ChildNotNull;
      this._videoSceneManager = VideoScene.getComponent(VideoSceneManager) || Assert.ComponentNotNull;
      const Goods = Background.getChildByName("Goods") || Assert.ChildNotNull;
      this._GoodsManager = Goods.getComponent(GoodsManager) || Assert.ComponentNotNull;
      const Box = Background.getChildByName("Box") || Assert.ChildNotNull;
      this._boxManager = Box.getComponent(BoxManager) || Assert.ComponentNotNull;
      this._refreshButton = this.owner.getChildByName("Refresh") || Assert.ChildNotNull;
      const refreshDot = this._refreshButton.getChildByName("Dot") || Assert.ChildNotNull;
      this._refreshDotText = refreshDot.getChildByName("dotNumber") || Assert.ChildNotNull;
      this._refreshDotText.text = `${this._refresh || "+"}`;
      this._refreshButton.on(Laya.Event.CLICK, this, () => {
        if (this._refresh <= 0) {
          this._videoSceneManager.showVideo(() => {
            this._refresh++;
            this._refreshDotText.text = `${this._refresh}`;
          });
        } else {
          this._refresh--;
          this._refreshDotText.text = `${this._refresh || "+"}`;
          this._GoodsManager.refreshGoods();
        }
      });
      const PushButton = this.owner.getChildByName("Push") || Assert.ChildNotNull;
      const pushDot = PushButton.getChildByName("Dot") || Assert.ChildNotNull;
      this._pushDotText = pushDot.getChildByName("dotNumber") || Assert.ChildNotNull;
      this._pushDotText.text = `${this._pushCount || "+"}`;
      PushButton.on(Laya.Event.CLICK, this, () => {
        if (this._pushCount <= 0) {
          this._videoSceneManager.showVideo(() => {
            this._pushCount++;
            this._pushDotText.text = `${this._pushCount}`;
          });
        } else {
          if (!this._boxManager.canPushBox())
            return;
          this._pushCount--;
          this._pushDotText.text = `${this._pushCount || "+"}`;
          this._boxManager.pushBox();
        }
      });
      const BackButton = this.owner.getChildByName("Back") || Assert.ChildNotNull;
      const backDot = BackButton.getChildByName("Dot") || Assert.ChildNotNull;
      this._backDotText = backDot.getChildByName("dotNumber") || Assert.ChildNotNull;
      this._backDotText.text = `${this._backCount || "+"}`;
      BackButton.on(Laya.Event.CLICK, this, () => {
        if (this._backCount <= 0) {
          this._videoSceneManager.showVideo(() => {
            this._backCount++;
            this._backDotText.text = `${this._backCount}`;
          });
        } else {
          if (!this._boxManager.canBackBox())
            return;
          this._backCount--;
          this._backDotText.text = `${this._backCount || "+"}`;
          this._boxManager.backBox();
        }
      });
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  ButtonManager = __decorateClass([
    regClass6("zAq3YGC5RxGCijKXoK-HHA")
  ], ButtonManager);

  // src/GameMain/GoodsManager.ts
  var { regClass: regClass7, property: property7 } = Laya;
  var GoodsManager = class extends Laya.Script {
    constructor() {
      super(...arguments);
      /** 记录所有的卡片数据 */
      this._goodsList = [];
      this._isPlayingAnimation = false;
      this._backGoodInfo = null;
      this._backGoodCoverInfo = [];
      this._stopClick = false;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      const Background = this.owner.parent || Assert.ChildNotNull;
      const ButtonGroup = Background.getChildByName("ButtonGroup") || Assert.ChildNotNull;
      this._ButtonManager = ButtonGroup.getComponent(ButtonManager) || Assert.ComponentNotNull;
      const Box = Background.getChildByName("Box") || Assert.ChildNotNull;
      this._BoxManger = Box.getComponent(BoxManager) || Assert.ComponentNotNull;
    }
    level2Show(callBack) {
      const jsonData = '{"respCode":"1000","respMsg":"成功","goodArray":{"1":[{"name":"bee","width":60,"height":66,"x":110,"y":159,"canClick":false},{"name":"book","width":60,"height":66,"x":170,"y":159,"canClick":false},{"name":"carrot","width":60,"height":66,"x":230,"y":159,"canClick":false},{"name":"chicken","width":60,"height":66,"x":290,"y":159,"canClick":false},{"name":"bee","width":60,"height":66,"x":110,"y":225,"canClick":false},{"name":"gift","width":60,"height":66,"x":170,"y":225,"canClick":false},{"name":"carrot","width":60,"height":66,"x":230,"y":225,"canClick":false},{"name":"chicken","width":60,"height":66,"x":290,"y":225,"canClick":false},{"name":"bee","width":60,"height":66,"x":110,"y":291,"canClick":false},{"name":"gift","width":60,"height":66,"x":170,"y":291,"canClick":false},{"name":"carrot","width":60,"height":66,"x":230,"y":291,"canClick":false},{"name":"chicken","width":60,"height":66,"x":290,"y":291,"canClick":false},{"name":"tree","width":60,"height":66,"x":60,"y":399,"canClick":false},{"name":"bee","width":60,"height":66,"x":330,"y":399,"canClick":false}],"2":[{"name":"gift","width":60,"height":66,"x":140,"y":192,"canClick":false},{"name":"cabbage","width":60,"height":66,"x":200,"y":192,"canClick":false},{"name":"carrot","width":60,"height":66,"x":260,"y":192,"canClick":false},{"name":"bee","width":60,"height":66,"x":140,"y":258,"canClick":false},{"name":"tree","width":60,"height":66,"x":200,"y":258,"canClick":false},{"name":"carrot","width":60,"height":66,"x":260,"y":258,"canClick":false},{"name":"book","width":60,"height":66,"x":60,"y":404,"canClick":false},{"name":"carrot","width":60,"height":66,"x":330,"y":404,"canClick":false}],"3":[{"name":"milk","width":60,"height":66,"x":170,"y":225,"canClick":false},{"name":"cabbage","width":60,"height":66,"x":230,"y":225,"canClick":false},{"name":"cabbage","width":60,"height":66,"x":60,"y":409,"canClick":false},{"name":"cabbage","width":60,"height":66,"x":330,"y":409,"canClick":false}],"4":[{"name":"milk","width":60,"height":66,"x":140,"y":192,"canClick":false},{"name":"cabbage","width":60,"height":66,"x":200,"y":192,"canClick":false},{"name":"carrot","width":60,"height":66,"x":260,"y":192,"canClick":false},{"name":"bee","width":60,"height":66,"x":140,"y":258,"canClick":false},{"name":"gift","width":60,"height":66,"x":200,"y":258,"canClick":false},{"name":"carrot","width":60,"height":66,"x":260,"y":258,"canClick":false},{"name":"book","width":60,"height":66,"x":60,"y":404,"canClick":false},{"name":"carrot","width":60,"height":66,"x":330,"y":404,"canClick":false}],"5":[{"name":"milk","width":60,"height":66,"x":110,"y":159,"canClick":false},{"name":"cabbage","width":60,"height":66,"x":170,"y":159,"canClick":false},{"name":"carrot","width":60,"height":66,"x":230,"y":159,"canClick":false},{"name":"chicken","width":60,"height":66,"x":290,"y":159,"canClick":false},{"name":"bee","width":60,"height":66,"x":110,"y":225,"canClick":false},{"name":"gift","width":60,"height":66,"x":170,"y":225,"canClick":false},{"name":"carrot","width":60,"height":66,"x":230,"y":225,"canClick":false},{"name":"chicken","width":60,"height":66,"x":290,"y":225,"canClick":false},{"name":"bee","width":60,"height":66,"x":110,"y":291,"canClick":false},{"name":"gift","width":60,"height":66,"x":170,"y":291,"canClick":false},{"name":"carrot","width":60,"height":66,"x":230,"y":291,"canClick":false},{"name":"chicken","width":60,"height":66,"x":290,"y":291,"canClick":false},{"name":"tree","width":60,"height":66,"x":60,"y":399,"canClick":false},{"name":"bee","width":60,"height":66,"x":330,"y":399,"canClick":false}],"6":[{"name":"book","width":60,"height":66,"x":80,"y":126,"canClick":false},{"name":"cabbage","width":60,"height":66,"x":140,"y":126,"canClick":false},{"name":"carrot","width":60,"height":66,"x":200,"y":126,"canClick":false},{"name":"chicken","width":60,"height":66,"x":260,"y":126,"canClick":false},{"name":"gift","width":60,"height":66,"x":320,"y":126,"canClick":false},{"name":"bee","width":60,"height":66,"x":80,"y":192,"canClick":false},{"name":"gift","width":60,"height":66,"x":140,"y":192,"canClick":false},{"name":"carrot","width":60,"height":66,"x":200,"y":192,"canClick":false},{"name":"chicken","width":60,"height":66,"x":260,"y":192,"canClick":false},{"name":"gift","width":60,"height":66,"x":320,"y":192,"canClick":false},{"name":"bee","width":60,"height":66,"x":80,"y":258,"canClick":false},{"name":"gift","width":60,"height":66,"x":140,"y":258,"canClick":false},{"name":"carrot","width":60,"height":66,"x":200,"y":258,"canClick":false},{"name":"chicken","width":60,"height":66,"x":260,"y":258,"canClick":false},{"name":"gift","width":60,"height":66,"x":320,"y":258,"canClick":false},{"name":"grass","width":60,"height":66,"x":80,"y":324,"canClick":false},{"name":"tree","width":60,"height":66,"x":140,"y":324,"canClick":false},{"name":"grass","width":60,"height":66,"x":200,"y":324,"canClick":false},{"name":"tree","width":60,"height":66,"x":260,"y":324,"canClick":false},{"name":"grass","width":60,"height":66,"x":320,"y":324,"canClick":false},{"name":"gift","width":60,"height":66,"x":60,"y":394,"canClick":false},{"name":"book","width":60,"height":66,"x":330,"y":394,"canClick":false}],"7":[{"name":"milk","width":60,"height":66,"x":110,"y":159,"canClick":false},{"name":"cabbage","width":60,"height":66,"x":170,"y":159,"canClick":false},{"name":"carrot","width":60,"height":66,"x":230,"y":159,"canClick":false},{"name":"chicken","width":60,"height":66,"x":290,"y":159,"canClick":false},{"name":"bee","width":60,"height":66,"x":110,"y":225,"canClick":false},{"name":"gift","width":60,"height":66,"x":170,"y":225,"canClick":false},{"name":"carrot","width":60,"height":66,"x":230,"y":225,"canClick":false},{"name":"chicken","width":60,"height":66,"x":290,"y":225,"canClick":false},{"name":"bee","width":60,"height":66,"x":110,"y":291,"canClick":false},{"name":"gift","width":60,"height":66,"x":170,"y":291,"canClick":false},{"name":"carrot","width":60,"height":66,"x":230,"y":291,"canClick":false},{"name":"chicken","width":60,"height":66,"x":290,"y":291,"canClick":false},{"name":"tree","width":60,"height":66,"x":60,"y":399,"canClick":false},{"name":"bee","width":60,"height":66,"x":330,"y":399,"canClick":false}],"8":[{"name":"milk","width":60,"height":66,"x":140,"y":192,"canClick":false},{"name":"cabbage","width":60,"height":66,"x":200,"y":192,"canClick":false},{"name":"carrot","width":60,"height":66,"x":260,"y":192,"canClick":false},{"name":"bee","width":60,"height":66,"x":140,"y":258,"canClick":false},{"name":"gift","width":60,"height":66,"x":200,"y":258,"canClick":false},{"name":"carrot","width":60,"height":66,"x":260,"y":258,"canClick":false},{"name":"book","width":60,"height":66,"x":60,"y":404,"canClick":false},{"name":"carrot","width":60,"height":66,"x":330,"y":404,"canClick":false}],"9":[{"name":"milk","width":60,"height":66,"x":170,"y":225,"canClick":true},{"name":"cabbage","width":60,"height":66,"x":230,"y":225,"canClick":true},{"name":"cabbage","width":60,"height":66,"x":60,"y":409,"canClick":true},{"name":"cabbage","width":60,"height":66,"x":330,"y":409,"canClick":true}]}}';
      const result = JSON.parse(jsonData);
      if (result.respCode == "1000") {
        const goodArray = result.goodArray;
        for (let item in goodArray) {
          this._goodsList.push(goodArray[item]);
        }
      }
      this.refreshGoods();
      this.owner.removeChildren(0, this.owner.numChildren);
      const stageWidth = Laya.stage.width;
      for (let i = 0; i < this._goodsList.length; i++) {
        let indexGoods = this._goodsList[i];
        for (let j = 0; j < indexGoods.length; j++) {
          const goods = indexGoods[j];
          const newCard = new Laya.Sprite();
          newCard.x = goods.x + stageWidth;
          newCard.y = goods.y;
          newCard.width = goods.width;
          newCard.height = goods.height;
          newCard.loadImage(`./resources/images/GameMain/${goods.name}.png`);
          newCard.name = goods.name;
          newCard.zOrder = i;
          if (!goods.canClick) {
            const shadow = new Laya.Sprite();
            shadow.name = "shadow";
            shadow.width = goods.width;
            shadow.height = goods.height;
            shadow.loadImage(`./resources/images/GameMain/shadow.png`);
            newCard.addChild(shadow);
          }
          this.owner.addChild(newCard);
          Laya.Tween.to(
            newCard,
            { x: goods.x },
            500,
            null,
            Laya.Handler.create(this, () => {
              if (i === this._goodsList.length - 1 && j === indexGoods.length - 1) {
                callBack && callBack();
              }
              newCard.on(Laya.Event.CLICK, (event) => {
                event.stopPropagation();
                if (!goods.canClick || this._stopClick) {
                  return;
                }
                if (this._BoxManger.canAddMore()) {
                  this._goodsList[i].splice(j, 1);
                  this._BoxManger.addGoods(goods);
                  this._showCoverGoods(goods, [i, j]);
                  this._draw();
                } else {
                  this._BoxManger.addGoods(goods);
                }
              });
            })
          );
        }
      }
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate() {
    }
    _draw() {
      this.owner.removeChildren(0, this.owner.numChildren);
      for (let i = 0; i < this._goodsList.length; i++) {
        let indexGoods = this._goodsList[i];
        for (let j = 0; j < indexGoods.length; j++) {
          const goods = indexGoods[j];
          const newCard = new Laya.Sprite();
          newCard.x = goods.x;
          newCard.y = goods.y;
          newCard.width = goods.width;
          newCard.height = goods.height;
          newCard.loadImage(`./resources/images/GameMain/${goods.name}.png`);
          newCard.name = goods.name;
          if (!goods.canClick) {
            const shadow = new Laya.Sprite();
            shadow.name = "shadow";
            shadow.width = goods.width;
            shadow.height = goods.height;
            shadow.loadImage(`./resources/images/GameMain/shadow.png`);
            newCard.addChild(shadow);
          }
          newCard.on(Laya.Event.CLICK, (event) => {
            event.stopPropagation();
            if (!goods.canClick || this._stopClick) {
              return;
            }
            if (this._BoxManger.canAddMore()) {
              this._goodsList[i].splice(j, 1);
              this._BoxManger.addGoods(goods);
              this._showCoverGoods(goods, [i, j]);
              this._draw();
            } else {
              this._BoxManger.addGoods(goods);
            }
          });
          this.owner.addChild(newCard);
        }
      }
    }
    Level1Show() {
      const jsonData = '{"respCode":"1000","respMsg":"成功","goodArray":{"1":[{"name":"corn","width":60,"height":66,"x":70,"y":100,"canClick":false},{"name":"corn","width":60,"height":66,"x":200,"y":100,"canClick":false},{"name":"corn","width":60,"height":66,"x":330,"y":100,"canClick":false},{"name":"corn","width":60,"height":66,"x":70,"y":220,"canClick":false},{"name":"carrot","width":60,"height":66,"x":200,"y":220,"canClick":false},{"name":"corn","width":60,"height":66,"x":330,"y":220,"canClick":false},{"name":"carrot","width":60,"height":66,"x":70,"y":340,"canClick":false},{"name":"carrot","width":60,"height":66,"x":200,"y":340,"canClick":false},{"name":"corn","width":60,"height":66,"x":330,"y":340,"canClick":false}],"2":[{"name":"grass","width":60,"height":66,"x":70,"y":130,"canClick":true},{"name":"grass","width":60,"height":66,"x":70,"y":250,"canClick":true},{"name":"grass","width":60,"height":66,"x":70,"y":350,"canClick":true},{"name":"carrot","width":60,"height":66,"x":200,"y":130,"canClick":true},{"name":"grass","width":60,"height":66,"x":200,"y":250,"canClick":true},{"name":"grass","width":60,"height":66,"x":200,"y":350,"canClick":true},{"name":"carrot","width":60,"height":66,"x":330,"y":130,"canClick":true},{"name":"grass","width":60,"height":66,"x":330,"y":250,"canClick":true},{"name":"carrot","width":60,"height":66,"x":330,"y":350,"canClick":true}]}}';
      const result = JSON.parse(jsonData);
      if (result.respCode == "1000") {
        const goodArray = result.goodArray;
        for (let item in goodArray) {
          this._goodsList.push(goodArray[item]);
        }
      }
      this.refreshGoods();
      this.owner.removeChildren(0, this.owner.numChildren);
      for (let i = 0; i < this._goodsList.length; i++) {
        let indexGoods = this._goodsList[i];
        indexGoods.sort((a, b) => {
          if (a.y > b.y) {
            return -1;
          } else if (a.y < b.y) {
            return 1;
          } else {
            if (a.x > b.x) {
              return 1;
            } else {
              return -1;
            }
          }
        });
        let tempIndex = 0;
        const showOneCard = (index) => {
          const goods = indexGoods[index];
          const newCard = new Laya.Sprite();
          newCard.x = goods.x;
          newCard.y = -goods.height;
          newCard.width = goods.width;
          newCard.height = goods.height;
          newCard.loadImage(`./resources/images/GameMain/${goods.name}.png`);
          newCard.name = goods.name;
          newCard.zOrder = i;
          this.owner.addChild(newCard);
          Laya.Tween.to(
            newCard,
            { y: goods.y },
            150,
            null,
            Laya.Handler.create(this, () => {
              if (!goods.canClick) {
                const shadow = new Laya.Sprite();
                shadow.name = "shadow";
                shadow.width = goods.width;
                shadow.height = goods.height;
                shadow.loadImage(`./resources/images/GameMain/shadow.png`);
                shadow.alpha = 0;
                newCard.addChild(shadow);
                Laya.Tween.to(shadow, { alpha: 1 }, 200);
              }
              newCard.on(Laya.Event.CLICK, (event) => {
                event.stopPropagation();
                if (!goods.canClick || this._stopClick) {
                  return;
                }
                if (this._BoxManger.canAddMore()) {
                  this._goodsList[i].splice(index, 1);
                  this._BoxManger.addGoods(goods);
                  this._showCoverGoods(goods, [i, index]);
                  this._draw();
                } else {
                  this._BoxManger.addGoods(goods);
                }
              });
              tempIndex++;
              if (tempIndex < indexGoods.length) {
                showOneCard(tempIndex);
              }
            })
          );
        };
        showOneCard(tempIndex);
      }
    }
    _showCoverGoods(selectGoods, index) {
      this._backGoodInfo = { good: selectGoods, lineIndex: index[0] };
      this._backGoodCoverInfo = [];
      const line = index[0];
      if (line !== 0) {
        const nextIndex = line - 1;
        const coverGoods = [];
        for (let i = 0; i < this._goodsList[nextIndex].length; i++) {
          if (this._calLength(
            this._goodsList[nextIndex][i].x,
            this._goodsList[nextIndex][i].y,
            selectGoods.x,
            selectGoods.y
          ) <= 4356) {
            coverGoods.push({ line: nextIndex, row: i });
          }
        }
        for (let i = 0; i < coverGoods.length; i++) {
          let currentCoverGoods = true;
          for (let j = 0; j < this._goodsList[line].length; j++) {
            if (this._calLength(
              this._goodsList[nextIndex][coverGoods[i].row].x,
              this._goodsList[nextIndex][coverGoods[i].row].y,
              this._goodsList[line][j].x,
              this._goodsList[line][j].y
            ) < 4356) {
              currentCoverGoods = false;
              break;
            }
          }
          if (currentCoverGoods) {
            this._backGoodCoverInfo.push({
              line: nextIndex,
              row: coverGoods[i].row,
              good: this._goodsList[nextIndex][coverGoods[i].row]
            });
            this._goodsList[nextIndex][coverGoods[i].row].canClick = true;
          }
        }
      }
    }
    _calLength(x1, y1, x2, y2) {
      return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
    }
    goodsClear() {
      for (let i = 0; i < this._goodsList.length; i++) {
        if (this._goodsList[i].length !== 0) {
          return false;
        }
      }
      return true;
    }
    /* public refreshGoods() {
        const goodsListStack: string[] = [];
        for (let i = 0; i < this._goodsList.length; i++) {
            for (let j = 0; j < this._goodsList[i].length; j++) {
                goodsListStack.push(this._goodsList[i][j].name);
            }
        }
        for (let i = 0; i < this._goodsList.length; i++) {
            for (let j = 0; j < this._goodsList[i].length; j++) {
                this._goodsList[i][j].name = goodsListStack.pop();
            }
        }
        this._draw();
    } */
    refreshGoods() {
      const goodsListStack = [];
      for (let i = 0; i < this._goodsList.length; i++) {
        for (let j = 0; j < this._goodsList[i].length; j++) {
          goodsListStack.push(this._goodsList[i][j].name);
        }
      }
      for (let i = goodsListStack.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [goodsListStack[i], goodsListStack[j]] = [goodsListStack[j], goodsListStack[i]];
      }
      for (let i = 0; i < this._goodsList.length; i++) {
        for (let j = 0; j < this._goodsList[i].length; j++) {
          this._goodsList[i][j].name = goodsListStack.pop();
        }
      }
      this._draw();
    }
    pushGoods(goods, ifCover, callBack, args) {
      if (ifCover) {
        for (let i = 0; i < this._goodsList[this._goodsList.length - 1].length; i++) {
          this._goodsList[this._goodsList.length - 1][i].canClick = false;
        }
      }
      this._goodsList.push(goods);
      callBack && callBack();
      this._draw();
    }
    checkSameBackGood(good) {
      if (good.name === this._backGoodInfo.good.name) {
        return true;
      } else {
        return false;
      }
    }
    backGoodFirst() {
      this._stopClick = true;
      for (let i = 0; i < this._backGoodCoverInfo.length; i++) {
        this._goodsList[this._backGoodCoverInfo[i].line][this._backGoodCoverInfo[i].row].canClick = false;
      }
      this._draw();
    }
    backGoodSecond() {
      this._goodsList[this._backGoodInfo.lineIndex].push(this._backGoodInfo.good);
      this._backGoodCoverInfo = [];
      this._backGoodInfo = null;
      this._stopClick = false;
      this._draw();
    }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  GoodsManager = __decorateClass([
    regClass7("fhtui7KOS2KhA_MYTu6SJA")
  ], GoodsManager);

  // src/GameMain/LevelUpManager.ts
  var { regClass: regClass8, property: property8 } = Laya;
  var LevelUpManager = class extends Laya.Script {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      this._LevelUpBackground = this.owner.getChildByName("LevelUpBackground") || Assert.ChildNotNull;
      this._blackBackground = this.owner.getChildByName("blackBackground") || Assert.ChildNotNull;
      this._blackBackground.on(Laya.Event.CLICK, this, (event) => {
        event.stopPropagation();
      });
    }
    show() {
      this._LevelUpBackground.x = Laya.stage.width;
      this._blackBackground.alpha = 0;
      this.owner.visible = true;
      Laya.Tween.to(this._blackBackground, { alpha: 1 }, 500);
      Laya.Tween.to(
        this._LevelUpBackground,
        { x: 117 },
        800,
        null,
        Laya.Handler.create(this, () => {
          setTimeout(() => {
            Laya.Tween.to(this._blackBackground, { alpha: 0 }, 500);
            Laya.Tween.to(
              this._LevelUpBackground,
              { x: 234 - Laya.stage.width },
              800,
              null,
              Laya.Handler.create(this, () => {
                this.owner.visible = false;
              })
            );
          }, 1500);
        })
      );
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  LevelUpManager = __decorateClass([
    regClass8("3eqZ6PvaS8SYV3eYlAX8oA")
  ], LevelUpManager);

  // src/GameMain/GameMainManager.ts
  var { regClass: regClass9, property: property9 } = Laya;
  var GameMainManager = class extends Laya.Script {
    constructor() {
      super(...arguments);
      /** 当前关卡等级 */
      this._nowLevel = 1;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      const GoodsBox = this.owner.getChildByName("Goods") || Assert.ChildNotNull;
      this._goodsManagerScript = GoodsBox.getComponent(GoodsManager) || Assert.ComponentNotNull;
      const LevelUpBox = this.owner.getChildByName("LevelUp");
      this._levelUpManagerScript = LevelUpBox.getComponent(LevelUpManager) || Assert.ComponentNotNull;
      this.getIntoLevel1();
      const GameWin = this.owner.getChildByName("GameWin") || Assert.ChildNotNull;
      this._gameWinManagerScript = GameWin.getComponent(GameWinManager) || Assert.ComponentNotNull;
      MusicManager.getInstance().playGameMainMusic();
    }
    getIntoLevel1() {
      this._nowLevel = 1;
      Laya.stage.event("resetLevel");
      this._goodsManagerScript.Level1Show();
    }
    nextLevel() {
      switch (this._nowLevel) {
        case 1:
          Laya.stage.event("showGetIntoNextLevel");
          this._nowLevel = 2;
          this._goodsManagerScript.level2Show(() => {
            this._levelUpManagerScript.show();
          });
          break;
        case 2:
          this._gameWinManagerScript.showGameWin();
          break;
        default:
          console.warn("错误的数据");
      }
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  GameMainManager = __decorateClass([
    regClass9("6dbKpwYqQNezQ-ahb1y2mQ")
  ], GameMainManager);

  // src/GameMain/GameOverManager.ts
  var { regClass: regClass10, property: property10 } = Laya;
  var GameOverManager = class extends Laya.Script {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      const GameBackground = this.owner.parent || Assert.ChildNotNull;
      this._gameMainManager = GameBackground.getComponent(GameMainManager) || Assert.ComponentNotNull;
      this._LevelUpBackground = this.owner.getChildByName("LevelUpBackground") || Assert.ChildNotNull;
      this._blackBackground = this.owner.getChildByName("blackBackground") || Assert.ChildNotNull;
      this._ButtonGroup = this.owner.getChildByName("ButtonGroup") || Assert.ChildNotNull;
      this._LittleTitle = this._LevelUpBackground.getChildByName("LittleTitle") || Assert.ChildNotNull;
      this._blackBackground.on(Laya.Event.CLICK, this, (event) => {
        event.stopPropagation();
      });
      const Reset = this._ButtonGroup.getChildByName("Reset") || Assert.ChildNotNull;
      Reset.on(Laya.Event.CLICK, this, (event) => {
        event.stopPropagation();
        Laya.Scene.open("./Scenes/GameMain.ls", true);
      });
      const BackHome = this._ButtonGroup.getChildByName("BackHome") || Assert.ChildNotNull;
      BackHome.on(Laya.Event.CLICK, this, (event) => {
        event.stopPropagation();
        Laya.Scene.open("./Scenes/GameHome.ls", true);
      });
    }
    /** 因为卡槽满了而游戏结束 */
    cardSlotFull() {
      this._LevelUpBackground.y = 420;
      this._blackBackground.alpha = 0;
      this._ButtonGroup.visible = false;
      this._LittleTitle.text = `累计已挑战${GameDate.getInstance().incrementPlayTimes()}次`;
      this.owner.visible = true;
      Laya.Tween.to(this._blackBackground, { alpha: 1 }, 500);
      Laya.Tween.to(
        this._LevelUpBackground,
        { y: 242 },
        800,
        null,
        Laya.Handler.create(this, () => {
          this._ButtonGroup.visible = true;
        })
      );
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  GameOverManager = __decorateClass([
    regClass10("gKiQYZHhT2Gd98HlvHuLxQ")
  ], GameOverManager);

  // src/GameMain/RevivePageManager.ts
  var { regClass: regClass11, property: property11 } = Laya;
  var RevivePageManager = class extends Laya.Script {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      const GameBackground = this.owner.parent || Assert.ChildNotNull;
      const Background = this.owner.getChildByName("Background") || Assert.ChildNotNull;
      const CloseButton = Background.getChildByName("CloseButton") || Assert.ChildNotNull;
      const VideoButton = Background.getChildByName("VideoButton") || Assert.ChildNotNull;
      const RefuseButton = Background.getChildByName("RefuseButton") || Assert.ChildNotNull;
      const GameOver = GameBackground.getChildByName("GameOver") || Assert.ChildNotNull;
      const VideoScene = GameBackground.getChildByName("VideoScene") || Assert.ChildNotNull;
      const Box = GameBackground.getChildByName("Box") || Assert.ChildNotNull;
      const BoxManagerScript = Box.getComponent(BoxManager) || Assert.ComponentNotNull;
      this._videoSceneManage = VideoScene.getComponent(VideoSceneManager) || Assert.ComponentNotNull;
      this._gameOverManager = GameOver.getComponent(GameOverManager) || Assert.ComponentNotNull;
      CloseButton.on(Laya.Event.CLICK, () => {
        this._gameOver();
      });
      RefuseButton.on(Laya.Event.CLICK, () => {
        this._gameOver();
      });
      VideoButton.on(Laya.Event.CLICK, () => {
        this._videoSceneManage.showVideo(() => {
          BoxManagerScript.pushBox();
          this.owner.visible = false;
        });
      });
    }
    showReviePage() {
      this.owner.visible = true;
    }
    _gameOver() {
      this.owner.visible = false;
      this._gameOverManager.cardSlotFull();
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  RevivePageManager = __decorateClass([
    regClass11("KOojrA_1QOG578-hYrt5Lg")
  ], RevivePageManager);

  // src/GameMain/BoxManager.ts
  var { regClass: regClass12, property: property12 } = Laya;
  var BoxManager = class extends Laya.Script {
    constructor() {
      super(...arguments);
      /** 用于存储记录盒子中的卡片数据 */
      this._boxList = [];
      /** 可以复活的次数 */
      this._canReviveNumbers = 1;
      this._pushCount = 0;
      this._backGoodInfo = null;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      const Background = this.owner.parent || Assert.ChildNotNull;
      this._gameMainManager = Background.getComponent(GameMainManager) || Assert.ComponentNotNull;
      const Goods = Background.getChildByName("Goods") || Assert.ChildNotNull;
      this._GoodsManager = Goods.getComponent(GoodsManager) || Assert.ChildNotNull;
      this._Choosed = this.owner.getChildByName("Choosed") || Assert.ChildNotNull;
      const GameOver = Background.getChildByName("GameOver") || Assert.ChildNotNull;
      this._gameOverManager = GameOver.getComponent(GameOverManager) || Assert.ComponentNotNull;
      const RevivePage = Background.getChildByName("RevivePage") || Assert.ChildNotNull;
      this._revivePageManager = RevivePage.getComponent(RevivePageManager) || Assert.ComponentNotNull;
    }
    canAddMore() {
      return this._boxList.length < 7;
    }
    addGoods(goods) {
      if (this._boxList.length > 6) {
        if (this._canReviveNumbers > 0) {
          this._revivePageManager.showReviePage();
          this._canReviveNumbers--;
        } else {
          this._gameOverManager.cardSlotFull();
        }
      } else {
        MusicManager.getInstance().playBasketballSound();
        let count = 0;
        let pushIndex = 0;
        for (let i = 0; i < this._boxList.length; i++) {
          if (this._boxList[i].name === goods.name) {
            count++;
            pushIndex = i + 1;
          }
        }
        this._backGoodInfo = goods;
        const newGood = new Laya.Sprite();
        newGood.x = goods.x;
        newGood.y = goods.y;
        newGood.width = goods.width;
        newGood.height = goods.height;
        newGood.loadImage(`./resources/images/GameMain/${goods.name}.png`);
        this._Choosed.addChild(newGood);
        switch (count) {
          case 0:
            this._boxList.push(goods);
            newGood.name = `${goods.name}1`;
            pushIndex = this._boxList.length - 1;
            break;
          case 1:
            this._boxList.splice(pushIndex, 0, goods);
            newGood.name = `${goods.name}2`;
            break;
          case 2:
            this._boxList.splice(pushIndex, 0, goods);
            newGood.name = `${goods.name}3`;
            break;
          default:
            console.warn("异常数据");
        }
        Laya.Tween.to(
          newGood,
          { x: 21 + 60 * pushIndex, y: 563 },
          200,
          null,
          new Laya.Handler(this, () => {
            if (count == 2) {
              let minu = 3;
              let minuIndex = [];
              for (let i = 0; i < this._boxList.length; i++) {
                if (this._boxList[i].name === goods.name) {
                  minu--;
                  minuIndex.push(i);
                }
                if (minu === 0) {
                  break;
                }
              }
              while (minuIndex.length > 0) {
                this._boxList.splice(minuIndex.pop(), 1);
              }
              this._backGoodInfo = null;
              let card1 = this._Choosed.getChildByName(`${goods.name}1`);
              let card2 = this._Choosed.getChildByName(`${goods.name}2`);
              let card3 = this._Choosed.getChildByName(`${goods.name}3`);
              card1.visible = false;
              card2.visible = false;
              card3.visible = false;
              Laya.loader.load("./prefabs/DisAppearAnimation.lh").then((res) => {
                const DisappearAnimationSprite = res.create();
                this.owner.addChild(DisappearAnimationSprite);
                const DisappearAnimationControl = DisappearAnimationSprite.getComponent(DisappearAnimation) || Assert.ComponentNotNull;
                DisappearAnimationSprite.y = 563;
                DisappearAnimationControl.showDisappearAnimation(card1.x, () => {
                  DisappearAnimationSprite.removeSelf();
                });
              });
              for (let i = 0; i < this._boxList.length; i++) {
                let rightItem = null;
                if (i - 1 >= 0 && this._boxList[i - 1].name === this._boxList[i].name) {
                  rightItem = this._Choosed.getChildByName(`${this._boxList[i].name}2`) || Assert.ChildNotNull;
                } else {
                  rightItem = this._Choosed.getChildByName(`${this._boxList[i].name}1`) || Assert.ChildNotNull;
                }
                Laya.Tween.to(
                  rightItem,
                  {},
                  300,
                  null,
                  Laya.Handler.create(this, () => {
                    Laya.Tween.to(rightItem, { x: 21 + 60 * i }, 100);
                  })
                );
              }
              card1.removeSelf();
              card2.removeSelf();
              card3.removeSelf();
              setTimeout(() => {
                if (this._boxList.length == 0 && this._GoodsManager.goodsClear()) {
                  this._gameMainManager.nextLevel();
                }
              }, 500);
            }
          })
        );
        for (let i = this._boxList.length - 1; i > pushIndex; i--) {
          let rightItem = null;
          if (i - 1 >= 0 && this._boxList[i - 1].name === this._boxList[i].name) {
            rightItem = this._Choosed.getChildByName(`${this._boxList[i].name}2`) || Assert.ChildNotNull;
          } else {
            rightItem = this._Choosed.getChildByName(`${this._boxList[i].name}1`) || Assert.ChildNotNull;
          }
          Laya.Tween.to(rightItem, { x: 21 + 60 * i }, 100);
        }
      }
    }
    canPushBox() {
      if (this._boxList.length >= 3) {
        return true;
      } else {
        return false;
      }
    }
    pushBox() {
      let result = [];
      if (!this.canPushBox()) {
        return result;
      }
      if (this._boxList.length <= 3) {
        this._backGoodInfo = null;
      }
      const good1 = this._Choosed.getChildByName(`${this._boxList[0].name}1`) || Assert.ChildNotNull;
      let good2 = null;
      let good3 = null;
      if (this._boxList[0].name === this._boxList[1].name) {
        good2 = this._Choosed.getChildByName(`${this._boxList[1].name}2`) || Assert.ChildNotNull;
        good3 = this._Choosed.getChildByName(`${this._boxList[2].name}1`) || Assert.ChildNotNull;
        const nextGood3 = this._Choosed.getChildByName(`${this._boxList[2].name}2`);
        if (nextGood3) {
          nextGood3.name = `${this._boxList[2].name}1`;
        }
      } else {
        good2 = this._Choosed.getChildByName(`${this._boxList[1].name}1`) || Assert.ChildNotNull;
        if (this._boxList[1].name === this._boxList[2].name) {
          good3 = this._Choosed.getChildByName(`${this._boxList[2].name}2`) || Assert.ChildNotNull;
        } else {
          good3 = this._Choosed.getChildByName(`${this._boxList[2].name}1`) || Assert.ChildNotNull;
          const nextGood3 = this._Choosed.getChildByName(`${this._boxList[2].name}2`);
          if (nextGood3) {
            nextGood3.name = `${this._boxList[2].name}1`;
          }
        }
      }
      good1.name = "good1";
      good2.name = "good2";
      good3.name = "good3";
      if (this._pushCount % 2 === 0) {
        Laya.Tween.to(good1, { x: 130, y: 430 }, 300);
        Laya.Tween.to(good2, { x: 200, y: 430 }, 300);
        Laya.Tween.to(
          good3,
          { x: 270, y: 430 },
          300,
          null,
          Laya.Handler.create(this, () => {
            this._GoodsManager.pushGoods(result, this._pushCount > 1, () => {
              good1.removeSelf();
              good2.removeSelf();
              good3.removeSelf();
            });
          })
        );
        result.push(
          {
            name: this._boxList[0].name,
            canClick: true,
            x: 130,
            y: 430,
            width: this._boxList[0].width,
            height: this._boxList[0].height
          },
          {
            name: this._boxList[1].name,
            canClick: true,
            x: 200,
            y: 430,
            width: this._boxList[1].width,
            height: this._boxList[1].height
          },
          {
            name: this._boxList[2].name,
            canClick: true,
            x: 270,
            y: 430,
            width: this._boxList[2].width,
            height: this._boxList[2].height
          }
        );
      } else {
        Laya.Tween.to(good1, { x: 130, y: 460 }, 300);
        Laya.Tween.to(good2, { x: 200, y: 460 }, 300);
        Laya.Tween.to(
          good3,
          { x: 270, y: 460 },
          300,
          null,
          Laya.Handler.create(this, () => {
            this._GoodsManager.pushGoods(result, this._pushCount > 1, () => {
              good1.removeSelf();
              good2.removeSelf();
              good3.removeSelf();
            });
          })
        );
        result.push(
          {
            name: this._boxList[0].name,
            canClick: true,
            x: 130,
            y: 460,
            width: this._boxList[0].width,
            height: this._boxList[0].height
          },
          {
            name: this._boxList[1].name,
            canClick: true,
            x: 200,
            y: 460,
            width: this._boxList[1].width,
            height: this._boxList[1].height
          },
          {
            name: this._boxList[2].name,
            canClick: true,
            x: 270,
            y: 460,
            width: this._boxList[2].width,
            height: this._boxList[2].height
          }
        );
      }
      this._boxList.splice(0, 3);
      for (let i = 0; i < this._boxList.length; i++) {
        let item = void 0;
        if (i > 0 && this._boxList[i - 1].name === this._boxList[i].name) {
          item = this._Choosed.getChildByName(`${this._boxList[i].name}2`) || Assert.ChildNotNull;
        } else {
          item = this._Choosed.getChildByName(`${this._boxList[i].name}1`) || Assert.ChildNotNull;
        }
        Laya.Tween.to(item, { x: 21 + 60 * i }, 100, null);
      }
      this._pushCount++;
      return result;
    }
    canBackBox() {
      if (this._backGoodInfo && this._GoodsManager.checkSameBackGood(this._backGoodInfo)) {
        return true;
      } else {
        return false;
      }
    }
    backBox() {
      console.log("backBox");
      if (!this.canBackBox() || !this._GoodsManager.checkSameBackGood(this._backGoodInfo)) {
        return;
      }
      let backItem = this._Choosed.getChildByName(`${this._backGoodInfo.name}2`);
      if (!backItem) {
        backItem = this._Choosed.getChildByName(`${this._backGoodInfo.name}1`);
      }
      this._GoodsManager.backGoodFirst();
      for (let i = this._boxList.length - 1; i >= 0; i--) {
        if (this._boxList[i].name === this._backGoodInfo.name) {
          this._boxList.splice(i, 1);
          break;
        }
      }
      Laya.Tween.to(
        backItem,
        { x: this._backGoodInfo.x, y: this._backGoodInfo.y },
        100,
        null,
        Laya.Handler.create(this, () => {
          this._backGoodInfo = null;
          this._GoodsManager.backGoodSecond();
          backItem.removeSelf();
        })
      );
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  BoxManager = __decorateClass([
    regClass12("N7cLl8qIRBO86ziDYL5uHg")
  ], BoxManager);

  // src/GameMain/TopItem/LevelShowManager.ts
  var { regClass: regClass13, property: property13 } = Laya;
  var LevelShowManager = class extends Laya.Script {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      this._Dot = this.owner.getChildByName("Dot") || Assert.ChildNotNull;
      Laya.stage.on("showGetIntoNextLevel", this, this._getIntoLevel2);
      Laya.stage.on("resetLevel", this, this._reset);
    }
    _getIntoLevel2() {
      this._Dot.visible = false;
    }
    _reset() {
      this._Dot.visible = true;
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  LevelShowManager = __decorateClass([
    regClass13("2NX2ZGA9TdGF5OQ5Dwruig")
  ], LevelShowManager);

  // src/GameMain/TopItem/TimeShowManager.ts
  var { regClass: regClass14, property: property14 } = Laya;
  var TimeShowManager = class extends Laya.Script {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      const Time = this.owner.getChildByName("Time") || Assert.ChildNotNull;
      const currentDate = /* @__PURE__ */ new Date();
      Time.text = `- ${currentDate.getMonth() + 1}月${currentDate.getDate()}日 -`;
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  TimeShowManager = __decorateClass([
    regClass14("hl-CPMHMRzqVwbZ0QULSYQ")
  ], TimeShowManager);
})();
