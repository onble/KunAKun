import { Assert } from "../utils/Assert";

const { regClass, property } = Laya;

@regClass()
export class VideoSceneManager extends Laya.Script {
    declare owner: Laya.Scene;
    private _video: Laya.VideoNode;
    private _info: Laya.Text;
    private _countTime: number;
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this._video = (this.owner.getChildByName("Video") as Laya.VideoNode) || Assert.ChildNotNull;
        const TopLeft = (this.owner.getChildByName("TopLeft") as Laya.Image) || Assert.ChildNotNull;
        const TopLeftRect = (TopLeft.getChildByName("Rect") as Laya.Sprite) || Assert.ChildNotNull;
        this._info = (TopLeftRect.getChildByName("info") as Laya.Text) || Assert.ChildNotNull;
        const RightLeft = (this.owner.getChildByName("RightLeft") as Laya.Sprite) || Assert.ChildNotNull;
        RightLeft.on(Laya.Event.CLICK, () => {
            this._video.pause();
            this.owner.visible = false;
        });
    }
    public showVideo(awardCallback?: Function) {
        console.log("showVideo");
        this.owner.visible = true;
        Laya.loader.load("./resources/videos/1.mp4").then(() => {
            this._video.play();
            this._video.loop = true;
            this._countTime = 30;
            const timer = setInterval(() => {
                this._countTime--;
                if (this._countTime <= 0) {
                    clearInterval(timer);
                    this._video.pause();
                    // 去获得奖励
                    awardCallback && awardCallback();
                }
                this._info.text = `倒计时${this._countTime}秒`;
            }, 1000);
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
