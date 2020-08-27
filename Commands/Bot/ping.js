const Command = require("../../Structure/Command.js");

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: "ping",
            description: "Return the bot ping (just a test command for now until the real ping is added)",
            category: "Bot",
            enabled: true,
            aliases: ["latency"],
            cooldown: 3,
            dmOnly: false,
        });
    }

    async run(message, args) {
        message.chat.sendMessage(`Hey, my name is ${this.client.user.fullName} and i am an instagram bot.`);
    }
}

