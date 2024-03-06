import { useTranslation } from 'react-i18next';
import { ALL_PLUGINS } from '../../plugins';
import { PluginConfigView } from './PluginConfigView';
import { SectionLabel } from '../ui/SectionLabel';
import { type ReactElement } from 'react';

/**
 * Content plugins setting panel
 * @constructor
 */
export function ContentConfigPanel (): ReactElement {
  const { t } = useTranslation();
  return (
    <>
      <SectionLabel>
        {t('Content: ')}
      </SectionLabel>
      {ALL_PLUGINS.map((p) => {
        return <PluginConfigView plugin={p} key={p.id} />;
      })}
    </>
  );
}
