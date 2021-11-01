import styled from "styled-components";


export const CartVazio = styled.div`
   
    width: 100%;
    margin: 0 auto;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffff;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    
    
    
    h1{
        font-size: 2.5rem;
        text-align: center;
    }

    a{
        color: #DA0037;
        margin-top: 30px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        

    }

    a:hover{
       color: #000;

    }

    @media (max-width:768px){
        height: 250px;
        margin-bottom: 10px;

        h1{
            font-size: 1.5rem;
            text-align: center;
        }
    }

  

`;

export const ItemCart = styled.div`
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffff;
    border-radius: 5px;
    margin-bottom: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    
   
    img{
    max-width: 200px;
    width: 100%;
    height: 200px;
    object-fit: contain;
    background-color: #f3f3f3 ;

    }

    .txtCart{
        max-width: 200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

    .qtdItem button:hover{
        background-color: #B0002C;
    }

    .qtdItem p{
        width: 45px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f3f3f3;
       
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
        padding: 30px 10px;
        

        img, .txtCart{
       
            max-width: 80%;
            margin-top: 10px;
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