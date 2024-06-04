import Box from './Components/Box'
import Box2 from './Components/Box2'
import Navbar from './Components/Navbar'
import {Route, Routes} from 'react-router-dom'
import { about, contactPage, project, skillPage } from './Pages/ExportPage'


function App() {

  return (
    <>
      <div className='w-screen h-full md:h-screen overflow-x-hidden md:overflow-hidden flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-center bg-black text-gray-100 '>
        <Box />
        <Box2>
        <Navbar/>
        <Routes>
          <Route path='/' element={about}/>
          <Route path='/skill' element={skillPage}/>
          <Route path='/project' element={project}/>
          <Route path='/contact' element={contactPage}/>
        </Routes>

        </Box2>
      </div>
    </>
  )
}

export default App
