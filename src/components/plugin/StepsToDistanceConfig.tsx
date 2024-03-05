import {useStoreDispatch, useStoreSelector} from "../../redux/hooks";
import {LabeledInput} from "../ui/LabeledInput";
import {useTranslation} from "react-i18next";
import {MyStoreActions} from "../../redux/store";

export function StepsToDistanceConfig() {
    const dispatch = useStoreDispatch();
    const {t} = useTranslation();
    const config = useStoreSelector((s) => s.plugins.stepsToDistancePluginConfig);

    return (
        <div>
            <LabeledInput label={t("Images count")}
                          type="number"
                          value={config.imagesCount.toString()}
                          onChange={(v) => dispatch(
                              MyStoreActions.updateStepToDistanceConfig([parseInt(v), config.stepLength])
                          )} />
            <LabeledInput label={t("Step")}
                          type="number"
                          value={config.stepLength.toString()}
                          onBlur={(v) => dispatch(
                              MyStoreActions.updateStepToDistanceConfig([config.imagesCount, parseFloat(v)])
                          )} />
        </div>
    )
}