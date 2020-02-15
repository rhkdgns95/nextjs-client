import { gql } from "apollo-boost";

const ME = gql`
  query AllPosts {
    allPosts {
      title
      id
      createdAt
    }
  }
`;

export const withAuth = C => {
    class AuthComponent extends React.Component {
      static async getInitialProps(ctx) {
        // const response = await ctx.apolloClient.query({ query: ME });
        // console.log("@withAuth ", response);
  
        // if (!response || !response.data || !response.data.me) {
        //   redirect(ctx, "/");
        //   return {
        //     me: null
        //   };
        // }
  
        // Get component’s props
        let componentProps = {}
        if (C.getInitialProps) {
          componentProps = await C.getInitialProps(ctx);
        }
  
        return {
          me: response.data.me,
          ...componentProps
        };
      }
  
      render() {
        console.log("WITHAUTH");
        return <C {...this.props} />;
      }
    }
  
    return AuthComponent;
  };