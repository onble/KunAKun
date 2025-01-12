import { Assert } from "../utils/Assert";
import { DisappearAnimation } from "./DisappearAnimation";
import { GameMainManager } from "./GameMainManager";
import { GoodsManager } from "./GoodsManager";
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

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        /** 游戏背景底图 */
        const Background = (this.owner.parent as Laya.Image) || Assert.ChildNotNull;
        this._gameMainManager = Background.getComponent(GameMainManager) || Assert.ComponentNotNull;
        /** 待消除物品容器 */
        const Goods = (Background.getChildByName("Goods") as Laya.Box) || Assert.ChildNotNull;
        this._GoodsManager = Goods.getComponent(GoodsManager) || Assert.ChildNotNull;
        this._Choosed = (this.owner.getChildByName("Choosed") as Laya.Sprite) || Assert.ChildNotNull;
    }

    public addGoods(goods: good): void {
        if (this._boxList.length > 6) {
            alert("超过指定数量");
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
                Laya.Tween.to(rightItem, { x: rightItem.x + 60 }, 100);
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
    //onUpdate(): void {}

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}
