import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '@/src/api/axios';

interface ApiResponse<T> {
    status_code: number;
    message: string;
    data?: T;
}

interface User {
    id: string;
    role: string;
    email: string;
    name: string;
    address: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
    email: string;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    email: '',
};

export const fetchUserInfo = createAsyncThunk<ApiResponse<User>, void, { rejectValue: string }>(
    'auth/fetchUserInfo',
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get<ApiResponse<User>>('auth/check');
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'เกิดข้อผิดพลาดในการเชื่อมต่อ API');
        }
    },
);

export const login = createAsyncThunk(
    'auth/login',
    async (credentials: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await apiClient.post<ApiResponse<User>>('auth/login', {
                email: credentials.email,
                password: credentials.password,
            });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
    try {
        await apiClient.post<ApiResponse<null>>('auth/logout');
        return null;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

export const register = createAsyncThunk(
    'auth/register',
    async (credentials: { user: User; password: string }, { rejectWithValue }) => {
        try {
            const response = await apiClient.post<ApiResponse<User>>('auth/register', {
                email: credentials.user.email,
                password: credentials.password,
                name: credentials.user.name,
                address: credentials.user.address,
                role: credentials.user.role,
            });
            return credentials.user.email;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);

export const requestOTP = createAsyncThunk('auth/requestOTP', async (_, { getState, rejectWithValue }) => {
    try {
        const state = getState() as { auth: AuthState };
        const email = state.auth.email;
        const response = await apiClient.post<ApiResponse<null>>('auth/request-otp', {
            email,
        });
        return null;
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

export const verifyOTP = createAsyncThunk('auth/verifyOTP', async (otp: string, { getState, rejectWithValue }) => {
    try {
        const state = getState() as { auth: AuthState };
        const email = state.auth.email;
        const response = await apiClient.post<ApiResponse<null>>('auth/verify-otp', {
            email,
            otp,
        });
        // console.log(response.data)
        if (response.data.status_code !== 200) {
            return rejectWithValue(response.data.message);
        }
        return null;
    } catch (error: any) {
        return rejectWithValue('error from here');
    }
});

export const forgotPassword = createAsyncThunk(
    'auth/forgotPassword',
    async (credentials: { email: string }, { rejectWithValue }) => {
        try {
            const response = await apiClient.post<ApiResponse<null>>('auth/forgot-password', {
                email: credentials.email,
            });
            return null;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);

export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async (credentials: { email: string; password: string; token: string }, { rejectWithValue }) => {
        try {
            const response = await apiClient.post<ApiResponse<null>>('auth/reset-password', {
                email: credentials.email,
                password: credentials.password,
                token: credentials.token,
            });
            return null;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserInfo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserInfo.fulfilled, (state, action: PayloadAction<ApiResponse<User>>) => {
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
            })
            .addCase(logout.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.isAuthenticated = false;
                state.loading = false;
                state.error = null;
            })
            .addCase(logout.rejected, (state) => {
                state.user = null;
                state.isAuthenticated = false;
                state.loading = false;
                state.error = null;
            })
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action: PayloadAction<string>) => {
                state.email = action.payload;
                state.loading = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(verifyOTP.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(verifyOTP.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(verifyOTP.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default authSlice.reducer;
