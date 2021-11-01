import styled from "styled-components";


export const SectionCart = styled.section`
    max-width: 1220px;
    height: auto;
    margin: 50px auto 0px;
    
    h1{
        text-align: center;
        font-size: 2rem;
       
    }
    
    .containerList{
        display: flex;
        padding: 50px 20px;
    }
      

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
       

        .containerList{
            flex-direction: column;
            align-items: center;
        }
      
         

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