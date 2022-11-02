import React from "react";
const classes = {
  cardContainer: {
    width: "160px",
    height: "200px",
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
        }}
      >
        {props.value}
      </div>
    </div>
  );
}
