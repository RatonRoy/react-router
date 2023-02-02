import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Counter from './components/UseRef/UseRef'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Counter /> */}
      <Routes>
        <Route path='/' element='' />
      </Routes>
      <div style={{ minHeight: '100vh' }}>
        <h1> This is a new text </h1>
      </div>
      <div style={{ minHeight: '100vh' }}>
        <h1> This is a new text </h1>
      </div>
    </div>
  )
}

export default App
