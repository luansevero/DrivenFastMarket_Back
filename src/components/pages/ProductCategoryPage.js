import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";

import TokenContext from '../../contexts/TokenContext';
import UserContext from '../../contexts/UserContext';

import styled from "styled-components";
import { Header, ProductBox} from "../shared/storeStyle";

export default function ProductCategoryPage(){
    const { categoriaProduto } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState(null);

    const { url } = useContext(UserContext)
    const { token } = useContext(TokenContext);
    const navigate = useNavigate();

    useEffect(async () => {
        //if(!token){return navigate('/menu/login')};
        setIsLoading(true);
        const handleLoadingPage = () => {
            const promisse = axios.get(`${url}${categoriaProduto}`, {categoria:categoriaProduto}, token);
            promisse.then((res) => {
                setProducts(res.data);
                return true
            })
            promisse.catch((error) => {
                console.log('Pagina não existe movendo para HomePage');
                return false
            })
        }

        if(handleLoadingPage){
            setIsLoading(false)
        } else {navigate('/')}
    }, [])

    

    const handleSeeMore = (x) => {navigate(`/${'local atual'}/${x}`)}

    function handleTransaction(){
        window.alert('Oi')
    }

    return(
        <Body>
            <Header>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    <h1>Hortifruti</h1>
                    <ion-icon name="search-outline"></ion-icon>
            </Header>
            <NavBar>
                <ul>
                    <li className="info"><span>Frutas</span></li>
                    <li className="info"><span>Ovos</span></li>
                    <li className="info"><span>Legumes</span></li>
                    <li className="info"><span>Vegetais</span></li>
                    <li className="info"><span>Frutas</span></li>
                    <li className="info"><span>Frutas</span></li>
                </ul>
            </NavBar>
            <Main>
                {
                }
                <Section>
                    <TitleContainer>
                        <span className="type">Frutas</span>
                        <h3 onClick={() => handleSeeMore('var')}>VER MAIS</h3>
                    </TitleContainer>
                    <ProductContainer>
                        <ProductBox>
                            <ProductImgBox>
                                <div className="info"><span>500g</span></div>
                                <img src='https://frutasbrasilsul.com.br/wp-content/uploads/banana-nanica.png' alt='' />
                                <button onClick={handleTransaction}><h3>+</h3></button>
                            </ProductImgBox>
                            <h2>R$ 10,99</h2>
                            <span>Laranja Pera Aprox</span>
                        </ProductBox>
                    </ProductContainer>
                </Section>
            </Main>
        </Body>
    )
}

const Body =  styled.div`
    main{
        padding:0px 15px;
    }
    button{
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
    .info{
        display:flex;
        align-items: center;
        justify-content:center;
        border: 1px solid #FF4791;
        border-radius: 10px;
        span{
            font-weight:300;
            font-size: 18px;
            line-height: 18px;
            color: #FF4791;
        }
    }
`
const NavBar = styled.nav`
    z-index: 1;
    position: fixed;
    top: 70px;
    left: 0px;
    width: 100%;
    overflow-y: hidden;
    padding: 0 15px;
    background-color: #ffffff;
    ul{
        padding: 0 15px;
        display:flex;
        li:first-of-type{
            margin-left:0;
        }
        li:last-of-type{
            margin-right:0;
        }
    }
    li{
        background-color: #ffffff;
        padding: 10px;
        margin: 0 5px;
        height: 40px;
    }
`
const Main =  styled.main`
    margin-top: 120px;
    margin-bottom: 90px;
`
const Section = styled.section`
    display:flex;
    flex-direction: column;
    margin: 60px 0;
    &:first-of-type{
        margin-top: 0px;
    }
    &:last-of-type{
        margin-bottom: 0px;
    }
`
const TitleContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    span{
        font-weight: 500;
        font-size: 25px;
        line-height: 24px;
        color: #000000;
    }
    h3{
        font-weight: 700;
        font-size: 15px;
        color:#FF4791;
    }
`
const ProductContainer = styled.ul`
    width:345px;
    overflow-y:hidden;
    display:flex;
    li:first-of-type{
        margin-left: 0px;
    }
    li:last-of-type{
        margin-right: 0px;
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