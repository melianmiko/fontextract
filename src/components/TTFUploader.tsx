import {ChangeEvent, TargetedEvent, useId} from "react";
import {useTranslation} from "react-i18next";
import {readFileToDataURL} from "../base/Tools";
import {useStoreDispatch} from "../redux/hooks";
import {MyStoreActions} from "../redux/store";
import {SectionLabel} from "./ui/SectionLabel";

export function TTFUploader() {
    const { t } = useTranslation();
    const dispatch = useStoreDispatch();
    const id = useId();

    async function onFontUpload(e: TargetedEvent<HTMLInputElement, ChangeEvent>) {
        const files = (e.target as HTMLInputElement).files;

        if (files === null) { return; }
        if (files.length < 1) { return; }

        const file = files[0];
        if (file == null) { return; }

        const dataURL = await readFileToDataURL(file);
        const fontFace = new FontFace("UserFont", "url(" + dataURL + ")");
        const userFont = await fontFace.load();
        document.fonts.add(userFont);

        dispatch(MyStoreActions.setFilenamePrefix(file.name.split(".")[0]));
    }

    return (
        <>
            <SectionLabel>
                {t("Font file (TTF/OTF): ")}
            </SectionLabel>
            <input type="file"
                   className="fontextract__ttf-uploader"
                   id={id}
                   onChange={onFontUpload}/>
        </>
    )
}