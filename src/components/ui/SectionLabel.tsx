import {PropsWithChildren} from "react";

export function SectionLabel(props: PropsWithChildren) {
    return (
        <div className="fontextract__section-label">
            {props.children}
        </div>
    )
}