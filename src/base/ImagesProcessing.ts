import type { RenderConfig } from '../internals';

/**
 * Will return text height (legacy-way for unsupported browsers)
 * @param config Render config
 */
export function getLegacyFontHeight (config: RenderConfig): number {
  const span = document.createElement('span');

  span.style.fontSize = config.fontSize + 'px';
  span.style.fontFamily = 'UserFont';
  span.innerHTML = 'BigText';

  document.body.appendChild(span);

  const sizes = span.getBoundingClientRect();
  span.remove();

  return sizes.height;
}

/**
 * Will perform image set post-processing, resize, etc.
 *
 * @param images Images to post-process
 * @param config Render config
 */
export function imagesPostProcess (images: Map<string, HTMLCanvasElement>, config: RenderConfig): Map<string, HTMLCanvasElement> {
  if (!config.equalHeight && !config.equalWidth) { return images; }

  let maxWidth = 0; let maxHeight = 0;
  for (const canvas of images.values()) {
    if (canvas.width > maxWidth) maxWidth = canvas.width;
    if (canvas.height > maxHeight) maxHeight = canvas.height;
  }

  const out = new Map<string, HTMLCanvasElement>();
  for (const [fn, img] of images.entries()) {
    const cnv = document.createElement('canvas');
    cnv.width = config.equalWidth ? maxWidth : img.width;
    cnv.height = config.equalHeight ? maxHeight : img.height;

    const ctx = cnv.getContext('2d');
    if (ctx == null) throw new Error("Can't create Canvas rendering context");

    ctx.fillStyle = config.colorBackground;
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.drawImage(img,
      Math.floor((cnv.width - img.width) / 2),
      0);

    out.set(fn, cnv);
  }

  return out;
}
