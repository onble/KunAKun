/**
 * 断言
 * 调用不同的属性，进行不同的断言，触发断言直接报错
 */
export abstract class Assert {
    private constructor() {}
    /**
     * 直接报错
     * 无法找到对应的子节点，请检查名称是否正确
     * 使用方法：this.txt_HeightScore = (this.owner.getChildByName("txt_HightScore") as Laya.Text) || Assert.ChildNotNull;
     */
    static get ChildNotNull(): never {
        // 立刻执行报错
        (() => {
            alert('无法找到对应的子节点，请检查名称是否正确。');
            throw new Error('无法找到对应的子节点，请检查名称是否正确。');
        })();
    }
    /**
     * 直接报错
     * 无法找到对应的子组件，请检查类型是否正确，脚本是否挂载
     * 使用方法：const autoMoveScript: AutoMove = car.getComponent(AutoMove) || Assert.ComponentNotNull;
     */
    static get ComponentNotNull(): never {
        // 立刻执行报错
        (() => {
            alert('无法找到对应的子组件，请检查名称是否正确。');
            throw new Error('无法找到对应的子组件，请检查名称是否正确。');
        })();
    }
}
