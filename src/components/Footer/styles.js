import styled from "styled-components";


export const DivFooter = styled.footer`
    background-color: black;
    max-width: 100%;
    width: 100%;
    padding: 5px 20px;
    color: #fff;
    margin-top:10px;
    

    .footerContainer{
        max-width: 1220px;
        margin: 0 auto;
        height: auto;
    }

    .footerContainer div{
        max-width: 200px;
        width: 100%;
        margin: 0 auto;
        padding: 20px;
    }

    .footerContainer div svg{
        width: 30px;
        height: 30px;
        margin: 0px 10px;
        cursor: pointer;
    }

    .footerContainer div svg:hover{
        fill: #FFB7C9;
        transition: 0.2s;
        
    }

    p{
      text-align: center ;
      color: #a0a0a0;
    }

`