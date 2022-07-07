import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import TokenContext from "./contexts/TokenContext.js";

import HomePage from './components/pages/HomePage';
import ProductCategoryPage from './components/pages/ProductCategoryPage';
import ProductTypePage from './components/pages/ProductTypePage';
import TrolleyPage from './components/pages/TrolleyPage';
import PaymentPage from './components/pages/PaymentPage';
import RequestPage from './components/pages/RequestPage';
import MenuPage from './components/pages/MenuPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

export default function App() {
    const [token, setToken] = useState(null);

    return (
        <TokenContext.Provider value={{setToken, token}}>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/:categoriaProduto" element={<ProductCategoryPage />} />
                        <Route path="/:categoriaProduto/:tipoProduto" element={<ProductTypePage />} />
                        <Route path="/carrinho" element={<TrolleyPage />} />
                        <Route path="/pagamento" element={<PaymentPage />} />
                        <Route path="/pedidos" element={<RequestPage />} />
                        <Route path="/menu" element={<MenuPage />} />
                        <Route path="/menu/login" element={<LoginPage />} />
                        <Route path="/menu/registro" element={<RegisterPage />} />
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    )
}