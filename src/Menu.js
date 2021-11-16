import React from 'react';
import {Container,Col,Row } from 'react-bootstrap';
import { useEffect } from 'react';

export default function Menu () {
const [categores, setCategores] = React.useState([{"id":0,"categoryName":"Рестораны"}]);
useEffect(() => {
  fetch("http://localhost:3001/categores")
    .then(res => res.json())
    .then(
      (result) => {
        setCategores(result);
      },
      (error) => {
        alert(error);
      }
    )
}, [])
  return(
    <Container fluid>
    {categores.map (Kategorya_blya => (<h2>{Kategorya_blya["categoryName"]}</h2>) )}
    </Container>
  )
}
