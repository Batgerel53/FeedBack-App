import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
const FeedBackContext = createContext()

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedBack] = useState([
    {
      id: 1,
      text: 'This is useContext hook',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is id 2 context hook',
      rating: 9,
    },
    {
      id: 3,
      text: 'This is id 3 context hook',
      rating: 8,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const updateFeedBack = (id, updItem) => {
    console.log('🚀 ', id)
    console.log('🚀', updItem)
    setFeedBack(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
  }

  const deleteFeedBack = (id) => {
    if (window.confirm('are you sure you want to delete')) {
      setFeedBack(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedBack([newFeedback, ...feedback])
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedBackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedBack,
        addFeedback,
        editFeedback,
        updateFeedBack,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  )
}

export default FeedBackContext
