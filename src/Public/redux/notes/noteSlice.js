import {createSlice} from '@reduxjs/toolkit';
import {Notes} from '../../../Assets/DummyData/Notes';
const initialState = {
  results: [],
  page: '',
  nextPage: '',
  sort: '',
  search: '',
  selectedCategory: '',
  isLoading: false,
  isError: false,
  data: [...Notes],
  dataCategory: [],
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const {addNote} = noteSlice.actions;

export default noteSlice.reducer;
