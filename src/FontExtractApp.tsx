import './style.css';
import "./internals/i18n";
import {ConfigPanel} from "./components/config_panel/ConfigPanel";
import {TTFUploader} from "./components/TTFUploader";
import {CSSResultPreview} from "./components/CSSResultPreview";
import {BrowserSupportTest} from "./components/BrowserSupportTest";
import {ColorsConfig} from "./components/config_panel/ColorsConfig";
import {BrowserSupportWarning} from "./components/BrowserSupportWarning";
import {useTranslation} from "react-i18next";
import {processAll} from "./base/MainProcess";
import {SectionLabel} from "./components/ui/SectionLabel";
import {ContentConfigPanel} from "./components/config_panel/ContentConfigPanel";

export function FontExtractApp() {
    const {t} = useTranslation();

    return (
        <>
            <BrowserSupportTest>
                <BrowserSupportWarning />
            </BrowserSupportTest>
            <div className="fontextract">
                <div className="fontextract__pane pretty-form">
                    <TTFUploader />
                    <ContentConfigPanel />
                </div>

                <div className="fontextract__pane pretty-form">
                    <SectionLabel>
                        {t("Base settings:")}
                    </SectionLabel>
                    <ConfigPanel />
                </div>

                <div className="fontextract__pane">
                    <ColorsConfig />
                </div>
            </div>
            <CSSResultPreview />
            <div className="button-bar left">
                <a class="button-primary" onClick={() => processAll()}>
                    <span class="material-symbols-outlined">double_arrow</span>
                    <span class="label">
						{t("Create images")}
					</span>
                </a>
            </div>
        </>
    );
}
