import styled from "styled-components";


export const DivHeader= styled.header`
    background-color: black;
    max-width: 100%;
    padding: 5px 20px;

    nav{
        max-width: 1220px;
        padding: 10px 0px;
        margin: 0 auto;
        /* border: 1px solid red; */
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo{
        font-size: 40px;
    }
   

    ul{
        display: flex;
        width: 155px;
        justify-content: space-between;
    }

    a{
        color: #fff;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;

        
    }

    a:hover{
        opacity: 0.9;
    }

    a svg{
        width: 25px;
        height: 25px;
    }

    .count{
       
        display: flex;
        
    }

    .count p{
        position: relative;
        top: -5px;
        background-color: #DA0037;
        width: 20px;
        height: 20px;
        border-radius:50%;
        text-align: center;
        font-weight: bold;
    }


`

