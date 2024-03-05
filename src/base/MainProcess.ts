import JSZIp from "jszip";
import {saveAs} from "file-saver";
import {store} from "../redux/store";
import {ALL_PLUGINS} from "../plugins";

export async function processAll() {
    const globalConfig = store.getState();
    const zip = new JSZIp();

    // Spawn images
    for(const plugin of ALL_PLUGINS) {
        if(!globalConfig.plugins.enabled[plugin.id]) continue;
        console.log(plugin.displayName);

        const out = await plugin.generate(globalConfig.renderConfig);
        for(const folderName in out) {
            const folder = zip.folder(folderName);
            let counter = 0;
            for(const canvas of out[folderName].values()) {
                let base64 = canvas.toDataURL().split("base64,")[1];
                folder.file(counter + ".png", base64, {base64: true});
                counter++;
            }
        }
    }


    const {fontSize, fileNamePrefix} = globalConfig.renderConfig;
    const outFileName = `${fileNamePrefix}_${fontSize}.zip`;
    const blob = await zip.generateAsync({type: "blob"});

    saveAs(blob, outFileName);
}
