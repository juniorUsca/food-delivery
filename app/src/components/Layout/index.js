import Head from 'next/head'

import Footer from './Footer'
import Nav from './Nav'

const Layout = ({
  className, children, withCart = false, withNav = true,
}) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap" rel="stylesheet" />
    </Head>
    <div className="container">
      <div className="wrapper">
        <main className={className}>
          {children}
        </main>
        { withCart && (
        <Footer />
        )}
        { withNav && (
        <Nav />
        )}
      </div>
    </div>
    <style jsx>
      {`
      .container {
        height: 100vh;
        display: grid;
        place-items: center;
      }
      .wrapper {
        background: #F6F6F6;
        box-shadow: 0 10px 25px #00000025;
        height: 100%;
        width: 100%;
        overflow-x: scroll;
        position: relative; // used by the nav and header
        display: flex;
        flex-direction: column;
      }
      main {
        // max-height: calc(100% - 96px);
        overflow-y: scroll;
        flex: 1 1 0;
      }

      @media (min-width: 520px) {
        .wrapper {
          height: 90vh;
          width: 480px;
          border-radius: 10px;
        }
      }
    `}
    </style>
    <style global jsx>
      {`
      html,
      body {
        background-image: radial-gradient(#0099ff4d 1px, transparent 1px),
          radial-gradient(#0099ff4d 1px, transparent 1px);
        background-position: 0 0, 25px 25px;
        background-size: 50px 50px;
        padding: 0;
        margin: 0;
        overflow: hidden;
        font-family: 'Poppins', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
      }
      * {
        box-sizing: border-box;
      }
      h1, h2, h3, h4, h5, h6, figure {
        margin: 0;
        padding: 0;
      }
      input {
        font-family: 'Poppins', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
      }
    `}
    </style>
  </>
)
export default Layout
