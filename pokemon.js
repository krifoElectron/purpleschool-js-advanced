'use strict';

getJson('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => {
        const { abilities } = response;
        const abilityUrl = abilities[0].ability.url;

        return getJson(abilityUrl);
    })
    .then((json) => {
        const { effect_entries } = json;
        const effect = effect_entries.find(({ language }) => language.name === 'en')?.effect;

        if (effect === undefined) {
            throw new Error('Описание на английском языке отсутствует')
        }

        console.log(effect);
    })
    .catch((error) => {
        console.log(error);
    })

async function getJson(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Ошибка, код: ${response.status}`)
            }

            return response.json();
        })
}
