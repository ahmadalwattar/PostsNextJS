import Link from "next/link";
import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

export default async function PostDetailsPage({params}) {
  {/* For Loading */}
  // await new Promise ((resolve) => {setTimeout(() => {resolve()}, 2000)}) ;

  {/* For Fetch */}
  const postId = params.postId;
  const loadingJSX = (<div style={{ fontSize:"20px" }}>Loading⏳...</div>)

  // console.log(`<======== ${params.postId} ========>`);
  
  return (
      <div style={{  display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column" }}>
        <h1>Post Details Page</h1>
        <Suspense fallback={loadingJSX}>
          <PostDetails postId={postId}/>
        </Suspense>
    </div>
  );
}