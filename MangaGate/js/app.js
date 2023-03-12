import React from "react";
import { createRoot } from "react-dom/client";
import {HashRouter, Route, Routes} from "react-router-dom";
import '../scss/main.scss';
import AdminPanel from "./components/AppMain/AdminPanel";
import UserProvider from "./components/context/UserProvider";
import LandingPage from "./components/LandingPage/index";
import NotFound from "./components/NotFound";
import Page from "./components/Page";

const App = () => (
    <UserProvider>
        <HashRouter>
            <Routes>
                <Route path={"/"} element={<LandingPage />}></Route>
                <Route path={"admin"} element={<AdminPanel />}></Route>
                <Route path="*" element={<NotFound />} />
                <Route path={"page"} element={<Page/>} />
            </Routes>
        </HashRouter>
    </UserProvider>
)

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);