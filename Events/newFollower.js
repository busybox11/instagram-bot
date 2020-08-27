module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async emit(user) {
        console.log(`${user.fullName} (${username}) started following you.`)
        user.follow();
    }
}
