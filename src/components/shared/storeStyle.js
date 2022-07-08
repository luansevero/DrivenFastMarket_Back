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
const ProductImgBox = styled.div`
    position:relative;
    padding: 15px;
    img{
        box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.01);
        width:105px;
        height:105px;
    }
    div.info{
        position: absolute;
        top: 7.5px;
        left: 87.5px;
        padding: 0px 5px;
        border-radius: 12.5px;
        height: 25px;
        span{
            display: block;
            direction: rtl;
            font-weight: 400;
            font-size: 15px;
            line-height: 15px;
        }
    }
    button{
        position: absolute;
        top: 100px;
        left:100px;
        height:35px;
        width:35px;
        background-color: #FF4791;
        border-radius:20px;
        h3{
            font-weight: 500;
            font-size: 25px;
            line-height: 24px;
            color: #ffffff;
        }
    }
`
export { Header, ProductBox,ProductImgBox }