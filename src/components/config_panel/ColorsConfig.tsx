import {ColorPicker} from "../ui/ColorPicker";
import {useTranslation} from "react-i18next";
import {useStoreDispatch, useStoreSelector} from "../../redux/hooks";
import {MyStoreActions} from "../../redux/store";

export function ColorsConfig() {
    const dispatch = useStoreDispatch();
    const bgColor = useStoreSelector((s) => s.renderConfig.colorBackground);
    const textColor = useStoreSelector((s) => s.renderConfig.colorText);

    const {t} = useTranslation();
    return (
        <>
            <ColorPicker label={t("Background color:")}
                         color={bgColor}
                         onChange={(v) => dispatch(MyStoreActions.setBackgroundColor(v))} />
            <ColorPicker label={t("Text color:")}
                         color={textColor}
                         onChange={(v) => dispatch(MyStoreActions.setTextColor(v))} />
        </>
    )
}