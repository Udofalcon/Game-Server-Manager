class Metrics {
    serverfps;
    currentplayernum;
    serverframetime;
    maxplayernum;
    uptime;
    basecampnum;
    days;

    constructor({
        serverfps,
        currentplayernum,
        serverframetime,
        maxplayernum,
        uptime,
        basecampnum,
        days,
    }) {
        this.serverfps = serverfps;
        this.currentplayernum = currentplayernum;
        this.serverframetime = serverframetime;
        this.maxplayernum = maxplayernum;
        this.uptime = uptime;
        this.basecampnum = basecampnum;
        this.days = days;
    }
}

module.exports = Metrics;