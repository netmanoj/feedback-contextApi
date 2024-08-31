import React from 'react';
import { FeedbackProvider } from './FeedbackContext';
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';
import FeedbackSummary from './FeedbackSummary'; // Import the FeedbackSummary component

function App() {
  return (
    <FeedbackProvider>
      <div className="App">
        <h1>Feedback UI</h1>
        <FeedbackForm />
        <FeedbackSummary /> 
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
}

export default App;