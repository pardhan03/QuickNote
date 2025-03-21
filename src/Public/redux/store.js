import {configureStore} from '@reduxjs/toolkit';
import notesReducer from '../redux/notes/noteSlice';
const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export default store;
