const { regClass, property } = Laya;

@regClass()
export class MusicManager extends Laya.Script {
    // 静态属性，用于存储单例实例
    private static _instance: MusicManager;
    private _basketballSound: Laya.SoundNode;
    private _yesSound: Laya.SoundNode;

    // 私有构造函数，防止外部实例化
    private constructor() {
        super();
        this._basketballSound = new Laya.SoundNode();
        this._basketballSound.source = "./resources/music/basketball1.MP3";
        this._basketballSound.loop = 1;
        Laya.stage.addChild(this._basketballSound);
        this._yesSound = new Laya.SoundNode();
        this._yesSound.source = "./resources/music/yes.MP3";
        this._yesSound.loop = 1;
        Laya.stage.addChild(this._yesSound);
    }
    public static getInstance(): MusicManager {
        if (!this._instance) {
            this._instance = new MusicManager();
        }
        return this._instance;
    }
    private _musicManager: Laya.SoundChannel;
    public playGameHomeMusic(): void {
        this._musicManager = Laya.SoundManager.playMusic("./resources/music/LaoSiJiTakeMeWithYou.mp3", 0);
    }
    public playGamePassMusic(): void {
        this._musicManager = Laya.SoundManager.playMusic("./resources/music/NeverGonnaGiveYouUp.mp3", 0);
    }
    public playGameMainMusic(): void {
        this._musicManager = Laya.SoundManager.playMusic("./resources/music/Remix1.mp3", 0);
    }
    public playBasketballSound(): void {
        this._basketballSound.play();
    }
    public playYesSound(): void {
        this._yesSound.play();
    }
    public musicPause(): void {
        this._musicManager.pause();
    }
    public musicContinue(): void {
        this._musicManager.resume();
    }
}
