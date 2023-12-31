import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AppState {
    location: string;
    currency: string;
    locations: Array<{ id: string, name: string }>;
}

const initialState: AppState = {
    location: 'Bengaluru',
    currency: '₹',
    locations: []
}

export const AppSlice = createSlice({
    name: 'appLevel',
    initialState,
    reducers: {
        setLocation: (appState, action: PayloadAction<{location: string}>) => {
            appState.location = action.payload.location;
        },
        setCurrency: (appState, action: PayloadAction<{currency: string}>) => {
            appState.currency = action.payload.currency;
        },
        setLocations: (appState, action: PayloadAction<{locations: Array<{ id: string, name: string }>}>) => {
            appState.locations = action.payload.locations;
        }
    }
});

export default AppSlice.reducer;
export const { setLocation, setCurrency, setLocations } = AppSlice.actions