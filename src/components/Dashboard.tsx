import React, { Fragment, useEffect, useState } from "react";
import { useAfterAuth } from "../AuthProviders/AfterAuth";
import { db } from "../config/index";
import { Card, List } from "antd";
import "./../styles/index.css";
import axios from "axios";
import { jsonData } from "../myfile";
const Dashboard = (props: any) => {
  const { dispatchAction, content } = useAfterAuth();
  const [places, setPlaces] = useState<any>([]);
  // const logoutAction = useCallback(() => {
  //   auth.signOut();
  //   logout();
  // }, []);
  useEffect(() => {
    if (places.length === 0) setPlaces(jsonData);
    //console.log(jsonData)
    // db.ref()
    //   .limitToFirst(100)
    //   .on("value", (snapshot: any) => {
    //     setplaces(snapshot.val());
    //   });
  }, [jsonData]);
  const placesData =
    places.length === 0
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
      : places;
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 4,
        xxl: 4
      }}
      loading={placesData.length === 0}
      dataSource={placesData}
      renderItem={(item: any) => (
        <List.Item>
          <Card
            loading={places.length === 0}
            title={
              places.length === 0 ? "Loading ..." : item.title || "Unknown"
            }
            className="resource-card"
            // style={{
            //   height: "300",
            //   width: "23%",
            //   margin: "1%",
            //   background: "#" + (((1 << 24) * Math.random()) | 0).toString(16)
            // }}
            onClick={() => {
              if (item.image) {
                dispatchAction({ type: "UPDATE_DATA", data: item });
                props.history.push("/places");
              }
            }}
            cover={
              item.image ? (
                <img
                  alt="example"
                  style={{
                    width: "23%",
                    margin: "1%",
                    float: "right",
                    height: "100px"
                  }}
                  src={item.image}
                />
              ) : null
            }
          >
            <p>{item.description ? item.description.substring(0, 300) : ""}</p>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default Dashboard;
