const InstaBot = require("./Structure/Client"),
    client = new InstaBot();

const util = require("util"),
    fs = require("fs"),
    readdir = util.promisify(fs.readdir);
require("dotenv").config();

const initialize = async () => {
    let directories = await readdir("./Commands/");
    directories.forEach(async (dir) => {
        let commands = await readdir("./Commands/" + dir + "/");
        commands.filter((cmd) => cmd.split(".").pop() === "js").forEach((cmd) => {
            const response = client.loadCommand("./Commands/" + dir, cmd);
            if (response) {
                client.logger.log(response, "error");
            }
        });
    });

    const evtFiles = await readdir("./Events/");
    evtFiles.forEach((file) => {
        const eventName = file.split(".")[0];
        const event = new (require(`./Events/${file}`))(client);
        client.on(eventName, (...args) => event.emit(...args));
        delete require.cache[require.resolve(`./Events/${file}`)];
    });
    client.login(process.env.BOTUSERNAME, process.env.PASSWORD);
};
initialize();