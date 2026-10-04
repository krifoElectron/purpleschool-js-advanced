const Character = function (species, name, language) {
    this.species = species;
    this.name = name;
    this.language = language;
}

Character.prototype.talk = function () {
    console.log(`Меня зовут ${this.name}, мой язык ${this.language}`);
}

const Orc = function (species, name, language, weapon) {
    Character.call(this, species, name, language);
    this.weapon = weapon;
}

Orc.prototype.__proto__ = Character.prototype;

Orc.prototype.hit = function () {
    console.log(`Наношу удар с помощью ${this.weapon}`);
}

const Elf = function (species, name, language, spell) {
    Character.call(this, species, name, language);
    this.spell = spell;
}

Elf.prototype.__proto__ = Character.prototype;

Elf.prototype.createSpell = function () {
    console.log(`Заклинание ${this.spell} создано`);
}

const character = new Character('a', 'A', 'ru');
const orc = new Orc('b', 'B', 'ru', 'топор');
const elf = new Elf('c', 'C', 'ru', 'трах-тибидох');

character.talk();

orc.talk();
orc.hit();

elf.talk();
elf.createSpell();
