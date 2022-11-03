import React from "react";
const classes = {
  cardContainer: {
    width: "6rem",
    height: "8rem",
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem",
  },
  cardContent: {
    fontSize: "1.5rem",
  },
};

export default function Card(props) {
  return (
    <div
      style={{
        outline: `${props.cleared ? "4px solid lime" : ""}`,
        ...classes.cardContainer,
      }}
      onClick={() => {
        if (props.disabled) return;
        props.select();
      }}
    >
      <div
        style={{
          ...classes.cardContent,
          display: `${props.show || props.cleared ? "block" : "none"}`,
          fontSize: "2rem",
        }}
      >
        {props.value}
      </div>
    </div>
  );
}
