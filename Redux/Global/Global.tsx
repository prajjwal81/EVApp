import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface GlobalState {
  removeBottomTab: boolean;
  profilePhoto: string;
  bucketURL: string;
  loginOrNot: boolean;
}

const initialState: GlobalState = {
  removeBottomTab: true,
  profilePhoto: '',
  bucketURL: '/',
  loginOrNot: false,
};

export const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleBottomTab: (state, action) => {
      state.removeBottomTab = action.payload;
    },
    setProfilePhoto: (state, action) => {
      state.profilePhoto = action.payload;
    },
    setBucketURL: (state, action) => {
      state.bucketURL = action.payload;
    },
    setLoginOrNot: (state, action) => {
      state.loginOrNot = action.payload;
    },
  },
});

export const {toggleBottomTab, setProfilePhoto, setBucketURL, setLoginOrNot} =
  GlobalSlice.actions;

export default GlobalSlice.reducer;
