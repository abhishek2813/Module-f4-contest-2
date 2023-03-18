import React from 'react'
//exporting MovieList accepting props also
const MovieList = ({ movies }) => {
  return (
    <div className='container my-3'>
      <div className='offset-md-2 col-md-8 offset-md-2'>
      {/* fix table head for all list */}
        <table className="table table-bordered"> 
          <thead className="thead-dark">
            <tr className='table-secondary'>
              <th scope="col">S.No</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Year</th>
            </tr>
          </thead>
          <tbody>
            {/* Looping tbody to showing list of Movies */}
            {movies.map((val, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{val.title}</td>
                  <td>{val.genre}</td>
                  <td>{val.year}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MovieList