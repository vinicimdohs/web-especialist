import styled from 'styled-components';

export const Box = styled.div`
    width: 50%;
    float: left;
    margin-top: 100px;
`;

export const Container =  styled.div`
    height: 550px;
    background: white;
    margin-left: 50px;
    padding: 20px;
    border: 1px solid lightgray;
    border-radius: 50px; 
    a {
        border-radius: 50px;
        margin-top: 15px;
        margin-bottom: 10px;
        margin-left: 15px;
    }
    input:not([type]), input[type=text], input[type=password] {
        margin: 10px;
        padding: 10px;
        border: 1px solid lightgray;
        border-radius: 50px;
        width: 85%;
    }
    button {
        border-radius: 50px;
        margin-top: 15px;
        margin-bottom: 10px;
        margin-left: 15px;
    }
`;

export const DivStyle = styled.div`
    text-align: center;
    margin-left: 20px;
    width: 730px;
    img {
        border-radius: 50px;
        margin: 30px;
    }
    div {
        width: 99%;
        height: 3px;
        background-color: #2D2C2C;
    }
`;