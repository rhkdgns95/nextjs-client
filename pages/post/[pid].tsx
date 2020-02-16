// import { useRouter } from 'next/router';
import { NextPage, NextPageContext } from 'next';
import { ApolloClient } from 'apollo-boost';
import { gql } from 'apollo-boost';

const GET_POST = gql`
    query getPost($id: ID!) {
        Post(id: $id) {
            title
            id
            createdAt
        }
    }
`;

const Post: NextPage<any> = props => {
    // const router = useRouter();
    // const { pid } = router.query;
    const { title, id } = props;
    
    return (
        <div>
            {
                !title && !id ?
                <>
                    {/* No Post */}
                    Wrong Access.
                </> :

                <>
                    {/* Post */}

                    <h1>{ title }</h1>
                    <p>{ id }</p>
                </>
            }
        </div>
    );
};

interface INextPageContext extends NextPageContext {
    apolloClient: ApolloClient<any>;
}

Post.getInitialProps = async ({ query, apolloClient }: INextPageContext) => {

    const { pid } = query;
    // console.log("PID: ", pid);
    
    const post = await apolloClient.query({ query: GET_POST, variables: { id: pid } });
    // console.log("POST: ", post);
    
    return {
        title: post.data?.Post?.title || null,
        id: post.data?.Post?.id || null
    };
}
export default Post;