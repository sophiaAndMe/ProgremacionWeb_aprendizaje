import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import {Counter} from "./Counter.tsx";
import React from "react";

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Counter />
        </Provider>
    </React.StrictMode>
);