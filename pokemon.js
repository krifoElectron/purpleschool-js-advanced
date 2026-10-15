'use-strict';

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');


request.addEventListener('load', function() {
    if (this.status !== 200) {
        console.log(`Ошибка, код: ${this.status}`)
    }

    const { abilities } = JSON.parse(this.responseText);
    const abilityUrl = abilities[0].ability.url;

    const request = new XMLHttpRequest();
    request.open('GET', abilityUrl);

    request.addEventListener('load', function() {
        if (this.status !== 200) {
            console.log(`Ошибка, код: ${this.status}`)
        }

        const { effect_entries } = JSON.parse(this.responseText);
        const effect = effect_entries.find(({ language }) => language.name === 'en')?.effect;

        console.log(effect);
    });

    request.send();
});

request.send();
