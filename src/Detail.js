import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let Box = styled.div`
  padding: 20px;
`;

let Title = styled.h4`
  font-size: 24px;
`;

function Detail(props){

  let [alert, setAlert] = useState(true);

  useEffect(()=>{
    let 타이머 = setTimeout(()=>{ setAlert(false); },2000);
    return ()=>{clearTimeout(타이머)};
  },[]);

  let { id } = useParams();
  let history = useHistory();
  let findProduct = props.shoes.find(a => a.id == id)

  return(
    <div className="container">
      <Box>
        <Title className='red'>Detail</Title>
      </Box>

      {
        alert === true
        ? <div className='my-alert'>
            <p>재고가 얼마 남지 않았습니다!</p>
          </div>
        : null
      }

      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${ findProduct.id + 1 }.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{ findProduct.title}</h4>
          <p>{ findProduct.content }</p>
          <p>{ findProduct.price }</p>  

          <Info></Info>

          <button className="btn btn-danger">주문하기</button> 
          <button className="btn btn-primary" onClick={()=>{
            history.goBack()
          }}>뒤로가기</button> 
        </div>
      </div>
    </div> 
  )
}

function Info(){
  return(
    <p>재고 : ???</p>
  )
}

export default Detail;