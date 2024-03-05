import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import RUSSIAN_STRINGS from "../i18n/ru.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translation: RUSSIAN_STRINGS,
            },
        },
        lng: "ru",
        fallbackLng: "en",
    });
