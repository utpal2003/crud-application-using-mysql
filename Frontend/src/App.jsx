import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Studentlist from './Pages/Studentlist'
import Addstudent from './Pages/Addstudent'
import Updatestudent from './Pages/Updatestudent'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Studentlist />} />
          <Route path='/addstudent' element={<Addstudent />} />
          <Route path='/update/:id' element={<Updatestudent />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
