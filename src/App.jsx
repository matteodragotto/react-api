import axios from "axios"
import { useState, useEffect } from "react"

const App = () => {

  const postApiUrl = 'http://localhost:3001'

  const basicPostForm = {
    title: '',
    content: '',
    image: '',
    tags: ''
  }

  const [posts, setPosts] = useState([])
  const [formData, setFormData] = useState(basicPostForm)


  const submitHandler = (e) => {
    e.preventDefault()
  }

  const changeHandler = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }))
    console.log(formData);
  }

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
    <>
      <div className="container my-5">
        <h1 className="text-center">Il mio blog</h1>
        <div className="row">
          {posts.map(post => (
            <div className="col-12 col-md-4">
              <div className="card my-2">
                <img src={post.image} alt={post.title} />
                <div className="card-body">
                  <h5 className="card-text">
                    {post.title}
                  </h5>
                  <p className="card-text">
                    {post.content}
                  </p>
                  <p className="card-text">{post.tags.join(', ')}</p>
                  <div className="btn btn-danger">
                    <i className="fa-solid fa-trash-can"></i> Elimina
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <h3 className="card-text">Inserisci un nuovo post</h3>
            <form action="#" onSubmit={submitHandler}>
              <div className="mb-2">
                <label htmlFor="name">Titolo del post</label>
                <input
                  id='name'
                  type="text"
                  name='title'
                  className='form-control'
                  placeholder='Inserisci qui il titolo'
                  value={formData.title}
                  onChange={changeHandler}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="content">Commento del post</label>
                <input
                  id='content'
                  type="text"
                  name='content'
                  className='form-control'
                  placeholder='Inserisci qui il commento'
                  value={formData.content}
                  onChange={changeHandler}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="image">Immagine</label>
                <input
                  id='image'
                  type="url"
                  name='image'
                  className='form-control'
                  placeholder='Inserisci qui la url della tua immagine'
                  value={formData.image}
                  onChange={changeHandler}
                />
              </div>
              <h5 className="mt-3">Scegli dei tag</h5>
              <div className="form-check m-3 p-3">
                <input type='checkbox' className='form-check-input' name='tags' value='dolce' id='dolce' />
                <label className="form-check-label" htmlFor='dolce'>
                  Dolce
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Carica nuovo post</button>

            </form>
          </div>
        </div>


      </div>
    </>
  )
}

export default App