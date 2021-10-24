import styled from "styled-components";


export const ItemCart = styled.div`
    border: 1px solid blue;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    img{
    border: 1px solid blue;
    width: 200px;
    height: 200px;
    object-fit: contain;

    }

    .txtCart{
        border: 1px solid blue;
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .qtdItem{
        border: 1px solid blue;
        display: flex;
        justify-content: center;
        width: 200px;
        

    }


`