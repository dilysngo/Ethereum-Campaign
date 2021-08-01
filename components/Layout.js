import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import 'semantic-ui-css/semantic.min.css'
import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
      <Container>
        {/* import 'semantic-ui-css/semantic.min.css' */}
        {/* <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          ></link>
        </Head> */}
        <Header />
        {props.children}
      </Container>
    </div>
  );
};
export default Layout;
