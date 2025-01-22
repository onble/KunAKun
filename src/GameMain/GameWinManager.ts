import { Assert } from "../utils/Assert";

const { regClass, property } = Laya;

@regClass()
export class GameWinManager extends Laya.Script {
    declare owner: Laya.Box;
    private _chicken1: Laya.Image;
    private _chicken2: Laya.Image;
    private _chicken3: Laya.Image;
    private _chicken4: Laya.Image;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        const Sunshine = (this.owner.getChildByName("Sunshine") as Laya.Image) || Assert.ChildNotNull;
        this._chicken1 = (Sunshine.getChildByName("chicken1") as Laya.Image) || Assert.ChildNotNull;
        this._chicken2 = (Sunshine.getChildByName("chicken2") as Laya.Image) || Assert.ChildNotNull;
        this._chicken3 = (Sunshine.getChildByName("chicken3") as Laya.Image) || Assert.ChildNotNull;
        this._chicken4 = (Sunshine.getChildByName("chicken4") as Laya.Image) || Assert.ChildNotNull;
        const BackHome = (this.owner.getChildByName("BackHome") as Laya.Image) || Assert.ChildNotNull;
        BackHome.on(Laya.Event.CLICK, () => {
            Laya.Scene.open("./Scenes/GameHome.ls", true);
        });
    }
    private _showChickenAnimation() {
        this._chicken3.visible = false;
        this._chicken4.visible = false;
        this._chicken2.x = 180;
        Laya.Tween.to(
            this._chicken2,
            { x: 208 },
            300,
            Laya.Ease.backOut,
            Laya.Handler.create(this, () => {
                this._chicken3.x = 80;
                this._chicken3.visible = true;
                Laya.Tween.to(
                    this._chicken3,
                    { x: 140 },
                    400,
                    Laya.Ease.backOut,
                    Laya.Handler.create(this, () => {
                        this._chicken4.x = -47;
                        this._chicken4.visible = true;
                        Laya.Tween.to(this._chicken4, { x: 73 }, 600, Laya.Ease.backOut);
                    })
                );
            })
        );
    }
    public showGameWin() {
        this.owner.visible = true;
        this._showChickenAnimation();
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
