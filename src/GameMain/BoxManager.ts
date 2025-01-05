import { Assert } from "../utils/Assert";
import { GoodsManager } from "./GoodsManager";
import { good } from "./type";

const { regClass, property } = Laya;

@regClass()
export class BoxManager extends Laya.Script {
    declare owner: Laya.Sprite;
    /** 用于存储记录盒子中的卡片数据 */
    private _boxList: good[] = [];
    private _Choose: Laya.List;
    /** 控制消除物品的管理类 */
    private _GoodsManager: GoodsManager;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        /** 游戏背景底图 */
        const Background = (this.owner.parent as Laya.Image) || Assert.ChildNotNull;
        /** 待消除物品容器 */
        const Goods = (Background.getChildByName("Goods") as Laya.Box) || Assert.ChildNotNull;
        this._GoodsManager = Goods.getComponent(GoodsManager) || Assert.ChildNotNull;
        this._Choose = (this.owner.getChildByName("Choose") as Laya.List) || Assert.ChildNotNull;
        this._updateRenderArray();
        this._Choose.renderHandler = new Laya.Handler(this, (item: Laya.Sprite, index: number) => {
            const goods = this._boxList[index];
            if (!goods) {
                return;
            }
            item.loadImage(`./resources/images/GameMain/${goods.name}.png`);
        });
    }
    private _updateRenderArray() {
        this._Choose.repeatX = this._boxList.length;
        this._Choose.array = this._boxList;
    }

    public addGoods(goods: good): boolean {
        if (this._boxList.length > 6) {
            alert("超过指定数量");
            return false;
        } else {
            this._boxList.push(goods);
            this._updateRenderArray();
            this._clearSame();
            return true;
        }
    }
    private _clearSame() {
        const boxArray: any = {};
        // 判断篮子里的图片名字是否重合，重合+1，到3消除
        this._boxList.forEach((it: good, index: number) => {
            boxArray[it.name] = boxArray[it.name] ? boxArray[it.name] + 1 : 1;
        });
        // 消除目标
        let target: string;
        for (let item in boxArray) {
            if (boxArray[item] == 3) {
                target = item;
                this._boxList = this._boxList.filter((it: good) => {
                    return it.name != item;
                });
                this._updateRenderArray();
                // 判断是否完成游戏
                if (this._boxList.length === 0 && this._GoodsManager.goodsClear()) {
                    setTimeout(() => {
                        alert("you win");
                    }, 500);
                }
            }
        }
        console.log("消除", target);
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
