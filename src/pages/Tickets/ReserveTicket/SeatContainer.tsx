import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Seat } from "./Styles";
import Tooltip from "Components/common/Tooltip";

interface SeatContainerProps {
  change: boolean;
  columnIndex: number;
  item: { seatNumber: string; price: number; State: string }; // Adjust the type based on your actual data structure
  mainItem: number; // 'key' is a reserved word, consider renaming it
  rowIndex: number;
  price: number;
  setPrice: (price: number) => void;
  getSeatPosition: (position: string) => void;
  parsedPrice:number
}

const SeatContainer: React.FC<SeatContainerProps> = ({
  change,
  columnIndex,
  item,
  mainItem,
  rowIndex,
  setPrice,
  price,
  getSeatPosition,
  parsedPrice
}) => {
  const [color, setColor] = useState({
    background: "white",
  });
  console.log("iteitemm", item);

  const seat = "";
  useEffect(() => {
    if (item.State == "empty") {
      setColor({ background: "white" });
    } else if (item.State == "Reserved") {
      setColor({ background: "orange" });
    } else if (item.State == "Bought") {
      setColor({ background: "green" });
    }
  }, []);
  const changeColor = (index, position) => {
    getSeatPosition(position);
    if (item.State == "empty") {
      console.log("status", position + (index + 1));
      if (color.background == "white") {
        setColor({ background: "orange" });
        setPrice(item.price + (rowIndex + 1) * 10000000);
      } else {
        setColor({ background: "white" });
        setPrice(item.price - (rowIndex + 1) * 10000000);
      }
    }
  };
  return (
    <Seat
      onClick={() => changeColor(mainItem, item.seatNumber)}
      change={change}
      columnIndex={columnIndex}
      background={color.background}
    >
      <Tooltip
        text={
          item.State == "Bought"
            ? ".این صندلی خریداری شده است"
            : `قیمت بلیط: ${parsedPrice}`
        }
      >
        {item.seatNumber}
        {/* {mainItem + 1} */}
      </Tooltip>
    </Seat>
  );
};

export default SeatContainer;
