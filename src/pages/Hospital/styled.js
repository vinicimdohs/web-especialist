import styled from "styled-components";

export const Header = styled.header`
  background-color: #2d2c2c;
  color: white;
  padding-top: 10px;
  min-width: 1300px;
  h2 {
    text-align: center;
    margin-top: 0;
    padding-bottom: 20px;
  }
  a {
    margin: 20px;
    display: flex;
    justify-content: center;
    height: 35px;
    width: 80px;
  }
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  margin: 30px;
`;

export const Container = styled.div`
  height: 100%;
  margin-right: 20px;
  background: white;
  border: 1px solid lightgray;
  border-radius: 50px;
  padding: 10px;
  div {
    margin-top: 15px;
    margin-right: 15px;
    margin-left: 15px;
  }
  input:not([type]),
  input[type="search"] {
    border: 1px solid lightgray;
    border-radius: 50px;
    width: 100%;
    background-color: #2198f6;
  }
`;

export const Line = styled.div`
  height: 2px;
  background-color: #2d2c2c;
`;

export const SubTitle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    a{
        color: black;
        text-align: center;
        padding-top: 35px;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }
`;