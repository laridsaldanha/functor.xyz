import React,{Component} from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Nav from '../shared/Nav';
import { loadGetInitialProps } from 'next/dist/lib/utils';

import { connect } from 'react-redux';
let fonts = ['Suez+One', 'Yatra+One'];

let link = 'https://fonts.googleapis.com/css?family=';

const makeLink = url => (arr = fonts) => {
    return url.concat(arr.join('|'));
}

const colors = {
  'jet-black': '#363732',
  'st-pat-blue': '#274C77',
  'glitter-white': '#E7ECEF'
}


const Layout = ({children}) => (
      <div className="wrapper">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Yatra+One"/>
        </Head>
        <style jsx global>{`


          body { 
            background: #fff;
            margin: 0;
            font-family: "Yatra One";
          }
          .wrapper {
            display: flex;
            min-height: 100vh;
            background: #274C77;
            flex-direction: column;
            color: #E7ECEF;
          }
          .top-nav {
            display: flex;
            justify-content: space-around;
            background: #76A1E8;
            width: 100%;
            height: 70px;
            margin: 0;
            align-items: center;            
          }
          .top-nav a {
            text-decoration: none;
          }
          .main-wrapper {
              flex: 1;
          }
          
        `}</style>
        <Nav />
        <div className="main-wrapper">
          {children}
        </div>
        <Footer />
      </div>
);

export default Layout;
