import styled from "styled-components";


export const SectionCart = styled.section`
    max-width: 1220px;
    margin: 50px auto;
    display: flex;
    padding: 50px 20px;
   

    .listCart{
        max-width: 70% ;
        width: 100%;
        margin-right: 20px;
        
        
        
    }
    
    .total{
        max-width: 30%;
        width:100%
    }

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;

        .listCart{
            margin-right: unset;
        }

        .total{
        max-width: 70%;
        width:100%
        }
        
    }

    @media (max-width: 425px) {
       
       .listCart{
           max-width: 90%;
       }
    
       .total{
         max-width: 90%;
      
       }
       
   }



`