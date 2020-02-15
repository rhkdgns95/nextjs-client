import React from "react";
import Link from "next/link";

const Presenter = ({allPosts}) => {
    return (
        <p className={"link-container"}>
            {
                allPosts.map((item, key) =>
                    <Link key={key} href={`/post/${item.id}`} as={"/post/[pid]"}>
                        <a>{item.title}</a>
                    </Link>
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