import React, { useEffect, useState } from "react";
import Card from "./Card";

const classes = {
  cardGroup: {
    display: "flex",
    flexWrap: "wrap",
  },
};

export default function CardList() {
  const cards = [
    "Obama",
    "Amongus",
    "The rock",
    "John Cena",
    "Obama",
    "Amongus",
    "The rock",
    "John Cena",
  ];

  /*
possible states:
disabled: card can be clicked
shown: card is shown
cleared: card pair is matched and is disabled
*/

  const INITIAL_STATE = new Array(cards.length).fill(false);
  const [show, setShow] = useState(INITIAL_STATE);
  const [selected, setSelected] = useState([]);
  const [disabled, setDisabled] = useState(INITIAL_STATE);
  const [matched, setMatched] = useState(INITIAL_STATE);

  function hideAll() {
    // const updatedShow = [...INITIAL_STATE];
    // for (let i = 0; i < updatedShow.length; i++) {
    //   if (cleared[i]) updatedShow[i] = true;
    // }
    console.log(matched);
    // console.log(updatedShow)

    setShow(matched);
  }

  function disableCard(idx) {
    const updatedDisable = [...disabled];
    updatedDisable[idx] = true;

    setDisabled(updatedDisable);
  }

  function handleSelect(idx) {
    const updatedShow = [...show];
    const updatedSelect = [...selected];
    updatedSelect.push(idx);
    updatedShow[idx] = true;
    disableCard(idx);
    setShow(updatedShow);
    setSelected(updatedSelect);
  }

  function disableAll() {
    const updatedArray = INITIAL_STATE.map((_) => true);

    setDisabled(updatedArray);
  }

  function enableAll() {
    const updatedArray = [...disabled];
    for (let i = 0; i < updatedArray.length; i++) {
      if (matched[i]) continue;
      updatedArray[i] = false;
    }
    setDisabled(updatedArray);
  }

  function handleMatch(idx1, idx2) {
    const updatedArray = [...matched];
    updatedArray[idx1] = true;
    updatedArray[idx2] = true;

    setMatched(updatedArray);
  }

  useEffect(() => {
    if (selected.length >= 2) {
      if (cards[selected[0]] === cards[selected[1]]) {
        handleMatch(selected[0], selected[1]);
      }
      setSelected([]);
      disableAll();
      setTimeout(() => {
        hideAll();
        enableAll();
      }, 700);
    }
    console.log(selected);
  }, [selected]);

  return (
    <div style={classes.cardGroup}>
      {cards.map((card, idx) => {
        return (
          <Card
            key={`card-${idx}`}
            idx={idx}
            value={card}
            selected={selected}
            select={() => {
              handleSelect(idx);
            }}
            show={show[idx]}
            disabled={disabled[idx]}
            cleared={matched[idx]}
          />
        );
      })}
    </div>
  );
}
