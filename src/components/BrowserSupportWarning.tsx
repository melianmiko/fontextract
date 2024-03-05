import {useTranslation} from "react-i18next";

export function BrowserSupportWarning() {
    const {t} = useTranslation();
    return (
        <div style={{color: "red"}}>
            Browser not supported
        </div>
    );
}