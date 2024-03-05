import {CaseMode, RenderConfig, FontExtractRenderMetrics} from "../internals";
import {ImagesProcessing} from "./ImagesProcessing";

export class TextProcessing {
    static createTextImages(data: string[], config: RenderConfig): Map<string, HTMLCanvasElement> {
        const metrics = ImagesProcessing.getRenderMetrics(data, config);
        const out = new Map<string, HTMLCanvasElement>();

        for(const text of data)
            out.set(text, this.drawText(this.applyCaseModifier(text, config.caseMode), config, metrics))

        return ImagesProcessing.postProcess(out, config);
    }

    private static applyCaseModifier(v: string, style: CaseMode): string {
        switch (style) {
            case CaseMode.LOWER_CASE:
                v = v.toLowerCase();
                break;
            case CaseMode.UPPER_CASE:
                v = v.toUpperCase();
                break;
            case CaseMode.EMO_STYLE:
                v = this.toEmOsTyLe(v);
                break;
        }
        return v;
    }

    private static toEmOsTyLe(v: string) {
        let out = "";
        for(let i = 0; i < v.length; i++) {
            out += i % 2 === 0 ? v[i].toUpperCase() : v[i].toLowerCase();
        }
        return out;
    }

    private static drawText(text: string, config: RenderConfig, metrics: FontExtractRenderMetrics): HTMLCanvasElement {
        const textMetrics = metrics.metricsBaseContext.measureText(text);
        let itemHeight = metrics.fallbackFontHeight,
            posY = metrics.fallbackFontHeight;

        if (typeof textMetrics.fontBoundingBoxAscent == "number") {
            // Chromium-based browsers
            itemHeight = textMetrics.fontBoundingBoxAscent + textMetrics.actualBoundingBoxDescent
                - metrics.topOffset;
            posY = textMetrics.fontBoundingBoxAscent - metrics.topOffset;
        }

        const canvas = document.createElement("canvas");
        canvas.width = textMetrics.width + (config.marginX * 2) + config.borderWidth;
        canvas.height = itemHeight + (config.marginY * 2) + config.borderWidth;

        const context = canvas.getContext("2d");
        if (context == null) {
            throw "Can't create canvas context";
        }

        context.font = config.fontSize + "px UserFont";
        context.fillStyle = config.colorBackground;
        context.lineWidth = config.borderWidth;
        context.fillRect(0, 0, canvas.width, canvas.height);

        if(config.borderWidth > 0) {
            const delta = Math.floor(config.borderWidth / 2);
            context.strokeStyle = config.colorText;
            context.strokeText(text,
                config.marginX + delta,
                config.marginY + delta + posY);
        } else {
            context.fillStyle = config.colorText;
            context.fillText(text,
                config.marginX,
                config.marginY + posY);
        }

        return canvas;
    }
}