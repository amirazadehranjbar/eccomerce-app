import {lazy} from "react";
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {store} from "./app/store.js";
import {Provider} from "react-redux";
import {Toaster} from "react-hot-toast";

const App = lazy(() => import("./App.jsx"));


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
            <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                    success: {
                        duration: 2000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            ></Toaster>
        </Provider>

    </BrowserRouter>,
)
