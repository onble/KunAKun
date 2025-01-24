import { Assert } from "../utils/Assert";
import { BoxManager } from "./BoxManager";
import { GoodsManager } from "./GoodsManager";

const { regClass, property } = Laya;

@regClass()
export class ButtonManager extends Laya.Script {
    declare owner: Laya.Box;
    /** 可以刷新的次数 */
    private _refresh: number = 99;
    private _refreshButton: Laya.Image;
    private _refreshDotText: Laya.Text;
    private _GoodsManager: GoodsManager;
    private _boxManager: BoxManager;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        /** 游戏背景底图 */
        const Background = (this.owner.parent as Laya.Image) || Assert.ChildNotNull;
        /** 待消除物品组件 */
        const Goods = (Background.getChildByName("Goods") as Laya.Box) || Assert.ChildNotNull;
        this._GoodsManager = Goods.getComponent(GoodsManager) || Assert.ComponentNotNull;
        const Box = (Background.getChildByName("Box") as Laya.Sprite) || Assert.ChildNotNull;
        this._boxManager = Box.getComponent(BoxManager) || Assert.ComponentNotNull;
        this._refreshButton = (this.owner.getChildByName("Refresh") as Laya.Image) || Assert.ChildNotNull;
        const refreshDot = (this._refreshButton.getChildByName("Dot") as Laya.Sprite) || Assert.ChildNotNull;
        this._refreshDotText = (refreshDot.getChildByName("dotNumber") as Laya.Text) || Assert.ChildNotNull;
        this._refreshDotText.text = `${this._refresh}`;
        this._refreshButton.on(Laya.Event.CLICK, this, () => {
            if (this._refresh <= 0) return;
            this._refresh--;
            this._refreshDotText.text = `${this._refresh}`;
            this._GoodsManager.refreshGoods();
        });
        const Push = (this.owner.getChildByName("Push") as Laya.Image) || Assert.ChildNotNull;
        Push.on(Laya.Event.CLICK, this, () => {
            if (!this._boxManager.canPushBox()) return;
            this._boxManager.pushBox();
        });
        const Back = (this.owner.getChildByName("Back") as Laya.Image) || Assert.ChildNotNull;
        Back.on(Laya.Event.CLICK, this, () => {
            if (!this._boxManager.canBackBox()) return;
            this._boxManager.backBox();
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
}
