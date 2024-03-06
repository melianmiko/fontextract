import { CaseMode, type FontExtractRenderMetrics, type RenderConfig } from '../internals';
import { getLegacyFontHeight, imagesPostProcess } from './ImagesProcessing';

/**
 * Convert text case to SoMeThInG lIkE tHiS.
 * @param v
 */
function toEmoStyle (v: string): string {
  let out = '';
  for (let i = 0; i < v.length; i++) {
    out += i % 2 === 0 ? v[i].toUpperCase() : v[i].toLowerCase();
  }
  return out;
}

/**
 * Apply case mode to string
 * @param v String to apply
 * @param style Case mode
 */
function applyCaseModifier (v: string, style: CaseMode): string {
  switch (style) {
    case CaseMode.LOWER_CASE:
      v = v.toLowerCase();
      break;
    case CaseMode.UPPER_CASE:
      v = v.toUpperCase();
      break;
    case CaseMode.EMO_STYLE:
      v = toEmoStyle(v);
      break;
  }
  return v;
}

/**
 * Will create text image with required config.
 *
 * @param text Text to render
 * @param config Render config
 * @param metrics Render metrics
 */
function drawText (text: string, config: RenderConfig, metrics: FontExtractRenderMetrics): HTMLCanvasElement {
  const textMetrics = metrics.metricsBaseContext.measureText(text);
  let itemHeight = metrics.fallbackFontHeight;
  let posY = metrics.fallbackFontHeight;

  // Check for unsupported browser
  // noinspection SuspiciousTypeOfGuard
  if (typeof textMetrics.fontBoundingBoxAscent === 'number') {
    itemHeight = textMetrics.fontBoundingBoxAscent + textMetrics.actualBoundingBoxDescent -
      metrics.topOffset;
    posY = textMetrics.fontBoundingBoxAscent - metrics.topOffset;
  }

  const canvas = document.createElement('canvas');
  canvas.width = textMetrics.width + (config.marginX * 2) + config.borderWidth;
  canvas.height = itemHeight + (config.marginY * 2) + config.borderWidth;

  const ctx = canvas.getContext('2d');
  if (ctx == null) throw new Error("Can't create Canvas rendering context");

  ctx.font = config.fontSize + 'px UserFont';
  ctx.fillStyle = config.colorBackground;
  ctx.lineWidth = config.borderWidth;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (config.borderWidth > 0) {
    const delta = Math.floor(config.borderWidth / 2);
    ctx.strokeStyle = config.colorText;
    ctx.strokeText(text,
      config.marginX + delta,
      config.marginY + delta + posY);
  } else {
    ctx.fillStyle = config.colorText;
    ctx.fillText(text,
      config.marginX,
      config.marginY + posY);
  }

  return canvas;
}

/**
 * Will calculate metrics required to text render
 *
 * @param text Text strings to process
 * @param config Render config
 */
export function getTextRenderMetrics (text: string[], config: RenderConfig): FontExtractRenderMetrics {
  // Spawn base render canvas context
  const bc = document.createElement('canvas').getContext('2d');
  if (bc == null) throw new Error("Can't create Canvas rendering context");
  bc.font = config.fontSize + 'px UserFont';

  // Fallback height
  const fallbackFontHeight = getLegacyFontHeight(config);

  // Find top offset
  let topOffset = Infinity;
  text.forEach((value) => {
    // noinspection JSCheckFunctionSignatures
    const metrics = bc.measureText(value);
    const itemTopOffset = metrics.fontBoundingBoxAscent - metrics.actualBoundingBoxAscent;

    if (topOffset > itemTopOffset) topOffset = itemTopOffset;
  });

  if (topOffset === Infinity) topOffset = 0;
  return {
    metricsBaseContext: bc,
    fallbackFontHeight,
    topOffset
  };
}

/**
 * Will render pack of text images
 * @param data strings to render
 * @param config render config
 */
export function createTextImages (data: string[], config: RenderConfig): Map<string, HTMLCanvasElement> {
  const metrics = getTextRenderMetrics(data, config);
  const out = new Map<string, HTMLCanvasElement>();

  for (const text of data) { out.set(text, drawText(applyCaseModifier(text, config.caseMode), config, metrics)); }

  return imagesPostProcess(out, config);
}
