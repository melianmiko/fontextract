import {RenderConfig, FontExtractRenderMetrics} from "../internals";

export class ImagesProcessing {
    static getRenderMetrics(text: string[], config: RenderConfig): FontExtractRenderMetrics {
        // Spawn base render canvas context
        const bc = document.createElement("canvas").getContext("2d");
        bc.font = config.fontSize + "px UserFont";

        // Fallback height
        const fallbackFontHeight = ImagesProcessing.getLegacyFontHeight(config)

        // Find top offset
        let topOffset = Infinity;
        text.forEach((value) => {
            // noinspection JSCheckFunctionSignatures
            let metrics = bc.measureText(value);
            let itemTopOffset = metrics.fontBoundingBoxAscent - metrics.actualBoundingBoxAscent;

            if (topOffset > itemTopOffset) topOffset = itemTopOffset;
        });

        if (topOffset === Infinity) topOffset = 0;
        return {
            metricsBaseContext: bc,
            fallbackFontHeight,
            topOffset,
        }
    }

    static getLegacyFontHeight(config: RenderConfig) : number {
        let span = document.createElement("span");

        span.style.fontSize = config.fontSize + "px";
        span.style.fontFamily = "UserFont";
        span.innerHTML = "BigText";

        document.body.appendChild(span);

        let sizes = span.getBoundingClientRect();
        span.remove();

        return sizes.height;
    }

    static postProcess(images: Map<string, HTMLCanvasElement>, config: RenderConfig): Map<string, HTMLCanvasElement> {
        if(!config.equalHeight && !config.equalWidth)
            return images;

        let maxWidth = 0, maxHeight = 0;
        for(const canvas of images.values()) {
            if(canvas.width > maxWidth) maxWidth = canvas.width;
            if(canvas.height > maxHeight) maxHeight = canvas.height;
        }

        const out = new Map<string, HTMLCanvasElement>();
        for(const [fn, img] of images.entries()) {
            const cnv = document.createElement("canvas");
            cnv.width = config.equalWidth ? maxWidth : img.width;
            cnv.height = config.equalHeight ? maxHeight : img.height;

            const ctx = cnv.getContext("2d")
            ctx.fillStyle = config.colorBackground;
            ctx.fillRect(0, 0, cnv.width, cnv.height);
            ctx.drawImage(img,
                Math.floor((cnv.width - img.width) / 2),
                0);

            out.set(fn, cnv);
        }

        return out;
    }
}