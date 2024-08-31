import React, { useContext } from 'react';
import FeedbackContext from './FeedbackContext';

const FeedbackSummary = () => {
  const { feedbacks, calculateAverageRating } = useContext(FeedbackContext);

  // Define inline styles
  const summaryStyle = {
    display: 'flex',
    flexDirection: 'row', // Arrange items in a row
    gap: '350px', // Space between items
    marginBottom: '20px', // Optional: Space below the summary
    alignItems: 'center',
    marginTop:'30px', // Optional: Align items vertically centered
  };

  const textStyle = {
    fontSize: '20px', // Adjust font size as needed
  };

  return (
    <div style={summaryStyle}>
      <span style={textStyle}>{feedbacks.length} Reviews</span>
      <span style={textStyle}>Average Rating: {calculateAverageRating()}</span>
    </div>
  );
};

export default FeedbackSummary;
