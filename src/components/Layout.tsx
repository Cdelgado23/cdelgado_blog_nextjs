import Head from "next/head";
import Navigation from "./Navigation";


type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {


  return (


    <div className="root">
      <Head>
        <meta name="google-site-verification" content="etQl6-3Vbym_i_sm3S01H8CcBtbah-RIoARmvXRJOu0" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <nav className="nav">
        <Navigation />
      </nav>
      <main>{children}</main>
      < style jsx >
        {`
        .root {
          box-sizing: border-box;

          display: flex;
          flex-direction: column;    
          min-height:100%;
          max-height:fit-content;
          position: relative; 
          background-size: cover;
        }
      

        .root * {
          position: relative;
        }

        main {
          display: flex;
        }
        @media (min-width: 769px) {
          .root {
            display: flex;
            flex: 1 0 auto;
          }
          main {
            flex: 1 0 auto;
          }
        }
        .nav {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        `}
      </style >
    </div >
  );
}
