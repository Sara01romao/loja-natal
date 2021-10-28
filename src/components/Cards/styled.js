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

    @media (max-width: 425px) {
         justify-content: center;
    }
`

export const Card= styled.div`
    max-width: 390px;
    width: 100%;
    height: 420px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: #fff;
    margin-bottom: 40px;
    
    @media (min-width: 426px) and (max-width: 768px){
        max-width: 300px;
    }
  
    img{
       
        width: 250px;
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
        border:none;
        width: 220px;
        height: 45px;
        font-size: 18px;
        font-weight: bold;
        transition: 0.2s;
        cursor: pointer;
        border-radius: 5px;
        
    }

    button:hover{
        background-color: #DA0037;
    }




`


export const NavFilter = styled.div`
     max-width: 1220px;
     width:100%;
     height: 80px;
     background: #DA0037;
     margin-bottom:50px;
     padding: 0px 30px;
     display: flex;
     align-items: center;
     justify-content: space-between;

     select{
         width: 150px;
         height: 40px;
         padding: 5px;
         font-size: 18px;
         font-weight: bold;
         background: #DA0037;
         color: #fff;
         border: 3px solid #fff;

     }

     select:focus{
         outline: none;
     }
     option{
         background-color: #fff;
         color: #000;
     }

     

   }

   
     


`