import {FontExtractFiles, FontExtractPlugin, ImagesMap, RenderConfig} from "../internals";
import defaultData from "./data/default.json";
import {TextProcessing} from "../base/TextProcessing";

export type TextDataset = {
    [folderName: string]: string[],
}

export class DefaultDatasetPlugin extends FontExtractPlugin {
    id: string = "defaultDataset";
    displayName: string = "Numbers, common symbols, english strings";

    protected dataset: TextDataset = defaultData;

    async generate(config: RenderConfig): Promise<FontExtractFiles> {
        const out: {[folderName: string]: ImagesMap} = {};
        for(const group in this.dataset)
            out[group] = TextProcessing.createTextImages(this.dataset[group], config);
        return out;
    }

    getSettingsView() {
        return null;
    }
}