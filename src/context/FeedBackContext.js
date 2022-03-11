import { createContext, useState, useEffect } from 'react'

const FeedBackContext = createContext()

export const FeedBackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedBack] = useState([])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()
    setFeedBack(data)
    setIsLoading(false)
  }

  //update feedback

  const updateFeedBack = (id, updItem) => {
    setFeedBack(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
  }

  // delete feedback

  const deleteFeedBack = (id) => {
    if (window.confirm('are you sure you want to delete')) {
      setFeedBack(feedback.filter((item) => item.id !== id))
    }
  }

  // add feedback

  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    setFeedBack([data, ...feedback])
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
        isLoading,
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
