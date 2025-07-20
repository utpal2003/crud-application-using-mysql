import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Studentlist from './Pages/Studentlist'
import Addstudent from './Pages/Addstudent'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Studentlist />} />
          <Route path='/addstudent' element={<Addstudent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
