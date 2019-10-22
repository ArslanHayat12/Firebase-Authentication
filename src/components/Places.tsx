import React, { Fragment, useState, useEffect } from "react";
import { useAfterAuth } from "../AuthProviders/AfterAuth";
import { Card, Icon, List, Tabs } from "antd";
import { Google } from "./Google";
import "./../styles/index.css";
const { TabPane } = Tabs;
const Places = (props: any) => {
  const { data } = useAfterAuth();
  const [placesData, setPlacesData] = useState([]);
  useEffect(() => {
    if (data.data.photos) setPlacesData(data.data.photos);
  }, []);
  const addProps = {
    className: "",
    style: { display: "block" },
    format: "auto",
    layout: "",
    layoutKey: "",
    responsive: "false"
  };
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Description" key="1">
        <Fragment>
          <div className="contentHeader">
            <h1 style={{ color: "white" }}>
              {" "}
              <Icon
                type="arrow-left"
                onClick={() => props.history.push("/dashboard")}
              />
              {data.data.title}
            </h1>

            <p>
              {data.data.description
                ? data.data.description.substring(0, 600)
                : ""}
            </p>
          </div>
        </Fragment>
      </TabPane>
      <TabPane tab="Images" key="2">
        <Google
          client="ca-pub-7292810486004926"
          slot="7806394673"
          style={{ width: 500, height: 300, float: "left" }}
          format=""
        />
        <List
          grid={{
            gutter: 16,
            xs: 2,
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
                style={{
                  height: "300",
                  width: "100%"
                }}
                onClick={() => {
                  console.log(item);
                }}
              >
                <img
                  className="loading"
                  src={item}
                  style={{ width: "100%", height: "300px" }}
                />
              </Card>
            </List.Item>
          )}
        />
      </TabPane>
    </Tabs>
  );
};

export default Places;
