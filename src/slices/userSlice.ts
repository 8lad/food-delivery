import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { authService } from '../api/services/authService';
import { setLocalStorageValue } from '../helpers/setLocalStorageValue';
import { LOCAL_STORAGE_TOKEN_OPTION } from '../utils/globalConstants';
import { UserLogin, UserSignup } from '../globalTypes';

interface UserAddress {
  state: string;
  city: string;
  street: string;
  houseNnumber: string;
}

interface UserData {
  id: string;
  fullName: string;
  email: string;
  address: UserAddress;
  avatar?: string;
}

type UserFetchingStatus = 'loading' | 'error' | 'idle';

interface InitialState {
  userData: UserData;
  status: UserFetchingStatus;
  errorMessage: string;
  isUserAuthenticated: boolean;
}

const initialState: InitialState = {
  userData: {
    id: '',
    fullName: '',
    email: '',
    avatar: '',
    address: {
      state: '',
      city: '',
      street: '',
      houseNnumber: '',
    },
  },
  errorMessage: '',
  status: 'idle',
  isUserAuthenticated: false,
};

export interface UserResponse {
  jwt: string;
  user: InitialState;
}

export const fetchGoogleAuthUser = createAsyncThunk<
  UserData,
  string,
  { rejectValue: string }
>('userSlice/fetchGoogleAuthUser', async (token, { rejectWithValue }) => {
  try {
    const response = await authService.authUser(token);
    setLocalStorageValue(LOCAL_STORAGE_TOKEN_OPTION, response?.data?.jwt);
    return response?.data?.user as unknown as UserData;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const fetchBaseRegistrationUser = createAsyncThunk<
  UserData,
  UserSignup,
  { rejectValue: string }
>(
  'userSlice/fetchBaseRegistrationUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await authService.registrationUser(userData);
      setLocalStorageValue(LOCAL_STORAGE_TOKEN_OPTION, response?.data?.jwt);
      return response.data.user as unknown as UserData;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const fetchBaseLoginUser = createAsyncThunk<
  UserData,
  UserLogin,
  { rejectValue: string }
>('userSlice/fetchBaseLoginUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await authService.loginUser(userData);
    setLocalStorageValue(LOCAL_STORAGE_TOKEN_OPTION, response?.data?.jwt);
    return response.data.user as unknown as UserData;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    logOut: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoogleAuthUser.pending, (state) => {
      state.status = 'loading';
      state.errorMessage = '';
    });
    builder.addCase(
      fetchGoogleAuthUser.fulfilled,
      (state, action: PayloadAction<UserData>) => {
        state.userData = action.payload;
        state.status = 'idle';
        state.errorMessage = '';
        state.isUserAuthenticated = true;
      },
    );
    builder.addCase(
      fetchGoogleAuthUser.rejected,
      (state, action: PayloadAction<unknown>) => {
        state.status = 'error';
        state.errorMessage = action.payload as string;
        state.isUserAuthenticated = false;
      },
    );
    builder.addCase(fetchBaseRegistrationUser.pending, (state) => {
      state.status = 'loading';
      state.errorMessage = '';
    });
    builder.addCase(
      fetchBaseRegistrationUser.fulfilled,
      (state, action: PayloadAction<UserData>) => {
        state.userData = action.payload;
        state.status = 'idle';
        state.errorMessage = '';
        state.isUserAuthenticated = true;
      },
    );
    builder.addCase(
      fetchBaseRegistrationUser.rejected,
      (state, action: PayloadAction<unknown>) => {
        state.status = 'error';
        state.errorMessage = action.payload as string;
        state.isUserAuthenticated = false;
      },
    );
    builder.addCase(fetchBaseLoginUser.pending, (state) => {
      state.status = 'loading';
      state.errorMessage = '';
    });
    builder.addCase(
      fetchBaseLoginUser.fulfilled,
      (state, action: PayloadAction<UserData>) => {
        state.status = 'idle';
        state.userData = action.payload;
        state.errorMessage = '';
        state.isUserAuthenticated = true;
      },
    );
    builder.addCase(
      fetchBaseLoginUser.rejected,
      (state, action: PayloadAction<unknown>) => {
        state.status = 'error';
        state.errorMessage = action.payload as string;
        state.isUserAuthenticated = false;
      },
    );
  },
});

export const userReducer = userSlice.reducer;
export const { logOut } = userSlice.actions;
