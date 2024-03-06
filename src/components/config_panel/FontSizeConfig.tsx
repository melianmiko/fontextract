import { useTranslation } from 'react-i18next';
import { LabeledInput } from '../ui/LabeledInput';
import { useStoreDispatch, useStoreSelector } from '../../redux/hooks';
import { MyStoreActions } from '../../redux/store';
import { type ReactElement } from 'react';

/**
 * Font size config panel
 * @constructor
 */
export function FontSizeConfig (): ReactElement {
  const fontSize = useStoreSelector((s) => s.renderConfig.fontSize);
  const dispatch = useStoreDispatch();
  const { t } = useTranslation();

  function setFontSize (v: string): void {
    let value = parseInt(v);
    if (Number.isNaN(value)) value = 0;
    dispatch(MyStoreActions.setFontSize(value));
  }

  return (
        <LabeledInput label={t('Font size:')}
                      type="number"
                      value={fontSize.toString()}
                      onChange={(v) => { setFontSize(v); }} />
  );
}
