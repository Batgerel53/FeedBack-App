import React from 'react'
import FeedBackItem from './FeedBackItem'
import PropTypes from 'prop-types'

function FeedBackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) return <p>No feedback Yet</p>
  return (
    <div className="feedbacklist">
      {feedback.map((item) => (
        <div>
          <FeedBackItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
          />
        </div>
      ))}
    </div>
  )
}

FeedBackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
}

export default FeedBackList
