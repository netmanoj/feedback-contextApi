import React, { useContext } from 'react';
import FeedbackContext from './FeedbackContext';


const FeedbackList = () => {
  const { feedbacks, deleteFeedback } = useContext(FeedbackContext);

  if (feedbacks.length === 0) {
    return <p className="no-feedback">No feedback yet</p>; // Placeholder if no feedback exists
  }

  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <div key={feedback.id} className="feedback-card">
          <div className="rating-circle">{feedback.rating}</div>
          <button className="delete-button" onClick={() => deleteFeedback(feedback.id)}>X</button>
          <p className="feedback-text">{feedback.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
