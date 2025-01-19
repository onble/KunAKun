import { Assert } from "../utils/Assert";

const { regClass, property } = Laya;

@regClass()
export class GameOverManager extends Laya.Script {
    declare owner: Laya.Box;
    private _LevelUpBackground: Laya.Image;
    private _blackBackground: Laya.Box;
    private _ButtonGroup: Laya.Box;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this._LevelUpBackground = (this.owner.getChildByName("LevelUpBackground") as Laya.Image) || Assert.ChildNotNull;
        this._blackBackground = (this.owner.getChildByName("blackBackground") as Laya.Box) || Assert.ChildNotNull;
        this._ButtonGroup = (this.owner.getChildByName("ButtonGroup") as Laya.Box) || Assert.ChildNotNull;
        // 监听鼠标事件，防止点击到下面的元素
        this._blackBackground.on(Laya.Event.CLICK, this, (event: Laya.Event) => {
            // 阻止事件继续冒泡
            event.stopPropagation();
        });
    }
    public cardSlotFull() {
        this._LevelUpBackground.y = 420;
        this._blackBackground.alpha = 0;
        this._ButtonGroup.visible = false;
        this.owner.visible = true;
        Laya.Tween.to(this._blackBackground, { alpha: 1 }, 500);
        Laya.Tween.to(
            this._LevelUpBackground,
            { y: 242 },
            800,
            null,
            Laya.Handler.create(this, () => {
                // 将按钮显示
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
}
