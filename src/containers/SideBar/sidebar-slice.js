import {createSlice} from '@reduxjs/toolkit';

const {innerWidth: width} = window;

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    sidebarStatus: width < 900 ? false : true,
  },
  reducers: {
    toggle(state) {
      state.sidebarStatus = !state.sidebarStatus;
    },
  },
});

export const {toggle} = sidebarSlice.actions;

export default sidebarSlice.reducer;
