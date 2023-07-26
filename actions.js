// src/redux/actions.js
export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';

export const updateFormData = (name, value) => ({
  type: UPDATE_FORM_DATA,
  payload: { name, value },
});
