const { regClass, property } = Laya;

@regClass()
export class MusicManager extends Laya.Script {
    // 静态属性，用于存储单例实例
    private static _instance: MusicManager;
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
}
