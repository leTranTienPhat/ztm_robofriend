import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <>
      {
        robots.map((robot, index) => {
          return <Card key={index} robot={robot} />
        })
      }
    </>
  )
}

export default CardList;