import React from "react";
import Link from "next/link";
import PostLink from "../../components/postLink";

const Presenter = ({allPosts}) => {
    return (
        <p className={"link-container"}>
            {
                allPosts.map((item, key) =>
                    // <Link key={key} href={`/post/${item.id}`} as={"/post/[pid]"}>
                    <PostLink 
                        pid={item.id}
                        title={item.title}
                        key={key}
                    />
                    // <Link key={key} href={`/post/${item.id}`}>
                    //     <a>{item.title}</a>
                    // </Link>
                )
            }
        </p>
    )
}

Presenter.getInitialProps = async (data) => {
    console.log("Presenter.getInitialProps: ", data)
    // return {
    //     title: "gigigigig"
    // };
}
export default Presenter;