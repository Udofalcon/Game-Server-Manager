class GameData {
    Time;
    FPS;
    AverageFPS;
    ActorData;

    constructor({
        Time,
        FPS,
        AverageFPS,
        ActorData,
    }) {
        this.Time = Time;
        this.FPS = FPS;
        this.AverageFPS = AverageFPS;
        this.ActorData = ActorData;
    }
}

module.exports = GameData;