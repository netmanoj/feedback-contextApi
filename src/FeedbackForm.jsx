import React, { useState, useContext } from 'react';
import FeedbackContext from './FeedbackContext';

const FeedbackForm = () => {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState('');
  const { addFeedback } = useContext(FeedbackContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return; // Avoid empty submissions
    const newFeedback = {
      id: Math.random().toString(36).substr(2, 9),
      rating,
      text,
    };
    addFeedback(newFeedback);
    setText(''); // Clear the text input
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2>How would you rate your service with us?</h2>
      <div className="rating-container">
        {[...Array(10)].map((_, index) => (
          <label key={index} className="rating-label">
            <input
              type="radio"
              value={index + 1}
              checked={rating === index + 1}
              onChange={(e) => setRating(+e.target.value)}
            />
            <span className="custom-radio">{index + 1}</span>
          </label>
        ))}
      </div>
      <textarea
        placeholder="Write a review"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="feedback-text"
      />
      <button type="submit" className="send-button">Send</button>
    </form>
  );
};

export default FeedbackForm;
