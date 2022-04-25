import {configureStore} from '@reduxjs/toolkit';
import sidebarReducer from '../containers/SideBar/sidebar-slice';

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
