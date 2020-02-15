import "../styles/globalStyles.css";
import App from "next/app";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "@apollo/react-hooks";

// const App: React.FC<any> = ({
//   children
// }) => (
//   <div>
//     <h1>hihihihih</h1>
//     {
//       children
//     }
//   </div>
// );


// const ME = gql`
//   query AllPosts {
//     allPosts {
//       title
//       id
//       createdAt
//     }
//   }
// `;
// import App from 'next/app'

const MyApp = ({ Component, pageProps, apollo }) => {
  // console.log("DATA: ", pageProps);
  // console.log("pageProps: ", pageProps);
  // const data = this.pageProps;
    // console.log("DATA: ", apollo);
  return (
    <ApolloProvider client={apollo}>
      <Component { ...pageProps }/>
    </ApolloProvider>
    // <Component { ...pageProps } />
  )
}
MyApp.getInitialProps = async ({ Component, router, ctx }) => {
  console.log("MyApp.getInitialProps: hi");
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   // console.log("myApp.getinitialProps: hi");
//   const appProps = await App.getInitialProps(appContext);
//   const apolloClient = appProps.pageProps.apolloClient;
//   return { ...appProps, apolloClient }
// }
// export default MyApp;

export default withApollo(MyApp);