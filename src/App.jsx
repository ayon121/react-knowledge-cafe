
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header'

function App() {
  const [bookmarks , setbookmark] = useState([])


  const handleAddtoBookmark = blog => {
    const newBookmark = [...bookmarks , blog];
    setbookmark(newBookmark);
  }


  const [readingtime , setreadingtime] = useState(0)

  const handleMarkasread = time => {
    const Newreadingtime = readingtime + time;
    setreadingtime(Newreadingtime)
  }



  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>   
          <Blogs handleAddtoBookmark={handleAddtoBookmark}  handleMarkasread={handleMarkasread}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingtime={readingtime}></Bookmarks>
      </div>
    </>
  )
}

export default App
