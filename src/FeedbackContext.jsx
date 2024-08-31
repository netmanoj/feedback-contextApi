// FeedbackContext.js
import React, { useState, createContext } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Add feedback
  const addFeedback = (newFeedback) => {
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
  };

  // Calculate average rating
  const calculateAverageRating = () => {
    if (feedbacks.length === 0) return 0;
    const total = feedbacks.reduce((acc, feedback) => acc + feedback.rating, 0);
    return (total / feedbacks.length).toFixed(1); // Return one decimal place
  };

  return (
    <FeedbackContext.Provider value={{ feedbacks, addFeedback, deleteFeedback, calculateAverageRating }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
