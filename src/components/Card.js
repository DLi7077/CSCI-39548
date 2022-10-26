import React from "react";
const classes = {
  cardContainer: {
    width: "160px",
    height: "200px",
    backgroundColor: "gray",
    border: "3px solid white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    fontSize: "1.5rem",
  },
};

export default function Card(props) {
  return (
    <div
      style={classes.cardContainer}
      onClick={() => {
        if (props.disabled) return;
        const currStatus = !props.show;
        props.setShow(props.idx, currStatus);
      }}
    >
      <div
        style={{
          ...classes.cardContent,
          display: `${props.show ? "block" : "none"}`,
        }}
      >
        {props.value}
      </div>
    </div>
  );
}
