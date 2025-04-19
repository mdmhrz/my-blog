import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookMarked, setBookMarked] = useState([])
  const [readingCount, setReadingCount] = useState(0);

  const handleBookmark = (blog) => {
    setBookMarked([...bookMarked, blog])
  }

  const handleMarkedAsRead = (time) => {
    setReadingCount(readingCount+time)
  }
  

  return (
    <>
      <Navbar></Navbar>
      

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookmark={handleBookmark} handleMarkedAsRead={handleMarkedAsRead} ></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1 className='' >Reading Time:{readingCount}</h1>
          <h1>Bookmarked Count:{bookMarked.length}</h1>
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
