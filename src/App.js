import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LineChart, PieChart } from "react-chartkick";
import "chart.js";
import { Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faWheelchair } from "@fortawesome/free-solid-svg-icons";
import { Row, Tab, ListGroup, Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
function App() {
  const data = [
    { name: "H1", data: { "2017-01-01": 3, "2017-01-02": 4 } },
    { name: "H2", data: { "2017-01-02": 4, "2017-01-05": 0 } },
    { name: "H3", data: { "2017-01-05": 0, "2017-01-08": 3 } },
    { name: "H4", data: { "2017-01-01": 4, "2017-01-5": 0 } },
    { name: "H5", data: { "2017-01-05": 5, "2017-01-08": 3 } }
  ];

  // and

  return (
    <div className="App">
      <Nav justify variant="tabs" defaultActiveKey="/home" className="title">
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
      <div className="line-chart-wrapper">
        <Pagination id="line-pagination">
          <Pagination.Prev />
          <Pagination.Item>{"This Week"}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
        <div className="pagination-wrapper">
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
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
        {/* <p id="left-heading-line">Number of pages</p> */}
        <LineChart
          data={data}
          legend={true}
          ytitle="Number of pages"
          discrete={false}
        />
      </div>
      <br />
      <br />
    </div>
  );
}

export default App;
