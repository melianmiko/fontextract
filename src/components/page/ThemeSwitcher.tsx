import {useStoreDispatch, useStoreSelector} from "../../redux/hooks";
import {MyStoreActions} from "../../redux/store";

export function ThemeSwitcher() {
    const darkTheme = useStoreSelector((s) => s.app.darkTheme);
    const dispatch = useStoreDispatch();
    const icon = darkTheme ? "dark_mode" : "light_mode";
    document.documentElement.className = darkTheme ? "theme--dark" : "theme--light";

    return (
        <a onClick={() => dispatch(MyStoreActions.setDarkThemeEnabled(!darkTheme))}>
            <span className="material-symbols-outlined">{icon}</span>
        </a>
    );
}

