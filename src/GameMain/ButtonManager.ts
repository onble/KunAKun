import { Assert } from "../utils/Assert";
import { VideoSceneManager } from "../VideoScene/VideoSceneManager";
import { BoxManager } from "./BoxManager";
import { GoodsManager } from "./GoodsManager";

const { regClass, property } = Laya;

@regClass()
export class ButtonManager extends Laya.Script {
    declare owner: Laya.Box;
    /** 可以洗牌的次数 */
    private _refresh: number = 0;
    /** 洗牌按钮 */
    private _refreshButton: Laya.Image;
    /** 洗牌文本 */
    private _refreshDotText: Laya.Text;
    /** 卡牌堆管理脚本 */
    private _GoodsManager: GoodsManager;
    /** 卡槽管理脚本 */
    private _boxManager: BoxManager;
    /** 移除道具数量 */
    private _pushCount: number = 0;
    /** 移除道具文本 */
    private _pushDotText: Laya.Text;
    /** 可撤回数量 */
    private _backCount: number = 0;
    /** 撤回文本 */
    private _backDotText: Laya.Text;
    /** 视频广告管理脚本 */
    private _videoSceneManager: VideoSceneManager;
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        /** 游戏背景底图 */
        const Background = (this.owner.parent as Laya.Image) || Assert.ChildNotNull;
        /** 播放广告的Box */
        const VideoScene = (Background.getChildByName("VideoScene") as Laya.Box) || Assert.ChildNotNull;
        this._videoSceneManager = VideoScene.getComponent(VideoSceneManager) || Assert.ComponentNotNull;
        /** 待消除物品组件 */
        const Goods = (Background.getChildByName("Goods") as Laya.Box) || Assert.ChildNotNull;
        this._GoodsManager = Goods.getComponent(GoodsManager) || Assert.ComponentNotNull;
        const Box = (Background.getChildByName("Box") as Laya.Sprite) || Assert.ChildNotNull;
        this._boxManager = Box.getComponent(BoxManager) || Assert.ComponentNotNull;
        this._refreshButton = (this.owner.getChildByName("Refresh") as Laya.Image) || Assert.ChildNotNull;
        const refreshDot = (this._refreshButton.getChildByName("Dot") as Laya.Sprite) || Assert.ChildNotNull;
        this._refreshDotText = (refreshDot.getChildByName("dotNumber") as Laya.Text) || Assert.ChildNotNull;
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
        const PushButton = (this.owner.getChildByName("Push") as Laya.Image) || Assert.ChildNotNull;
        const pushDot = (PushButton.getChildByName("Dot") as Laya.Sprite) || Assert.ChildNotNull;
        this._pushDotText = (pushDot.getChildByName("dotNumber") as Laya.Text) || Assert.ChildNotNull;
        this._pushDotText.text = `${this._pushCount || "+"}`;
        PushButton.on(Laya.Event.CLICK, this, () => {
            if (this._pushCount <= 0) {
                this._videoSceneManager.showVideo(() => {
                    this._pushCount++;
                    this._pushDotText.text = `${this._pushCount}`;
                });
            } else {
                if (!this._boxManager.canPushBox()) return;
                this._pushCount--;
                this._pushDotText.text = `${this._pushCount || "+"}`;
                this._boxManager.pushBox();
            }
        });
        const BackButton = (this.owner.getChildByName("Back") as Laya.Image) || Assert.ChildNotNull;
        const backDot = (BackButton.getChildByName("Dot") as Laya.Sprite) || Assert.ChildNotNull;
        this._backDotText = (backDot.getChildByName("dotNumber") as Laya.Text) || Assert.ChildNotNull;
        this._backDotText.text = `${this._backCount || "+"}`;
        BackButton.on(Laya.Event.CLICK, this, () => {
            if (this._backCount <= 0) {
                this._videoSceneManager.showVideo(() => {
                    this._backCount++;
                    this._backDotText.text = `${this._backCount}`;
                });
            } else {
                if (!this._boxManager.canBackBox()) return;
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
}
