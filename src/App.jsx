import axios from "axios"
import { useState, useEffect } from "react"

const App = () => {

  const postApiUrl = 'http://localhost:3001'
  const [posts, setPosts] = useState([])

  const fetchPosts = () => {

    axios.get(`${postApiUrl}/posts`)
      .then(res => {
        console.log(res.data);
        setPosts(res.data)
      })
      .catch(error => {
        console.error('Errore durante il caricamento dei post:', error)
      })

  }


  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="container my-5">
      <h1 className="text-center">Il mio blog</h1>
      <div className="row">
        {posts.map(post => (
          <div className="col-12 col-md-4">
            <div className="card">
              <img src={post.image} alt={post.title} />
              <div className="card-body">
                <h5 className="card-text">
                  {post.title}
                </h5>
                <p className="card-text">
                  {post.content}
                </p>
                <p className="card-text">{post.tags}</p>
                <div className="btn btn-danger">
                  <i className="fa-solid fa-trash-can"></i> Elimina
                </div>
              </div>
            </div>
          </div>
        ))}


      </div>
    </div>
  )
}

export default App