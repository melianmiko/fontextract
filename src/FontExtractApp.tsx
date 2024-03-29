import { ConfigPanel } from './components/config_panel/ConfigPanel';
import { TTFUploader } from './components/TTFUploader';
import { PreviewPanel } from './components/PreviewPanel';
import { BrowserSupportTest } from './components/BrowserSupportTest';
import { ColorsConfig } from './components/config_panel/ColorsConfig';
import { useTranslation } from 'react-i18next';
import { processAll } from './base/MainProcess';
import { SectionLabel } from './components/ui/SectionLabel';
import { ContentConfigPanel } from './components/config_panel/ContentConfigPanel';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { type ReactElement } from 'react';
import './style.css';
import './internals/i18n';

/**
 * Application root
 * @constructor
 */
export function FontExtractApp (): ReactElement {
  const { t } = useTranslation();

  return (
        <Provider store={store}>
            <BrowserSupportTest />
            <div className="fontextract">
                <div className="fontextract__pane pretty-form">
                    <TTFUploader />
                    <ContentConfigPanel />
                </div>

                <div className="fontextract__pane pretty-form">
                    <SectionLabel>
                        {t('Base settings:')}
                    </SectionLabel>
                    <ConfigPanel />
                </div>

                <div className="fontextract__pane">
                    <ColorsConfig />
                </div>
            </div>
            <PreviewPanel />
            <div className="button-bar left">
                <a className="button-primary" onClick={() => { void processAll(); }}>
                    <span className="material-symbols-outlined">double_arrow</span>
                    <span className="label">
                        {t('Create images')}
                    </span>
                </a>
            </div>
        </Provider>
  );
}
