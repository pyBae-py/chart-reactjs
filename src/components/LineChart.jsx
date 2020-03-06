import * as React from "react";
import "./ComponentStyle.css";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  LineSeries
} from "@syncfusion/ej2-react-charts";

import { Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faWheelchair } from "@fortawesome/free-solid-svg-icons";
import { Row, Tab, ListGroup, Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";

class LineChart extends React.Component {
  constructor() {
    super(...arguments);
    this.data = [
      { country: "Jan", gold: 50, silver: 70, bronze: 45 },
      { country: "Feb", gold: 40, silver: 60, bronze: 55 },
      { country: "Jun", gold: 70, silver: 60, bronze: 50 },
      { country: "Mar", gold: 60, silver: 56, bronze: 40 },
      { country: "Jul", gold: 50, silver: 45, bronze: 35 },
      { country: "Aug", gold: 40, silver: 30, bronze: 22 },
      { country: "Nov", gold: 40, silver: 35, bronze: 37 },
      { country: "Dec", gold: 30, silver: 25, bronze: 27 }
    ];
    this.primaryxAxis = { valueType: "Category" };
    this.primaryyAxis = {
      minimum: 0,
      maximum: 80,
      interval: 20,
      title: "Number of pages"
    };
    this.legendSettings = { position: "Top-Left", alignment: "far" };
  }
  render() {
    return (
      <div className="div">
        <div id="title">
          <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">
                <p id="title-01">
                  <FontAwesomeIcon icon={faEllipsisV} />
                  {"    "}
                  Main Report
                </p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="line-chart-wrapper">
          <Pagination id="line-pagination">
            <Pagination.Prev />
            <Pagination.Item>{"This Week"}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
          <div className="pagination-wrapper">
            <Tab.Container
              id="list-group-tabs-example"
              defaultActiveKey="#link1"
            >
              <Row sm={6}>
                <ListGroup>
                  <ListGroup.Item action href="#link1">
                    All Header
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup>
                  <ListGroup.Item action href="#link2">
                    H1 Only
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup>
                  <ListGroup.Item action href="#link3">
                    H2 Only
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup>
                  <ListGroup.Item action href="#link4">
                    H3 Only
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup>
                  <ListGroup.Item action href="#link5">
                    H4 Only
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup>
                  <ListGroup.Item action href="#link6">
                    H5 Only
                  </ListGroup.Item>
                </ListGroup>
              </Row>
            </Tab.Container>
          </div>
          <ChartComponent
            id="charts"
            primaryXAxis={this.primaryxAxis}
            primaryYAxis={this.primaryyAxis}
            legendSettings={this.legendSettings}
            title="Line Chart"
          >
            <Inject
              services={[LineSeries, Legend, Tooltip, DataLabel, Category]}
            />
            <SeriesCollectionDirective>
              <SeriesDirective
                dataSource={this.data}
                xName="country"
                yName="gold"
                name="H1"
                legendShape="Circle"
                type="Line"
              ></SeriesDirective>
              <SeriesDirective
                dataSource={this.data}
                xName="country"
                yName="silver"
                name="H2"
                legendShape="Circle"
                type="Line"
              ></SeriesDirective>
              <SeriesDirective
                dataSource={this.data}
                xName="country"
                yName="bronze"
                name="H3"
                legendShape="Circle"
                type="Line"
              ></SeriesDirective>
              <SeriesDirective
                dataSource={this.data}
                xName="country"
                yName="bronze"
                name="H4"
                legendShape="Circle"
                type="Line"
              ></SeriesDirective>
              <SeriesDirective
                dataSource={this.data}
                xName="country"
                yName="bronze"
                name="H5"
                legendShape="Circle"
                type="Line"
              ></SeriesDirective>
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>
    );
  }
}
export default LineChart;
