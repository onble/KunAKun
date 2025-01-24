import { GameDate } from "../Instance/GameDate";
import { MusicManager } from "../Instance/MusicManager";
import { Main } from "../Main";
import { Assert } from "../utils/Assert";

const { regClass, property } = Laya;

@regClass()
export class GameHomeManager extends Laya.Script {
    declare owner: Laya.Sprite;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        const MainButton = (this.owner.getChildByName("MainButton") as Laya.Image) || Assert.ChildNotNull;
        MainButton.on(Laya.Event.CLICK, this, () => {
            Laya.Scene.open("./Scenes/GameMain.ls", true);
        });
        if (GameDate.getInstance().getIsPass()) {
            MusicManager.getInstance().playGamePassMusic();
        } else {
            // 播放背景音乐
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
}
