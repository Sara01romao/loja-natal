import styled from "styled-components";


export const CartVazio = styled.div`
   
    width: 100%;
    margin: 0 auto;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    
    h1{
        font-size: 2.5rem;
    }

    a{
        
        text-decoration: none;
        margin-top: 30px;
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        

    }

    a:hover{
       color: #DA0037;

    }

  

`;

export const ItemCart = styled.div`
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffff;
    border-radius: 10px;
    border-bottom: 5px solid red;
    margin-bottom: 40px;

   
    img{
    border: 1px solid black;
    max-width: 200px;
    width: 100%;
    height: 200px;
    object-fit: contain;

    }

    .txtCart{
        max-width: 200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .qtdItem{
        display: flex;
        justify-content: center;
        width: 200px;
        

    }

    .qtdItem button {
        width: 30px;
        height: 30px;
        background-color: #DA0037;
        border: none;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
    }

    .qtdItem p{
        width: 45px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
       
    }

    .removebtn{
        border: none;
        width: 80px;
        height: 30px;
        font-weight: bold;
        cursor: pointer;
    }

    .removebtn:hover{
        background-color: #A1A1A1A1;
    }

    @media (max-width:768px){
        flex-direction: column;
        

        img, .txtCart{
       
            max-width: 80%;
        }

        .txtCart{
            text-align: center;
        }

        .qtdItem{
            margin-top: 20px;
        }

        .removebtn{
        
            width: 105px;
            margin-top: 20px;
        
        }

    }
    

`