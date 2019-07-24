import React, { Fragment, useEffect, useState } from "react";
import { useAfterAuth } from "../AuthProviders/AfterAuth";
import { db } from "../config/index";
import { Card } from "antd";
import "./../styles/index.css";
const Dashboard = (props: any) => {
  const { dispatchAction, content } = useAfterAuth();
  const [quotes, setQuotes] = useState([]);
  // const logoutAction = useCallback(() => {
  //   auth.signOut();
  //   logout();
  // }, []);
  useEffect(() => {
    db.ref()
      .limitToFirst(100)
      .on("value", (snapshot: any) => {
        setQuotes(snapshot.val());
      });
  }, []);
  const quotesData =
    quotes.length === 0
      ? [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24
        ]
      : quotes;
  return (
    <Fragment>
      <div className="main">
        {quotesData &&
          quotesData.length > 0 &&
          quotesData.map((item: any) => (
            <Card
              loading={quotes.length === 0}
              title={
                quotes.length === 0
                  ? "Loading ..."
                  : item.quoteAuthor || "Unknown"
              }
              extra={<a href="#">More</a>}
              style={{
                height: "300",
                width: "23%",
                margin: "1%",
                background: "#" + (((1 << 24) * Math.random()) | 0).toString(16)
              }}
              onClick={() => {
                dispatchAction({ type: "UPDATE_DATA", data: item.quoteText });
                props.history.push("/quotes");
              }}
            >
              <p>{item.quoteText}</p>
            </Card>
          ))}
      </div>
    </Fragment>
  );
};

export default Dashboard;
