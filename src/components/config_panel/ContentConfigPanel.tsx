import {useTranslation} from "react-i18next";
import {ALL_PLUGINS} from "../../plugins";
import {h} from "preact";
import {PluginConfigView} from "./PluginConfigView";
import {SectionLabel} from "../ui/SectionLabel";

export function ContentConfigPanel() {
    const {t} = useTranslation();
    return (
        <>
            <SectionLabel>
                {t("Content: ")}
            </SectionLabel>
            {ALL_PLUGINS.map((p) => {
                return <PluginConfigView plugin={p} />
            })}
        </>
    )
}

