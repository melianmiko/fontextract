import {useTranslation} from "react-i18next";
import {LabeledSelect} from "../ui/LabeledSelect";
import {CaseMode} from "../../internals";
import {useStoreDispatch, useStoreSelector} from "../../redux/hooks";
import {MyStoreActions} from "../../redux/store";

/**
 * Displays text case mode selector.
 * @constructor
 */
export function CaseStyleConfig() {
    const caseMode = useStoreSelector((s) => s.renderConfig.caseMode);
    const dispatch = useStoreDispatch();

    const {t} = useTranslation();
    return (
        <LabeledSelect label={t("Text case:")}
                       value={caseMode.toString()}
                       onChange={(v) => dispatch(MyStoreActions.setCaseMode(parseInt(v)))}>
            <option value={CaseMode.DEFAULT}>
                {t("Normal text")}
            </option>
            <option value={CaseMode.UPPER_CASE}>
                {t("UPPER CASE")}
            </option>
            <option value={CaseMode.LOWER_CASE}>
                {t("lower case")}
            </option>
            <option value={CaseMode.EMO_STYLE}>
                {t("I aM eMoGiRl")}
            </option>
        </LabeledSelect>
    )
}