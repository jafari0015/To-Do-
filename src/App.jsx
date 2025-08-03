import { useState } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Error from './components/Error'

function App() {

  return (
    <main className='to-do-container'>
      <Header />
      <AddTask />
    </main>
  )
}

export default App
