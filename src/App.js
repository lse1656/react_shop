/* eslint-disable */

import React, {useState} from 'react';
import { Nav,Navbar,NavDropdown,Container,Button } from 'react-bootstrap';
import Data from './data.js';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';

function App() {

  let [shoes, setShoes] = useState(Data)
  let [stock, setStock] = useState([10,11,12])

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Route exact path="/">
        <div>
          <section className='jumbotron'>
            <h1>20% Season off</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.</p>
            <Button variant="primary">Learn more</Button>{' '}
          </section>
          <div className='container'>
            <div className='row'>
              {
                shoes.map((a,i)=>{
                  return <Card key = { i } shoes = { a }/>
                })
              }

              <button className='more-button' onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((responsive)=>{
                  setShoes([...shoes, ...responsive.data])
                })
                .catch(()=>{console.log('실패')});
              }}>더보기</button>
            </div>
          </div>
        </div>
      </Route>
      <Route path="/detail/:id">
        <Detail shoes={ shoes } />
      </Route>
    </div>
  );
}

function Card(props){
  return(
    <div className='col-md-4'>
      <img src={`https://codingapple1.github.io/shop/shoes${props.shoes.id + 1}.jpg`}></img>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } &amp; { props.shoes.price }</p>
    </div>
  )
}

export default App;
