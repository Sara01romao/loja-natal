import styled from "styled-components";



export const HomeSection = styled.section`
       
    padding: 0px 30px;

    @keyframes pisca {
        to {
            fill-opacity:1;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
        
        }
    }

    #vermelho, #azul , #amarelo, #verde{
        animation: pisca 1s ease-in infinite;
    }

    #pisca1, #pisca2{
        
        position: absolute;
        top: 60px;
    }

    #pisca1{
        right: calc(12% - 64px);
    }

     #pisca2{
        left: calc(11% - 64px);
     }
        
    .imgNatal{
    
        max-width: 1220px;
        width: 100%;
        height: 200px;
        object-fit: fill;
        display: block;
        margin: 0px auto 50px;
        padding: 30px 0px 0px;
        border-bottom: 5px solid green;
     
    }

    @media (max-width:376px){
        padding: 0px 20px;

        #pisca1{
            right: 20px;
        }

        #pisca2{
            left: 20px;
        }

        .imgNatal{
            object-fit: cover;
        }
    }
   

    @media (max-width:425px){
       

        #pisca1{
            width:108px;
            height:146px;
            right: calc(23% - 64px);
        }

        #pisca2{
            width:108px;
            height:146px;
            left: calc(22% - 64px);
        }
    }

    @media (min-width:2560px){
       

       #pisca1{
        right: calc(28% - 64px);
       }

       #pisca2{
            left: calc(28% - 64px);
       }
   }
   


`