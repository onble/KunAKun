import { Assert } from "../utils/Assert";
import { BoxManager } from "./BoxManager";
import { ButtonManager } from "./ButtonManager";
import { good as Good } from "./type";

const { regClass, property } = Laya;

@regClass()
export class GoodsManager extends Laya.Script {
    declare owner: Laya.Box;
    /** 记录所有的卡片数据 */
    private _goodsList: Good[][] = [];
    private _ButtonManager: ButtonManager;
    private _BoxManger: BoxManager;
    private _isPlayingAnimation: boolean = false;
    private _backGoodInfo: { good: Good; lineIndex: number } = null;
    private _backGoodCoverInfo: { line: number; row: number; good: Good }[] = [];
    private _stopClick: boolean = false;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        /** 游戏背景底图 */
        const Background = (this.owner.parent as Laya.Image) || Assert.ChildNotNull;
        /** 按钮组件容器 */
        const ButtonGroup = (Background.getChildByName("ButtonGroup") as Laya.Box) || Assert.ChildNotNull;
        this._ButtonManager = ButtonGroup.getComponent(ButtonManager) || Assert.ComponentNotNull;
        const Box = (Background.getChildByName("Box") as Laya.Sprite) || Assert.ChildNotNull;
        this._BoxManger = Box.getComponent(BoxManager) || Assert.ComponentNotNull;
    }
    public level2Show(callBack?: Function) {
        const jsonData =
            '{"respCode":"1000","respMsg":"成功","goodArray":{"1":[{"name":"book","width":60,"height":66,"x":80,"y":126,"canClick":false},{"name":"cabbage","width":60,"height":66,"x":140,"y":126,"canClick":false},{"name":"carrot","width":60,"height":66,"x":200,"y":126,"canClick":false},{"name":"chicken","width":60,"height":66,"x":260,"y":126,"canClick":false},{"name":"gift","width":60,"height":66,"x":320,"y":126,"canClick":false},{"name":"bee","width":60,"height":66,"x":80,"y":192,"canClick":false},{"name":"gift","width":60,"height":66,"x":140,"y":192,"canClick":false},{"name":"carrot","width":60,"height":66,"x":200,"y":192,"canClick":false},{"name":"chicken","width":60,"height":66,"x":260,"y":192,"canClick":false},{"name":"gift","width":60,"height":66,"x":320,"y":192,"canClick":false},{"name":"bee","width":60,"height":66,"x":80,"y":258,"canClick":false},{"name":"gift","width":60,"height":66,"x":140,"y":258,"canClick":false},{"name":"carrot","width":60,"height":66,"x":200,"y":258,"canClick":false},{"name":"chicken","width":60,"height":66,"x":260,"y":258,"canClick":false},{"name":"gift","width":60,"height":66,"x":320,"y":258,"canClick":false},{"name":"grass","width":60,"height":66,"x":80,"y":324,"canClick":false},{"name":"tree","width":60,"height":66,"x":140,"y":324,"canClick":false},{"name":"grass","width":60,"height":66,"x":200,"y":324,"canClick":false},{"name":"tree","width":60,"height":66,"x":260,"y":324,"canClick":false},{"name":"grass","width":60,"height":66,"x":320,"y":324,"canClick":false},{"name":"gift","width":60,"height":66,"x":60,"y":394,"canClick":false},{"name":"book","width":60,"height":66,"x":330,"y":394,"canClick":false}],"2":[{"name":"milk","width":60,"height":66,"x":110,"y":159,"canClick":false},{"name":"cabbage","width":60,"height":66,"x":170,"y":159,"canClick":false},{"name":"carrot","width":60,"height":66,"x":230,"y":159,"canClick":false},{"name":"chicken","width":60,"height":66,"x":290,"y":159,"canClick":false},{"name":"bee","width":60,"height":66,"x":110,"y":225,"canClick":false},{"name":"gift","width":60,"height":66,"x":170,"y":225,"canClick":false},{"name":"carrot","width":60,"height":66,"x":230,"y":225,"canClick":false},{"name":"chicken","width":60,"height":66,"x":290,"y":225,"canClick":false},{"name":"bee","width":60,"height":66,"x":110,"y":291,"canClick":false},{"name":"gift","width":60,"height":66,"x":170,"y":291,"canClick":false},{"name":"carrot","width":60,"height":66,"x":230,"y":291,"canClick":false},{"name":"chicken","width":60,"height":66,"x":290,"y":291,"canClick":false},{"name":"tree","width":60,"height":66,"x":60,"y":399,"canClick":false},{"name":"bee","width":60,"height":66,"x":330,"y":399,"canClick":false}],"3":[{"name":"milk","width":60,"height":66,"x":140,"y":192,"canClick":false},{"name":"cabbage","width":60,"height":66,"x":200,"y":192,"canClick":false},{"name":"carrot","width":60,"height":66,"x":260,"y":192,"canClick":false},{"name":"bee","width":60,"height":66,"x":140,"y":258,"canClick":false},{"name":"gift","width":60,"height":66,"x":200,"y":258,"canClick":false},{"name":"carrot","width":60,"height":66,"x":260,"y":258,"canClick":false},{"name":"book","width":60,"height":66,"x":60,"y":404,"canClick":false},{"name":"carrot","width":60,"height":66,"x":330,"y":404,"canClick":false}],"4":[{"name":"milk","width":60,"height":66,"x":170,"y":225,"canClick":true},{"name":"cabbage","width":60,"height":66,"x":230,"y":225,"canClick":true},{"name":"cabbage","width":60,"height":66,"x":60,"y":409,"canClick":true},{"name":"cabbage","width":60,"height":66,"x":330,"y":409,"canClick":true}]}}';
        /** 解析获得的json数据 */
        const result: { respCode: string; respMas: string; goodArray: Good[][] } = JSON.parse(jsonData);
        if (result.respCode == "1000") {
            // 将json字符串中数据进行存储
            const goodArray = result.goodArray;
            // TODO:下面这个步骤有些不太必要
            for (let item in goodArray) {
                this._goodsList.push(goodArray[item]);
            }
        }
        // 清除上次渲染的
        this.owner.removeChildren(0, this.owner.numChildren);
        const stageWidth = Laya.stage.width;
        for (let i = 0; i < this._goodsList.length; i++) {
            // 记录每一层的数据
            let indexGoods = this._goodsList[i];
            for (let j = 0; j < indexGoods.length; j++) {
                const goods = indexGoods[j];
                const newCard = new Laya.Sprite();
                newCard.x = goods.x + stageWidth;
                newCard.y = goods.y;
                newCard.width = goods.width;
                newCard.height = goods.height;
                newCard.loadImage(`./resources/images/GameMain/${goods.name}.png`);
                newCard.name = goods.name;
                newCard.zOrder = i;
                if (!goods.canClick) {
                    // 如果不能点击，就增加阴影
                    const shadow = new Laya.Sprite();
                    shadow.name = "shadow";
                    shadow.width = goods.width;
                    shadow.height = goods.height;
                    shadow.loadImage(`./resources/images/GameMain/shadow.png`);
                    newCard.addChild(shadow);
                }
                this.owner.addChild(newCard);
                Laya.Tween.to(
                    newCard,
                    { x: goods.x },
                    500,
                    null,
                    Laya.Handler.create(this, () => {
                        if (i === this._goodsList.length - 1 && j === indexGoods.length - 1) {
                            callBack && callBack();
                        }
                        newCard.on(Laya.Event.CLICK, (event: Laya.Event) => {
                            event.stopPropagation();
                            if (!goods.canClick || this._stopClick) {
                                return;
                            }
                            if (this._BoxManger.canAddMore()) {
                                // 将自己从列表中删除
                                this._goodsList[i].splice(j, 1);
                                // 将信息通知给盒子管理器
                                this._BoxManger.addGoods(goods);
                                this._showCoverGoods(goods, [i, j]);
                                this._draw();
                            } else {
                                this._BoxManger.addGoods(goods);
                            }
                        });
                    })
                );
            }
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
    onUpdate(): void {}
    private _draw() {
        // 清除上次渲染的
        this.owner.removeChildren(0, this.owner.numChildren);
        for (let i = 0; i < this._goodsList.length; i++) {
            // 记录每一层的数据
            let indexGoods = this._goodsList[i];
            for (let j = 0; j < indexGoods.length; j++) {
                const goods = indexGoods[j];
                // 绘制卡片s
                const newCard = new Laya.Sprite();
                newCard.x = goods.x;
                newCard.y = goods.y;
                newCard.width = goods.width;
                newCard.height = goods.height;
                newCard.loadImage(`./resources/images/GameMain/${goods.name}.png`);
                newCard.name = goods.name;
                if (!goods.canClick) {
                    // 如果不能点击，就增加阴影
                    const shadow = new Laya.Sprite();
                    shadow.name = "shadow";
                    shadow.width = goods.width;
                    shadow.height = goods.height;
                    shadow.loadImage(`./resources/images/GameMain/shadow.png`);
                    newCard.addChild(shadow);
                }
                newCard.on(Laya.Event.CLICK, (event: Laya.Event) => {
                    event.stopPropagation();
                    if (!goods.canClick || this._stopClick) {
                        return;
                    }
                    if (this._BoxManger.canAddMore()) {
                        // 将自己从列表中删除
                        this._goodsList[i].splice(j, 1);
                        // 将信息通知给盒子管理器
                        this._BoxManger.addGoods(goods);
                        this._showCoverGoods(goods, [i, j]);
                        this._draw();
                    } else {
                        // 将信息通知给盒子管理器
                        this._BoxManger.addGoods(goods);
                    }
                });
                this.owner.addChild(newCard);
            }
        }
    }
    public Level1Show() {
        /** 模拟远程获得的随机数据 */
        const jsonData =
            '{"respCode":"1000","respMsg":"成功","goodArray":{"1":[{"name":"corn","width":60,"height":66,"x":70,"y":100,"canClick":false},{"name":"corn","width":60,"height":66,"x":200,"y":100,"canClick":false},{"name":"corn","width":60,"height":66,"x":330,"y":100,"canClick":false},{"name":"corn","width":60,"height":66,"x":70,"y":220,"canClick":false},{"name":"carrot","width":60,"height":66,"x":200,"y":220,"canClick":false},{"name":"corn","width":60,"height":66,"x":330,"y":220,"canClick":false},{"name":"carrot","width":60,"height":66,"x":70,"y":340,"canClick":false},{"name":"carrot","width":60,"height":66,"x":200,"y":340,"canClick":false},{"name":"corn","width":60,"height":66,"x":330,"y":340,"canClick":false}],"2":[{"name":"grass","width":60,"height":66,"x":70,"y":130,"canClick":true},{"name":"grass","width":60,"height":66,"x":70,"y":250,"canClick":true},{"name":"grass","width":60,"height":66,"x":70,"y":350,"canClick":true},{"name":"carrot","width":60,"height":66,"x":200,"y":130,"canClick":true},{"name":"grass","width":60,"height":66,"x":200,"y":250,"canClick":true},{"name":"grass","width":60,"height":66,"x":200,"y":350,"canClick":true},{"name":"carrot","width":60,"height":66,"x":330,"y":130,"canClick":true},{"name":"grass","width":60,"height":66,"x":330,"y":250,"canClick":true},{"name":"carrot","width":60,"height":66,"x":330,"y":350,"canClick":true}]}}';
        /** 解析获得的json数据 */
        const result: { respCode: string; respMas: string; goodArray: Good[][] } = JSON.parse(jsonData);
        if (result.respCode == "1000") {
            // 将json字符串中数据进行存储
            const goodArray = result.goodArray;
            // TODO:下面这个步骤有些不太必要
            for (let item in goodArray) {
                this._goodsList.push(goodArray[item]);
            }
        }
        // 清除上次渲染的
        this.owner.removeChildren(0, this.owner.numChildren);
        for (let i = 0; i < this._goodsList.length; i++) {
            // 记录每一层的数据
            let indexGoods = this._goodsList[i];
            // 首先对数据进行排序，靠下靠左的先出发
            indexGoods.sort((a, b) => {
                if (a.y > b.y) {
                    return -1;
                } else if (a.y < b.y) {
                    return 1;
                } else {
                    if (a.x > b.x) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
            });
            let tempIndex = 0;
            const showOneCard = (index: number) => {
                const goods = indexGoods[index];
                // 绘制卡片
                const newCard = new Laya.Sprite();
                newCard.x = goods.x;
                newCard.y = -goods.height;
                newCard.width = goods.width;
                newCard.height = goods.height;
                newCard.loadImage(`./resources/images/GameMain/${goods.name}.png`);
                newCard.name = goods.name;
                newCard.zOrder = i;
                this.owner.addChild(newCard);
                Laya.Tween.to(
                    newCard,
                    { y: goods.y },
                    150,
                    null,
                    Laya.Handler.create(this, () => {
                        if (!goods.canClick) {
                            // 如果不能点击，就增加阴影
                            const shadow = new Laya.Sprite();
                            shadow.name = "shadow";
                            shadow.width = goods.width;
                            shadow.height = goods.height;
                            shadow.loadImage(`./resources/images/GameMain/shadow.png`);
                            shadow.alpha = 0;
                            newCard.addChild(shadow);
                            Laya.Tween.to(shadow, { alpha: 1 }, 200);
                        }
                        newCard.on(Laya.Event.CLICK, (event: Laya.Event) => {
                            event.stopPropagation();
                            if (!goods.canClick || this._stopClick) {
                                return;
                            }
                            if (this._BoxManger.canAddMore()) {
                                // 将自己从列表中删除
                                this._goodsList[i].splice(index, 1);
                                // 将信息通知给盒子管理器
                                this._BoxManger.addGoods(goods);
                                this._showCoverGoods(goods, [i, index]);
                                this._draw();
                            } else {
                                // 将信息通知给盒子管理器
                                this._BoxManger.addGoods(goods);
                            }
                        });
                        // 让下一个动画出发
                        tempIndex++;
                        if (tempIndex < indexGoods.length) {
                            showOneCard(tempIndex);
                        }
                    })
                );
            };
            showOneCard(tempIndex);
        }
    }
    private _showCoverGoods(selectGoods: Good, index: number[]) {
        this._backGoodInfo = { good: selectGoods, lineIndex: index[0] };
        this._backGoodCoverInfo = [];
        const line = index[0];
        // 如果是这最后一层，也就是底层，就不要判断了
        if (line !== 0) {
            const nextIndex = line - 1;
            const coverGoods: { line: number; row: number }[] = [];
            for (let i = 0; i < this._goodsList[nextIndex].length; i++) {
                // 这个是在计算什么时候可以显示下一层
                // 我们看图理解一下
                // 我们可以看到这是三张叠在一张上
                // 那么怎么才算是绝对不覆盖
                // 那肯定就是不接触
                // 那么我们看一个图片。长宽是60*66聚集不接触也就是三角函数
                // a2 +b2 = c2
                // 但我们这么看其实不严谨
                // 因为我们只要他平行不接触也可以
                // a2 + 0 = c2
                // 0 + b2 = c2
                // 所以只要60的次方就行或者66的次方
                // 但为了绝对不接触，我们选中66的次方就可以了
                if (
                    this._calLength(
                        this._goodsList[nextIndex][i].x,
                        this._goodsList[nextIndex][i].y,
                        selectGoods.x,
                        selectGoods.y
                    ) < 4356
                ) {
                    // 接着获取被压在下面的图片
                    coverGoods.push({ line: nextIndex, row: i });
                }
            }
            // 判断被压在下面的图片是否要显现出来，并且可以点击
            for (let i = 0; i < coverGoods.length; i++) {
                let currentCoverGoods = true;
                for (let j = 0; j < this._goodsList[line].length; j++) {
                    if (
                        this._calLength(
                            this._goodsList[nextIndex][coverGoods[i].row].x,
                            this._goodsList[nextIndex][coverGoods[i].row].y,
                            this._goodsList[line][j].x,
                            this._goodsList[line][j].y
                        ) < 4356
                    ) {
                        currentCoverGoods = false;
                        break;
                    }
                }
                // 展示图片
                if (currentCoverGoods) {
                    // 将展示的图片信息进行记录
                    this._backGoodCoverInfo.push({
                        line: nextIndex,
                        row: coverGoods[i].row,
                        good: this._goodsList[nextIndex][coverGoods[i].row],
                    });
                    this._goodsList[nextIndex][coverGoods[i].row].canClick = true;
                }
            }
        }
    }
    private _calLength(x1: number, y1: number, x2: number, y2: number) {
        return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
    }
    public goodsClear(): boolean {
        for (let i = 0; i < this._goodsList.length; i++) {
            if (this._goodsList[i].length !== 0) {
                return false;
            }
        }
        return true;
    }
    public refreshGoods() {
        const goodsListStack: string[] = [];
        for (let i = 0; i < this._goodsList.length; i++) {
            for (let j = 0; j < this._goodsList[i].length; j++) {
                goodsListStack.push(this._goodsList[i][j].name);
            }
        }
        for (let i = 0; i < this._goodsList.length; i++) {
            for (let j = 0; j < this._goodsList[i].length; j++) {
                this._goodsList[i][j].name = goodsListStack.pop();
            }
        }
        this._draw();
    }
    public pushGoods(goods: Good[], ifCover: boolean, callBack?: Function, args?: any[]) {
        if (ifCover) {
            for (let i = 0; i < this._goodsList[this._goodsList.length - 1].length; i++) {
                this._goodsList[this._goodsList.length - 1][i].canClick = false;
            }
        }
        // 将新的good增加到列表中
        this._goodsList.push(goods);

        callBack && callBack();
        this._draw();
    }
    public checkSameBackGood(good: Good): boolean {
        if (good.name === this._backGoodInfo.good.name) {
            return true;
        } else {
            return false;
        }
    }
    public backGoodFirst() {
        this._stopClick = true;
        // 将原本被允许点击的卡牌改为不允许点击
        for (let i = 0; i < this._backGoodCoverInfo.length; i++) {
            this._goodsList[this._backGoodCoverInfo[i].line][this._backGoodCoverInfo[i].row].canClick = false;
        }
        this._draw();
    }
    public backGoodSecond() {
        // 将记录的撤回卡牌添加回列表中
        this._goodsList[this._backGoodInfo.lineIndex].push(this._backGoodInfo.good);
        // 将撤回卡牌的数据进行抹除
        this._backGoodCoverInfo = [];
        this._backGoodInfo = null;
        this._stopClick = false;
        this._draw();
    }

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}
