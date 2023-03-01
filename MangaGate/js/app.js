import React from "react";
import { createRoot } from "react-dom/client";
import '../scss/main.scss';

const App = () => (
    <>
        <h1>Hello World</h1>
    </>
)

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);