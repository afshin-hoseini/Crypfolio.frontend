import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiCallStatus } from 'src/@types/enums';
import { ApiCallStatusWithReport, AuthenticationStore } from '../@types';

const initialState: AuthenticationStore = {
  authRequestStatus: {
    status: ApiCallStatus.none,
  },
};

export const authenticationSlice = createSlice({
  initialState,
  name: 'authentication',
  reducers: {
    /** Updates user's token with the given one */
    setToken: (state, action: PayloadAction<string>) => ({ ...state, token: action.payload }),

    /** Updates authentication request status, this can be used for both login and signup actions */
    setAuthRequestStatus: (state, action: PayloadAction<ApiCallStatusWithReport>) => ({
      ...state,
      authRequestStatus: action.payload,
    }),

    /** Performs the login request using the given payload. Handled via Saga */
    login: (state, action: PayloadAction<{ username: string; password: string }>) => state,

    /** Updates authentication token, and mark the authentication status as succeeded */
    loggedinSuccessfully: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.token = action.payload.token;
      state.authRequestStatus = { status: ApiCallStatus.succeeded };
    },

    /** Removes token */
    loggedOut: (state) => {
      state.token = undefined;
    },
  },
});
