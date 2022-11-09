export default function Shuffle(c) {
  const result = [];
  const count = c.length;
  let cards = [...c];

  for (let i = 0; i < count; i++) {
    const randomIdx = Math.floor(Math.random() * cards.length);
    result.push(cards[randomIdx]);
    cards.splice(randomIdx, 1);
  }

  return result;
}
