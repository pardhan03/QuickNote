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
    editNote: (state, action) => {
      const {id} = action.payload;
      state.data = state?.data?.map(item => {
        item.id === id ? {...item, ...action.payload} : item;
      });
    },
    deleteNote: (state, action) => {
      const {id} = action.payload;
      state.data = state.data.filter(item => (item.id !== id ? item : null));
    },
  },
});

export const {addNote, editNote, deleteNote} = noteSlice.actions;

export default noteSlice.reducer;
