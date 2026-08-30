const arr = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
]

const uniqueIds = [...new Set(arr.map(({ id }) => id))];

const result = uniqueIds.map((id) => arr.find((element) => element.id === id));

console.log(result);
