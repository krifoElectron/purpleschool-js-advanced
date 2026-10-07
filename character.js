class Character {
    constructor(species, name, language) {
        this.species = species;
        this.name = name;
        this.language = language;
    }

    speak() {
        console.log(`Я ${this.name}, мой язык: ${this.language}`)
    }
}

class Orc extends Character {
    constructor(species, name, language, weapon) {
        super(species, name, language)
        this.weapon = weapon;
    }

    speak() {
        console.log(`Я орк ${this.name}, я говорить ${this.language}`)
    }

    hit() {
        console.log(`Удар с помощью ${this.weapon}`)
    }
}

class Elf extends Character {
    constructor(species, name, language, spell) {
        super(species, name, language)
        this.spell = spell;
    }

    speak() {
        console.log(`Я эльф ${this.name}, мой язык: ${this.language}`)
    }

    createSpell() {
        console.log(`Создаю заклинание ${this.spell}`)
    }
}

const orc = new Orc('грязный', 'Дук', 'французский', 'топор')
const elf = new Elf('чистый', 'Лук', 'датский', 'абракадабра')

orc.speak();
elf.speak();
orc.hit();
elf.createSpell();
