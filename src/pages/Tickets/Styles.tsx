import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap:8px;
  padding:32px 0;
  
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
`;

export const RightItems = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: center;
  border-left: 1px solid #0202022d;
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-weight: 600;
  }
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
