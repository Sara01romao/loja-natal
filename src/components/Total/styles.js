import styled  from 'styled-components';


export const DivTotal= styled.div`
    background-color: #2b2b30;
    padding: 40px;
    height: 300px;
    color: #ffff;
    border-radius: 5px;

    .txtTotal{
        display:flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 20px;  
    }

    button{
        margin-top: 30px;
        /* max-width: 100%; */
        width: 100%;
        height: 40px;
        font-size: 16px;
        font-weight: bold;
        background-color: #DA0037;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
   
    button:hover{
        background-color: #B0002C;
    }

`