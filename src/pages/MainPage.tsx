import React from "react";
import { Outlet } from "react-router-dom";
import CalendarCard from "./CalendarCard/CalendarCard";
import styled from "styled-components";

const MainPage = () => {
  return (
    <div >
      <CalendarCard />
      <MainContainer>
        <Outlet /> {/* This will render the nested routes */}
      </MainContainer>
    </div>
  );
};

export default MainPage;

const MainContainer = styled.div`
  background: #ececec42;
  margin-top: -8px;
  border-radius: 16px;
  overflow-y: auto;
`;
