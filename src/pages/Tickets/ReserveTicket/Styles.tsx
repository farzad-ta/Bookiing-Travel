import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  gap: 8px;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
export const PayoutMain = styled.div`
  display: grid;
  gap: 4px;
  margin: 8px;
`;
export const SeatContain = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  gap: 4px;
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* align-items:center;
  justify-content:center; */
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
export const SeatMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* align-items:center;
  justify-content:center; */
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const Seat = styled.div<{ change; columnIndex; background }>`
  height: 30px;
  width: 30px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.background
      ? props.background
      : "green"}; // Change the condition based on columnIndex

  &:hover {
    background: orange;
    cursor: pointer;
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
export const RightItems = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: center;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;
export const Col = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  width: 100%;
`;

export const LeftItems = styled.div`
  text-align: center;
  .price {
    margin-bottom: 8px;
  }
`;
export const AirLine = styled.div`
  text-align: center;
`;
export const Luggage = styled.div`
  text-align: center;
  div:nth-child(1),
  div:nth-child(2) {
    padding: 2px 6px;
    line-height: 1.5;
    border-radius: 10px;
    background-color: #f2f2f2;
    margin-right: 12px;
    color: #343b53;
    margin-bottom: 8px;
    text-align: center;
  }
  div:last-child {
    color: #0d7066;
  }
`;
export const TicketType = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 2px 6px;
  border-radius: 10px;
  background-color: #f2f2f2;
  color: #343b53;
  text-align: center;
  font-size: 0.8rem;
`;
export const SuccessMessages = styled.div`
   display:flex;
   align-items:center;
   justify-content:center
`;
