import Card from './shared/Card'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedBackContext from '../context/FeedBackContext'
function FeedBackItem({ item }) {
  const { deleteFeedBack, editFeedback } = useContext(FeedBackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedBack(item.id)} className="close">
        <FaTimes color="red" />
      </button>
      <button onClick={()=> editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedBackItem
