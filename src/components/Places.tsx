import React, { Fragment, useState, useEffect } from "react";
import { useAfterAuth } from "../AuthProviders/AfterAuth";
import { Card, Icon, List, Spin,Tabs } from "antd";
import "./../styles/index.css";
import axios from "axios";
const { TabPane } = Tabs;
const Places = (props: any) => {
  const { data } = useAfterAuth();
  const [placesData, setPlacesData] = useState([]);
  useEffect(() => {
    if(data.data.photos)
   setPlacesData(data.data.photos)
  }, []);
  return (
    <Tabs defaultActiveKey="1" >
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
          {data.data.description ? data.data.description.substring(0, 600) : ""}
        </p>
      </div>
     
    </Fragment>
    </TabPane>
    <TabPane tab="Images" key="2">
      <List
        grid={{
          gutter: 48,
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
              style={{
                height: "300",
                width: "100%"
                // margin: "1%"
                //background: "#" + (((1 << 24) * Math.random()) | 0).toString(16)
              }}
              onClick={() => {
                console.log(item);
              }}
            >
              <img className="loading"src={item} style={{ width: "100%", height: "300px" }} />
            </Card>
          </List.Item>
        )}
      />
    </TabPane>
    <TabPane tab="Favourites" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
   

    // <Fragment>
    //   <h1>{JSON.stringify(data.data, null, 3)}</h1>
    //   <button onClick={() => props.history.push("/dashboard")}>
    //     Dashboard{" "}
    //   </button>

    //   <Fragment>
    //   <Row>

    //       {placesData.length===0?<Spin />:null}
    //       {placesData &&
    //         placesData.length > 0 &&
    //         placesData.map((item: any, i: any) => (
    //           <Col>
    //           <Card

    //             style={{
    //               height: "300",
    //               width: "100%",
    //               margin: "1%"
    //               //background: "#" + (((1 << 24) * Math.random()) | 0).toString(16)
    //             }}
    //             onClick={() => {

    //               console.log( item);
    //             }}
    //           >
    //             <img src={item} style={{ width: "100%", height: "300px" }} />
    //           </Card>

    //         </Col>
    //         ))}
    //     </Row>
    //   </Fragment>
    // </Fragment>
  );
};

export default Places;
