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

  const INITIAL_STATE = new Array(cards.length).fill(false);
  const [show, setShow] = useState(INITIAL_STATE);
  const [shownCount, setShownCount] = useState(0);
  const [disable, setDisable] = useState(false);

  function resetCards() {
    setShow(INITIAL_STATE);
  }

  function handleShow(idx, status) {
    const updatedArray = [...show];
    updatedArray[idx] = status;
    if (status == true) {
      setShownCount((p) => p + 1);
    }
    setShow(updatedArray);
  }

  useEffect(() => {
    if (shownCount >= 2) {
      setDisable(true);
      setTimeout(() => {
        setShownCount(0);
        resetCards();
        setDisable(false);
      }, 700);
    }
  }, [shownCount]);

  return (
    <div style={classes.cardGroup}>
      {cards.map((card, idx) => {
        return (
          <Card
            key={`card-${idx}`}
            idx={idx}
            value={card}
            setShow={handleShow}
            show={show[idx]}
            disabled={disable}
          />
        );
      })}
    </div>
  );
}
