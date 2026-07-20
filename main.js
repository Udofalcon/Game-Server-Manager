const Palworld = require('./Palworld/main');

async function main() {
    await Palworld.GetInfo();
    await Palworld.GetPlayers();
}

main();