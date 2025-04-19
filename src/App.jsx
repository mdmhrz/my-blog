import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookMarked, setBookMarked] = useState([])

  const handleBookmark = (blog) => {
    setBookMarked([...bookMarked, blog])
  }

  console.log(bookMarked)
  

  return (
    <>
      <Navbar></Navbar>
      

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookmark={handleBookmark} ></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1 className='' >Reading Time:0</h1>
          <h1>Bookmarked Count:0</h1>
          <div>
            {
              bookMarked.map((marked)=><p>{marked.title}</p>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
