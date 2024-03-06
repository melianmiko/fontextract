import { useStoreDispatch, useStoreSelector } from '../../redux/hooks';
import { LabeledInput } from '../ui/LabeledInput';
import { useTranslation } from 'react-i18next';
import { MyStoreActions } from '../../redux/store';
import { type ReactElement } from 'react';
import { type StepsToDistancePluginConfig } from '../../redux/pluginConfigSlice';

/**
 * Steps to distance extra config panel
 * @constructor
 */
export function StepsToDistanceConfig (): ReactElement {
  const dispatch = useStoreDispatch();
  const { t } = useTranslation();
  const config = useStoreSelector((s) => s.plugins.stepsToDistancePluginConfig) as StepsToDistancePluginConfig;

  return (
        <div>
            <LabeledInput label={t('Images count')}
                          type="number"
                          value={config.imagesCount.toString()}
                          onChange={(v) => dispatch(
                            MyStoreActions.updateStepToDistanceConfig([parseInt(v), config.stepLength])
                          )} />
            <LabeledInput label={t('Step')}
                          type="number"
                          value={config.stepLength.toString()}
                          onBlur={(v) => dispatch(
                            MyStoreActions.updateStepToDistanceConfig([config.imagesCount, parseFloat(v)])
                          )} />
        </div>
  );
}
