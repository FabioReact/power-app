import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type AuthState = {
  connected: boolean;
  email: string | null;
  id: number | null;
  accessToken: string | null;
};

const initialState: AuthState = {
  connected: false,
  email: null,
  id: null,
  accessToken: null,
};

type OnLoginParams = {
  email: string;
  id: number;
  accessToken: string;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin: (state, action: PayloadAction<OnLoginParams>) => {
      state.connected = true;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.accessToken = action.payload.accessToken;
    },
    onLogout: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onLogin, onLogout } = authSlice.actions;

export default authSlice.reducer;
