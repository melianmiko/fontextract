import {useTranslation} from "react-i18next";
import {LabeledInput} from "../ui/LabeledInput";
import {useStoreDispatch, useStoreSelector} from "../../redux/hooks";
import {MyStoreActions} from "../../redux/store";

export function FontSizeConfig() {
    const fontSize = useStoreSelector((s) => s.renderConfig.fontSize);
    const dispatch = useStoreDispatch();
    const {t} = useTranslation();

    function setFontSize(v: string) {
        let value = parseInt(v);
        if(Number.isNaN(value)) value = 0;
        dispatch(MyStoreActions.setFontSize(value))
    }

    return (
        <LabeledInput label={t("Font size:")}
                      type="number"
                      value={fontSize.toString()}
                      onChange={(v) => setFontSize(v)} />
    )
}
