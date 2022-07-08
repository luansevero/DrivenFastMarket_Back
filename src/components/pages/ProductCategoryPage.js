import styled from "styled-components"

export default function ProductCategoryPage(){
    return(
        <Body>
            <Header>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    <h1>Hortifruti</h1>
                    <ion-icon name="search-outline"></ion-icon>
            </Header>
            <NavBar>
                
            </NavBar>
            <Main>
                <Section>
                    <TitleContainer>
                        <span className="type">Frutas</span>
                        <h3>VER MAIS</h3>
                    </TitleContainer>
                    <ProductContainer>
                        <ProductBox>
                            <ProductImgBox>
                                <div className="amount"><span>500g</span></div>
                                <img src='https://frutasbrasilsul.com.br/wp-content/uploads/banana-nanica.png' alt='' />
                                <button><h3>+</h3></button>
                            </ProductImgBox>
                            <h2>R$ 10,99</h2>
                            <span>Laranja Pera Aprox</span>
                        </ProductBox>
                        <ProductBox>
                            <ProductImgBox>
                                <div className="amount"><span>500g</span></div>
                                <img src='https://frutasbrasilsul.com.br/wp-content/uploads/banana-nanica.png' alt='' />
                                <button><h3>+</h3></button>
                            </ProductImgBox>
                            <h2>R$ 10,99</h2>
                            <span>Laranja Pera Aprox</span>
                        </ProductBox>
                        <ProductBox>
                            <ProductImgBox>
                                <div className="amount"><span>500g</span></div>
                                <img src='https://frutasbrasilsul.com.br/wp-content/uploads/banana-nanica.png' alt='' />
                                <button><h3>+</h3></button>
                            </ProductImgBox>
                            <h2>R$ 10,99</h2>
                            <span>Laranja Pera Aprox</span>
                        </ProductBox>
                    </ProductContainer>
                </Section>
                <Section>
                    <TitleContainer>
                        <span className="type">Frutas</span>
                        <h3>VER MAIS</h3>
                    </TitleContainer>
                    <ProductContainer>
                        <ProductBox>
                            <ProductImgBox>
                                <div className="amount"><span>500g</span></div>
                                <img src='https://frutasbrasilsul.com.br/wp-content/uploads/banana-nanica.png' alt='' />
                                <button><h3>+</h3></button>
                            </ProductImgBox>
                            <h2>R$ 10,99</h2>
                            <span>Laranja Pera Aprox</span>
                        </ProductBox>
                        <ProductBox>
                            <ProductImgBox>
                                <div className="amount"><span>500g</span></div>
                                <img src='https://frutasbrasilsul.com.br/wp-content/uploads/banana-nanica.png' alt='' />
                                <button><h3>+</h3></button>
                            </ProductImgBox>
                            <h2>R$ 10,99</h2>
                            <span>Laranja Pera Aprox</span>
                        </ProductBox>
                        <ProductBox>
                            <ProductImgBox>
                                <div className="amount"><span>500g</span></div>
                                <img src='https://frutasbrasilsul.com.br/wp-content/uploads/banana-nanica.png' alt='' />
                                <button><h3>+</h3></button>
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

`
const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 70px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color: #FFFFFF;
    padding: 10px;
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
const NavBar = styled.nav`
    position: fixed;
    top: 70px;
    left: 0px;
    width: 100%;
    height: 50px;
    padding: 15px;
    background-color:#FFFFFF;
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
    div.amount{
        position: absolute;
        top: 7.5px;
        left: 87.5px;
        display:flex;
        align-items:center;
        justifty-content:center;
        padding: 0px 5px;
        border: 1px solid #FF4791;
        background-color: #FFFFFF;
        border-radius: 12.5px;
        height: 25px;
        span{
            display: block;
            direction: rtl;
            font-weight: 400;
            font-size: 15px;
            line-height: 15px;
            color: #FF4791;
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