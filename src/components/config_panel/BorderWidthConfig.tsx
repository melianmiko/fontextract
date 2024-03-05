import {useTranslation} from "react-i18next";
import {LabeledInput} from "../ui/LabeledInput";
import {useStoreDispatch, useStoreSelector} from "../../redux/hooks";
import {MyStoreActions} from "../../redux/store";

/**
 * Will display text border width input field
 * @constructor
 */
export function BorderWidthConfig() {
    const borderWidth = useStoreSelector((s) => s.renderConfig.borderWidth);

    const dispatch = useStoreDispatch();
    const {t} = useTranslation();

    return (
        <LabeledInput label={t("Border-only width (0 - disable):")}
                      type="number"
                      value={borderWidth.toString()}
                      onChange={(v) => dispatch(MyStoreActions.setBorderWidth(parseInt(v)))}/>
    )
}