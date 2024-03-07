import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import useFetch from "../hooks/useFetch"
import './Home.css'

export default function Home() {

  const {data:articles,isPending,error} = useFetch('http://localhost:3000/articles')

  console.log(articles)

  return (
    <div>
      <h2>Articles</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {articles && articles.map(article => (
        <div key={article.id} className="card">
          <h3>{article.title}</h3>
          <p>{article.author}</p>
          <NavLink to={`/articles/${article.id}`}>Read More...</NavLink>
        </div>
      ))}
    </div>
  )
}
