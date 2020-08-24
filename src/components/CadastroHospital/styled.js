import styled from "styled-components";

export const Box = styled.div`
  display: grid;
  grid-template-columns: 0.55fr 10px;
  grid-gap: 30px;
`;

export const Form = styled.form`
  height: 650px;
  background: white;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 50px;
  padding-right: 70px;
  margin: 20px;
  input:not([type]),
  input[type="text"],
  input[type="password"], 
  input[type="email"]{
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 50px;
  }
  a {
    border-radius: 50px;
    margin-top: 15px;
  }
  button {
    border-radius: 50px;
    margin-top: 15px;
  }
  div {
    font-size: 5px;
  }
`;

export const Div1 = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr;
  grid-gap: 30px;
`;

export const Div2 = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr 2fr 2fr;
  grid-gap: 30px;
`;

export const Div3 = styled.div`
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  grid-gap: 30px;
`;

export const DivBtn = styled.div`
  float: right;
`;

export const Container = styled.div`
    text-align: center;
    margin-right: 20px;
    width: 730px;
    div {
        width: 99%;
        height: 3px;
        background-color: #2D2C2C;
    }
`;