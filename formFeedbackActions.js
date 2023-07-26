// Define your action types
export const SUBMIT_FEEDBACK = 'SUBMIT_FEEDBACK';

// Define your action creators
export const submitFeedback = (feedbackData) => ({
  type: SUBMIT_FEEDBACK,
  payload: feedbackData,
});