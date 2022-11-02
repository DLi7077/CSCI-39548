export default function Shuffle(cards) {
  const result = [];
  const count = cards.length;

  for (let i = 0; i < count; i++) {
    const randomIdx = Math.floor(Math.random() * cards.length);
    result.push(cards[randomIdx]);
    cards.splice(randomIdx,1);
  }

  return result;
}
