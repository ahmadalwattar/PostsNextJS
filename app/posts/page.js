
import Link from "next/link";

export default async function PostsPage () {
  
const response = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 }});
const posts = await response.json();
const postJSX = posts.map((post) => {
    return(
      <Link href={`/posts/${post.id}`} style={{ width:"70%" }}>
        <div style={{ color:"#808080", background: "white", padding:"10px", borderRadius:"10px", marginTop:"20px", fontSize:"7px"  }}>
          <h1 style={{ marginBottom:"10px", color:"#000", fontSize:"20px"  }}>{post.title}</h1>
          <h1>{post.body}</h1>
        </div>
      </Link>
    )
  }
)

console.log(posts);

  return (
    <div style={{  display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column" }}>
    <h1>Posts Page</h1>
    {/* ====== POSTS ====== */} 
    <div style={{ display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column" }}>
      {postJSX}
    </div>
    {/* ==== END POSTS ==== */} 
  </div>
  );
}