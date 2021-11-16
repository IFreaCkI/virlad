import React from 'react';
import {Container } from 'react-bootstrap';

const fstyle = {
    position: 'sticky',
    left: 0,
    top: 0,
    bottom: 0,
    marginTop: 0
  };

const Footer = () => (
<div style={fstyle}>
<Container fluid style={{backgroundColor: '#212529', color:'#fff'}}>
<Container style={{display: 'flex', justifyContent: 'center', padding: '30px'}}>
<p>VirLad GIS</p>
</Container>
</Container>
</div>
)
export default Footer;
