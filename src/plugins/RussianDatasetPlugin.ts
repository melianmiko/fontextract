import data from "./data/default_ru.json";
import {DefaultDatasetPlugin} from "./DefaultDatasetPlugin";

export type TextDataset = {
    [folderName: string]: string[],
}

export class RussianDatasetPlugin extends DefaultDatasetPlugin {
    id: string = "russianDataset";
    displayName: string = "Russian weekdays and months";

    protected dataset: TextDataset = data;
}
