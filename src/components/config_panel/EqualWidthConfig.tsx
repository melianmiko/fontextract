import {useTranslation} from "react-i18next";
import {LabeledCheckbox} from "../ui/LabeledCheckbox";
import {useStoreDispatch, useStoreSelector} from "../../redux/hooks";
import {eq} from "semver";
import {MyStoreActions} from "../../redux/store";

/**
 * Equal image width toggle
 * @constructor
 */
export function EqualWidthConfig() {
    const equalWidth = useStoreSelector((s) => s.renderConfig.equalWidth);
    const dispatch = useStoreDispatch();

    const {t} = useTranslation();
    return (
        <LabeledCheckbox label={t("Equal width of each image set")}
                      value={equalWidth}
                      onChange={(v) => dispatch(MyStoreActions.setBooleanFlag(["equalWidth", v]))}/>
    )
}