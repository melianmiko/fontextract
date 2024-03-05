import {useTranslation} from "react-i18next";
import {LabeledInput} from "../ui/LabeledInput";
import {useStoreDispatch, useStoreSelector} from "../../redux/hooks";
import {MyStoreActions} from "../../redux/store";

/**
 * Image margin configuration view.
 * @constructor
 */
export function MarginsConfig() {
    const marginX = useStoreSelector((s) => s.renderConfig.marginX);
    const marginY = useStoreSelector((s) => s.renderConfig.marginY);
    const dispatch = useStoreDispatch();
    const {t} = useTranslation();

    return (
        <div class="fontextract__config__margins-config">
            <div>
                <LabeledInput label={t("L-R margin:")}
                              type="number"
                              value={marginX.toString()}
                              onChange={(v) => dispatch(MyStoreActions.setMargin(["marginX", parseInt(v)]))}/>
            </div>
            <div>
                <LabeledInput label={t("T-B margin:")}
                              type="number"
                              value={marginY.toString()}
                              onChange={(v) => dispatch(MyStoreActions.setMargin(["marginY", parseInt(v)]))}/>
            </div>
        </div>
    )
}