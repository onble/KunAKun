import { Assert } from "../utils/Assert";

const { regClass, property } = Laya;

@regClass()
export class DisappearAnimation extends Laya.Script {
    declare owner: Laya.Sprite;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        const Card1 = (this.owner.getChildByName("Card1") as Laya.Sprite) || Assert.ChildNotNull;
        const Card2 = (this.owner.getChildByName("Card2") as Laya.Sprite) || Assert.ChildNotNull;
        const Card3 = (this.owner.getChildByName("Card3") as Laya.Sprite) || Assert.ChildNotNull;
        this._showCardDisapperAnimation(Card1);
        this._showCardDisapperAnimation(Card2);
        this._showCardDisapperAnimation(Card3);
    }
    private _showCardDisapperAnimation(card: Laya.Sprite) {
        for (let i = 1; i <= 6; i++) {
            const Star = (card.getChildByName("Star" + i) as Laya.Image) || Assert.ChildNotNull;
            const randomAngle = Math.random() * 2 * Math.PI;
            const radius = 18;
            const centerX = 30;
            const centerY = 30;
            // 根据圆的参数方程计算坐标点
            const x = centerX + radius * Math.cos(randomAngle);
            const y = centerY + radius * Math.sin(randomAngle);
            Laya.Tween.to(
                Star,
                { x: x, y: y, alpha: 0, scaleX: 0.5, scaleY: 0.3, rotation: Math.random() * 90 },
                500,
                null,
                Laya.Handler.create(this, () => {
                    // this.owner.removeSelf();
                })
            );
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
