import React, { useCallback, useContext, Fragment } from "react";
import { BeforeAuthContext, AfterAuthContext } from "../context/";
import { auth } from "../config/index";
// import { Container, GridLayout, Tile, Card, ProgressChart } from "@redgets/ui";
// import DynamicDataTable from "@redgets/ui/lib/DynamicDataTable";
// import {
//   LineChart,
//   BubbleMap,
//   AreaChart,
//   ColumnChart,
//   BarChart
// } from "@redgets/hc-viz";
const Dashboard = (props: any) => {
  const { content, dispatch } = useContext(BeforeAuthContext);
  const { dispatchAction } = useContext(AfterAuthContext);
  const logout = useCallback(() => {
    auth.signOut();
    dispatch({ type: "UPDATE_DATA", value: false });
  }, []);
  return (
    <Fragment>
      <h1>Here in Dashboard {JSON.stringify(content, null, 3)}</h1>
      <button onClick={logout}>Logout </button>
      <button
        onClick={() => {
          dispatchAction({ type: "UPDATE_DATA", value: "I am here" });
          props.history.push("/users");
        }}
      >
        Users{" "}
      </button>

      {/* <Container backgroundColor="#FAFAFA">
        <GridLayout rowHeight={5} noOfCols={4} width={1150}>
          <Tile
            data={{ id: 1, value: 20, unit: "k" }}
            // url="http://localhost:3009/threatIps"
            valueColor="#FF0000"
            label="Threat IP's"
            dropdownContent={<div>Thats a dropdown folks</div>}
            dropdownProps={{ title: "O365" }}
          />
          <Tile
            // url="http://localhost:3009/radius"
            data={{ value: 3 }}
            valueColor="#000000"
            label="Average Radius"
          />
          <Tile
            // url="http://localhost:3009/data/used"
            data={{ id: 1, value: 1024, unit: "GB" }}
            label="Used Data"
            valueColor="#78ba5d"
            dropdownContent="Some used data"
          />
          <Tile
            // url="http://localhost:3009/data/total"
            data={{ id: 1, value: 125, unit: "TB" }}
            valueColor="green"
            label="Total Data"
            dropdownContent="This depicts the total data available"
          />
        </GridLayout>
        <GridLayout rowHeight={14} width={1150}>
          <Card title="Bar Chart">
            <BarChart
              data={[
                {
                  category: "bilal.shafi@emumba.com",
                  data: [
                    { id: 0, yValue: 10, seriesId: "redSeries" },
                    { id: 1, yValue: 10, seriesId: "yellowSeries" },
                    { id: 2, yValue: 10, seriesId: "greenSeries" }
                  ]
                },
                {
                  category: "ahmed.waleed@emumba.com",
                  data: [
                    { id: 0, yValue: 20, seriesId: "redSeries" },
                    { id: 1, yValue: 10, seriesId: "yellowSeries" },
                    { id: 2, yValue: 20, seriesId: "greenSeries" }
                  ]
                },
                {
                  category: "irfan.ali@emumba.com",
                  data: [
                    { id: 0, yValue: 30, seriesId: "redSeries" },
                    { id: 1, yValue: 30, seriesId: "yellowSeries" },
                    { id: 2, yValue: 10, seriesId: "greenSeries" }
                  ]
                },
                {
                  category: "bilal.shafi@emumba.com",
                  data: [
                    { id: 0, yValue: 10, seriesId: "redSeries" },
                    { id: 1, yValue: 10, seriesId: "yellowSeries" },
                    { id: 2, yValue: 10, seriesId: "greenSeries" }
                  ]
                },
                {
                  category: "ahmed.waleed@emumba.com",
                  data: [
                    { id: 0, yValue: 20, seriesId: "redSeries" },
                    { id: 1, yValue: 10, seriesId: "yellowSeries" },
                    { id: 2, yValue: 20, seriesId: "greenSeries" }
                  ]
                },
                {
                  category: "irfan.ali@emumba.com",
                  data: [
                    { id: 0, yValue: 30, seriesId: "redSeries" },
                    { id: 1, yValue: 30, seriesId: "yellowSeries" },
                    { id: 2, yValue: 10, seriesId: "greenSeries" }
                  ]
                }
              ]}
              labels={{
                redSeries: "Owner",
                yellowSeries: "View",
                greenSeries: "Edit"
              }}
            />
          </Card>
          <Card title="Bubble Map" widthUnits={2}>
            <BubbleMap
              url="https://redgets-api.herokuapp.com/geographic-user-…"
              radiusKey="Activities"
            />
          </Card>
        </GridLayout>
      </Container> */}
    </Fragment>
  );
};

export default Dashboard;
