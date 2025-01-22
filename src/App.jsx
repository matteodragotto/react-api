import axios from "axios"
import { useState, useEffect } from "react"

const App = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center">Il mio blog</h1>
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="card">
            <img src="" alt="" />
            <div className="card-body">
              <h5 className="card-title">
                Qui va il titolo del post
              </h5>
              <p className="card-text">
                Qui va la descrizione del post
              </p>
              <p className="card-text">Qui vanno i tag</p>
              <div className="btn btn-danger">
                <i className="fa-solid fa-trash-can"></i> Elimina
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App