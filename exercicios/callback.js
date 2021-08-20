function User(yearsOld) {
    this.name = 'Jean',
    this.age = yearsOld,
    this.status = 'andando',
    this.move = function() {
        return `${this.name}, tem ${this.age} e esta ${this.status}.`
    }
}

const User01 = new User(25)

console.log(User01.move())