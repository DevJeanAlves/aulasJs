function User(name, action) {
    this.name = name,
        this.action = action,
        this.actions = function () {
            console.log(`${this.name} is ${action}`)
        }
}

const user1 = new User('Jean', 'winning')
const user2 = new User('Zelda', 'running')
const user3 = new User('Maiumy', 'crying')

console.log(user1.actions(), '\n', user2.actions(), '\n', user3.actions())