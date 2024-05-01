import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Form from './components/Form'
import Card_List from './components/Card_List'
import PostList from './store/social-media-post-logic'


function App() {
  let [state, setState]=useState("Home");
  
  let handleState=(data)=>{
    setState(data);
  }

  return (
    <>
      <PostList>
        <Header></Header>
        <div className='container-Inline'>
            <Sidebar handleState={handleState} state={state}></Sidebar>
            <div className="Inline">
              {state==="Home"?<Card_List></Card_List> :<Form></Form>}
            </div>
        </div>
        <Footer></Footer>
      </PostList>
    </>
  )
}

export default App
