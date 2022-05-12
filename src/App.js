import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ModifyTodo from './components/ModifyTodo/ModifyTodo'
import HomePage from './pages/HomePage.component'
const App = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='modify/:id' element={<ModifyTodo/>}/>
        </Routes>
    </>
  )
}

export default App