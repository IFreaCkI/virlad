import React, { useEffect, useRef, useState } from "react";
import { YMaps, Map,ObjectManager,Clusterer,Placemark,Circle,GeolocationControl,RouteButton,Panorama,ZoomControl,SearchControl,TrafficControl,TypeSelector
 } from 'react-yandex-maps';
import {Navbar, Nav, Container,Col,Row,Button,InputGroup,FormControl } from 'react-bootstrap';
import {BrowserRouter as Router,
Route,
Link
} from "react-router-dom";
import points from "./points.json";
import style from "./App.css";
import Menu from './Menu';
import Restorany from './Restorany';

const btstyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '10px'
  };


const mstyle = {
    position: 'sticky',
    left: 0,
    top: 0,
    bottom: 0,
    width: '99%',
    height: '760px',
    padding: '5px',
    boxShadow: "#fff"
  };



export const Home = () => (
<Row>
    <Row style={{ backgroundColor: '#383838', color:'#fff'}}>
      <Col sm={4} >
      <Row style={{textAlign:"center"}}>
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item style={btstyle}>
          <Button variant="warning">РЕСТОРАНЫ</Button>
        </Nav.Item>
        <Nav.Item style={btstyle}>
          <Button variant="warning">БАРЫ</Button>
        </Nav.Item>
        <Nav.Item style={btstyle}>
          <Button variant="warning">КЛУБЫ</Button>
        </Nav.Item>
        </Nav>
        <Menu/>
  </Row>
      </Col>
      <Col sm={8}>
              <YMaps query={{apikey:"08ea0b82-3c50-47c4-914b-53c343d99d94"}}>
                      <Map style={mstyle}
                      defaultState={{
                        center: [48.471466, 135.081076],
                        zoom: 10,
                        }}
                        modules={["templateLayoutFactory", "layout.ImageWithContent"]}
                        >
                        <ZoomControl />

                        <GeolocationControl options={{ float: 'left' }} />
                        <ZoomControl options={{ float: 'right' }} />
                        <RouteButton options={{ float: 'right' }} />
                        <SearchControl options={{ float: 'right' }} />
                        <TrafficControl options={{ float: 'right' }} />
                        <TypeSelector options={{ float: 'right' }} />
                        <Clusterer
                          options={{
                            preset: 'islands#invertedVioletClusterIcons',
                            groupByCoordinates: false,
                          }}
                        >
                          {points.map((coordinates, index) => (
                          <Placemark
                          properties={{
                                             balloonContentHeader: "Balloon3",
                                             balloonContent: "<p style='color: red'>Balloon3 <strong>Test</strong></p>"
                                         }}
                           key={index} geometry={coordinates} />
                          ))}

                        </Clusterer>

                        <ObjectManager
              options={{
                clusterize: true,
                gridSize: 32,
              }}
              objects={{
                openBalloonOnClick: true,
                preset: 'islands#greenDotIcon',
              }}
              clusters={{
                preset: 'islands#redClusterIcons',
              }}
              filter={object => object.id % 2 === 0}
              modules={[
                'objectManager.addon.objectsBalloon',
                'objectManager.addon.objectsHint',
              ]}
            />
                        </Map>
                  </YMaps>

      </Col>
    </Row>
</Row>

);
