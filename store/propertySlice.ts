import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { apiClient } from '@/src/api/axios';

// ────────────────────────────────────────────────────────────────
// Define Types
// ────────────────────────────────────────────────────────────────

interface ApiResponse<T> {
  status_code: number;
  message: string;
  data?: T;
}

export interface Property {
  id?: number; // id is optional if not provided on create
  Name: string;
  LessorID: number;
  Location: string;
  Size: string;
  Price: number;
  AvailabilityStatus: string;
}

interface PropertiesData {
  properties: Property[];
  total_records: number;
  total_pages: number;
  current_page: number;
  page_size: number;
}

interface PropertiesState {
  properties: Property[];
  selectedProperty: Property | null;
  loading: boolean;
  error: string | null;
  message: string | null;
}

const initialState: PropertiesState = {
  properties: [],
  selectedProperty: null,
  loading: false,
  error: null,
  message: null,
};

// ────────────────────────────────────────────────────────────────
// Async Thunks
// ────────────────────────────────────────────────────────────────

// Fetch all properties
export const fetchProperties = createAsyncThunk<
  Property[],
  void,
  { rejectValue: string }
>('properties/fetchProperties', async (_, { rejectWithValue }) => {
  try {
    const res: AxiosResponse<ApiResponse<PropertiesData>> = await apiClient.get(
      'properties/get'
    );
    return res.data.data?.properties || [];
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || error.message || 'Failed to fetch properties'
    );
  }
});

// Fetch property by ID
export const fetchPropertyById = createAsyncThunk<
  Property,
  number,
  { rejectValue: string }
>('properties/fetchPropertyById', async (propertyId, { rejectWithValue }) => {
  try {
    const res: AxiosResponse<ApiResponse<Property>> = await apiClient.get(
      `properties/get/${propertyId}`
    );
    if (res.data.data) {
      return res.data.data;
    }
    return rejectWithValue('Property not found');
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || error.message || 'Failed to fetch property'
    );
  }
});

// Create a new property
export const createPropertyThunk = createAsyncThunk<
  string,
  {
    Name: string;
    LessorID: number;
    Location: string;
    Size: string;
    Price: number;
    AvailabilityStatus: string;
  },
  { rejectValue: string }
>('properties/createProperty', async (propertyData, { rejectWithValue }) => {
  try {
    const res: AxiosResponse<ApiResponse<null>> = await apiClient.post(
      'properties/create',
      propertyData
    );
    return res.data.message || 'Create Successfully';
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || error.message || 'Failed to create property'
    );
  }
});

// Update an existing property
export const updatePropertyThunk = createAsyncThunk<
  string,
  {
    id: number;
    Name: string;
    LessorID: number;
    Location: string;
    Size: string;
    Price: number;
    AvailabilityStatus: string;
  },
  { rejectValue: string }
>('properties/updateProperty', async (propertyData, { rejectWithValue }) => {
  const { id, ...data } = propertyData;
  try {
    const res: AxiosResponse<ApiResponse<null>> = await apiClient.put(
      `properties/update/${id}`,
      data
    );
    return res.data.message || 'Update Successfully';
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || error.message || 'Failed to update property'
    );
  }
});

// Delete a property
export const deletePropertyThunk = createAsyncThunk<
  string,
  number,
  { rejectValue: string }
>('properties/deleteProperty', async (propertyId, { rejectWithValue }) => {
  try {
    const res: AxiosResponse<ApiResponse<null>> = await apiClient.delete(
      `properties/delete/${propertyId}`
    );
    return res.data.message || 'Delete Successfully';
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || error.message || 'Failed to delete property'
    );
  }
});

// ────────────────────────────────────────────────────────────────
// Slice
// ────────────────────────────────────────────────────────────────

const propertySlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    // You can add synchronous reducers here if needed
    clearMessage(state) {
      state.message = null;
    },
    clearError(state) {
      state.error = null;
    },
    clearSelectedProperty(state) {
      state.selectedProperty = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch all properties
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProperties.fulfilled, (state, action: PayloadAction<Property[]>) => {
        state.loading = false;
        state.properties = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch properties';
      });

    // Fetch property by ID
    builder
      .addCase(fetchPropertyById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPropertyById.fulfilled, (state, action: PayloadAction<Property>) => {
        state.loading = false;
        state.selectedProperty = action.payload;
      })
      .addCase(fetchPropertyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch property';
      });

    // Create property
    builder
      .addCase(createPropertyThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPropertyThunk.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(createPropertyThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to create property';
      });

    // Update property
    builder
      .addCase(updatePropertyThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePropertyThunk.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(updatePropertyThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to update property';
      });

    // Delete property
    builder
      .addCase(deletePropertyThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePropertyThunk.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(deletePropertyThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to delete property';
      });
  },
});

export const { clearMessage, clearError, clearSelectedProperty } = propertySlice.actions;
export default propertySlice.reducer;
