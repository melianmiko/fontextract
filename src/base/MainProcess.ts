import JSZIp from 'jszip';
import { saveAs } from 'file-saver';
import { type MyStore, store } from '../redux/store';
import { ALL_PLUGINS } from '../plugins';
import type { RenderConfig } from '../internals';

/**
 * Process entire config and download result ZIP archive.
 */
export async function processAll (): Promise<void> {
  const globalConfig: MyStore = store.getState();
  const zip = new JSZIp();

  // Spawn images
  for (const plugin of ALL_PLUGINS) {
    if (globalConfig.plugins.enabled[plugin.id] === false) continue;
    console.log(plugin.displayName);

    const out = await plugin.generate(globalConfig.renderConfig as RenderConfig);
    for (const folderName in out) {
      const folder = zip.folder(folderName);
      if (folder === null) throw new Error("Can't created nested ZIP folder");
      let counter = 0;
      for (const canvas of out[folderName].values()) {
        const base64 = canvas.toDataURL().split('base64,')[1];
        folder.file(counter + '.png', base64, { base64: true });
        counter++;
      }
    }
  }

  const { fontSize, fileNamePrefix } = globalConfig.renderConfig;
  const outFileName = `${fileNamePrefix}_${fontSize}.zip`;
  const blob = await zip.generateAsync({ type: 'blob' });

  saveAs(blob, outFileName);
}
