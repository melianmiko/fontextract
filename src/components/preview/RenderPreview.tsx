import { createTextImages } from '../../base/TextProcessing';
import { useStoreSelector } from '../../redux/hooks';
import { useTranslation } from 'react-i18next';
import { type RenderConfig } from '../../internals';
import { type ReactElement } from 'react';

export function RenderPreview (): ReactElement | null {
  const { t } = useTranslation();
  const renderConfig: RenderConfig = {
    fontSize: useStoreSelector((s) => s.renderConfig.fontSize),
    caseMode: useStoreSelector((s) => s.renderConfig.caseMode),
    equalHeight: useStoreSelector((s) => s.renderConfig.equalHeight),
    equalWidth: useStoreSelector((s) => s.renderConfig.equalWidth),
    marginX: useStoreSelector((s) => s.renderConfig.marginX),
    marginY: useStoreSelector((s) => s.renderConfig.marginY),
    borderWidth: useStoreSelector((s) => s.renderConfig.borderWidth),
    colorText: useStoreSelector((s) => s.renderConfig.colorText),
    colorBackground: 'rgba(0,0,0,0)',
    fileNamePrefix: ''
  };

  try {
    const previewMsg = t('Text example. 12:00 Monday');
    const previewImg = createTextImages([previewMsg], renderConfig).get(previewMsg);
    if (previewImg === undefined) return null;

    return (
      <img src={previewImg.toDataURL('image/png')} alt="preview" />
    );
  } catch (e) {
    console.warn(e);
    return (
          <p>Preview render failed...</p>
    );
  }
}
