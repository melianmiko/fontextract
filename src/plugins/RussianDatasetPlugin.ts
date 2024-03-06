import data from './data/default_ru.json';
import { DefaultDatasetPlugin, type TextDataset } from './DefaultDatasetPlugin';

/**
 * Russian dataset plugin
 */
export class RussianDatasetPlugin extends DefaultDatasetPlugin {
  id: string = 'russianDataset';
  displayName: string = 'Russian weekdays and months';

  protected dataset: TextDataset = data;
}
