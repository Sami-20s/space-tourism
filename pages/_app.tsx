import Nav from "../components/Nav/Nav";
import styled from "styled-components";
import ContextProvider from "../context/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <ContextProvider>
            <Nav />
            <Component {...pageProps} />
        </ContextProvider>
    );
}

export default MyApp;
