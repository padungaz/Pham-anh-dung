import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'note',
  initialState: [{ 
    title: "dsfsdfg",
    details: "tgrghduy",
    isshow: false,
    id: 1
  }
],
  reducers: { 
    addNote: (state, action) => {
      state.push(action.payload);
    },  

    remove: (state, action) => {
      console.log("action",action.payload);
      state.splice(action.payload, 1)
    }
  }
});
