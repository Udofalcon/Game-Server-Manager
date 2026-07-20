class Info {
    version;
    servername;
    description;
    worldguid;

    constructor({
        version,
        servername,
        description,
        worldguid,
    }) {
        this.version = version;
        this.servername = servername;
        this.description = description;
        this.worldguid = worldguid;
    }
}

module.exports = Info;