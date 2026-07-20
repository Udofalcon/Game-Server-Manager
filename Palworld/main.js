const Info = require('./schema/info');
const Players = require('./schema/players');

class Palworld {
    static async GetInfo() {
        let url = `${process.env.PALWORLD_API_URL}/v1/api/info`;
        let config = {
            method: 'GET',
            maxBodyLength: Infinity,
            headers: {
                Accept: 'application/json', 
                Authorization: `Basic ${process.env.PALWORLD_API_AUTH}`,
            },
        };

        try {
            const response = await fetch(url, config);
            const info = new Info(await response.json());

            console.log(info);
        } catch (error) {
            console.error('Palworld', 'Get Server Info', error);
        }
    }

    static async GetPlayers() {
        let url = `${process.env.PALWORLD_API_URL}/v1/api/players`;
        let config = {
            method: 'GET',
            maxBodyLength: Infinity,
            headers: {
                Accept: 'application/json', 
                Authorization: `Basic ${process.env.PALWORLD_API_AUTH}`,
            },
        };

        try {
            const response = await fetch(url, config);
            const players = new Players(await response.json());

            console.log(players);
        } catch (error) {
            console.error('Palworld', 'Get Player List', error);
        }
    }
}

module.exports = Palworld;