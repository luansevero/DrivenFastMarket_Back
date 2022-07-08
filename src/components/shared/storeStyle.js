import styled from "styled-components";

const Header = styled.header`
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 70px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color: #FFFFFF;
    padding: 5px 10px 0px 10px;
    ion-icon{
        width: 40px;
        height: 40px;
        color: #FF4791;
    }
    h1{
        font-family: 'Inter', 'sans-serif';
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        color: #FF4791;
    }
}
`
const ProductBox = styled.li`
    width:132px;
    margin: 0 15px;
    h2{
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 8px;
        color:#FF4791;
    }
    span{
        font-weight: 300;
        font-size: 16px;
        line-height: 16px;
    }
`

export { Header, ProductBox }