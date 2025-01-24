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
        this._playTimes = 0;
    }
    // 玩家游玩次数
    private _playTimes: number = 0;

    // 获取游玩次数的方法
    public getPlayTimes(): number {
        return this._playTimes;
    }

    // 增加游玩次数的方法
    public incrementPlayTimes(): number {
        this._playTimes++;
        return this._playTimes;
    }
}
