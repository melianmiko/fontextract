import { type FontExtractPlugin } from '../../internals';
import { LabeledCheckbox } from '../ui/LabeledCheckbox';
import { useTranslation } from 'react-i18next';
import { useStoreDispatch, useStoreSelector } from '../../redux/hooks';
import { MyStoreActions } from '../../redux/store';
import { type ReactElement } from 'react';

/**
 * Props type
 */
export interface PluginConfigViewProps {
  plugin: FontExtractPlugin
}

/**
 * Plugin config view panel
 * @param plugin Plugin to view
 * @constructor
 */
export function PluginConfigView ({ plugin }: PluginConfigViewProps): ReactElement {
  const { t } = useTranslation();
  const enabled = useStoreSelector((s) => s.plugins.enabled[plugin.id]) as boolean;
  const dispatch = useStoreDispatch();

  function toggleOpen (v: boolean): void {
    dispatch(MyStoreActions.setPluginEnabled([plugin.id, v]));
  }

  return (
        <>
            <LabeledCheckbox label={t(plugin.displayName)}
                             value={enabled}
                             onChange={toggleOpen} />
            {enabled && plugin.getSettingsView()}
        </>
  );
}
