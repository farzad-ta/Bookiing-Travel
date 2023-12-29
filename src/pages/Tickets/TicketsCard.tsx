import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import {
  Container,
  Items,
  Main,
  LeftItems,
  RightItems,
  AirLine,
  Luggage,
  TicketType,
} from "./Styles";
import { Card, Filed, Button } from "../../Components/common";
import Logo from "assets/tk.webp";
import AirLinePng from "assets/AirLine.png";
import { db } from "../../firebase-config";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/types";
import { numberWithCommasAndPersian } from "Components/common/numberToPersian";

const TicketsCard: React.FC = () => {
  const flightsRef3 = collection(db, "flights3");
  // const Flights = useSelector((state: RootState) => state.Flights);

  useEffect(() => {
    for (let i = 2; i <= 7; i++) {
      setDoc(doc(flightsRef3, i.toString()), {
        Logo: Logo,
        AirlineName: `ترکیش`,
        AirlineNumber: `A${i}12${i}`,
        TimeOut: `${12 + i}:30`,
        NameOut: "تهران",
        TimeIn: `${5 + i}:45`,
        NameIn: "دبی",
        Luggage: `25kg`,
        TravelType: "اکونومی",
        ReamainSeat: `${10 - i} باقیمانده`,
        price: `${12 + i}000000`,
        TicketType: "چارتری",
      });
    }
    for (let i = 8; i <= 12; i++) {
      setDoc(doc(flightsRef3, i.toString()), {
        Logo: Logo,
        AirlineName: `ترکیش`,
        AirlineNumber: `A${i}12${i}`,
        TimeOut: `${10 + i}:30`,
        NameOut: "دبی",
        TimeIn: `${5 + i}:45`,
        NameIn: "تهران",
        Luggage: `25kg`,
        TravelType: "اکونومی",
        ReamainSeat: `${30 - i} باقیمانده`,
        price: `${12 + i}000000`,
        TicketType: "چارتری",
      });
    }
    for (let i = 13; i <= 17; i++) {
      setDoc(doc(flightsRef3, i.toString()), {
        Logo: Logo,
        AirlineName: `ترکیش`,
        AirlineNumber: `A${i}12${i}`,
        TimeOut: `${5 + i}:30`,
        NameOut: "استانبول",
        TimeIn: `${1 + i}:45`,
        NameIn: "تهران",
        Luggage: `25kg`,
        TravelType: "اکونومی",
        ReamainSeat: `${30 - i} باقیمانده`,
        price: `${12 + i}000000`,
        TicketType: "چارتری",
      });
    }
    for (let i = 18; i <= 23; i++) {
      setDoc(doc(flightsRef3, i.toString()), {
        Logo: Logo,
        AirlineName: `ترکیش`,
        AirlineNumber: `A${i}12${i}`,
        TimeOut: `${24 - i}:30`,
        NameOut: "تهران",
        TimeIn: `${28 - i}:45`,
        NameIn: "استانبول",
        Luggage: `25kg`,
        TravelType: "اکونومی",
        ReamainSeat: `${30 - i} باقیمانده`,
        price: `${12 + i}000000 `,
        TicketType: "چارتری",
      });
    }
    for (let i = 24; i <= 30; i++) {
      setDoc(doc(flightsRef3, i.toString()), {
        Logo: Logo,
        AirlineName: `ترکیش`,
        AirlineNumber: `A${i}12${i}`,
        TimeOut: `${32 - i}:30`,
        NameOut: "تهران",
        TimeIn: `${36 - i}:45`,
        NameIn: "برلین",
        Luggage: `25kg`,
        TravelType: "اکونومی",
        ReamainSeat: `${30 - i} باقیمانده`,
        price: `${12 + i}000000 `,
        TicketType: "چارتری",
      });
    }
    for (let i = 31; i <= 36; i++) {
      setDoc(doc(flightsRef3, i.toString()), {
        Logo: Logo,
        AirlineName: `ترکیش`,
        AirlineNumber: `A${i}12${i}`,
        TimeOut: `${40 - i}:30`,
        NameOut: "برلین",
        TimeIn: `${44 - i}:45`,
        NameIn: "تهران",
        Luggage: `25kg`,
        TravelType: "اکونومی",
        ReamainSeat: `${44 - i} باقیمانده`,
        price: `${12 + i}000000 `,
        TicketType: "چارتری",
      });
    }
  }, []);
  interface Flight {
    id: string;
    AirlineName: string;
    AirlineNumber: string;
    TimeOut: string;
    NameOut: string;
    TimeIn: string;
    NameIn: string;
    Luggage: string;
    TravelType: string;
    ReamainSeat: string;
    price: string;
    TicketType: string;
  }
  const [flightData, setFlightData] = useState<Flight[]>([]);
  const flightsRef2 = collection(getFirestore(), "flights3");
  const origin = localStorage.getItem("origin");
  const destination = localStorage.getItem("destination");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          query(
            flightsRef2,
            where("NameIn", "==", origin),
            where("NameOut", "==", destination)
          )
        );
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Flight[];
        setFlightData(data);
      } catch (error) {
        console.error("Error fetching flight data:", error);
      }
    };

    fetchData();
  }, [origin, destination]);
  const navigate = useNavigate();
  console.log("flightData", flightData);
  const ordersTicket = () => {
    navigate("./ReserveTicket");
  };
  return (
    <Container>
      {flightData.map((el) => (
        <Card width="740px" minWidth="720px">
          <Main onClick={() => localStorage.setItem("Price", el.price)}>
            <RightItems>
              <AirLine>
                <img src={Logo} />
                <div>{el.AirlineName}</div>
                <div>{el.AirlineNumber}</div>
              </AirLine>
              <Items>
                <div>
                  <p>{el.TimeIn}</p>
                  <p>{el.NameIn}</p>
                </div>
                <img src={AirLinePng} width="300px" />
                <div>
                  <p>{el.TimeOut}</p>
                  <p>{el.NameOut}</p>
                </div>
              </Items>
              <Luggage>
                <div>{el.Luggage}</div>
                <div>{el.TravelType}</div>
                <div>{el.ReamainSeat}</div>
              </Luggage>
              <div></div>
            </RightItems>
            <LeftItems>
              <div className="price">
                {numberWithCommasAndPersian(
                  el.price !== null ? parseInt(el.price, 10) : 0
                )}
                ریال
              </div>
              <Button
                Text="خرید"
                padding="0.4rem 1.5rem"
                onClick={() => ordersTicket()}
              />
            </LeftItems>
          </Main>
          <TicketType>{el.TicketType}</TicketType>
        </Card>
      ))}
    </Container>
  );
};

export default TicketsCard;
