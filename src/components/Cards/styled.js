import styled from "styled-components";


export const DivCards = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding:0px 10px;
    /* border: 1px solid red; */
`


export const Card= styled.div`
    width: 250px;
    height: 410px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: #fff;
    margin-bottom: 30px;

    img{
        border: 1px solid green;
        width: 230px;
        padding: 20px;
        height: 230px;
        object-fit: contain;
    }

    .txtCard{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .txtCard p{
        margin: 10px 0px 10px;
        font-size: 18px;
    }

    .txtCard h3{
        margin: 5px 0px 10px;
    }

    button{
        background-color: #000;
        color: #fff;
        width: 220px;
        height: 40px;
        font-size: 18px;

    }

`