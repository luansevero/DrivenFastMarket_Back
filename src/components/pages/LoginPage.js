import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import TokenContext from "../../contexts/TokenContext";
import { ToastContainer, toast } from 'react-toastify';

export default function LoginPage (){
    
    const { url } = React.useContext(UserContext);
    const { setToken } = React.useContext(TokenContext);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigate = useNavigate();

    const loginUser = (event) => {
        event.preventDefault();
        const payload = {
            email,
            password
        };

        const promise = axios.post(`${url}/signin`, payload);
        promise.then( response => {
            
            console.log(response.data.token);
            setToken(response.data.token);
            toast.success('🛒 Login realizado com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            navigate("/");
        })
        .catch(err => {
            if(err.response.status === 500){
                toast.error("Erro no servidor!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }else {
                toast.error("Erro no login! Verifique suas credenciais!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            console.log(err);
        })
    }
    return (
        <>
            <Container>
                <h1>DrivenFastMarket</h1>
                <form onSubmit={loginUser}>
                    <label>E-mail</label>
                    <input type="email" required placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                    <label>Senha</label>
                    <input type="password" required placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type="submit">Entrar</button>
                </form>
                <Separador>
                    <div className="linhaUm"><hr/></div>
                    <div className="meio">ou</div>
                    <div className="linhaDois"><hr/></div>
                </Separador>
                <Link to="/menu/register" style={{ textDecoration: 'none' }}>
                    <div className="link">Criar nova conta</div>
                </Link>
                <ToastContainer />
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1 {
        font-family: 'Finlandica', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 40px;
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
        margin-top: 32  px;
        text-align: center;
        color: #FF4791;
    }
`

const Separador = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    font-family: 'Inter', 'sans-serif';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #FF4791;
    
    .linhaUm {
        width: 100px;
        margin-right: 10px;
    }

    hr {
        height: 1px;
        border: none;
        color: #f0f0ef;
        background-color: #f0f0ef;
    }

    .linhaDois {
        width: 100px;
        margin-left: 10px;
    }

`