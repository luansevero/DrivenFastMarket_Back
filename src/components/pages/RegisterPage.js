import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

export default function RegisterPage () {

    const [email, setEmail] = React.useState ('');
    const [password, setPassword] = React.useState ('');
    const [retypePassword, setRetypePassword] = React.useState('');
    const [name, setName] = React.useState('');
    const {url} = React.useContext(UserContext);

    const navigate = useNavigate();

    const sendForm = (event) => {
        event.preventDefault();
        if(password !== retypePassword){
            alert("Senhas não são iguais!");
        }

        if(password.length < 8){
            alert("Senha muito curta!");
        }else{
            const data = {
                email,
                name,
                password
            }
    
            const promise = axios.post(`${url}/signUp`, data);
            promise.then(response => {
                navigate("/menu/login");
            })
    
            promise.catch(err => {
                alert(err.response.data);
                console.log(err.response.message);
            })
        }
        
    }
    return (
        <>
            <Container>
                <Link to="/menu/login" style={{ textDecoration: 'none' }}>
                    <div className="goBackArrow">
                        <ion-icon name="chevron-back-outline" style={{color: "#FF4791", fontSize: "35px"}}></ion-icon>
                    </div>
                </Link>
                <h1>DrivenFastMarket</h1>
                <form onSubmit={sendForm}>
                    <label>Nome completo</label>
                    <input type="text" required placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
                    <label>E-mail</label>
                    <input type="text" required placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                    <label>Senha</label>
                    <input type="password" required placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
                    <label>Confirmar senha</label>
                    <input type="password"  required placeholder="Confirme a senha" value={retypePassword} onChange={e => setRetypePassword(e.target.value)}/>
                    <button type="submit">Criar conta</button>
                </form>
            </Container>
        </>
    )
}

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Finlandica:ital,wght@1,700&family=Inter:wght@200;300;400;500;600&family=Raleway:wght@400;700&family=Saira+Stencil+One&display=swap');
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .goBackArrow{
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px;
        cursor: pointer;
    }

    h1 {
        font-family: 'Finlandica', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        margin-bottom: 24px;
        color: #FF4791;
    }
    form {
        display: flex;
        flex-direction: column;

        justify-content: center;
    }

    form > label {
        font-family: 'Raleway', 'sans-serif';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: black;
        margin-bottom: 4px;
        text-align: left;
        align-items: left;
        padding-left: 10px;

    }
    form > input {
        width: 326px;
        height: 48px;
        box-sizing: border-box;
        background: #f0f0ef;
        border-radius: 20px;
        border: none;
        margin-bottom: 15px;
        padding-left: 15px;
    
        font-family: 'Inter', 'sans-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        
        color: #000000;
    }
    form > input::placeholder {
        color: #000000;
    }
    form > button {
        width: 326px;
        height: 46px;
        background: #FF4791;
        border-radius: 30px;
        border: none;
        font-family: 'Inter', 'sans-serif';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        margin-top: 15px;
        color: #FFFFFF;
    }
    .link {
        font-family: 'Inter', 'sans-serif';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        margin-top: 36px;
        text-align: center;
        color: #FFFFFF;
    }
`