import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import CounterContextProvider from "./context/CounterContext";
import { Provider } from "react-redux";
import {Toaster} from "react-hot-toast"
// import store from './store';
// import oldStore from "./oldStore";
import store from "./redux/store";
// import oldStore from "./oldStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <CounterContextProvider>
        {/* <Provider store={oldStore}> */}
        <Provider store={store}>
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "",
              duration: 5000,
              removeDelay: 1000,
              style: {
                background: "#363636",
                color: "#fff",
              },

              // Default options for specific types
              success: {
                duration: 3000,
                iconTheme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
          <App />
        </Provider>
        {/* </Provider> */}
      </CounterContextProvider>
    </BrowserRouter>
  //  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
