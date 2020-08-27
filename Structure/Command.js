module.exports = class Command {
    constructor(
        client, {
            name = null,
            description = null,
            category = null,
            cooldown = 3,
            enabled = false,
            aliases = new Array(),
            dmOnly = false,
        }
    ) {
        this.client = client;
        this.help = {
            name,
            description,
            category,
        };
        this.conf = {
            cooldown,
            enabled,
            aliases,
            dmOnly,
        }
    }
}