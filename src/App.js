import { useState } from 'react'

import Header from './components/Header.jsx'
import FeedBackList from './components/FeedBackList'
import FeedBackStats from './components/FeedBackStats'
import FeedBackData from './data/FeedBackData'
import FeedBackForm from './components/FeedBackForm'

function App() {
  const [feedback, setFeedBack] = useState(FeedBackData)

  const deleteFeedBack = (id) => {
    if (window.confirm('are you sure you want to delete')) {
      setFeedBack(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedBackForm />
        <FeedBackStats feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedBack} />
      </div>
    </>
  )
}
export default App
