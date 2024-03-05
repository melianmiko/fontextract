import {useTranslation} from "react-i18next";
import {CSSProperties} from "react";
import {TextProcessing} from "../base/TextProcessing";
import {useStoreSelector} from "../redux/hooks";

export function CSSResultPreview() {
    const { t } = useTranslation();

    let renderConfig = useStoreSelector((store) => store.renderConfig),
        style: CSSProperties = {};

    style.fontSize = `${renderConfig.fontSize}px`;
    style.fontFamily = "UserFont, sans";

    style.backgroundColor = renderConfig.colorBackground;

    const previewMsg = t("Text example. 12:00 Monday");

    try {
        const previewImg = TextProcessing.createTextImages([previewMsg], {
            ...renderConfig,
            colorBackground: "rgba(0,0,0,0)",
        }).get(previewMsg);
        const testImg = TextProcessing.createTextImages(["0"], renderConfig).get("0");

        return (
            <>
                <div className="fontextract_preview" style={style}>
                    <img src={previewImg.toDataURL("image/png")} alt="preview" />
                </div>
                <p>{t("Est number img size: ")} {`${testImg.width}x${testImg.height}`}</p>
            </>
        )
    } catch(e) {
        console.warn(e);
        return (
            <p>Preview render failed...</p>
        )
    }
}