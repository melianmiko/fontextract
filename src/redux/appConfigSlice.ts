import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type AppConfig = {
    darkTheme: boolean,
}

const initialState: AppConfig = {
    darkTheme: false,
}

export const appConfigSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setDarkThemeEnabled: (state: AppConfig, action: PayloadAction<boolean>) => {
            state.darkTheme = action.payload;
        },
    }
})