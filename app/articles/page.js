import Link from "next/link";



export default function ArticlePage (){
    return (
    <div>
    <h1>Article Page</h1>
    <Link href="/posts">
        <button>move to Posts</button>
    </Link>
    </div>
    );
}