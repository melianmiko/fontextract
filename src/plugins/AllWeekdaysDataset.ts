import extraData from './data/extended.json';
import { DefaultDatasetPlugin, type TextDataset } from './DefaultDatasetPlugin';

/**
 * All weekdays dataset plugin
 * Thanks to .Kosmik
 */
export class AllWeekdaysDataset extends DefaultDatasetPlugin {
  id: string = 'allWeekdays';
  displayName: string = 'Weekdays in 34 languages (by .Kosmik)';

  protected dataset: TextDataset = extraData;
}
