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

  const handleMarkedAsRead = (time, id) => {
    setReadingCount(readingCount+time);
    handleRemoveFromBookmark(id);
    

  }

  const handleRemoveFromBookmark = (id) => {
    const remainingBookMark = bookMarked.filter((mark)=> mark.id !== id);
    setBookMarked(remainingBookMark)
  }
  

  return (
    <>
      <Navbar></Navbar>
      

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookmark={handleBookmark} handleMarkedAsRead={handleMarkedAsRead} ></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1 className='text-2xl font-bold' >Reading Time:{readingCount}</h1>
          <h1 className='text-2xl mb-5' >Bookmarked Count:{bookMarked.length}</h1>
          <div>
            {
              bookMarked.map((marked)=><p className='bg-green-600 text-white p-4 rounded-md mb-2' >{marked.title}</p>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
