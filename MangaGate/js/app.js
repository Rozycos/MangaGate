import React from "react";
import { createRoot } from "react-dom/client";
import {HashRouter, Route, Routes} from "react-router-dom";
import FirebaseApp from "../firebase_setup/FirebaseApp";
import '../scss/main.scss';
import AdminPanel from "./components/AppMain/AdminPanel";
import LandingPage from "./components/LandingPage/index";
import NotFound from "./components/NotFound";

const App = () => (
    <HashRouter>
        <Routes>
            <Route path={"/"} element={<LandingPage />}></Route>
            <Route path={"admin"} element={<AdminPanel />}></Route>
            <Route path="*" element={<NotFound />} />
            <Route path={"firebase"} element={<FirebaseApp/>} />
        </Routes>
    </HashRouter>
)

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);