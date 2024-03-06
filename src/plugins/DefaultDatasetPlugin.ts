import { type FontExtractFiles, FontExtractPlugin, type ImagesMap, type RenderConfig } from '../internals';
import defaultData from './data/default.json';
import { createTextImages } from '../base/TextProcessing';
import { type ReactElement } from 'react';

/**
 * Text dataset typing
 */
export type TextDataset = Record<string, string[]>;

/**
 * Default dataset-based render plugin
 */
export class DefaultDatasetPlugin extends FontExtractPlugin {
  id: string = 'defaultDataset';
  displayName: string = 'Numbers, common symbols, english strings';

  protected dataset: TextDataset = defaultData;

  async generate (config: RenderConfig): Promise<FontExtractFiles> {
    const out: Record<string, ImagesMap> = {};
    for (const group in this.dataset) { out[group] = createTextImages(this.dataset[group], config); }
    return out;
  }

  getSettingsView (): ReactElement | null {
    return null;
  }
}
