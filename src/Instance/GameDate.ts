export class GameDate {
    // 静态属性，用于存储单例实例
    private static _instance: GameDate;
    public static getInstance(): GameDate {
        if (!this._instance) {
            this._instance = new GameDate();
        }
        return this._instance;
    }
    // 私有构造函数，防止外部实例化
    private constructor() {
        this._playTimes = Laya.LocalStorage.getJSON("playTimes") || 0;
        this._isPass = Laya.LocalStorage.getJSON("isPass") || 0;
    }
    // 玩家游玩次数
    private _playTimes: number = 0;
    // 玩家是否通关
    private _isPass: boolean = false;

    /** 获取游玩次数的方法 */
    public getPlayTimes(): number {
        return this._playTimes;
    }

    /** 增加游玩次数的方法 */
    public incrementPlayTimes(): number {
        this._playTimes++;
        // 同时将数据存储到本地
        Laya.LocalStorage.setJSON("playTimes", this._playTimes.toString());
        return this._playTimes;
    }
    /** 获取玩家是否通关 */
    public getIsPass(): boolean {
        return this._isPass;
    }
    /** 设置玩家通关 */
    public setIsPass(isPass: boolean): void {
        this._isPass = isPass;
        // 同时将数据存储到本地
        Laya.LocalStorage.setJSON("isPass", this._isPass.toString());
    }
}
