import {FontExtractPlugin} from "../../internals";
import {LabeledCheckbox} from "../ui/LabeledCheckbox";
import {useTranslation} from "react-i18next";
import {useStoreDispatch, useStoreSelector} from "../../redux/hooks";
import {MyStoreActions} from "../../redux/store";

export type PluginConfigViewProps = {
    plugin: FontExtractPlugin,
};

export function PluginConfigView({plugin}: PluginConfigViewProps) {
    const {t} = useTranslation();
    const enabled = useStoreSelector((s) => s.plugins.enabled[plugin.id]);
    const dispatch = useStoreDispatch();

    function toggleOpen(v: boolean) {
        dispatch(MyStoreActions.setPluginEnabled([plugin.id, v]));
    }

    return (
        <>
            <LabeledCheckbox label={t(plugin.displayName)}
                             value={enabled}
                             onChange={toggleOpen} />
            {enabled && plugin.getSettingsView()}
        </>
    )
}
