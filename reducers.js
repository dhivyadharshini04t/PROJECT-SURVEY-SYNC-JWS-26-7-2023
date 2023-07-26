// src/redux/reducers.js
import { UPDATE_FORM_DATA } from './actions';

const initialState = {
  name: '',
  email: '',
  survey: '',
  hearaboutus: '',
  comment: '',
};

const formDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    default:
      return state;
  }
};

export default formDataReducer;
