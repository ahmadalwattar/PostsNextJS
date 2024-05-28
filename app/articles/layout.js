export const metadata = {
  title: "Articles Page"
}

export default function({children}){
  return(
    <div>
      <h1>Articles</h1>
      <div style={{ margin:"50px 30px 20px 30px", padding:"5px", background:"#515151", borderRadius:"10px", textAlign:"center" }}>
      {children}
      </div>
    </div>
  )
}