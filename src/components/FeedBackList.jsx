import React, { useContext } from 'react'
import FeedBackItem from './FeedBackItem'
import { motion, AnimatePresence } from 'framer-motion'
import FeedBackContext from '../context/FeedBackContext'
import Spinner from './shared/Spinner'

function FeedBackList() {
  const { feedback, isLoading } = useContext(FeedBackContext)

  if (!isLoading && (!feedback || feedback.length === 0))
    return <p>No feedback Yet</p>

  return isLoading ? (
  <Spinner/>
  ) : (
    <div className="feedbacklist">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div>
              <FeedBackItem key={item.id} item={item} />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className="feedbacklist">
  //     {feedback.map((item) => (
  //       <div>
  //         <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
  //       </div>
  //     ))}
  //   </div>
  // )
}

export default FeedBackList
