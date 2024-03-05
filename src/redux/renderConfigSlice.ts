import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CaseMode, RenderConfig} from "../internals";

/**
 * Initial render config
 */
const initialState: RenderConfig = {
    colorText: "rgba(0,0,0,1)",
        colorBackground: "rgba(255,255,255,1)",
        borderWidth: 0,
        fileNamePrefix: "fe",
        caseMode: CaseMode.DEFAULT,
        equalHeight: false,
        equalWidth: true,
        fontSize: 18,
        marginX: 0,
        marginY: 0,
};

/**
 * Render config slice with their modifier actions
 */
export const renderConfigSlice = createSlice({
    name: "renderConfig",
    initialState,
    reducers: {
        setFilenamePrefix: (state: RenderConfig, action: PayloadAction<string>) => {
            state.fileNamePrefix = action.payload;
        },
        setTextColor: (state: RenderConfig, action: PayloadAction<string>) => {
            state.colorText = action.payload;
        },
        setBackgroundColor: (state: RenderConfig, action: PayloadAction<string>) => {
            state.colorBackground = action.payload;
        },
        setFontSize: (state: RenderConfig, action: PayloadAction<number>) => {
            state.fontSize = Math.max(0, action.payload);
        },
        setCaseMode: (state: RenderConfig, action: PayloadAction<CaseMode>) => {
            state.caseMode = action.payload;
        },
        setBorderWidth: (state: RenderConfig, action: PayloadAction<number>) => {
            state.borderWidth = Math.max(0, action.payload);
        },
        setMargin: (state: RenderConfig, action: PayloadAction<["marginX"|"marginY", number]>) => {
            const [argument, value] = action.payload;
            state[argument] = Math.floor(value);
        },
        setBooleanFlag: (state: RenderConfig, action: PayloadAction<["equalWidth"|"equalHeight", boolean]>) => {
            const [argument, value] = action.payload;
            state[argument] = value;
        },
    }
});
