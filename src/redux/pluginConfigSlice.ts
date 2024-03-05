import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type PluginConfig = {
    enabled: {
        [id: string]: boolean,
    },
    stepsToDistancePluginConfig: {
        imagesCount: number,
        stepLength: number,
    },
}

const initialState: PluginConfig = {
    enabled: {
        defaultDataset: true,
        russianDataset: true,
    },
    stepsToDistancePluginConfig: {
        imagesCount: 20,
        stepLength: 0.35,
    }
}

export const pluginConfigSlice = createSlice({
    name: "plugins",
    initialState,
    reducers: {
        setPluginEnabled: (state: PluginConfig, action: PayloadAction<[string, boolean]>) => {
            const [id, value] = action.payload;
            state.enabled[id] = value;
        },
        updateStepToDistanceConfig: (state: PluginConfig, action: PayloadAction<[number, number]>) => {
            const [count, step] = action.payload;
            state.stepsToDistancePluginConfig.imagesCount = count;
            state.stepsToDistancePluginConfig.stepLength = step;
        }
    }
})