import React, { useState } from "react";
import MovieList from './componets/MovieList';
import GenreFilter from './componets/GenreFilter';

function App() {

  const [filterMovie, setfilterMovie] = useState("All"); //Filter variable
  const [movies, setMovies] = useState([ // store Moive list in moive variable
    { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994 },
    { title: 'The Godfather', genre: 'Crime', year: 1972 },
    { title: 'The Dark Knight', genre: 'Action', year: 2008 },
    { title: '12 Angry Men', genre: 'Drama', year: 1957 },
    { title: "Schindler's List", genre: 'Drama', year: 1993 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      genre: 'Fantasy',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', genre: 'Western', year: 1966 },
    { title: 'Forrest Gump', genre: 'Drama', year: 1994 },
    { title: 'Inception', genre: 'Science Fiction', year: 2010 },
    { title: 'The Matrix', genre: 'Science Fiction', year: 1999 },
    { title: 'The Silence of the Lambs', genre: 'Thriller', year: 1991 },
    { title: 'Saving Private Ryan', genre: 'War', year: 1998 },
    { title: 'Jurassic Park', genre: 'Science Fiction', year: 1993 },
    {
      title: 'Terminator 2: Judgment Day',
      genre: 'Science Fiction',
      year: 1991,
    },
    { title: 'The Lion King', genre: 'Animation', year: 1994 },
  ])

  const genres = [ //genres variable that store genres in an Array
    'Drama',
    'Crime',
    'Action',
    'Fantasy',
    'Western',
    'Science Fiction',
    'Thriller',
    'War',
    'Animation',
  ];


  const filtermoviesFun = (genre) => { // filter function to filter movies and update
    setfilterMovie(genre); // if we getting any click on button thats update variable by useState..
  };

  console.log(`Selected genre: ${filterMovie}`); // console log which button clicked.. here

  const filteredMovies =
    filterMovie === "All" // sending by deafult All in filter thats resolve our app for relaoding to get all list
      ? movies
      : movies.filter((movie) => movie.genre === filterMovie); // apply filter here

  return ( // return div here
    <> 
      <div className='container my-3'>
        <h1 className='text-center'>Top 15 Movies Of All Time</h1>
        <div>
          {/* Calling GenreFilter components and passing props */}
          <GenreFilter
            genres={genres}
            filtered={filtermoviesFun}
            filterMovie={filterMovie}
          />
        </div>
          {/* Calling MovieList components and passing props */}
        <MovieList movies={filteredMovies} />
      </div>
    </>
  );
}

export default App;
