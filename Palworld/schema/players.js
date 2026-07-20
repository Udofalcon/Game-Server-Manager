class Players {
    players;

    constructor({
        players,
    }) {
        this.players = players.map(z => new Player(z));
    }
}

class Player {
    name;
    accountName;
    playerId;
    userId;
    ip;
    ping;
    location_x;
    location_y;
    level;
    building_count;

    constructor({
        name,
        accountName,
        playerId,
        userId,
        ip,
        ping,
        location_x,
        location_y,
        level,
        building_count,
    }) {
        this.name = name;
        this.accountName = accountName;
        this.playerId = playerId;
        this.userId = userId;
        this.ip = ip;
        this.ping = ping;
        this.location_x = location_x;
        this.location_y = location_y;
        this.level = level;
        this.building_count = building_count;
    }
}

module.exports = Players;