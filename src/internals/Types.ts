import {CaseMode} from "./Enums";
import {FontExtractPlugin} from "./Generic";

export type RenderConfig = {
    colorText: string,
    colorBackground: string,
    fontSize: number,
    caseMode: CaseMode,
    borderWidth: number,
    equalWidth: boolean,
    equalHeight: boolean,
    marginX: number,
    marginY: number,
    fileNamePrefix: string,
    // plugins: FontExtractPlugin[],
}

export type FontExtractRenderMetrics = {
    fallbackFontHeight: number,
    metricsBaseContext: CanvasRenderingContext2D,
    topOffset: number,
}

export type ImagesMap = Map<string, HTMLCanvasElement>;
export type FontExtractFiles = {
    [folderName: string]: ImagesMap,
}
