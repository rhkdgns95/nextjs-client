import "../styles/globalStyles.css";
import App, { AppProps } from "next/app";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-boost";

const MyApp = ({ Component, pageProps, apollo }) => {
  
  return (
    <ApolloProvider client={apollo}>
      <Component { ...pageProps }/>
    </ApolloProvider>
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