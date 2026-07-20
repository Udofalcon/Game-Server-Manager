const Info = require('./schema/info');

class Palworld {
    static async GetServerInfo() {
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
}

module.exports = Palworld;