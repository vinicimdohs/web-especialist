import styled from "styled-components";

export const Box = styled.div`
  display: grid;
  grid-template-columns: 5fr 17fr;
  grid-gap: 20px;
  margin: 30px;
`;

export const Container1 = styled.div`
  a{
    display: flex;
    justify-content: center;
    height: 35px;
    width: 80px;
  }
  div{
    margin-top: 40px;
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  h2 {
    margin-top: 0;
  }
`;

export const Container2 = styled.div`
  height: 100%;
  margin-right: 20px;
  background: white;
  border: 1px solid lightgray;
  border-radius: 50px;
  div {
    margin: 30px;
  }
  input:not([type]),
  input[type="search"] {
    border: 1px solid lightgray;
    border-radius: 50px;
    width: 100%;
    background-color: #2198f6;
  }
  h6{
    text-align: center;
    font-weight: bold;
  }
`;

export const Line = styled.div`
  width: 90%;
  height: 2px;
  background-color: #2D2C2C;
`;
