import { useTranslation } from 'react-i18next';
import { LabeledCheckbox } from '../ui/LabeledCheckbox';
import { MyStoreActions } from '../../redux/store';
import { useStoreDispatch, useStoreSelector } from '../../redux/hooks';
import { type ReactElement } from 'react';

/**
 * Equal image height toggle
 * @constructor
 */
export function EqualHeightConfig (): ReactElement {
  const equalHeight = useStoreSelector((s) => s.renderConfig.equalHeight);
  const dispatch = useStoreDispatch();

  const { t } = useTranslation();
  return (
        <LabeledCheckbox label={t('Equal height of each image set')}
                         value={equalHeight}
                         onChange={(v) => dispatch(MyStoreActions.setBooleanFlag(['equalHeight', v]))}/>
  );
}
