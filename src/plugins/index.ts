import {FontExtractPlugin} from "../internals";
import {DefaultDatasetPlugin} from "./DefaultDatasetPlugin";
import {AllWeekdaysDataset} from "./AllWeekdaysDataset";
import {StepsToDistancePlugin} from "./StepsToDistancePlugin";
import {RussianDatasetPlugin} from "./RussianDatasetPlugin";

export const ALL_PLUGINS: FontExtractPlugin[] = [
    new DefaultDatasetPlugin(),
    new RussianDatasetPlugin(),
    new AllWeekdaysDataset(),
    new StepsToDistancePlugin()
];
