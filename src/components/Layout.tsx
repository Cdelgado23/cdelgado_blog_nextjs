import Head from "next/head";
import Navigation from "./Navigation";



type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav className="nav">
        <Navigation />
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          .root {
            box-sizing: border-box;

            display: flex;
            flex-direction: column;    
            min-height:100%;
            max-height:fit-content;
            background-color: #effff3;
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
          }
        `}
      </style>
    </div>
  );
}
