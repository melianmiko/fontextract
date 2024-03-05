import {PropsWithChildren} from "react";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {ThemeSwitcher} from "./ThemeSwitcher";

export function PageRoot(props: PropsWithChildren) {
    const {t} = useTranslation();

    return (
        <main class="extended" style={{marginTop: 48}}>
            <nav class="page-group">
                <ThemeSwitcher />
                <NavLink to="/"
                         className={(props) => props.isActive && "link_active"}>
                    {t("Application")}
                </NavLink>
                <NavLink to="/about"
                         className={(props) => props.isActive && "link_active"}>
                    {t("About")}
                </NavLink>
            </nav>
            {props.children}
        </main>
    );
}