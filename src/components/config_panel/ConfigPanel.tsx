import { FontSizeConfig } from './FontSizeConfig';
import { CaseStyleConfig } from './CaseStyleConfig';
import { useTranslation } from 'react-i18next';
import { SectionLabel } from '../ui/SectionLabel';
import { BorderWidthConfig } from './BorderWidthConfig';
import { MarginsConfig } from './MarginsConfig';
import { EqualWidthConfig } from './EqualWidthConfig';
import { EqualHeightConfig } from './EqualHeightConfig';
import { type ReactElement } from 'react';

export function ConfigPanel (): ReactElement {
  const { t } = useTranslation();
  return (
        <>
            <FontSizeConfig />
            <CaseStyleConfig />

            <hr/>
            <SectionLabel>
                {t('Advanced settings: ')}
            </SectionLabel>

            <BorderWidthConfig />
            <MarginsConfig />
            <EqualWidthConfig />
            <EqualHeightConfig />
        </>
  );
}
