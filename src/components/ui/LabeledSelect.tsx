import {PropsWithChildren, useId} from "react";

export type LabeledSelectProps = PropsWithChildren & {
    label: string,
    value: string,
    onChange: (v: string) => any,
}

export function LabeledSelect(props: LabeledSelectProps) {
    const id = useId();
    return (
        <>
            <label for={id}>{props.label}</label>
            <select value={props.value}
                    id={id}
                    onChange={(e) => props.onChange((e.target as HTMLSelectElement).value)}>
                {props.children}
            </select>
        </>
    )
}