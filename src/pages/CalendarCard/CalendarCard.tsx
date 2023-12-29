import React, { useState } from "react";
import styled from "styled-components";
import { Container, Items, Main } from "./Styles";
import { Card, Filed, Button, Dropdown } from "../../Components/common";
import { Calendar, CalendarProvider, DatePicker } from "zaman";
import "./calender.css";
import { useNavigate } from "react-router-dom";
import moment from "moment-jalali";
import { setFlight } from "redux/actions/Tickets";
import { useDispatch } from "react-redux";

const CalendarCard: React.FC = () => {
  const [calendarValue, setCalendarValue] = useState(new Date());
  const navigate = useNavigate();
  const [origin, setOrigin] = useState<{ Title: string }>({ Title: "" });
  const [destination, setDestination] = useState<{ Title: string }>({
    Title: "",
  });
  const dispatch = useDispatch();

  const [date, setDate] = useState();
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    console.log("origin", origin.Title);
    console.log("destination", destination.Title);
    console.log("data", date);
    localStorage.setItem("origin",origin.Title)
    localStorage.setItem("destination",destination.Title)
    // dispatch(setFlight(origin.Title, destination.Title, date));
    dispatch({
      type: "SET-Flights",
      payload: {
        origin: origin,
        destination: destination,
        date: date,
      },
    });
    navigate("/TicketsCard");
  };
  const onChangeOrigin = (data) => {
    setOrigin(data);
  };
  const onChangeDestination = (data) => {
    setDestination(data);
  };
  const onChangeDatePicker = (data) => {
    console.log("data", data);

    setDate(moment(date).format("jYYYY-jMM-jDD"));
  };
  return (
    <Container>
      <Card>
        <Main>
          <Items>
            <Dropdown
              placeholder="تاریخ بازگشت"
              width="20vw"
              firstData="مبدا"
              setSelectedState={onChangeOrigin}
              dropData={[
                { id: 1, Title: "تهران" },
                { id: 2, Title: "برلین" },
                { id: 3, Title: "دبی" },
                { id: 4, Title: "استانبول" },
              ]}
            />
            <Dropdown
              placeholder="تاریخ بازگشت"
              width="20vw"
              firstData="مقصد"
              setSelectedState={onChangeDestination}
              dropData={[
                { id: 1, Title: "تهران" },
                { id: 2, Title: "برلین" },
                { id: 3, Title: "دبی" },
                { id: 4, Title: "استانبول" },
              ]}
            />
          </Items>

          {true ? (
            <div className="libWrapper">
              <DatePicker
                round="x4"
                position="center"
                onChange={(e) => onChangeDatePicker(e)}
                defaultValue={new Date()} // Set your default value here
              />
            </div>
          ) : null}

          <Button Text="جستجو" onClick={(e) => handleSearchSubmit(e)} />
        </Main>
      </Card>
    </Container>
  );
};

export default CalendarCard;
