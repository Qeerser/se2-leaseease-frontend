import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '@/src/api/axios';


interface ApiResponse<T> {
    statusCode: number;
    message: string;
    data?: T;
  }

interface User {
  id: string;
  username: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const fetchUserInfo = createAsyncThunk<ApiResponse<User>, void, { rejectValue: string }>(
  'auth/fetchUserInfo',
  async (_, { rejectWithValue }) => {
    try {
      // เนื่องจากใช้ HttpOnly cookie, browser จะส่ง cookie ไปให้กับ API โดยอัตโนมัติ
      const response = await apiClient.get<ApiResponse<User>>("api/v2/users/");
      return response.data; // สมมติว่า response.data คือข้อมูลผู้ใช้
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 'เกิดข้อผิดพลาดในการเชื่อมต่อ API'
      );
    }
  }
);

export const login = createAsyncThunk(
    "auth/login",
    async (credentials: { email: string; password: string }, { rejectWithValue }) => {
      try {
        const response = await apiClient.post<ApiResponse<User>>("api/v2/auth/login", {
            email: credentials.email,
            password: credentials.password,
          });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
  );

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action : PayloadAction<ApiResponse<User>>) => {
        state.loading = false;
        state.user = action.payload.data || null;
        state.isAuthenticated = true;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'Something went wrong';
        state.isAuthenticated = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<ApiResponse<User>>) => {
        state.user = action.payload.data || null;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
