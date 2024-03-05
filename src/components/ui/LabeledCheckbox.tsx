import {useId} from "react";

export type LabeledCheckboxProps = {
    label: string,
    value: boolean,
    onChange: (v: boolean) => any,
}

export function LabeledCheckbox(props: LabeledCheckboxProps) {
    const id = useId();

    return (
        <div class="fontextract__config__checkbox-root">
            <input type="checkbox"
                   id={id}
                   checked={props.value}
                   onChange={(e) => props.onChange((e.target as HTMLInputElement).checked)} />

            <label for={id}>
                {props.label}
            </label>
        </div>
    )
}