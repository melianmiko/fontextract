import {VNode} from "preact";
import {RenderConfig, FontExtractFiles, FontExtractPlugin} from "../internals";
import {StepsToDistanceConfig} from "../components/plugin/StepsToDistanceConfig";
import {TextProcessing} from "../base/TextProcessing";
import {store} from "../redux/store";

export class StepsToDistancePlugin extends FontExtractPlugin {
    id: string = "s1distance";
    displayName: string = "Step-based distance images (for Xiaomi S1)";

    async generate(config: RenderConfig): Promise<FontExtractFiles> {
        const pluginConfig = store.getState().plugins.stepsToDistancePluginConfig;
        const data: string[] = [];

        for(let i = 0; i < pluginConfig.imagesCount; i++) {
            data[i] = (pluginConfig.stepLength * i).toFixed(2);
        }

        return {distance: TextProcessing.createTextImages(data, config)};
    }

    getSettingsView(): VNode<{}> {
        return <StepsToDistanceConfig />;
    }
}