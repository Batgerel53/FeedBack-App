import React, { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import FeedBackContext from '../context/FeedBackContext'
function FeedBackForm() {
  const { addFeedback, feedbackEdit, updateFeedBack } = useContext(
    FeedBackContext,
  )

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setbtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setbtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if (text === '') {
      setbtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters')
      setbtnDisabled(true)
    } else {
      setMessage(null)
      setbtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }

      if (feedbackEdit === true) {
        updateFeedBack(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
        console.log(
          '🚀 ~ file: FeedBackForm.jsx ~ line 50 ~ handleSubmit ~ newFeedback',
          newFeedback,
        )
      }
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>

        <RatingSelect select={(rating) => setRating(rating)} />

        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedBackForm
