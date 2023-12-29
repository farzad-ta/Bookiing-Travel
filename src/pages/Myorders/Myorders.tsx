import { Button } from "../../Components/common/Button";
import { Card } from "Components/common/Card";
import React from "react";
import { Link } from "react-router-dom";

function Myorders() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card Title="" width="max-content" minWidth="250px">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>تبریک!</div>

          <div>بلیط شما با موفقیت رزرو شد</div>
          <div>سفر خوشی را برایتان آرزومندیم</div>
          <Link to="/">
            <button>بازگشت به صفحه اصلی</button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default Myorders;
