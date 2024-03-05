import extraData from "./data/extended.json";
import {DefaultDatasetPlugin} from "./DefaultDatasetPlugin";

export type TextDataset = {
    [folderName: string]: string[],
}

export class AllWeekdaysDataset extends DefaultDatasetPlugin {
    id: string = "allWeekdays";
    displayName: string = "Weekdays in 34 languages (by .Kosmik)";

    protected dataset: TextDataset = extraData;
}
