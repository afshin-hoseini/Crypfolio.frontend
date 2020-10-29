import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'src/@types';
import { ApiCallStatus } from 'src/@types/enums';
import { UserStore } from '../@types';
import { ApiCallStatusWithReport } from '../@types';
import { authenticationSlice } from './authentication';

const name = 'user';
const initialState: UserStore = {
  updatingStatus: {
    status: ApiCallStatus.none,
  },
};

export const userSlice = createSlice({
  initialState,
  name,
  reducers: {
    /** Updates user info */
    setUser: (state, action: PayloadAction<User>) => ({ ...state, info: action.payload }),

    /** Set status of loading user data */
    setUpdatingStatus: (state, action: PayloadAction<ApiCallStatusWithReport>) => ({
      ...state,
      updatingStatus: action.payload,
    }),

    /** Fetches user data, handled through saga */
    getUser: (state) => ({ ...state, updatingStatus: { status: ApiCallStatus.inProgress } }),
  },

  extraReducers: (builder) => {
    /** Updates user data when logged in successfully */
    builder.addCase(authenticationSlice.actions.loggedinSuccessfully, (state, action) => ({
      ...state,
      info: action.payload.user,
    }));

    /** Removes user data when logged out */
    builder.addCase(authenticationSlice.actions.loggedOut, (state) => {
      state.info = undefined;
    });
  },
});
