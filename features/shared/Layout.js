import React, {Component} from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Nav from '../shared/Nav';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import Link from 'next/link'

import { connect } from 'react-redux';
let fonts = ['Suez+One', 'Yatra+One'];

let link = 'https://fonts.googleapis.com/css?family=';

const makeLink = url => (arr = fonts) => {
  return url.concat(arr.join('|'));
};

const colors = {
  'jet-black': '#363732',
  'st-pat-blue': '#274C77',
  'glitter-white': '#E7ECEF'
};


const Layout = ComposedComponent => {
  class HOC extends Component {


    static async getInitialProps(ctx) {
      const { req } = ctx;

      const subProps = await loadGetInitialProps(ComposedComponent, ctx);

      return {
        ...subProps
      };
    }

    render() {
      const { links, children } = this.props;
      return (
        <div className="wrapper">
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Yatra+One|Suez+One"/>
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
          
          button a {
            font-family: "Suez One";
            font-size: 14px;
            color: #fff;
            text-decoration: none;
          }
          .main-wrapper {
              flex: 1;
          }
          
        `}</style>
          <Nav links={links} />
          <div className="main-wrapper">
            <ComposedComponent {...this.props} />
            <Link href={`posts?id=345`} as={`posts/345`}><button>Navigate to article page</button></Link>
          </div>
          <Footer />
        </div>
      );
    }
  }
  return HOC;
};

export default Layout;
