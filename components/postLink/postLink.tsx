import React from "react";
import Link from "next/link";

interface IProps {
    pid: string;
    title: string;
}

const PostLink: React.FC<IProps> = ({
    pid,
    title
}) => (
    <>
        <Link href={`/post/[pid]`} as={`/post/${pid}`}>
            <a>{ title }</a>
        </Link>
    </>
);

export default PostLink;