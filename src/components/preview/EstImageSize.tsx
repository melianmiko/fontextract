import { useTranslation } from 'react-i18next';
import { createTextImages } from '../../base/TextProcessing';
import { useStoreSelector } from '../../redux/hooks';
import { type RenderConfig } from '../../internals';
import { type ReactElement } from 'react';

/**
 * "Est number image size" view
 * @constructor
 */
export function EstImageSize (): ReactElement | null {
  const { t } = useTranslation();
  const renderConfig: RenderConfig = {
    fontSize: useStoreSelector((s) => s.renderConfig.fontSize),
    caseMode: useStoreSelector((s) => s.renderConfig.caseMode),
    equalHeight: useStoreSelector((s) => s.renderConfig.equalHeight),
    equalWidth: useStoreSelector((s) => s.renderConfig.equalWidth),
    marginX: useStoreSelector((s) => s.renderConfig.marginX),
    marginY: useStoreSelector((s) => s.renderConfig.marginY),
    borderWidth: useStoreSelector((s) => s.renderConfig.borderWidth),
    colorText: 'rgba(0,0,0,1)',
    colorBackground: 'rgba(0,0,0,0)',
    fileNamePrefix: ''
  };

  try {
    const renderResult = createTextImages(['0'], renderConfig);
    const testImg = renderResult.get('0');
    if (testImg === undefined) return null;

    return (
      <p>{t('Est number img size: ')} {`${testImg.width}x${testImg.height}`}</p>
    );
  } catch (e) {
    console.warn(e);
    return null;
  }
}
