module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async emit(chat) {
        chat.approve();
    }
}
