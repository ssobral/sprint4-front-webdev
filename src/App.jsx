import {} from 'react'
import {Outlet} from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './style/style.css';

function App() {

  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
