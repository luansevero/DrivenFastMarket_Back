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
                    <span className="type">Frutas</span>
                    <ProductContainer>
                        <ProductBox>
                            <ProductImgBox>
                                <img src='Oi' alt='' />
                                <button><h3>+</h3></button>
                            </ProductImgBox>
                            <h2>VALOR</h2>
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
`
const Section = styled.section`
    display:flex;
    flex-direction: column;
    span.type{
        margin: 10px 0;
        font-weight: 300;
        font-size: 25px;
        line-height: 24px;
        color: #000000;
    }
`
const ProductContainer = styled.ul`
    display:flex;
    background-color: gray;

`
const ProductBox = styled.li`
    background-color: yellow;
    width:132px;
`
const ProductImgBox = styled.div`
    position:relative;
    padding: 15px;
    img{
        width:105px;
        height:105px;
    }
    button{
        position: absolute;
        top: 100px;
        left:100px;
        height:30px;
        width:30px;
        border-radius:20px;
        h3{
            font-weight: 300;
            font-size: 25px;
            line-height: 24px;
        }
    }
`