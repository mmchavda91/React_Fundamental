import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 2, 4, 5. Thunk to fetch restaurants, with error handling and city parameter
export const fetchRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async (city, { rejectWithValue }) => {
    try {
      // Using openbrewerydb as a reliable public API that supports city search
      const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=10`);
      
      if (!response.ok) {
        throw new Error('Server error!');
      }
      
      const data = await response.json();
      
      // 1. Log simple async action output to console
      console.log(`Fetched ${data.length} restaurants for ${city}`);
      
      if (data.length === 0) {
        throw new Error(`No restaurants found in ${city}`);
      }
      
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch restaurants';
      });
  }
});

export default restaurantSlice.reducer;
