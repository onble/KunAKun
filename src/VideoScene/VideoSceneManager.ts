import { MusicManager } from "../Instance/MusicManager";
import { Assert } from "../utils/Assert";

const { regClass, property } = Laya;

@regClass()
export class VideoSceneManager extends Laya.Script {
    declare owner: Laya.Scene;
    /** 视频节点 */
    private _video: Laya.VideoNode;
    /** 左上角广告后面的文本信息 */
    private _info: Laya.Text;
    /** 倒计时的数字 */
    private _countTime: number;
    /** 控制定时器 */
    private _timer: number;
    /** 毛玻璃UI */
    private _frostedGlass: Laya.Box;
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.owner.visible = false;
        this._video = (this.owner.getChildByName("Video") as Laya.VideoNode) || Assert.ChildNotNull;
        const TopLeft = (this.owner.getChildByName("TopLeft") as Laya.Image) || Assert.ChildNotNull;
        const TopLeftRect = (TopLeft.getChildByName("Rect") as Laya.Sprite) || Assert.ChildNotNull;
        this._info = (TopLeftRect.getChildByName("info") as Laya.Text) || Assert.ChildNotNull;
        const RightLeft = (this.owner.getChildByName("RightLeft") as Laya.Sprite) || Assert.ChildNotNull;
        RightLeft.on(Laya.Event.CLICK, () => {
            if (this._video) {
                this._video.pause();
            }
            clearInterval(this._timer);
            this.owner.visible = false;
            MusicManager.getInstance().musicContinue();
        });
        this._frostedGlass = (this.owner.getChildByName("FrostedGlass") as Laya.Box) || Assert.ChildNotNull;
    }
    private _randomVideoSource(): string {
        const list: string[] = ["./resources/videos/1.mp4", "./resources/videos/2.mp4"];
        // 生成一个 0 到 list.length - 1 之间的随机整数作为索引
        const randomIndex = Math.floor(Math.random() * list.length);
        // 根据随机索引从数组中获取元素
        return list[randomIndex];
    }
    public showVideo(awardCallback: Function) {
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
                    // 去获得奖励
                    awardCallback && awardCallback();
                }
            }, 1000);
        });
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    onDisable(): void {
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
}
