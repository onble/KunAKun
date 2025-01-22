import { Assert } from "../utils/Assert";
import { VideoSceneManager } from "../VideoScene/VideoSceneManager";
import { GameOverManager } from "./GameOverManager";

const { regClass, property } = Laya;

@regClass()
export class RevivePageManager extends Laya.Script {
    declare owner: Laya.Box;
    private _gameOverManager: GameOverManager;
    private _videoSceneManage: VideoSceneManager;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        /** 游戏背景底图 */
        const GameBackground = (this.owner.parent as Laya.Image) || Assert.ChildNotNull;
        const Background = (this.owner.getChildByName("Background") as Laya.Image) || Assert.ChildNotNull;
        const CloseButton = (Background.getChildByName("CloseButton") as Laya.Image) || Assert.ChildNotNull;
        const VideoButton = (Background.getChildByName("VideoButton") as Laya.Image) || Assert.ChildNotNull;
        const RefuseButton = Background.getChildByName("RefuseButton") || Assert.ChildNotNull;
        const GameOver = (GameBackground.getChildByName("GameOver") as Laya.Box) || Assert.ChildNotNull;
        const VideoScene = (GameBackground.getChildByName("VideoScene") as Laya.Box) || Assert.ChildNotNull;
        this._videoSceneManage = VideoScene.getComponent(VideoSceneManager) || Assert.ComponentNotNull;
        this._gameOverManager = GameOver.getComponent(GameOverManager) || Assert.ComponentNotNull;
        CloseButton.on(Laya.Event.CLICK, () => {
            this._gameOver();
        });
        RefuseButton.on(Laya.Event.CLICK, () => {
            this._gameOver();
        });
        VideoButton.on(Laya.Event.CLICK, () => {
            console.log("跳转到视频页面");
            // 跳转到视频页面
            this._videoSceneManage.showVideo();
        });
    }
    public showReviePage(): void {
        this.owner.visible = true;
    }
    private _gameOver() {
        // 去调用显示游戏因为卡槽满了结束的页面
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
}
