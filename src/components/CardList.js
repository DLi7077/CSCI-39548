import React, { useEffect, useState } from "react";
import Card from "./Card";

const classes = {
  cardGroup: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1000px",
    justifyContent: "center",
  },
};

export default function CardList(props) {
  const { gameCards } = props;
  /*
  possible states:
  disabled: card can be clicked
  shown: card is shown
  cleared: card pair is matched and is disabled
  */
  const ALL_TRUE = new Array(gameCards.length).fill(true);
  const ALL_FALSE = new Array(gameCards.length).fill(false);
  const [show, setShow] = useState(ALL_FALSE);
  const [selected, setSelected] = useState([]);
  const [disabled, setDisabled] = useState(ALL_FALSE);
  const [matched, setMatched] = useState(ALL_FALSE);
  let matchedCount = 0;

  function hideAll() {
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
    const updatedArray = new Array(gameCards.length).fill(true);

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

    matchedCount += 2;

    setMatched(updatedArray);
    const gameOver = updatedArray.reduce((acc, curr) => {
      return acc && curr;
    }, true);
    
    if (gameOver) {
      props.endGame();
    }
  }

  // briefly show cards on load, then hide.
  useEffect(() => {
    setTimeout(() => {
      setShow(ALL_TRUE);
      setTimeout(() => {
        setShow(ALL_FALSE);
      }, 700);
    }, 200);
  }, []);

  useEffect(() => {
    if (selected.length >= 2) {
      if (gameCards[selected[0]] === gameCards[selected[1]]) {
        handleMatch(selected[0], selected[1]);
        setSelected([]);
        hideAll();
        enableAll();

        return;
      }
      setSelected([]);
      disableAll();
      setTimeout(() => {
        hideAll();
        enableAll();
      }, 700);
    }
  }, [selected]);

  return (
    <div style={classes.cardGroup}>
      {gameCards.map((card, idx) => {
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
