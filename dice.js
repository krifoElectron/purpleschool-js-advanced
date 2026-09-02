function rollDice(dice) {
  const diceToNumber = new Map([
    ['d4', 4],
    ['d6', 6],
    ['d8', 8],
    ['d10', 10],
    ['d12', 12],
    ['d16', 16],
    ['d20', 20],
  ]);

  const number = diceToNumber.get(dice);
  
  if (number) {
    return Math.floor(Math.random()*number) + 1;
  }

  return null  
}

console.log(rollDice('d6'));
console.log(rollDice('d5'));
