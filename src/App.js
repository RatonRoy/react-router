import { Route, Routes } from 'react-router-dom'
import './App.css'
import Users from './components/GetUsers/Users'
import Navbar from './components/Navbar/Navbar'
import Counter from './components/UseRef/UseRef'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Counter /> */}
      <Routes>
        <Route path='/' element='' />
        <Route path='/users' element={<Users />} />
      </Routes>
      <div className='content-center'>
        <h1> This is first section </h1>
      </div>
      <div className='content-center'>
        <h1> This is second section </h1>
      </div>
    </div>
  )
}

export default App
