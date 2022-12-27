import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeatherByCity = createAsyncThunk(
    'weather/fetchWeatherByCity',
    async (city: string, thunkAPI) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${
                    import.meta.env.VITE_API_KEY
                }`
            );
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

interface Weather {
    data: any;
    loaded: boolean;
    error: any;
}

const initialState: Weather = {
    data: {},
    loaded: false,
    error: null,
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchWeatherByCity.pending, state => {
            state.loaded = true;
            state.error = '';
        });
        builder.addCase(
            fetchWeatherByCity.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.data = action.payload;
                state.loaded = false;
            }
        );
        builder.addCase(
            fetchWeatherByCity.rejected,
            (state, action: PayloadAction<any>) => {
                state.error = action.payload;
            }
        );
    },
});

export default weatherSlice.reducer;
