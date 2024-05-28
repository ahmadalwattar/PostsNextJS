export default async function PostDetails({ postId }) {
    
  {/* For Loading */}
  await new Promise ((resolve) => {setTimeout(() => {resolve()}, 2000)}) ;

  {/* For Fetch */}
    const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { next: { revalidate: 60 }}
  );
  const post = await response.json();

    return (
      <div style={{ width:"70%", color:"#808080", background: "#cdf0ff", padding:"10px", borderRadius:"10px", marginTop:"20px", fontSize:"7px"  }}>
        <h1 style={{ marginBottom:"10px", color:"#000", fontSize:"20px"  }}>{post.title}</h1>
        <hr style={{ color:"#000" }}/>
        <h1>{post.body}</h1>
      </div>
    )
}