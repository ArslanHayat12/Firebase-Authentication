import React, { Fragment, useEffect, useState } from "react";
import { useAfterAuth } from "../AuthProviders/AfterAuth";
import { db } from "../config/index";
import { List, Card, Row } from "antd";
const Dashboard = (props: any) => {
  const { dispatchAction, content } = useAfterAuth();
  const [quotes, setQuotes] = useState([]);
  // const logoutAction = useCallback(() => {
  //   auth.signOut();
  //   logout();
  // }, []);
  useEffect(() => {
    db.ref()
      .limitToFirst(30)
      .on("value", (snapshot: any) => {
        setQuotes(snapshot.val());
      });
  }, []);
  return (
    <Fragment>
      {/* <h1>Logged In with: {JSON.stringify(content&&content.data, null, 3)}</h1> */}
      <Row gutter={20}>
        <List
          grid={{
            gutter: 20,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 6
          }}
          dataSource={
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
              : quotes
          }
          renderItem={(item: any) => (
            <List.Item
              style={{ margin: "20px" }}
              onClick={() => {
                dispatchAction({ type: "UPDATE_DATA", data: item.quoteText });
                props.history.push("/quotes");
              }}
            >
              <Card
                loading={quotes.length === 0}
                title={
                  quotes.length === 0
                    ? "Loading ..."
                    : item.quoteAuthor || "Unknown"
                }
                bordered={true}
                type={"inner"}
                style={{
                  height: 200,
                  background:
                    "#" + (((1 << 24) * Math.random()) | 0).toString(16)
                }}
              >
                <h3>{item.quoteText}</h3>
              </Card>
            </List.Item>
          )}
        />
      </Row>
    </Fragment>
  );
};

export default Dashboard;
