import { Assert } from "../utils/Assert";
import { DisappearAnimation } from "./DisappearAnimation";
import { GameMainManager } from "./GameMainManager";
import { GameOverManager } from "./GameOverManager";
import { GoodsManager } from "./GoodsManager";
import { RevivePageManager } from "./RevivePageManager";
import { good } from "./type";

const { regClass, property } = Laya;

@regClass()
export class BoxManager extends Laya.Script {
    declare owner: Laya.Sprite;
    /** 用于存储记录盒子中的卡片数据 */
    private _boxList: good[] = [];
    /** 控制消除物品的管理类 */
    private _GoodsManager: GoodsManager;
    private _Choosed: Laya.Sprite;
    private _gameMainManager: GameMainManager;
    private _gameOverManager: GameOverManager;
    private _canReviveNumbers: number = 1;
    private _revivePageManager: RevivePageManager;
    private _pushCount: number = 0;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        /** 游戏背景底图 */
        const Background = (this.owner.parent as Laya.Image) || Assert.ChildNotNull;
        this._gameMainManager = Background.getComponent(GameMainManager) || Assert.ComponentNotNull;
        /** 待消除物品容器 */
        const Goods = (Background.getChildByName("Goods") as Laya.Box) || Assert.ChildNotNull;
        this._GoodsManager = Goods.getComponent(GoodsManager) || Assert.ChildNotNull;
        this._Choosed = (this.owner.getChildByName("Choosed") as Laya.Sprite) || Assert.ChildNotNull;
        const GameOver = (Background.getChildByName("GameOver") as Laya.Box) || Assert.ChildNotNull;
        this._gameOverManager = GameOver.getComponent(GameOverManager) || Assert.ComponentNotNull;
        const RevivePage = Background.getChildByName("RevivePage") || Assert.ChildNotNull;
        this._revivePageManager = RevivePage.getComponent(RevivePageManager) || Assert.ComponentNotNull;
    }
    public canAddMore(): boolean {
        return this._boxList.length < 7;
    }

    public addGoods(goods: good): void {
        if (this._boxList.length > 6) {
            // alert("超过指定数量");
            if (this._canReviveNumbers > 0) {
                // 去调用显示选择复活的页面
                this._revivePageManager.showReviePage();
            } else {
                this._gameOverManager.cardSlotFull();
            }
            // TODO:直接进行失败处理
            // return false;
        } else {
            let count = 0;
            let pushIndex = 0;
            // 在存储的数据中找看是否有相同的卡牌
            for (let i = 0; i < this._boxList.length; i++) {
                if (this._boxList[i].name === goods.name) {
                    count++;
                    pushIndex = i + 1;
                }
            }
            // 创建一个新的卡牌，然后移动到木栏中
            const newGood = new Laya.Sprite();
            newGood.x = goods.x;
            newGood.y = goods.y;
            // newGood.y = 563;
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
                        let card1 = this._Choosed.getChildByName(`${goods.name}1`) as Laya.Sprite;
                        let card2 = this._Choosed.getChildByName(`${goods.name}2`) as Laya.Sprite;
                        let card3 = this._Choosed.getChildByName(`${goods.name}3`) as Laya.Sprite;
                        // 将相同的进行隐藏后移除
                        card1.visible = false;
                        card2.visible = false;
                        card3.visible = false;
                        // 将消除的动画进行播放
                        Laya.loader.load("./prefabs/DisAppearAnimation.lh").then((res: Laya.Prefab) => {
                            const DisappearAnimationSprite = res.create() as Laya.Sprite;
                            this.owner.addChild(DisappearAnimationSprite);
                            const DisappearAnimationControl =
                                DisappearAnimationSprite.getComponent(DisappearAnimation) || Assert.ComponentNotNull;
                            DisappearAnimationSprite.y = 563;
                            DisappearAnimationControl.showDisappearAnimation(card1.x);
                        });
                        // 将右边的向左移动
                        for (let i = this._boxList.length - 1; i > pushIndex - 2; i--) {
                            let rightItem: Laya.Sprite = null;
                            if (i - 1 >= 0 && this._boxList[i - 1].name === this._boxList[i].name) {
                                rightItem =
                                    (this._Choosed.getChildByName(`${this._boxList[i].name}2`) as Laya.Sprite) ||
                                    Assert.ChildNotNull;
                            } else {
                                rightItem =
                                    (this._Choosed.getChildByName(`${this._boxList[i].name}1`) as Laya.Sprite) ||
                                    Assert.ChildNotNull;
                            }
                            Laya.Tween.to(
                                rightItem,
                                {},
                                300,
                                null,
                                Laya.Handler.create(this, () => {
                                    Laya.Tween.to(rightItem, { x: rightItem.x - 180 }, 100);
                                })
                            );
                        }
                        card1.removeSelf();
                        card2.removeSelf();
                        card3.removeSelf();
                        this._boxList = this._boxList.filter((it: good) => {
                            return it.name != goods.name;
                        });
                        setTimeout(() => {
                            // 判断是否完成游戏
                            if (this._boxList.length == 0 && this._GoodsManager.goodsClear()) {
                                // 通知游戏管理器进入下一关
                                // alert("通关了");
                                this._gameMainManager.nextLevel();
                            }
                        }, 500);
                    }
                })
            );
            // 将右边的卡牌进行向右移动
            for (let i = this._boxList.length - 1; i > pushIndex; i--) {
                let rightItem: Laya.Sprite = null;
                if (i - 1 >= 0 && this._boxList[i - 1].name === this._boxList[i].name) {
                    rightItem =
                        (this._Choosed.getChildByName(`${this._boxList[i].name}2`) as Laya.Sprite) ||
                        Assert.ChildNotNull;
                } else {
                    rightItem =
                        (this._Choosed.getChildByName(`${this._boxList[i].name}1`) as Laya.Sprite) ||
                        Assert.ChildNotNull;
                }
                Laya.Tween.to(rightItem, { x: 21 + 60 * i }, 100);
            }
        }
    }
    public canPushBox(): boolean {
        if (this._boxList.length >= 3) {
            return true;
        } else {
            return false;
        }
    }
    public pushBox(): good[] {
        let result: good[] = [];
        if (!this.canPushBox()) {
            return result;
        }
        // 将左边的三个卡牌移动到中间
        const good1 = (this._Choosed.getChildByName(`${this._boxList[0].name}1`) as Laya.Sprite) || Assert.ChildNotNull;
        let good2 = null;
        let good3 = null;
        if (this._boxList[0].name === this._boxList[1].name) {
            good2 = (this._Choosed.getChildByName(`${this._boxList[1].name}2`) as Laya.Sprite) || Assert.ChildNotNull;
            good3 = (this._Choosed.getChildByName(`${this._boxList[2].name}1`) as Laya.Sprite) || Assert.ChildNotNull;
            // 对后面那一个进行检查
            const nextGood3 = this._Choosed.getChildByName(`${this._boxList[2].name}2`) as Laya.Sprite;
            if (nextGood3) {
                nextGood3.name = `${this._boxList[2].name}1`;
            }
        } else {
            good2 = (this._Choosed.getChildByName(`${this._boxList[1].name}1`) as Laya.Sprite) || Assert.ChildNotNull;
            if (this._boxList[1].name === this._boxList[2].name) {
                good3 =
                    (this._Choosed.getChildByName(`${this._boxList[2].name}2`) as Laya.Sprite) || Assert.ChildNotNull;
            } else {
                good3 =
                    (this._Choosed.getChildByName(`${this._boxList[2].name}1`) as Laya.Sprite) || Assert.ChildNotNull;
                // 对后面那一个进行检查
                const nextGood3 = this._Choosed.getChildByName(`${this._boxList[2].name}2`) as Laya.Sprite;
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
                        // good1.destroy(true);
                        // good2.destroy(true);
                        // good3.destroy(true);
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
                    height: this._boxList[0].height,
                },
                {
                    name: this._boxList[1].name,
                    canClick: true,
                    x: 200,
                    y: 430,
                    width: this._boxList[1].width,
                    height: this._boxList[1].height,
                },
                {
                    name: this._boxList[2].name,
                    canClick: true,
                    x: 270,
                    y: 430,
                    width: this._boxList[2].width,
                    height: this._boxList[2].height,
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
                        // good1.destroy(true);
                        // good2.destroy(true);
                        // good3.destroy(true);
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
                    height: this._boxList[0].height,
                },
                {
                    name: this._boxList[1].name,
                    canClick: true,
                    x: 200,
                    y: 460,
                    width: this._boxList[1].width,
                    height: this._boxList[1].height,
                },
                {
                    name: this._boxList[2].name,
                    canClick: true,
                    x: 270,
                    y: 460,
                    width: this._boxList[2].width,
                    height: this._boxList[2].height,
                }
            );
        }
        this._boxList.splice(0, 3);
        // 将右边的卡牌进行向左移动
        for (let i = 0; i < this._boxList.length; i++) {
            let item = undefined;
            if (i > 0 && this._boxList[i - 1].name === this._boxList[i].name) {
                item =
                    (this._Choosed.getChildByName(`${this._boxList[i].name}2`) as Laya.Sprite) || Assert.ChildNotNull;
            } else {
                item =
                    (this._Choosed.getChildByName(`${this._boxList[i].name}1`) as Laya.Sprite) || Assert.ChildNotNull;
            }
            Laya.Tween.to(item, { x: 21 + 60 * i }, 100, null);
        }

        this._pushCount++;
        return result;
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
}
