import React from 'react'
import PageBuilder from "./Containers/PageBuilder"
import { Provider as ReduxProvider } from "react-redux"
import configureStore from "./Modules/store"
import './App.css'

const reduxStore = configureStore()

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        <header>
          <h1>
            CANDIDATES REACT TEST
          </h1>
        </header>
        <PageBuilder/>
      </div>
    </ReduxProvider>
  )
}

export default App
