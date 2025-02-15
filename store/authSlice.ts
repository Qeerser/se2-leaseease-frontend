import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../src/api/axios';

interface User {
  id: string;
  username: string;
  // สามารถเพิ่ม field อื่นๆ ตามต้องการ
}

interface ApiResponse<T> {
    statusCode: number;
    message: string;
    data?: T;
  }

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const fetchUserInfo = createAsyncThunk(
  'auth/fetchUserInfo',
  async (_, { rejectWithValue }) => {
    try {
      // เนื่องจากใช้ HttpOnly cookie, browser จะส่ง cookie ไปให้กับ API โดยอัตโนมัติ
      const response = await apiClient.get<ApiResponse<null>>(
            "api/v2/users/",
          );
      return response.data.data; // สมมติว่า response.data คือข้อมูลผู้ใช้
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 'เกิดข้อผิดพลาดในการเชื่อมต่อ API'
      );
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // เพิ่ม reducers ถ้าต้องการจัดการ synchronous state
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload ? (action.payload as User) : null;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
