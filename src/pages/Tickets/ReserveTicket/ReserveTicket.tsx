import React, { ChangeEvent, useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import {
  Container,
  Main,
  LeftItems,
  RightItems,
  AirLine,
  Luggage,
  TicketType,
  Row,
  Col,
  Items,
  PayoutMain,
  Seat,
  SeatContain,
  SeatMain,
  SuccessMessages,
} from "./Styles";
import { Card, Filed, Button } from "../../../Components/common";
import Logo from "assets/tk.webp";
import AirLinePng from "assets/AirLine.png";
import Modal from "Components/common/Modal";
import SeatContainer from "./SeatContainer";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase-config";
import { isAction } from "redux";
import { useNavigate } from "react-router-dom";
import { numberWithCommasAndPersian } from "Components/common/numberToPersian";

interface State {
  name: string;
  family: string;
  passNo: string;
  personNo: string;
  positions: string[];
  GetAll: number;
}

const initialState: State = {
  name: "",
  family: "",
  passNo: "",
  personNo: "",
  positions: [],
  GetAll: 0,
};
const reducerConfig = (state: State, action: any): State => {
  console.log("action", action);

  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
      break;
    case "SeatsPosition":
      return { ...state, positions: action.positions };
      break;
    case "GET_ALL":
      return { ...state, GetAll: action.GetAll };
      break;
    default:
      return state;
      break;
  }
};

const ReserveTicket: React.FC = () => {
  const [seatBookingLeft, setSeatBookingLeft] = useState<any>([]);
  const [seatBookingRight, setSeatBookingRight] = useState<any>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();
  const [parsedPrice, setParsedPrice] = useState<number>(0);
  const [information, dispatch] = useReducer(
    reducerConfig,
    initialState as State
  );
  const Price = localStorage.getItem("Price");
  useEffect(() => {
    setParsedPrice(Price !== null ? parseInt(Price, 10) : 0);
  }, [Price]);
  // useEffect(() => {
  //   const initializeSeats = async () => {
  //     for (let i = 8; i >= 5; i--) {
  //       await setDoc(doc(db, "seatBookingRight", `J${i}`), {
  //         id: `J${i}`,
  //         seatNumber: `J${i}`,
  //         price: 20000000,
  //         State: "empty",
  //         PassNo: information.passNo,
  //         family: information.family,
  //         name: information.name,
  //         personNo: information.personNo,
  //       });
  //       await setDoc(doc(db, "seatBookingRight", `I${i}`), {
  //         id: `I${i}`,
  //         seatNumber: `I${i}`,
  //         price: 20000000,
  //         State: "empty",
  //         PassNo: information.passNo,
  //         family: information.family,
  //         name: information.name,
  //         personNo: information.personNo,
  //       });
  //       await setDoc(doc(db, "seatBookingRight", `H${i}`), {
  //         id: `H${i}`,
  //         seatNumber: `H${i}`,
  //         price: 20000000,
  //         State: "empty",
  //         PassNo: information.passNo,
  //         family: information.family,
  //         name: information.name,
  //         personNo: information.personNo,
  //       });
  //       await setDoc(doc(db, "seatBookingRight", `G${i}`), {
  //         id: `G${i}`,
  //         seatNumber: `G${i}`,
  //         price: 20000000,
  //         State: "empty",
  //         PassNo: information.passNo,
  //         family: information.family,
  //         name: information.name,
  //         personNo: information.personNo,
  //       });
  //       await setDoc(doc(db, "seatBookingRight", `F${i}`), {
  //         id: `F${i}`,
  //         seatNumber: `F${i}`,
  //         price: 20000000,
  //         State: "empty",
  //         PassNo: information.passNo,
  //         family: information.family,
  //         name: information.name,
  //         personNo: information.personNo,
  //       });
  //       await setDoc(doc(db, "seatBookingRight", `E${i}`), {
  //         id: `E${i}`,
  //         seatNumber: `E${i}`,
  //         price: 20000000,
  //         State: "empty",
  //         PassNo: information.passNo,
  //         family: information.family,
  //         name: information.name,
  //         personNo: information.personNo,
  //       });
  //       await setDoc(doc(db, "seatBookingRight", `D${i}`), {
  //         id: `D${i}`,
  //         seatNumber: `D${i}`,
  //         price: 20000000,
  //         State: "empty",
  //         PassNo: information.passNo,
  //         family: information.family,
  //         name: information.name,
  //         personNo: information.personNo,
  //       });
  //       await setDoc(doc(db, "seatBookingRight", `C${i}`), {
  //         id: `C${i}`,
  //         seatNumber: `C${i}`,
  //         price: 20000000,
  //         State: "empty",
  //         PassNo: information.passNo,
  //         family: information.family,
  //         name: information.name,
  //         personNo: information.personNo,
  //       });
  //       await setDoc(doc(db, "seatBookingRight", `B${i}`), {
  //         id: `B${i}`,
  //         seatNumber: `B${i}`,
  //         price: 20000000,
  //         State: "empty",
  //         PassNo: information.passNo,
  //         family: information.family,
  //         name: information.name,
  //         personNo: information.personNo,
  //       });
  //       await setDoc(doc(db, "seatBookingRight", `A${i}`), {
  //         id: `A${i}`,
  //         seatNumber: `A${i}`,
  //         price: 20000000,
  //         State: "empty",
  //         PassNo: information.passNo,
  //         family: information.family,
  //         name: information.name,
  //         personNo: information.personNo,
  //       });
  //     }
  //   };
  //   initializeSeats();
  // }, []);

  useEffect(() => {
    const initializeSeats = async () => {
      const seatBookingRightSnapshot = await getDocs(
        collection(db, "seatBookingRight")
      );
      const seatBookingLeftSnapshot = await getDocs(
        collection(db, "seatBookingLeft")
      );
      const seatData = seatBookingRightSnapshot.docs.map((doc) => doc.data());
      const seatData2 = seatBookingLeftSnapshot.docs.map((doc) => doc.data());

      console.log("Retrieved Seat Data1:", seatData);
      console.log("Retrieved Seat Data2:", seatData2);

      setSeatBookingRight(seatData);
      setSeatBookingLeft(seatData2);
    };
    initializeSeats();
  }, [information.GetAll]);

  const tiketsList = [
    {
      Logo: Logo,
      AirlineName: "ترکیش",
      AirlineNumber: "TK7689",
      TimeOut: "۱۸:۲۲",
      NameOut: "تهران",
      TimeIn: "۲۱:۲۲",
      NameIn: "دبی",
      Luggage: "۲۵ کیلوگرم",
      TravelType: "اکونومی",
      ReamainSeat: "۹ باقیمانده",
      price: "۳۸,۶۰۰,۰۰۰ ریال",
      TicketType: "بیزینس",
    },
  ];
  const [price, setPrice] = useState(0);
  const updateData = async (el, newState) => {
    console.log("updateDateupdateDate", el);

    for (let index = 0; index < el.length; index++) {
      if (
        el[index].includes("1") ||
        el[index].includes("2") ||
        el[index].includes("3") ||
        el[index].includes("4")
      ) {
        const seatDocRef = doc(db, "seatBookingLeft", el[index]);
        console.log("el[index]", el[index]);
        await updateDoc(seatDocRef, {
          State: newState,
          PassNo: information.passNo,
          family: information.family,
          name: information.name,
          personNo: information.personNo,
        });
      } else {
        const seatDocRef = doc(db, "seatBookingRight", el[index]);
        console.log("el[index]", el[index]);
        await updateDoc(seatDocRef, {
          State: newState,
          PassNo: information.passNo,
          family: information.family,
          name: information.name,
          personNo: information.personNo,
        });
      }
    }
  };
  const successMessage = () => {
    setSuccess(true);
    setModalOpen(true);
    updateData(information.positions, "Bought");
    setTimeout(() => {
      navigate("MyOrders");
    }, 3000);
  };
  const ReservedTicket = () => {
    setModalOpen(false);
  };
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
 

  const [change, setChange] = useState("red");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      value: e.target.value,
      field: e.target.name,
    });
  };

  const getSeatPosition = (el: string) => {
    console.log("dfghjkl", el);
    const updateSeatState = async (id, newState) => {
      if (
        id.includes("1") ||
        id.includes("2") ||
        id.includes("3") ||
        id.includes("4")
      ) {
        const seatDocRef = doc(db, "seatBookingLeft", id);
        // Update the state field for the specified document
        await updateDoc(seatDocRef, {
          State: newState,
        }).then(async () => {
          dispatch({
            type: "GET_ALL",
            GetAll: id,
          });
        });
      } else {
        const seatDocRef = doc(db, "seatBookingRight", id);
        // Update the state field for the specified document
        await updateDoc(seatDocRef, {
          State: newState,
        }).then(async () => {
          dispatch({
            type: "GET_ALL",
            GetAll: id,
          });
        });
      }

      console.log(`State of seat ${id} updated to ${newState}`);
      dispatch({
        type: "SeatsPosition",
        positions: [...information.positions, id],
      });
    };

    updateSeatState(el, "Reserved");
  };
  console.log("informationposition", information.positions.length);

  return (
    <div>
      <Container>
        <div>
          {tiketsList.map((el) => (
            <Card width="65vw" Title="اطلاعات مسافر اصلی">
              <Main>
                <RightItems>
                  <Col>
                    <Row>
                      <Filed
                        placeholder="نام لاتین"
                        width="25vw"
                        value={information.name}
                        onChange={onChange}
                        name="name"
                      />
                      <Filed
                        placeholder="نام خانوادگی لاتین"
                        width="25vw"
                        value={information.family}
                        onChange={onChange}
                        name="family"
                      />{" "}
                    </Row>
                    <Row>
                      <Filed
                        placeholder="شماره پاسپورت"
                        width="25vw"
                        value={information.passNo}
                        onChange={onChange}
                        name="passNo"
                      />
                      <Filed
                        placeholder="کد ملی"
                        width="25vw"
                        value={information.personNo}
                        onChange={onChange}
                        name="personNo"
                      />
                    </Row>
                  </Col>
                  <Button Text="انتخاب" onClick={openModal} />
                </RightItems>
              </Main>
            </Card>
          ))}
        </div>
        <div>
            <Card width="30vw" Title="صورتحساب">
              <PayoutMain>
                <Items>
                  <div>قیمت برای هر بزرگسال:</div>
                  <div>{numberWithCommasAndPersian(parsedPrice)}ریال</div>
                </Items>
                <Items>
                  <div>مالیات خدمات:</div>
                  <div>
                    {numberWithCommasAndPersian((parsedPrice * 9) / 100)}
                  </div>
                </Items>
                <Items>
                  <div>
                    مبلغ قابل پرداخت:{information.positions.length + 1}نفر
                  </div>
                  <div>
                    {numberWithCommasAndPersian(
                      parsedPrice * (information.positions.length + 1) +
                        (parsedPrice * 9) / 100
                    )}{" "}
                    ریال
                  </div>
                </Items>
              </PayoutMain>
              <Button
                Text="پرداخت"
                padding="8px 4px"
                onClick={successMessage}
              />
            </Card>
        </div>
      </Container>
      {!success ? (
        <Modal onClose={closeModal} isOpen={isModalOpen}>
          <div>
            <Card width="30vw" Title="رزرو صندلی">
              <SeatContain>
                <div
                  style={{
                    display: "grid",
                    gap: "8px",
                    gridTemplateColumns: "repeat(4,1fr)",
                    direction: "ltr",
                  }}
                >
                  {seatBookingRight.map((item, columnIndex) => (
                    <SeatContainer
                      change={change === "blue"} // Change this condition based on your logic
                      columnIndex={columnIndex}
                      item={item}
                      rowIndex={0}
                      mainItem={0}
                      price={price}
                      setPrice={setPrice} // Pass setPriceList here
                      getSeatPosition={getSeatPosition}
                      parsedPrice={parsedPrice}
                    />
                  ))}
                </div>
                <div
                  style={{
                    display: "grid",
                    gap: "8px",
                    gridTemplateColumns: "repeat(4,1fr)",
                    direction: "ltr",
                  }}
                >
                  {seatBookingLeft.map((item, columnIndex) => (
                    <SeatContainer
                      change={change === "blue"} // Change this condition based on your logic
                      columnIndex={columnIndex}
                      item={item}
                      rowIndex={0}
                      mainItem={0}
                      price={price}
                      setPrice={setPrice} // Pass setPriceList here
                      getSeatPosition={getSeatPosition}
                      parsedPrice={parsedPrice}
                    />
                  ))}
                </div>
              </SeatContain>

              <Button Text="تایید" padding="8px 4px" onClick={ReservedTicket} />
            </Card>
          </div>
        </Modal>
      ) : (
        <Modal onClose={closeModal} isOpen={isModalOpen}>
          <div>
            <Card width="30vw" Title="رزرو صندلی">
              <SuccessMessages>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>پرداخت شما با موفقیت انجام شد!</div>
                  <p style={{ color: "red" }}>
                    در حال انتقال به صفحه سفارش های من...
                  </p>
                </div>
              </SuccessMessages>
            </Card>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ReserveTicket;
