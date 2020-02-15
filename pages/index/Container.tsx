import React from "react";
// import withApollo from "../../lib/withApollo";
import { gql } from 'apollo-boost';
import Head from "next/head";
import Presenter from "./Presenter";


const ME = gql`
  query AllPosts {
    allPosts {
      title
      id
      createdAt
    }
  } 
`;

const Index = props => {
    const { allPosts } = props;
    return (
        <>
            <Head>
                <title>NextJS | Home</title>
            </Head>
            <Presenter allPosts={allPosts}/>
        </>
    );
}

Index.getInitialProps = async (ctx) => {
    // console.log("Index: ", ctx);
    const { apolloClient } = ctx;
    const { data: { allPosts = [] } = {}} = await apolloClient.query({ query: ME });

    // console.log("allPostsData: ", allPosts);
    return {    
        title: "LOGOGOG",
        allPosts
    };
};

export default Index;