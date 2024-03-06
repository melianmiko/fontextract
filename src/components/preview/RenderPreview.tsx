import {TextProcessing} from "../../base/TextProcessing";
import {useStoreSelector} from "../../redux/hooks";
import {useTranslation} from "react-i18next";
import {RenderConfig} from "../../internals";

export function RenderPreview() {
    const { t } = useTranslation();
    const renderConfig: RenderConfig = {
        fontSize: useStoreSelector((s) => s.renderConfig.fontSize),
        caseMode: useStoreSelector((s) => s.renderConfig.caseMode),
        equalHeight: useStoreSelector((s) => s.renderConfig.equalHeight),
        equalWidth: useStoreSelector((s) => s.renderConfig.equalWidth),
        marginX: useStoreSelector((s) => s.renderConfig.marginX),
        marginY: useStoreSelector((s) => s.renderConfig.marginY),
        borderWidth: useStoreSelector((s) => s.renderConfig.borderWidth),
        colorText: useStoreSelector((s) => s.renderConfig.colorText),
        colorBackground: "rgba(0,0,0,0)",
        fileNamePrefix: "",
    };

    try {
        const previewMsg = t("Text example. 12:00 Monday");
        const previewImg = TextProcessing.createTextImages([previewMsg], {
            ...renderConfig,
            colorBackground: "rgba(0,0,0,0)",
        }).get(previewMsg);

        return (
                <img src={previewImg.toDataURL("image/png")} alt="preview" />
        )
    } catch(e) {
        console.warn(e);
        return (
            <p>Preview render failed...</p>
        )
    }
}