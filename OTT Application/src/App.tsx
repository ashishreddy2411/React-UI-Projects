import {MovieProvider} from "./Context/MovieContext"
import HomePage from "./components/HomePage"
import { initialState, reducer } from "./Context/reducer"

function App() {

  return (
    <>
    <h1>OTT Application</h1>
    <MovieProvider initialState={initialState} reducer={reducer}>
      <HomePage />
    </MovieProvider>
    </>
  )
}

export default App
