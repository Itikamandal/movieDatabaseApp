import {Route, Switch} from 'react-router-dom'

import './App.css'

import PopularMoviePage from './components/PopularMoviePage'
import TopRatedMoviesPage from './components/TopRatedMoviesPage'
import UpcomingMoviesPage from './components/UpcomingMoviesPage'

import MovieDetails from './components/MovieDetails'

const App = () => (
  <>
    <Switch>
      
      <Route exact path="/" component={PopularMoviePage} />
      <Route exact path="/top-rated" component={TopRatedMoviesPage} />
      <Route exact path="/upcoming" component={UpcomingMoviesPage} />
      <Route exact path="/movie/:id" component={MovieDetails} />
    </Switch>
  </>
)

export default App
