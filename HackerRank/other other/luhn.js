//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (card) => {
  let nonSpaceCard = card.replace(/ /g, '');
  if(nonSpaceCard.length <= 1) {
    return false;
  }
  let stringCard = nonSpaceCard.split('').reverse();
  let cardNumbers = stringCard.map((number, index) => {
    let add = Number(number);
    if(index % 2 != 0) {
      add *= 2;
      return add > 9 ? add - 9 : add;
    }
    return add;
  });

  let cardAddResult = cardNumbers.reduce((acc, value) => {
    return acc + value;
  }, 0);
  return cardAddResult % 10 == 0;
};

