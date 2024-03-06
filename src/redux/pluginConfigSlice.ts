import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface StepsToDistancePluginConfig {
  imagesCount: number
  stepLength: number
}

export interface PluginConfig {
  enabled: Record<string, boolean>
  stepsToDistancePluginConfig: StepsToDistancePluginConfig
}

const initialState: PluginConfig = {
  enabled: {
    defaultDataset: true,
    russianDataset: true
  },
  stepsToDistancePluginConfig: {
    imagesCount: 20,
    stepLength: 0.35
  }
};

export const pluginConfigSlice = createSlice({
  name: 'plugins',
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
});
